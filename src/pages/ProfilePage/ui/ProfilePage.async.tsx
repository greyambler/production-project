import { lazy } from 'react';

// export const ProfilePageAsync = lazy(() => import("./ProfilePage"));

// В рабочем проекте все сверху раскоментарить а внизу закоментарить
// так сделал я
const sleep = (ms: number) => new Promise<void>((resolve) => {
    setTimeout(() => resolve(), ms);
});

// так сделал я
// ТАК В РЕАЛЬНЫХ ПРОЕКТАХ НЕ ДЕЛАТЬ!!!!! ДЕЛАЕМ ДЛЯ КУРСА!
export const ProfilePageAsync = lazy(() => sleep(1000).then(() => import('./ProfilePage')));

// Так было в лекции
// ТАК В РЕАЛЬНЫХ ПРОЕКТАХ НЕ ДЕЛАТЬ!!!!! ДЕЛАЕМ ДЛЯ КУРСА!

// export const MainPageAsync = lazy(
//   () =>
//     new Promise((resolve) => {
//       // @ts-ignore
//       // ТАК В РЕАЛЬНЫХ ПРОЕКТАХ НЕ ДЕЛАТЬ!!!!! ДЕЛАЕМ ДЛЯ КУРСА!
//       setTimeout(() => resolve(import("./MainPage")), 1500);
//     }),
// );
