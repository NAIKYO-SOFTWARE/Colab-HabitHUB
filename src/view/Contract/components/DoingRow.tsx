import "./styles.scss";

interface IProp {
  text: string;
  iconUrl: string;
}

const DoingRow = ({ text, iconUrl }: IProp) => {
  return (
    <div className="contract__list-doing">
      <li className="d-flex gap-2">
        <li></li>
        <div>
          <img src={iconUrl} alt="" />
        </div>
        <span>{text}</span>
      </li>
    </div>
  );
};

export default DoingRow;
