const soma = require('../src/javascript/soma')

test("A soma de 1 + 2 é igual a 3",() => {
    expect(soma(1,2)).toBe(3);
});



test("A soma de -10 + -25 é igual a -35",() => {
    expect(soma(10,25)).toBe(35);
});



test("A soma de 0 + 2 é igual a 2",() => {
    expect(soma(0,2)).toBe(2);
});



test("A soma de -1 + -5 é igual a -6",() => {
    expect(soma(-1,-5)).toBe(-6);
});



test("A soma de 5 + 2 é igual a 7",() => {
    expect(soma(5,2)).toBe(7);
});