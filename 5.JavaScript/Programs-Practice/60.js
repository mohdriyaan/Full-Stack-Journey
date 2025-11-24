// JavaScript Program to Check Leap Year

// A year is a leap year if the following conditions are satisfied:

// The year is a multiple of 400.
// The year is a multiple of 4 and not a multiple of 100.

function checkLeapYear(year){
    if((0==year%400)||(0==year%4&&0!=year%100)){
        console.log(`${year} is a leap year`)
    }else{
        console.log(`${year} is not a leap year`)
    }
}

checkLeapYear(2000)