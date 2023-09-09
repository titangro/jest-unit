const square = require('./square');

describe('square', () => {
    let mockValue;
    beforeEach(() => {});
    beforeAll(() => {
        mockValue = Math.random();
    });
    test('Корректное значение', () => {
        expect(square(2)).toBe(4);
        expect(square(2)).toBeLessThan(5);
        expect(square(2)).toBeGreaterThan(3);
        expect(square(2)).not.toBeUndefined();
    });

    test('Выбранный метод вызывается 1 раз', () => {
        const spyMathPow = jest.spyOn(Math, 'pow');
        square(2);
        expect(spyMathPow).toBeCalledTimes(1);
    });

    test('Выбранный метод не вызывается', () => {
        const spyMathPow = jest.spyOn(Math, 'pow');
        square(1);
        expect(spyMathPow).toBeCalledTimes(0);
    });

    afterEach(() => {
        jest.clearAllMocks();
    });
    afterAll(() => {});
});
