import { useAppDispatch } from "../../../../redux/hooks";
import { changeChecked } from "../../../../redux/activesSlice";
import "./styles.scss";

interface IProps {
  id: number;
  title: string;
  isChecked: boolean;
  color: string;
}

const Active = ({ title, isChecked, color, id }: IProps) => {
  const ditpatch = useAppDispatch();
  console.log(isChecked);
  const handleOnchageChecked = () => {
    ditpatch(changeChecked({ checked: !isChecked, id }));
  };

  return (
    <div
      className="d-flex w-100 active py-3 pe-3 justify-content-between position-relative"
      style={{
        backgroundColor: color,
        borderRadius: "10px",
      }}
    >
      <p className="ps-3">{title}</p>
      <input
        type="radio"
        checked={isChecked}
        className="active-checked"
        onClick={handleOnchageChecked}
      />
      {isChecked && (
        <div className="w-100 h-100 position-absolute top-0 d-flex justify-content-center align-items-center">
          <div
            style={{
              height: "1px",
              width: "90%",
              backgroundColor: "black",
              top: "50%",
            }}
          ></div>
        </div>
      )}
    </div>
  );
};

export default Active;
