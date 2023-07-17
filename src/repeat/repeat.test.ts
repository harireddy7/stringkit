import { repeat } from './repeat';

describe('repeat function', () => {
  it('returns the repeated text with count number of times', () => {
    const redacted = repeat('*', 5);
    expect(redacted).toStrictEqual('*****');
  });

  it('returns empty string if count is less than 1', () => {
    const text = repeat('5', 0);
    expect(text).toStrictEqual('');
  });
});
