// JavaScript Program to Format the Date

const currentDate = new Date() // The new Date() object gives the current date and time.

const day = currentDate.getDate() 

const month = currentDate.getMonth()+1

const year = currentDate.getFullYear()

if(day<10){
    day = "0"+day
}

if(month<10){
    month="0"+month
}

console.log(`${day}/${month}/${year}`)


