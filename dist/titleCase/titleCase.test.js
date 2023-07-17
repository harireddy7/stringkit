"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const titleCase_1 = require("./titleCase");
describe('titleCase function', () => {
    it('returns the text in title case', () => {
        const favShow = (0, titleCase_1.titleCase)('tHE wiTcheR');
        expect(favShow).toStrictEqual('The Witcher');
    });
    it('returns back the input, if it is not string', () => {
        // @ts-ignore
        const favShow = (0, titleCase_1.titleCase)(245);
        expect(favShow).toStrictEqual(245);
    });
    it('returns the trimmed text after transforming to title case', () => {
        const showName = (0, titleCase_1.titleCase)('     brooklyN nine nine   ');
        expect(showName).not.toStrictEqual('     BrooklyN Nine Nine   ');
        expect(showName).toStrictEqual('Brooklyn Nine Nine');
    });
});
//# sourceMappingURL=titleCase.test.js.map