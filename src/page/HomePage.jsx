import Carousel from "./Carousel";
import Footer from "./Footer";
import { Link } from "react-router-dom";
import travel_1 from "../images/banking_image3.png";
import travel_2 from "../images/banking_image2.png";

const HomePage = () => {
  return (
   
    <div className="container-fluid mb-2">
      <Carousel />

      <div className="container mt-5">
        <div className="row">
          <div className="col-md-8 text-color">
            <h1>Welcome to e-Insurance App</h1>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laboriosam ad sint dolore magnam voluptate voluptas obcaecati placeat, impedit expedita et, neque maxime esse. Iusto, fugiat iure sed rem error esse.
             Lorem ipsum dolor sit amet.Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laboriosam ad sint dolore magnam voluptate voluptas obcaecati placeat, impedit expedita et, neque maxime esse. Iusto, fugiat iure sed rem error esse
            </p>
            <p>
              Our user-friendly interface ensures a smooth and intuitive
              experience, giving you full control over your finances from the
              comfort of your own device. With advanced security measures in
              place, you can trust that your sensitive information is
              safeguarded throughout every interaction. Join us on this digital
              financial expedition and unlock a new era of banking convenience
              and confidence.
            </p>
            <Link to="/plan" className="btn bg-color custom-bg-text">
              Get Started
            </Link>
          </div>
          <div className="col-md-4">
            <img
              src={travel_2}
              alt="Logo"
              width="400"
              height="auto"
              className="home-image"
            />
          </div>
        </div>

        <div className="row mt-5">
          <div className="col-md-4">
            <img
              src={travel_1}
              alt="Logo"
              width="400"
              height="auto"
              className="home-image"
            />
          </div>
          <div className="col-md-8 text-color">
            <h1 className="ms-5">Experience Effortless Financial Management</h1>
            <p className="ms-5">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam nisi repellendus excepturi fugiat alias quia, dolores vel dicta odio expedita mollitia saepe placeat delectus distinctio, accusamus ex nostrum sapiente maxime sit est. Sequi assumenda atque quisquam eos. Tenetur, mollitia, officia ullam, cum saepe eveniet necessitatibus architecto vitae accusamus deleniti perferendis!
            </p>
            <p className="ms-5">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque laudantium, ad sint possimus incidunt harum similique sunt alias! Vitae ipsum rem id animi aut, impedit tempora dolorum, quibusdam amet commodi excepturi. Architecto quas tempora, neque quam a facilis quod repellendus iusto illum amet esse doloremque obcaecati? Pariatur consequatur fuga expedita.
            </p>
            <Link to="/plan" className="btn bg-color custom-bg-text ms-5">
              Get Started
            </Link>
          </div>
        </div>
      </div>
      <hr />
      <Footer />
    </div>
  );
};

export default HomePage;
