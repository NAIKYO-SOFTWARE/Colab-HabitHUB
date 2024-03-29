import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Transition from "../../../public/transition.png";
import "./styles.scss";

const TransitionPage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      navigate("/home");
    }, 1000);
  }, []);
  return (
    <div
      className="d-flex justify-content-center align-items-center"
      style={{
        width: "100vw",
        height: "100vh",
      }}
    >
      <img src={Transition} alt="" />
    </div>
  );
};

export default TransitionPage;
