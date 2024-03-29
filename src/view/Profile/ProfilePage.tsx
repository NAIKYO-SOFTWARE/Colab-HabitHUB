import SettingButton from "./SettingButton";
import "./styles.scss";

const data = [
  {
    title: "Account",
  },
  {
    title: "Notifications",
  },
  {
    title: "Help",
  },
  {
    title: "Storage and Data",
  },
  {
    title: "Invite a friend",
  },
  {
    title: "Logout",
  },
];

const ProfilePage = () => {
  return (
    <div className="profile">
      <p className="text-center profile-title pt-4 mb-4">Profile</p>
      <div className="d-flex flex-column gap-2 px-2">
        {data.map((setting, index) => {
          return <SettingButton key={index} title={setting.title} />;
        })}
      </div>
    </div>
  );
};

export default ProfilePage;
