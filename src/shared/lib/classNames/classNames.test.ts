import { classNames } from './classNames';

describe('classNames', () => {
    test('with only first params', () => {
        expect(classNames('someClass')).toBe('someClass');
    });

    test('with additional class', () => {
        const expected = 'someClass class1 class2';
        expect(classNames('someClass', {}, ['class1', 'class2']))
            .toBe(expected);
    });

    test('with mods', () => {
        const expected = 'someClass class1 class2 hovered visible';
        expect(classNames(
            'someClass',
            { hovered: true, visible: true },
            ['class1', 'class2'],
        ))
            .toBe(expected);
    });

    test('with mods2', () => {
        const expected = 'someClass class1 class2 hovered';
        expect(classNames(
            'someClass',
            { hovered: true, visible: false },
            ['class1', 'class2'],
        ))
            .toBe(expected);
    });

    test('with mods undefined', () => {
        const expected = 'someClass class1 class2 visible';
        expect(classNames(
            'someClass',
            { hovered: undefined, visible: true },
            ['class1', 'class2'],
        ))
            .toBe(expected);
    });
});
