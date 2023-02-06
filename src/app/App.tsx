import { useTheme } from "app/providers/ThemeProvider";
import { classNames } from "shared/lib/classNames/classNames";
import { AppRouter } from "./providers/router";

import "./styles/index.scss";
import { Navbar } from "widgets/Navbar";

const App = () => {
  const { theme, toggleTheme } = useTheme();

  // <div className={`app ${theme}`}>
  // <div className={classNames("app", { hovered: true, selected: false }, [theme, "cls2", "cls3"])}>

  return (
    <div className={classNames("app", {}, [theme])}>
      {/* <Link to={"/"}>Главная</Link>
      <Link to={"/about"}>О сайте</Link> */}
      <Navbar />
      <AppRouter />

      <button onClick={toggleTheme}>TOGGLE</button>
    </div>
  );
};

export default App;
