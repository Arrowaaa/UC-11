const subtracao = require('../src/javascript/subtracao')

test("A subtracao de 1 - 2 é igual a -1",() => {
    expect(subtracao(1,2)).toBe(-1);
});



test("A subtracao de 10 - 25 é igual a -15",() => {
    expect(subtracao(10,25)).toBe(-15);
});



test("A subtracao de 10 - 2 é igual a 8",() => {
    expect(subtracao(10,2)).toBe(8);
});



test("A subtracao de 1 - 5 é igual a -4",() => {
    expect(subtracao(1,5)).toBe(-4);
});



test("A subtracao de 5.0 - 2 é igual a 3",() => {
    expect(subtracao(5.0,2)).toBe(3);
});