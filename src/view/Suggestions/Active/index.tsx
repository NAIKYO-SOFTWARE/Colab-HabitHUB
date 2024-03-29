import { useAppDispatch } from "../../../redux/hooks";
import { addActive } from "../../../redux/activesSlice";
import { IoMdAddCircle } from "react-icons/io";
import { appColor } from "../../../constant/colors";
import "./styles.scss";

interface IProps {
  title: string;
  color: string;
}

const Active = ({ title, color }: IProps) => {
  const dispatch = useAppDispatch();
  return (
    <div className="active d-flex align-items-center">
      <div
        style={{ width: "80%", backgroundColor: color }}
        className="active__wrapper--title py-2"
      >
        <span className="px-4">{title}</span>
      </div>
      <IoMdAddCircle
        onClick={() => {
          dispatch(addActive({ title, bgColor: color }));
        }}
        style={{
          fontSize: 40,
          color: appColor.black,
        }}
      />
    </div>
  );
};

export default Active;
