const helloWorld = require('./hello_world');

test('helloWorld', () => {
    expect(helloWorld()).toBe('Hello World!');
});