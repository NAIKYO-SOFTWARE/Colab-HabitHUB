import { Link } from "react-router-dom";
import { appColor } from "../../constant/colors";
import Ellipse1195 from "../../../public/Ellipse1195.png";
import Ellipse1196 from "../../../public/Ellipse1196.png";
import Ellipse1198 from "../../../public/Ellipse1198.png";
import Button from "../../components/Button";
import { FaFacebook } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { FaApple } from "react-icons/fa";
import "./styles.scss";
import screenUrl from "../../constant/screenUrl";

const FirstPage = () => {
  return (
    <div
      className="firstpage position-relative"
      style={{ width: "100vw", height: "100vh" }}
    >
      <div className="position-relative h-100 w-100">
        <img
          src={Ellipse1196}
          alt=""
          className="position-absolute ellipse1196"
        />
        <img
          src={Ellipse1195}
          alt=""
          className="position-absolute ellipse1195"
        />
        <img
          src={Ellipse1198}
          alt=""
          className="position-absolute ellipse1198"
        />
      </div>
      <div className="firstpage__wrapper-content p-3 position-absolute top-0 w-100 h-100">
        <h1 className="title">Do your tasks quickly and easy</h1>
        <h2 className="desc">Your tasks, your rules, our support.</h2>
        <div className="d-flex flex-column align-items-center">
          <div style={{ marginTop: "70px" }} className="d-flex flex-column">
            <Link to={screenUrl.LOGIN}>
              <Button text="Login" color={appColor.black} />
            </Link>
            <Link to={"#"}>Create an account</Link>
          </div>
        </div>
        <div className="d-flex align-items-center gap-2 px-3 mt-4 cross w-100">
          <div
            className=" w-100"
            style={{ backgroundColor: "#ccc", height: "2px" }}
          ></div>
          <span>OR</span>
          <div
            className="w-100"
            style={{ backgroundColor: "#ccc", height: "2px" }}
          ></div>
        </div>
        <div className="d-flex gap-2 justify-content-center mt-3">
          <FaFacebook
            style={{
              color: "blue",
              height: "30px",
              width: "30px",
            }}
          />
          <FcGoogle
            style={{
              height: "30px",
              width: "30px",
            }}
          />
          <FaApple
            style={{
              height: "30px",
              width: "30px",
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default FirstPage;
