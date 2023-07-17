import { titleCase } from './titleCase';

describe('titleCase function', () => {
  it('returns the text in title case', () => {
    const favShow = titleCase('tHE wiTcheR');
    expect(favShow).toStrictEqual('The Witcher');
  });

  it('returns back the input, if it is not string', () => {
    // @ts-ignore
    const favShow = titleCase(245);
    expect(favShow).toStrictEqual(245);
  });

  it('returns the trimmed text after transforming to title case', () => {
    const showName = titleCase('     brooklyN nine nine   ');
    expect(showName).not.toStrictEqual('     BrooklyN Nine Nine   ');
    expect(showName).toStrictEqual('Brooklyn Nine Nine');
  });
});
