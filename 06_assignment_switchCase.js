function monthOfYear(monthNumber) {
  switch (monthNumber) {
    case 1:
      console.log(`Janauary is ${monthNumber}st month in the calender`);
      break;

    case 2:
      console.log(`February is ${monthNumber}nd month in the calender`);
      break;

    case 3:
      console.log(`march is ${monthNumber}nd in the calender`);
      break;

    case 4:
      console.log(`april is ${monthNumber}th in the calender`);
      break;

    case 5:
      console.log(`may is ${monthNumber}th month in the calender`);
      break;

    case 6:
      console.log(`june is ${monthNumber}th in the calender`);
      break;

    case 7:
      console.log(`julay is ${monthNumber}nd in the calender`);
      break;

    case 8:
      console.log(`august is ${monthNumber}th in the calender`);
      break;

    case 9:
      console.log(`september is ${monthNumber}th in the calender`);
      break;

    case 10:
      console.log(`octomber is ${monthNumber}th in the calender`);
      break;

    case 11:
      console.log(`november is ${monthNumber}nd in the calender`);
      break;

    case 12:
      console.log(`Decembeer is ${monthNumber}th month in the calender`);
      break;

    default:

    console.log(`Invalid data: ${monthNumber}`);
      break;
  }
}
monthOfYear(1);
monthOfYear(2);
monthOfYear(5);
monthOfYear(12);
monthOfYear(15);
monthOfYear(100);
monthOfYear(null);
monthOfYear(undefined);