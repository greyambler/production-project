import { useTheme } from 'app/providers/ThemeProvider';
import { classNames } from 'shared/lib/classNames/classNames';
import { Navbar } from 'widgets/Navbar';
import { Sidebar } from 'widgets/Sidebar';
import { Suspense } from 'react';
// import { useTranslation } from 'react-i18next';
import { AppRouter } from './providers/router';
import './styles/index.scss';
import { LOCAL_STORAGE_THEME_KEY } from './providers/ThemeProvider/lib/ThemeContext';

// function Companent() {
//     const { t, i18n } = useTranslation();
//     //const { t } = useTranslation();
//     const toggle = () => {
//         i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru');
//     };

//     return (
//         <div>
//             <button type="button" onClick={toggle}>
//                 {t('Переключатель языка', { ns: 'translation' })}
//             </button>
//         </div>
//     );
// }

function App() {
    const { theme } = useTheme();

    // Сбрасывает в 'app_light_theme' / очищает localStorage при закрытии приложения.
    window.onbeforeunload = () => {
        localStorage.setItem(LOCAL_STORAGE_THEME_KEY, 'app_light_theme');
        // localStorage.clear();
    };

    return (
        <div className={classNames('app', {}, [theme])}>
            <Suspense fallback="">
                {/* <Companent /> */}
                <Navbar />
                <div className="content-page">
                    <Sidebar />
                    <AppRouter />
                </div>
            </Suspense>
        </div>
    );
}

export default App;
