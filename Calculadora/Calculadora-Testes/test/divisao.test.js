const divide = require('../src/javascript/divisao')

test("A Divisão de 1 / 2 é igual a 0.5",() => {
    expect(divide(1,2)).toBe(0.5);
});



test("A Divisão de 25 / 10 é igual a 2.5",() => {
    expect(divide(25,10)).toBe(2.5);
});



test("A Divisão de 0 / 2 é igual a 0",() => {
    expect(divide(0,2)).toBe(0);
});



test("A Divisão de -5 / 2 é igual a -2.5",() => {
    expect(divide(-5,2)).toBe(-2.5);
});



test("A Divisão de 5 / 4 é igual a 1",() => {
    expect(divide(5,4)).toBe(1.25);
});