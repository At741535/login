import React, { useEffect, useState } from "react";
import {
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
} from "@mui/material";
// import { Button } from "react-bootstrap";
import { getUsers, deleteUser } from "../../service/api";
import { NavLink, useNavigate } from "react-router-dom";
import Pagination from "../pagination/pagination";
const AllUsers = () => {
  const navigate = useNavigate();
  // const [showPerPage, setShowPerPage] =            useState();
  // const [pagination, setPagination] = useState({
  //   start: 0,
  //   end: showPerPage,
  // });
  // const onpaginationChange = (start, end) => {
  //   setPagination({ start: start, end: end });
  // };
  const [users, setUsers] = useState([]);
  const [filterdUsers, setFilterdUsers] = useState([]);
  const [query, setQuery] = useState("");
  const [status, setStatus] = useState({ istrue: false, isfalse: false });
  // const [falseStatus, setFalseStatus] = useState(false);
  const [itemValue, setItemValue] = useState(0);
  const [count, setCount] = useState(0);

  // console.log(query);
  useEffect(() => {
    getAllUsers();
    loadUserDetails();
  }, [status, query]);

  const loadUserDetails = async () => {
    // const response = await getuser(id);
  };
  const getAllUsers = async () => {
    let ch;
    let fl;
    if (status.istrue && !status.isfalse) {
      ch = true;
    } else if (!status.istrue && status.isfalse) {
      ch = false;
    } else {
      ch = "";
    }
    console.log(ch);
    let response = await getUsers(ch, query);
    // console.log(response);

    // console.log(
    //   users.filter((user) => user.name.toLowerCase().includes("fes"))
    // );
    setUsers(response.data);
    setFilterdUsers(response.data.slice(0, 5));
    setItemValue(response.data.length);
  };
  const deleteUserDetails = async (id) => {
    await deleteUser(id);
    getAllUsers();
  };

  // const check = async (id) => {
  //   await getUsers(id);
  // };
  // const onchageTrue = ({ target: { checked } }) => {
  //   setIsFilter(checked);
  // };

  const handleStatusTrue = ({ target: { checked } }) => {
    setStatus({ ...status, istrue: checked });
  };
  const handleStatusFalse = ({ target: { checked } }) => {
    setStatus({ ...status, isfalse: checked });
  };

  const activeFilter = users.filter((item) => {
    return item.status === true;
  });
  // console.log("active", activeFilter);
  // console.log(filterdUsers);
  return (
    <>
      <div>
        <input
          style={{ marginLeft: "75rem" }}
          type="text"
          placeholder="search"
          className="search"
          onChange={(e) => setQuery(e.target.value)}
        ></input>
        <h6>true</h6>
        <input
          type="checkbox"
          checked={status.istrue}
          onChange={handleStatusTrue}
        ></input>
        <h6>false</h6>
        <input
          type="checkbox"
          checked={status.isfalse}
          onChange={handleStatusFalse}
        ></input>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>id</TableCell>
              <TableCell>Name</TableCell>
              <TableCell>Email</TableCell>
              <TableCell>Status</TableCell>
              <TableCell>Option</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {filterdUsers
              .filter(
                (user) =>
                  user.name.toLowerCase().includes(query) ||
                  user.email.toLowerCase().includes(query)
              )
              // .slice(pagination.start, pagination.end)
              .map((user, index) => (
                <TableRow key={index}>
                  <TableCell>{count + index + 1}</TableCell>
                  <TableCell>{user.name}</TableCell>
                  <TableCell>{user.email}</TableCell>
                  <TableCell>{user.status ? "true" : "false"}</TableCell>
                  <TableCell>
                    <NavLink to={`/edit/${user._id}`}>
                      <button>Edit</button>
                    </NavLink>
                    <button onClick={() => deleteUserDetails(user._id)}>
                      Delete
                    </button>
                  </TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
        <Pagination
          className="pagination"
          users={users}
          itemValue={itemValue}
          setFilterdUsers={setFilterdUsers}
          setCount={setCount}
        />
        {/* <Pagination
          showPerPage={showPerPage}
          onpaginationChange={onpaginationChange}
          total={users.length}
        /> */}
      </div>
    </>
  );
};

export default AllUsers;
