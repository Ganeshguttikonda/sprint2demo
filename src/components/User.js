import { useRef, useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { userLoginAction } from "../redux/UserReducer";

export function User() {
  const dispatch = useDispatch();
  const history = useHistory();
  const formEL = useRef();
  const state = useSelector((state) => state);

  //Action Members
  const [userId, setUserId] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("");

  const [successOperation, setSuccessOperation] = useState(false);
  const [errorOperation, setErrorOperation] = useState(false);

  //Actions Functions
  const updateUserId = (e) => setUserId(e.target.value);
  const updatePassword = (e) => setPassword(e.target.value);
  const updateRole = (e) => setRole(e.target.value);

  const userLogin = (e) => {
    e.preventDefault();
    // console.log(userId, password, role);

    //Email vaildation
    const em = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
    if (!em.test(userId)) {
      alert("Please enter a valid email Id!!!");
      return;
    }

    //Validation
    if (formEL.current.checkValidity() === false) {
      //handle the false case
      e.preventDefault();
      e.stopPropagation();
      formEL.current.classList.add("was-validated");
    } else {
      //This is Redux Action
      dispatch(
        userLoginAction({
          userId,
          password,
          role,
        })
      );

      //shows successful login message for 3 sec
      setErrorOperation(true);
      setTimeout(() => setErrorOperation(false), 3000);

      console.log(userId, password, role);
      console.log(state.userId, state.password, state.role);

      //Navigate to Dashboard page on clicking Login
      history.push("/dashboard");

      //Reset the Login Form
      setUserId("");
      setPassword("");
      setRole("");
    }
  };

  return (
    <div className="row">
      <div className="col-3 col-md-3 d-none d-md-block"></div>
      <div className="col-12 col-md-6">
        <h3
          className="alert alert-warning text-dark text-center mt-3"
          style={{ fontFamily: "cursive" }}
        >
          LOGIN HERE
        </h3>

        {/***shows Login Successful Message */}
        {successOperation && (
          <div className="alert alert-success ">Login Successful!!</div>
        )}

        {/***form block */}
        <div>
          <form ref={formEL} className="needs-validation" noValidate>
            <div className="alert alert-primary">
              <div className="mb-4">
                <label className="form-lable">UserId</label>
                <input
                  type="email"
                  className="form-control"
                  placeholder="Enter Email address"
                  value={userId}
                  onChange={(e) => updateUserId(e)}
                  required
                />
              </div>
              <div className="mb-4">
                <label className="form-lable">Password</label>
                <input
                  type="password"
                  className="form-control"
                  placeholder="Enter password"
                  pattern="^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$"
                  value={password}
                  onChange={(e) => updatePassword(e)}
                  required
                />
              </div>
              <div>
                <label className="form-lable">Role</label>
                <select
                  className="form-select ml-3 mb-4"
                  style={{ width: "50%" }}
                  value={role}
                  onChange={(e) => updateRole(e)}
                  required
                >
                  <option defaultValue="">Choose your role</option>
                  <option>user</option>
                </select>
              </div>
              <div>
                <Button
                  className="alert alert-outline-primary"
                  style={{ marginLeft: "40%" }}
                  onClick={(e) => userLogin(e)}
                >
                  Login
                </Button>
              </div>
            </div>
          </form>
        </div>
      </div>
      <div className="col-3 col-md-3 d-none d-md-block"></div>
    </div>
  );
}
