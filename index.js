const drivers = ['Antonia', 'Nuru', 'Amari', 'Mo'];

const returnFirstTwoDrivers = (thing) => drivers.slice(0, 2);

const returnLastTwoDrivers = (thing) => drivers.slice(-2);

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

const createFareMultiplier = (inte) => {
    return function(fare) {
        return inte * fare;
    }
}
const fareDoubler = (createFareMultiplier) => {
    return createFareMultiplier * 2;
}
const fareTripler = (createFareMultiplier) => {
    return createFareMultiplier * 3;
}
const selectDifferentDrivers = (arrdrivers, returnLastTwoDrivers) => {
return returnLastTwoDrivers();
}