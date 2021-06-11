import { Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { getResgisterListById } from "../redux/RegistrationReducer";
import { RegistrationModal } from "./RegistrationModal";

export function MyProfile() {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();

  const getResgisterById = (item) => {
    dispatch(getResgisterListById(item));
  };
  return (
    <>
      <div>
        <div>
          <div className="row">
            <div className="col-3 col-md-2 d-none d-md-block"></div>
            <div className="col-12 col-md-8">
              <h1 className="alert alert-secondary text-center">My Details</h1>

              {/**form table */}
              <div>
                <table className="table">
                  <thead className="thead-dark">
                    <tr>
                      <th scope="col">#ID</th>
                      <th scope="col">FIRST NAME</th>
                      <th scope="col">LAST NAME</th>
                      <th scope="col">EMAIL</th>
                      <th scope="col">MOBILE</th>
                      <th scope="col">PASSWORD</th>
                      <th scope="col">ROLE</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[...state.registration.list].map((item, index) => (
                      <tr key={index}>
                        <th scope="row">{index + 1}</th>
                        <td>{item.firstname}</td>
                        <td>{item.lastname}</td>
                        <td>{"****@gmail.com"}</td>
                        <td>{item.mobile}</td>
                        <td>{"********"}</td>
                        <td>{item.role}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
            <div className="col-3 col-md-2 d-none d-md-block"></div>
          </div>
        </div>
        <div>
          <Button
            className="alert alert-primary"
            onclick={(item) => getResgisterById(item)}
          >
            Get Details
          </Button>
        </div>
      </div>
      <RegistrationModal />
    </>
  );
}
