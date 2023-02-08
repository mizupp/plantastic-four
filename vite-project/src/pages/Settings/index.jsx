import React from "react";
import DeleteAccount from "../../components/DeleteAccount/DeleteAccount";
import "./styles.css";
import DarkMode from "../../components/DarkMode/index";
// import { Button, Container, InputGroup } from "reactstrap";
import { ThemeContext, themes } from "../../components/DarkMode/themes";
import ToggleDark from "../../components/DarkMode/index";

const Settings = () => {
  const [darkMode, setDarkMode] = React.useState(true);

  const username = sessionStorage.getItem("username");

  return (
    // <InputGroup>
    //     <ThemeContext.Consumer>
    //       {({ changeTheme }) => (
    //         <Button
    //           color="link"
    //           onClick={() => {
    //             setDarkMode(!darkMode);
    //             changeTheme(darkMode ? themes.light : themes.dark);
    //           }}
    //         >
    //           <i className={darkMode ? 'fas fa-sun' : 'fas fa-moon'}></i>
    //           <span className="d-lg-none d-md-block">Switch mode</span>
    //         </Button>
    //       )}
    //     </ThemeContext.Consumer>
    //   </InputGroup>

    <div className="settings-page">
      <h1>Settings Page</h1>
      {/* <button className="settings-dark"> Toggle Dark/Light Mode</button> */}
      <DarkMode />
      <div className="settings-username">
        Logged in as: <span>{username}</span>
      </div>
      <div className="settings-delete">
        <DeleteAccount />
      </div>
    </div>
  );
};

export default Settings;
