import { lazy } from "react";

// export const AboutPageAsync = lazy(() => import("./AboutPage"));

const sleep = (ms: number) => {
  return new Promise<void>((resolve) => {
    setTimeout(() => resolve(), ms);
  });
};
// ТАК В РЕАЛЬНЫХ ПРОЕКТАХ НЕ ДЕЛАТЬ!!!!! ДЕЛАЕМ ДЛЯ КУРСА!
export const AboutPageAsync = lazy(() => sleep(4000).then(() => import("./AboutPage")));

// export const AboutPageAsync = lazy(() => new Promise(resolve => {
//     // @ts-ignore
//     // ТАК В РЕАЛЬНЫХ ПРОЕКТАХ НЕ ДЕЛАТЬ!!!!! ДЕЛАЕМ ДЛЯ КУРСА!
//     setTimeout(() => resolve(import('./AboutPage')), 1500)
// }))
