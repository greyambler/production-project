import { useTheme } from "app/providers/ThemeProvider";
import { classNames } from "shared/lib/classNames/classNames";
import { AppRouter } from "./providers/router";

import "./styles/index.scss";
import { Navbar } from "widgets/Navbar";
import { Sidebar } from "widgets/Sidebar";
import { Suspense } from "react";

import { useTranslation } from "react-i18next";

const Companent = () => {
  const { t, i18n } = useTranslation();

  const toggle = () => {
    i18n.changeLanguage(i18n.language === "ru" ? "en" : "ru");
  };
  return (
    <div>
      <button onClick={toggle}>{t("Переключатель языка", { ns: "translation" })}</button>
    </div>
  );
};

const App = () => {
  const { theme } = useTheme();

  return (
    <div className={classNames("app", {}, [theme])}>
      <Suspense fallback="">
        <Navbar />
        <div className="content-page">
          <Sidebar />
          <AppRouter />
        </div>
      </Suspense>
    </div>
  );
};

export default App;
