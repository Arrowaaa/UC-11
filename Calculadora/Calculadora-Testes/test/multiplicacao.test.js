const multiplica = require('../src/javascript/multiplicacao')

test("A Multiplicação de 1 * 10 é igual a 10",() => {
    expect(multiplica(1,10)).toBe(10);
});



test("A Multiplicação de 4 * 2 é igual a 8",() => {
    expect(multiplica(4,2)).toBe(8);
});



test("A Multiplicação de 5 * -10 é igual a -50",() => {
    expect(multiplica(5,-10)).toBe(-50);
});



test("A Multiplicação de 2 * 5 é igual a 10",() => {
    expect(multiplica(2,5)).toBe(10);
});



test("A Multiplicação de 10 * 25 é igual a 25",() => {
    expect((10,25)).toBe(25);
});
