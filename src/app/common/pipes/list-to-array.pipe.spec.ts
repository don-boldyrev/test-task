import { ListToArrayPipe } from './list-to-array.pipe';

describe('ListToArrayPipe', () => {
  it('create an instance', () => {
    const pipe = new ListToArrayPipe();
    expect(pipe).toBeTruthy();
  });
});
