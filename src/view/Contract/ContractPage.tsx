import DoingRow from "./components/DoingRow";
import Button from "../../components/Button";
import { appColor } from "../../constant/colors";
import { Link } from "react-router-dom";
import "./styles.scss";
import screenUrl from "../../constant/screenUrl";

const data = [
  {
    iconUrl:
      "https://media.istockphoto.com/id/1474804624/pt/vetorial/cute-orange-and-white-syrian-hamster-isolated-on-white-background-vector-flat-illustration.jpg?s=612x612&w=0&k=20&c=-9pSGVbMEt1lS6gg_zUAtw-oLoaKzHZJ_jke6VcC_VQ=",
    text: "Plan tasks.",
  },
  {
    iconUrl:
      "https://media.istockphoto.com/id/1474804624/pt/vetorial/cute-orange-and-white-syrian-hamster-isolated-on-white-background-vector-flat-illustration.jpg?s=612x612&w=0&k=20&c=-9pSGVbMEt1lS6gg_zUAtw-oLoaKzHZJ_jke6VcC_VQ=",
    text: "Plan tasks.",
  },
  {
    iconUrl:
      "https://media.istockphoto.com/id/1474804624/pt/vetorial/cute-orange-and-white-syrian-hamster-isolated-on-white-background-vector-flat-illustration.jpg?s=612x612&w=0&k=20&c=-9pSGVbMEt1lS6gg_zUAtw-oLoaKzHZJ_jke6VcC_VQ=",
    text: "Plan tasks.",
  },
  {
    iconUrl:
      "https://media.istockphoto.com/id/1474804624/pt/vetorial/cute-orange-and-white-syrian-hamster-isolated-on-white-background-vector-flat-illustration.jpg?s=612x612&w=0&k=20&c=-9pSGVbMEt1lS6gg_zUAtw-oLoaKzHZJ_jke6VcC_VQ=",
    text: "Plan tasks.",
  },

  {
    iconUrl:
      "https://media.istockphoto.com/id/1474804624/pt/vetorial/cute-orange-and-white-syrian-hamster-isolated-on-white-background-vector-flat-illustration.jpg?s=612x612&w=0&k=20&c=-9pSGVbMEt1lS6gg_zUAtw-oLoaKzHZJ_jke6VcC_VQ=",
    text: "Plan tasks.",
  },
  {
    iconUrl:
      "https://media.istockphoto.com/id/1474804624/pt/vetorial/cute-orange-and-white-syrian-hamster-isolated-on-white-background-vector-flat-illustration.jpg?s=612x612&w=0&k=20&c=-9pSGVbMEt1lS6gg_zUAtw-oLoaKzHZJ_jke6VcC_VQ=",
    text: "Plan tasks.",
  },
  {
    iconUrl:
      "https://media.istockphoto.com/id/1474804624/pt/vetorial/cute-orange-and-white-syrian-hamster-isolated-on-white-background-vector-flat-illustration.jpg?s=612x612&w=0&k=20&c=-9pSGVbMEt1lS6gg_zUAtw-oLoaKzHZJ_jke6VcC_VQ=",
    text: "Plan tasks.",
  },
];

const ContractPage = () => {
  return (
    <div className="p-3 contract">
      <h1 className="contract__title">Let’s make a contract </h1>
      <h2 className="contract__title-doing">I will</h2>
      <ul className="d-flex flex-column gap-2">
        {data.map((doing, index) => {
          return (
            <DoingRow key={index} text={doing.text} iconUrl={doing.iconUrl} />
          );
        })}
      </ul>
      <div className="d-flex justify-content-center contract__wrapper-btn">
        <Link to={screenUrl.TRANSITION}>
          <Button text="I AGREE" color={appColor.black} />
        </Link>
      </div>
    </div>
  );
};

export default ContractPage;
