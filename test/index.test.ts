import assert = require('assert');
import { say } from '../src';

describe('index.test.ts', () => {
  it('should success', () => {
    assert(say('foo') === 'hello, foo');
  });
});
