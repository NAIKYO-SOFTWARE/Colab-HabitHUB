import { FaAngleRight } from "react-icons/fa";

interface IProps {
  title: string;
  desc: string;
  imgUrl: string;
}

const ListTile = ({ desc, imgUrl, title }: IProps) => {
  return (
    <div className="d-flex justify-content-between align-items-center">
      <div>
        <div className="d-flex gap-2">
          <img src={imgUrl} alt="" />
          <p
            style={{
              fontSize: 20,
              fontWeight: 600,
            }}
          >
            {title}
          </p>
        </div>
        <p>{desc}</p>
      </div>
      <div>
        <span className="fw-bold">See all</span>
        <FaAngleRight />
      </div>
    </div>
  );
};

export default ListTile;
