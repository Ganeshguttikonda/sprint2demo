import { useRef, useState } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { createRegistrationAction } from "../redux/RegistrationReducer";

export function Registration() {
  const dispatch = useDispatch();
  const history = useHistory();
  const formEL = useRef();
  const state = useSelector((state) => state);

  const [firstname, setFirstName] = useState("");
  const [lastname, setLastName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [role, setRole] = useState("");

  const [successOperation, setSuccessOperation] = useState(false);

  const updateFirstName = (e) => setFirstName(e.target.value);
  const updateLastName = (e) => setLastName(e.target.value);
  const updatePassword = (e) => setPassword(e.target.value);
  const updateEmail = (e) => setEmail(e.target.value);
  const updateMobile = (e) => setMobile(e.target.value);
  const updateRole = (e) => setRole(e.target.value);

  const register = (e) => {
    e.preventDefault();

    //FirstName Validation
    const re = /^[A-Za-z]+$/;
    if (!re.test(firstname)) {
      alert("Please Enter a valid Credentials!!!");
      return;
    }

    //Email vaildation
    const em = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
    if (!em.test(email)) {
      alert("Please enter a valid email Id!!!");
      return;
    }

    //required - logic for input elements validation
    if (formEL.current.checkValidity() === false) {
      //handle the false case
      e.preventDefault();
      e.stopPropagation();
      formEL.current.classList.add("was-validated");
    } else {
      //Redux Action
      dispatch(
        createRegistrationAction({
          email,
          firstname,
          lastname,
          mobile,
          password,
          role,
        })
      );

      //shows a success message for 3 sec
      setSuccessOperation(true);
      setTimeout(() => setSuccessOperation(false), 3000);

      //Navigate to other page
      //history.push("/list-registration");

      //Reset the Form
      setFirstName("");
      setLastName("");
      setEmail("");
      setMobile("");
      setPassword("");
      setRole("");
    }
  };

  return (
    <div className="row p-2">
      <div className="col-3 col-md-2 d-none d-md-block"></div>
      <div className="col-12 col-md-8">
        <div>
          <h1
            className="alert alert-danger text-center mt-2 text-dark"
            style={{ fontFamily: "cursive" }}
          >
            REGISTRATION
          </h1>
        </div>
        {/***Print a Success Message */}
        {successOperation && (
          <div className="alert alert-success">Registration Successful!!!</div>
        )}

        {/***form block */}
        <div className="p-4 alert alert-info">
          <form ref={formEL} className="needs-validation" noValidate>
            <div className="row">
              <div className="col mb-4">
                <label className="form-lable">First Name</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="First Name"
                  patter="^[A-Za-z]+$"
                  minLength="3"
                  maxLength="10"
                  value={firstname}
                  onChange={(e) => updateFirstName(e)}
                  required
                />
              </div>
              <div className="col mb-4">
                <label className="form-lable">Last Name</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Last Name"
                  minLength="3"
                  maxLength="10"
                  value={lastname}
                  onChange={(e) => updateLastName(e)}
                  required
                />
              </div>
            </div>

            <div className="mb-4">
              <label className="form-lable">Email Address</label>
              <input
                type="email"
                className="form-control"
                placeholder="Enter Email address"
                value={email}
                onChange={(e) => updateEmail(e)}
                required
              />
            </div>
            <div className="mb-4">
              <label className="form-lable">Mobile</label>
              <input
                type="number"
                className="form-control"
                placeholder="Enter Mobile number +91"
                pattern="^\+\d{1,3}-\d{10}$"
                value={mobile}
                onChange={(e) => updateMobile(e)}
                required
              />
            </div>
            <div className="mb-4">
              <label className="form-lable">Password</label>
              <input
                type="password"
                className="form-control"
                placeholder="Enter your password"
                pattern="^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
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
                <option>employee</option>
              </select>
            </div>
            <div>
              <Button
                className="alert alert-outline-success"
                onClick={(e) => register(e)}
              >
                Register
              </Button>

              <Button
                className="alert alert-outline-success"
                onClick={() => history.push("/login")}
                style={{ marginLeft: "40%" }}
              >
                Existing Customer? Login
              </Button>
            </div>
          </form>
        </div>
      </div>
      <div className="col-3 col-md-2 d-none d-md-block"></div>
    </div>
  );
}
