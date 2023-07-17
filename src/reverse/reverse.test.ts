import { reverse } from './reverse';

describe('reverse function', () => {
  it('returns the reversed text', () => {
    const name = reverse('geralt of rivia');
    expect(name).toStrictEqual('aivir fo tlareg');
  });

  it('returns back the input, if it is not string', () => {
    // @ts-ignore
    const num = reverse(998);
    expect(num).toStrictEqual(998);
  });
});
