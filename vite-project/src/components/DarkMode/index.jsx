// import React, { useState, useEffect } from "react";
// const DarkMode = () => {

//   const [theme, setTheme] = useState("light");
//   // let bodyColor = "red";
//   // const tog = () => {
//   //   if (document.body.className == "blue") document.body.className = "red";
//   //   else if (document.body.className == "red")
//   //     document.body.className = "green";
//   //   else if (document.body.className == "green")
//   //     document.body.className = "blue";
//   // };

//   // const toggleTheme = () => {
//   //   if (theme === "light") {
//   //     setTheme("dark");
//   //   } else {
//   //     setTheme("light");
//   //     console.log("light");
//   //   }
//   // };
//   // useEffect(() => {
//   //   document.body.className = theme;
//   //   bodyColor = document.body.className;
//   // }, [theme]);

//   return (
//     <>
//       <button onClick={toggleTheme}>Dark Mode</button>
//     </>
//   );
// };
// export default DarkMode;

// // import useLocalStorage from "use-local-storage";

// // const DarkMode = () => {
// //   const defaultDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
// //   const [theme, setTheme] = useLocalStorage(
// //     "theme",
// //     defaultDark ? "dark" : "light"
// //   );

// //   const switchTheme = () => {
// //     const newTheme = theme === "light" ? "dark" : "light";
// //     setTheme(newTheme);
// //   };

// //   return (
// //     <div className="dark-mode" data-theme={theme}>
// //       <button onClick={switchTheme}>
// //         Switch to {theme === "light" ? "dark" : "light"} Theme
// //       </button>
// //     </div>
// //   );
// // };

import React, { useState, useEffect } from "react";
import { ThemeContext, themes } from "./themes";

export default function ThemeContextWrapper(props) {
  const [theme, setTheme] = useState(themes.dark);

  function changeTheme(theme) {
    setTheme(theme);
  }

  useEffect(() => {
    switch (theme) {
      case themes.light:
        document.body.classList.add("white-content");
        break;
      case themes.dark:
      default:
        document.body.classList.remove("white-content");
        break;
    }
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme: theme, changeTheme: changeTheme }}>
      {props.children}
    </ThemeContext.Provider>
  );
}
