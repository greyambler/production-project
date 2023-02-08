import { lazy } from 'react';

// export const AboutPageAsync = lazy(() => import("./AboutPage"));

// В рабочем проекте все сверху раскоментарить а внизу закоментарить
// так сделал я
const sleep = (ms: number) => new Promise<void>((resolve) => {
    setTimeout(() => resolve(), ms);
});

// так сделал я
// ТАК В РЕАЛЬНЫХ ПРОЕКТАХ НЕ ДЕЛАТЬ!!!!! ДЕЛАЕМ ДЛЯ КУРСА!
export const AboutPageAsync = lazy(() => sleep(4000).then(() => import('./AboutPage')));

// Так было в лекции
// ТАК В РЕАЛЬНЫХ ПРОЕКТАХ НЕ ДЕЛАТЬ!!!!! ДЕЛАЕМ ДЛЯ КУРСА!
// export const AboutPageAsync = lazy(() => new Promise(resolve => {
//     // @ts-ignore
//     // ТАК В РЕАЛЬНЫХ ПРОЕКТАХ НЕ ДЕЛАТЬ!!!!! ДЕЛАЕМ ДЛЯ КУРСА!
//     setTimeout(() => resolve(import('./AboutPage')), 1500)
// }))
