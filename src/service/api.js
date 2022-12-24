import axios from "axios";
// const { id } = useParams();

const URL = "http://localhost:7000";
export const addUser = async (data) => {
  try {
    return await axios.post(`${URL}/add`, data);
  } catch (error) {
    console.log("error while calling add user api", error);
  }
};

export const getUsers = async (status, search) => {
  try {
    return await axios.get(`${URL}/all?status=${status}&search=${search}`);
  } catch (error) {
    console.log(`Error while calling getUsers API`, error);
  }
};

export const getuser = async (id) => {
  // console.log();
  try {
    // console.log(id, "asdfadsf");
    return await axios.get(`${URL}/${id}`);
    // console.log("abcd", abcd);
  } catch (error) {
    console.log("Error while calling getuser api", error);
  }
};
export const editUserData = async (user, id) => {
  console.log("asdfasfsa", id);
  console.log("user", user);
  try {
    return await axios.post(`${URL}/${id}`, user);
  } catch (error) {
    console.log("Error While calling edituser api", error);
  }
};

export const deleteUser = async (id) => {
  try {
    return await axios.delete(`${URL}/${id}`);
  } catch (error) {
    console.log("error while calling while delete user", error);
  }
};

// import React, { useEffect, useState } from "react";
// import {
//   Table,
//   TableHead,
//   TableBody,
//   TableRow,
//   TableCell,
// } from "@mui/material";
// // import { Button } from "react-bootstrap";
// import { getUsers, deleteUser } from "../../service/api";
// import { NavLink, useNavigate } from "react-router-dom";
// import Pagination from "../pagination/pagination";
// const AllUsers = () => {
//   const navigate = useNavigate();
//   const [showPerPage, setShowPerPage] = useState();
//   // const [pagination, setPagination] = useState({
//   //   start: 0,
//   //   end: showPerPage,
//   // });
//   // const onpaginationChange = (start, end) => {
//   //   setPagination({ start: start, end: end });
//   // };
//   const [users, setUsers] = useState([]);
//   const [query, setQuery] = useState("");
//   const[isFilter,setIsFilter]=useState(false);
//   const [status, setStatus] = useState(false)

//   // console.log(query);
//   useEffect(() => {
//     getAllUsers();
//     loadUserDetails();
//   }, [status, isFilter]);
//   const loadUserDetails = async () => {
//     // const response = await getuser(id);
//   };
//   const getAllUsers = async () => {
//     let response = await getUsers(status, isFilter);

//     // console.log(
//     //   users.filter((user) => user.name.toLowerCase().includes("fes"))
//     // );
//     setUsers(response.data);
//   };
//   const deleteUserDetails = async (id) => {
//     await deleteUser(id);
//     getAllUsers();
//   };

//   // const check = async (id) => {
//   //   await getUsers(id);
//   // };
// const onchageTrue=({target:{checked}})=>{
//   setIsFilter(checked)
// }

// const handleStatusCheck = ({target:{checked}})=>{
// setStatus(checked)
// }

// const activeFilter=users.filter((item)=>{
//   return item.status===true
// })
// console.log('active',activeFilter);
//   return (
//     <>
//       <div>
//         <input
//           style={{ marginLeft: "75rem" }}
//           type="text"
//           placeholder="search"
//           className="search"
//           onChange={(e) => setQuery(e.target.value)}
//         ></input>
//         <h6>Active Filter</h6>
//         <input type="checkbox" onChange={onchageTrue} ></input>
//         <h6>status</h6>
//         <input type="checkbox" onChange={handleStatusCheck} ></input>
//         <Table>
//           <TableHead>
//             <TableRow>
//               <TableCell>id</TableCell>
//               <TableCell>Name</TableCell>
//               <TableCell>Email</TableCell>
//               <TableCell>Status</TableCell>
//               <TableCell>Option</TableCell>

//             </TableRow>
//           </TableHead>
//           <TableBody>
//             {users
//               // .filter(
//               //   (user) =>
//               //     user.name.toLowerCase().includes(query) ||
//               //     user.email.toLowerCase().includes(query)
//               // )
//               // .slice(pagination.start, pagination.end)
//               .map((user, index) => (
//                 <TableRow key={index}>
//                   <TableCell>{index + 1}</TableCell>
//                   <TableCell>{user.name}</TableCell>
//                   <TableCell>{user.email}</TableCell>
//                   <TableCell>{user.status ? "true" : "false"}</TableCell>
//                   <TableCell>
//                     <NavLink to={`/edit/${user._id}`}>
//                       <button>Edit</button>
//                     </NavLink>
//                     <button onClick={() => deleteUserDetails(user._id)}>
//                       Delete
//                     </button>
//                   </TableCell>
//                 </TableRow>
//               ))}
//           </TableBody>
//         </Table>
//         {/* <Pagination
//           showPerPage={showPerPage}
//           onpaginationChange={onpaginationChange}
//           total={users.length}
//         /> */}
//       </div>
//     </>
//   );
// };

// export default AllUsers;
