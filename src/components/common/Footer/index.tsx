import { Link } from "react-router-dom";
import { FaRegCalendarAlt, FaUser } from "react-icons/fa";
import { MdChecklistRtl } from "react-icons/md";
import { appColor } from "../../../constant/colors";
import "./style.scss";
import screenUrl from "../../../constant/screenUrl";

const Footer = () => {
  return (
    <div className="footer p-2 d-flex px-5 justify-content-between">
      <div className="footer__wrapper-icon d-flex justify-content-center align-items-center">
        <FaRegCalendarAlt
          style={{
            fontSize: "25px",
            color: `${appColor.black}`,
          }}
        />
      </div>
      <div className="footer__wrapper-icon d-flex justify-content-center align-items-center">
        <MdChecklistRtl
          style={{
            fontSize: "25px",
            color: `${appColor.black}`,
          }}
        />
      </div>
      <Link to={screenUrl.PROFILE}>
        <div className="footer__wrapper-icon d-flex justify-content-center align-items-center">
          <FaUser
            style={{
              fontSize: "25px",
              color: `${appColor.black}`,
            }}
          />
        </div>
      </Link>
    </div>
  );
};

export default Footer;
