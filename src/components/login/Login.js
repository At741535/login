import React, { useRef, useState, useEffect } from "react";
import "../login/Login.css";

const Login = () => {
  const userRef = useRef();
  const errRef = useRef();

  const [user, setUser] = useState("");
  const [pwd, setPwd] = useState("");
  const [errMsg, setErrMsg] = useState("");
  const [success, setSucess] = useState(false);

  useEffect(() => {
    userRef.current.focus();
  }, []);

  useEffect(() => {
    setErrMsg("");
  }, [user, pwd]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(user, pwd);
    setUser("");
    setPwd("");
    setSucess(true);
  };

  return (
    <>
      {success ? (
        <section className="login">
          <h1>you are logged in!</h1>
          <br />
          <p>
            <a href="#">Go to Home</a>
          </p>
        </section>
      ) : (
        <section className="main">
          <p
            ref={errRef}
            className={errMsg ? "errmsg" : "offscreen"}
            aria-live="assertive"
          >
            {errMsg}
          </p>
          <h1 className="login">Logged In</h1>
          <form onSubmit={handleSubmit}>
            <label htmlFor="username" className="input">
              Username
            </label>
            <input
              className="input"
              type="text"
              id="username"
              ref={userRef}
              autoComplete="off"
              onChange={(e) => setUser(e.target.value)}
              value={user}
              required
            />
            <br />

            <label htmlFor="Password" className="input">
              Password
            </label>
            <input
              className="input"
              type="password"
              id="Password"
              onChange={(e) => setPwd(e.target.value)}
              value={pwd}
              required
            />
            <br />
            <br />
            <button className="submit">Sign In</button>
          </form>
          <p className="line">
            Need an Account?
            <br />
            <span>
              {/*put router link here*/}
              <a href="http://localhost:3000/">Sign Up</a>
            </span>
          </p>
        </section>
      )}
    </>
  );
};

export default Login;
