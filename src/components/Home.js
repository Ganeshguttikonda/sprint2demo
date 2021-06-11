import { Carousel } from "react-bootstrap";

export function Home() {
  return (
    <div>
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://skitguys.com/media/images/video/_1200x630_crop_center-center_82_none/Rainy_Day_Welcome_Still_Shift.jpg?mtime=1532042016"
            alt="First slide"
            style={{ objectFit: "cover" }}
          />
          <Carousel.Caption>
            <h3 style={{ fontFamily: "cursive" }}>Welcome</h3>
            <p>Hope you Love our website!!!</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 h-100"
            src="https://www.shutterbug.com/images/styles/600_wide/public/promoer101017.jpg"
            alt="Second slide"
          />

          <Carousel.Caption>
            <h3>Our website allows you login seamlessly</h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8YnVpbGRpbmd8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80"
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3>One App for all your needs</h3>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}
