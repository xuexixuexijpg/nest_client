import { HelloInterceptor } from './hello.interceptor';

describe('HelloInterceptor', () => {
  it('should be defined', () => {
    expect(new HelloInterceptor()).toBeDefined();
  });
});
