function handleEvent(error: Error, event: any) {
  if (error) {
    console.log(`Error from event: ${error.toString()}`);
    finished = true;
    return;
  }
  // Filter to show events on our car only
  const ownerEvent: OwnerEvent = JSON.parse(event.payload) as OwnerEvent; // eslint-disable-line @typescript-eslint/no-unsafe-member-access
  if (ownerEvent.carNumber === carid) {
    const txTime = new Date(ownerEvent.transactionDate).toUTCString();
    if (ownerEvent.docType === 'deleteCarEvent') {
      console.log(`${txTime}: The car record was deleted`);
    } else {
      console.log(
        `${txTime}: ${ownerEvent.newOwner} became owner #${++ownerSequenceNum}`
      );
    }
  }
}
