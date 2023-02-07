import React from "react";
import DeleteAccount from "../../components/DeleteAccount";
import "./styles.css";

const Settings = () => {
  const username = sessionStorage.getItem("username");

  return (
    <div className="settings-page">
      <h1>Settings</h1>
      <div className="settings-username">Username: {username}</div>
      <div className="settings-delete">
        <DeleteAccount />
      </div>
    </div>
  );
};

export default Settings;
