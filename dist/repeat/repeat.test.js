"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const repeat_1 = require("./repeat");
describe('repeat function', () => {
    it('returns the repeated text with count number of times', () => {
        const redacted = (0, repeat_1.repeat)('*', 5);
        expect(redacted).toStrictEqual('*****');
    });
    it('returns empty string if count is less than 1', () => {
        const text = (0, repeat_1.repeat)('5', 0);
        expect(text).toStrictEqual('');
    });
});
//# sourceMappingURL=repeat.test.js.map