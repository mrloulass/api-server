'use strict';

const { dataBase, carCollection, makeCollection } = require('../src/models/index.js');

beforeAll(async () => {
  await dataBase.sync();
});

afterAll(async () => {
  await dataBase.drop();
});

describe('testing collection', () => {

  test ('should create a car and make', async ()=>{
    let newCar = await carCollection.create({name:'Kia'});

    expect(newCar.id).toEqual(1);
    expect(newCar.name).toEqual('Kia');

    let newMake = await makeCollection.create({name:'test make', carId: newCar.id})
    expect(newMake.name).toEqual('test make');
  }); 

test('should retrieve both car and make', async() => {
  let car = await carCollection.read(1,{ include: makeCollection.model});
// console.log(car);
  expect(car.Makes).toBeTruthy();
});

});
