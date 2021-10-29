const baseExp = require('./pow');


describe('baseExp', () => {
    it('returns base to the exponent power', () => {
            const base = 6;
            const exponent = 3
        expect(baseExp(base, exponent)).toEqual(6*6*6);
    })
})