let day = getRandom();

function getRandom() {
  return Math.floor(Math.random() * 7);
}

switch (day) {
    case 0:
        console.log("It is a Sunday");
        break;
    case 1:
        console.log("It is a Monday");
        break;
    case 2:
        console.log("It is a Tuesday");
        break;
    case 3:
        console.log("It is a Wednesday");
        break;
    case 4:
        console.log("It is a Thursday");
        break;
    case 5:
        console.log("It is a Friday");
        break; 
    case 6:
        console.log("It is a Saturday");
        break;
    default:
        console.log("No such day exists");
}
