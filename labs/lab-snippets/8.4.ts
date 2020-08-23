// Get ongoing notifications to our car from deleteCar, createCar and changeCarOwner transactions
finished = false;
await contract.addContractListener(
  'changeListener',
  'changeOwnerEvent',
  (error: Error, event: any) => {
    handleEvent(error, event);
  }
);
await contract.addContractListener(
  'deleteListener',
  'deleteCarEvent',
  (error: Error, event: any) => {
    handleEvent(error, event);
  }
);
await contract.addContractListener(
  'createListener',
  'createCarEvent',
  (error: Error, event: any) => {
    handleEvent(error, event);
  }
);
console.log(`Listening for ${carid} update events...`);

while (!finished) {
  await new Promise((resolve) => setTimeout(resolve, 5000));
  // ... do other things
}
