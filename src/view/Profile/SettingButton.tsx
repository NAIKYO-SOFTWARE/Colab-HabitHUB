import { FaAngleRight } from "react-icons/fa";
import { appColor } from "../../constant/colors";

const SettingButton = ({ title }: { title: string }) => {
  return (
    <div
      className="d-flex w-100 justify-content-between align-items-center p-3"
      style={{
        backgroundColor: appColor.white,
        borderRadius: "10px",
      }}
    >
      <p className="fw-bold">{title}</p>
      <FaAngleRight />
    </div>
  );
};

export default SettingButton;
