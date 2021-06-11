import { Carousel } from "react-bootstrap";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

export function Dashboard() {
  const state = useSelector((state) => state);
  console.log(state);
  const history = useHistory();

  return (
    <div>
      <Carousel>
        <Carousel.Item>
          <Carousel.Caption>
            <h3 style={{ fontFamily: "cursive" }}>Welcome to Dashboard</h3>
            <p>You can see all your data here</p>
          </Carousel.Caption>
          <img
            className="d-block w-100"
            src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8YnVpbGRpbmd8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80"
            alt="First slide"
          />
        </Carousel.Item>
      </Carousel>
    </div>
  );
}
