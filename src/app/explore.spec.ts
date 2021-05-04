import { Explore } from './explore';

describe('Explore', () => {
  it('should create an instance', () => {
    expect(new Explore("", "s", "h", 1, "m", "", "m", "w")).toBeTruthy();
  });
});
