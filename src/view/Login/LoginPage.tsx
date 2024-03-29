import { useEffect } from "react";
import { FaFacebook } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { FaApple } from "react-icons/fa";
import Button from "../../components/Button";
import { appColor } from "../../constant/colors";
import { useNavigate } from "react-router-dom";
import { useForm, SubmitHandler } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../redux/store";
import { loginUser } from "../../redux/userSlice";
import screenUrl from "../../constant/screenUrl";
import "./styles.scss";

interface IFormInput {
  email: string;
  password: string;
}

const LoginPage = () => {
  const dispatch = useDispatch<AppDispatch>();
  const userId = useSelector((state: RootState) => state.user.userId);
  const isLoading = useSelector((state: RootState) => state.user.isLoading);
  const navigate = useNavigate();

  useEffect(() => {
    if (userId) {
      navigate(screenUrl.CONTRACT);
    }
  }, [userId]);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInput>();

  const onSubmitForm: SubmitHandler<IFormInput> = (data) => {
    dispatch(loginUser({ email: data.email, password: data.password }));
  };

  return (
    <div className="loginpage px-3 d-flex flex-column align-items-center">
      <h1 className="loginpage__title">Log in to HabitHUB</h1>
      <p className="text-center loginpage__desc">
        Welcome back! Sign in using your social account or email to continue us
      </p>
      <div className="d-flex gap-2 justify-content-center mt-3">
        <FaFacebook
          style={{
            color: "blue",
            height: "30px",
            width: "30px",
          }}
        />
        <FcGoogle
          style={{
            height: "30px",
            width: "30px",
          }}
        />
        <FaApple
          style={{
            height: "30px",
            width: "30px",
          }}
        />
      </div>
      <div className="d-flex align-items-center gap-2 px-3 mt-4 cross w-100">
        <div
          className=" w-100"
          style={{ backgroundColor: "#ccc", height: "2px" }}
        ></div>
        <span>OR</span>
        <div
          className="w-100"
          style={{ backgroundColor: "#ccc", height: "2px" }}
        ></div>
      </div>
      <form
        action=""
        onSubmit={handleSubmit(onSubmitForm)}
        style={{
          width: "100%",
        }}
      >
        <div className="loginpage__wrapper-input">
          <div
            style={{
              height: "65px",
            }}
          >
            <input
              type="text"
              placeholder="email"
              {...register("email", {
                required: true,
                pattern: {
                  value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                  message: "Invalid email",
                },
              })}
            />
            {errors.email && (
              <div style={{ color: "red" }}>{errors.email.message}</div>
            )}
          </div>
          <div
            style={{
              height: "60px",
              marginTop: "5px",
            }}
          >
            <input
              type="text"
              placeholder="Password"
              {...register("password", {
                pattern: {
                  value: /^(?=.*[A-Z])[A-Za-z\d@#$%^&*!]{6,20}$/,
                  message: "Invalid password",
                },
              })}
            />
            {errors.password && (
              <div style={{ color: "red" }}>{errors.password.message}</div>
            )}
          </div>
        </div>
        <div
          style={{
            marginTop: "60px",
          }}
          className="d-flex justify-content-center"
        >
          <Button
            text={isLoading ? "...Loading" : "Login"}
            color={appColor.black}
          />
        </div>
      </form>
    </div>
  );
};

export default LoginPage;
