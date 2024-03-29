import { appColor } from "../../constant/colors";
import "./index.scss";

interface IProp {
  text: string;
  color: string;
}

const ButtonComponent = ({ text, color }: IProp) => {
  return (
    <button
      type="submit"
      className="btn px-5 py-2"
      style={{
        color,
        backgroundColor: appColor.lightGrey,
        boxShadow: "1px 2px 3px #ccc",
        fontWeight: 600,
      }}
    >
      {text}
    </button>
  );
};

export default ButtonComponent;
