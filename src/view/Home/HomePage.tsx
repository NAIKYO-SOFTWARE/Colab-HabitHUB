import { Link } from "react-router-dom";
import { useAppSelector, useAppDispatch } from "../../redux/hooks";
import { addActive } from "../../redux/activesSlice";
import FormFilter from "./components/FormFilter";
import TimeBox from "./components/TimeBox";
import Active from "./components/Active";
import Empty from "../../../public/empty.png";
import { appColor } from "../../constant/colors";
import screenUrl from "../../constant/screenUrl";
import "./style.scss";

const data = [
  {
    weekday: "Sun",
    day: 11,
  },
  {
    weekday: "Sun",
    day: 11,
  },
  {
    weekday: "Sun",
    day: 11,
  },
  {
    weekday: "Sun",
    day: 11,
  },
  {
    weekday: "Sun",
    day: 11,
  },
  {
    weekday: "Sun",
    day: 11,
  },
];

const HomePage = () => {
  const actives = useAppSelector((state) => state.actives.data);
  const dispatch = useAppDispatch();

  return (
    <div className="homepage">
      <div className="homepage__wrapper-time py-3">
        <h1 className="title text-center">Today</h1>
        <div className="px-3 d-flex w-100 justify-content-between">
          {data.map((time, index) => {
            return (
              <TimeBox key={index} day={time.day} weekday={time.weekday} />
            );
          })}
        </div>
      </div>
      <div className="homepage__wrapper-filter d-flex align-items-center mt-3 flex-column">
        <FormFilter />
        {actives.length === 0 ? (
          <img src={Empty} alt="" />
        ) : (
          <div className="w-100 px-2 mt-4 d-flex flex-column gap-2 homepage__wrapper-actives">
            {actives.map((active, index) => {
              return (
                <Active
                  isChecked={active.isChecked}
                  title={active.title}
                  color={active.bgColor}
                  id={active.id}
                  key={index}
                />
              );
            })}
          </div>
        )}
      </div>
      <Link to={screenUrl.SUGGESTIONS}>
        <button
          className="btn position-fixed"
          style={{
            height: "50px",
            width: "50px",
            borderRadius: "999px",
            backgroundColor: appColor.white,
            color: appColor.black,
            fontWeight: 600,
            boxShadow: "1px 2px 3px black",
            bottom: "80px",
            right: "30px",
          }}
        >
          +
        </button>
      </Link>
    </div>
  );
};

export default HomePage;
