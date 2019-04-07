// const fs = require('fs');
const webdriverio = require('webdriverio');
const options = require('../wdio.conf');
const client = webdriverio.multiremote(options);

jest.setTimeout(30000);

beforeAll(() => {
  return client.init().url('http://localhost:7777/overlay');
});

// test("При открытии overlay есть инпуты", () => {
//   return client 
    
// });

test("При открытии overlay есть кнопка закрыть", () => {
  return client 
    .isExisting('.close')
    .then (browsers =>{
      for( const browserName in browsers) {
        expect(browsers[browserName]).toBe(true); 
      }
    })
});

// test("При открытии overlay кнопка Отправить в состоянии Disable", () => {
//   return client 
    
// });

afterAll(() => {
  return client.end();
});
