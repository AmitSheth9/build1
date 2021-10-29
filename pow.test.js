const baseExp = require('./pow');


describe('baseExp', () => {
    it('returns base to the exponent power', () => {
            const base = 5;
            const exponent = 3
        expect(baseExp(base, exponent)).toEqual(5*5*5);
    })
})