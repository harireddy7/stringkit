"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const reverse_1 = require("./reverse");
describe('reverse function', () => {
    it('returns the reversed text', () => {
        const name = (0, reverse_1.reverse)('geralt of rivia');
        expect(name).toStrictEqual('aivir fo tlareg');
    });
    it('returns back the input, if it is not string', () => {
        // @ts-ignore
        const num = (0, reverse_1.reverse)(998);
        expect(num).toStrictEqual(998);
    });
});
//# sourceMappingURL=reverse.test.js.map