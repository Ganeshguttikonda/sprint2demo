import { Button } from "react-bootstrap";
import { useHistory } from "react-router";

export function Login() {
  const history = useHistory();
  return (
    <div className="row">
      <div className="col-3 col-md-2 d-none d-md-block"></div>
      <div className="col-12 col-md-8">
        <h3 className="alert alert-primary text-center m-3">LOGIN</h3>
        <div className="alert alert-primary m-3 mt-2">
          <Button
            className="alert alert-outline-success"
            onClick={() => history.push("/userlogin")}
          >
            User Login
          </Button>

          <Button
            className="alert alert-outline-success"
            onClick={() => history.push("/adminlogin")}
            style={{ marginLeft: "56%" }}
          >
            Admin Login
          </Button>
        </div>
      </div>
      <div className="col-3 col-md-2 d-none d-md-block"></div>
    </div>
  );
}
