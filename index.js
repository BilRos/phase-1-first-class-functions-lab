// Code your solution in this file!

const returnFirstTwoDrivers = function(){
return scuberDrivers.slice(0,2);
}

const scuberDrivers=['Antonia', 'Nuru', 'Amari', 'Mo'];

const returnLastTwoDrivers = function(){
return scuberDrivers.splice(2);
}

const selectingDrivers=[returnFirstTwoDrivers , returnLastTwoDrivers];



const createFareMultiplier=function (multiplier){
       return function(integer){
           return multiplier * integer;
       } ;
    }
    


const fareDoubler = function createFareMultiplier(fare){
     return fare*2
}

const fareTripler = function createFareMultiplier(fare){
    return fare*3
}

const selectDifferentDrivers = function(scuberDrivers , returnLastTwoDrivers){
if(returnLastTwoDrivers === true) {
    return returnLastTwoDrivers;
}
else {
return scuberDrivers.slice(0,2);
}
}