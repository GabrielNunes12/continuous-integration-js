import { helloWorld } from './hello_world';

test('helloWorld', () => {
    expect(helloWorld()).toBe('Hello World!');
});