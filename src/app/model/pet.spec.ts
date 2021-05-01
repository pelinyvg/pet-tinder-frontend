import { Pet } from './pet';

describe('Pet', () => {
  it('should create an instance', () => {
    // @ts-ignore
    expect(new Pet()).toBeTruthy();
  });
});
