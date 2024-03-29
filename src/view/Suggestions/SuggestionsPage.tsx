import Brain from "../../../public/brain.png";
import ListTile from "./ListTile";
import Active from "./Active";
import { appColor } from "../../constant/colors";
import Button from "../../components/Button";
import "./styles.scss";

const data = [
  {
    id: 1,
    listTile: "Learn and study more",
    desc: "Stay hungry for knowledge",
    icon: Brain,
    activeList: [
      {
        id: 10,
        title: "Read",
        bgColor: appColor.peach,
      },
      {
        id: 11,
        title: "Study",
        bgColor: appColor.magicMint,
      },
    ],
  },
  {
    id: 2,
    listTile: "Exercise",
    desc: "Become your best version",
    icon: Brain,
    activeList: [
      {
        id: 21,
        title: "Running",
        bgColor: appColor.peach,
      },
      {
        id: 22,
        title: "Cycling",
        bgColor: appColor.magicMint,
      },
    ],
  },
  {
    id: 3,
    listTile: "Clean and Organize",
    desc: "Get you life togheter",
    icon: Brain,
    activeList: [
      {
        id: 31,
        title: "Mop the house",
        bgColor: appColor.peach,
      },
      {
        id: 32,
        title: "Clean the bathroom",
        bgColor: appColor.magicMint,
      },
    ],
  },
];

const SuggestionsPage = () => {
  return (
    <div className="suggestions px-3">
      <h1 className="text-center mt-3">Suggestions</h1>
      <div className="mt-3">
        <div className="mt-3">
          {data.map((data) => {
            return (
              <div>
                <ListTile
                  key={data.id}
                  imgUrl={data.icon}
                  desc={data.desc}
                  title={data.listTile}
                />
                <div className="mt-2"></div>
                <div className="d-flex flex-column gap-2">
                  {data.activeList.map((active) => {
                    return (
                      <Active
                        key={active.id}
                        color={active.bgColor}
                        title={active.title}
                      />
                    );
                  })}
                </div>
                <div className="mt-3"></div>
              </div>
            );
          })}
        </div>
      </div>
      <div className="d-flex justify-content-center">
        <Button color={appColor.black} text="Add more" />
      </div>
    </div>
  );
};

export default SuggestionsPage;
