import { useTheme } from 'app/providers/ThemeProvider';
import { classNames } from 'shared/lib/classNames/classNames';
import { Navbar } from 'widgets/Navbar';
import { Sidebar } from 'widgets/Sidebar';
import { Suspense, useEffect } from 'react';
// import { useTranslation } from 'react-i18next';

import { useDispatch } from 'react-redux';
import { userActions } from 'entities/User';
import { AppRouter } from './providers/router';

import './styles/index.scss';

// buildLoaders.ts
// Для того, чтобы плагин видел файлы локализаций, можно использовать структуру ключа
// t_("locale-file:key")
// Если у вас VSСode и установлен плагин i18n-ally, то он не хочет понимать такую структуру ключа, тогда можно использовать структуру:
// t_("key", {ns: "locale-file"})
// эту структуру понимают все.

// function Companent() {
//     const { t, i18n } = useTranslation();
//     //const { t } = useTranslation('translation');
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
    /*
       Если не сбросить то если тема была dark не применяется color
    */
    // window.onbeforeunload = () => {
    //     localStorage.setItem(LOCAL_STORAGE_THEME_KEY, 'app_light_theme');
    //     // localStorage.clear();
    // };

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(userActions.initAuthData());
    }, [dispatch]);

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
