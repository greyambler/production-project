//export function classNames(cls: string, mods: Mods, addtional: string[]): string

import { classNames } from "./classNames";

//classNames - хелпер на вход подается первый параметр главный класс "название класса для scss"
// второй параметр объект Mods "{ [cls.collapsed]: collapsed }" те массив классов с параметром collapsed "true/false"
// по которому массив классов либо будетдоьавлен либо нет.
// и последним параметром массив классов которые будут добавлены к бъекту 
// этим пользуются когда надо передать св-ва из старшеко объекта (другого).
// сам хелпер должен правильно склеить все все передоваемые классы и выбросить не нужные по параметру collapsed

describe('className', () => {
    test('test', () => {
        expect(true).toBe(true);
    });

    test('только с первым параметром', () => {
        expect(classNames('clsClass')).toBe('clsClass');
    });

    test('и дополнительными классами', () => {

        const expected = 'clsClass class1 class2';
        expect(classNames('clsClass', {}, ['class1', 'class2'])).toBe(expected);
    });

    test('все включено ', () => {

        const expected = 'clsClass class1 class2 hovered scrollable';
        expect(classNames('clsClass',
            { hovered: true, scrollable: true },
            ['class1', 'class2']
        )).toBe(expected);
    });

    test('все включено один мод false', () => {

        const expected = 'clsClass class1 class2 scrollable';
        expect(classNames('clsClass',
            { hovered: false, scrollable: true },
            ['class1', 'class2']
        )).toBe(expected);
    });

    test('все включено один мод undefined ', () => {

        const expected = 'clsClass class1 class2 hovered';
        expect(classNames('clsClass',
            { hovered: true, scrollable: undefined },
            ['class1', 'class2']
        )).toBe(expected);
    });


});
