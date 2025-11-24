// JavaScript Program to Create Countdown Timer

/* 
1. Choose a target date/time

This is the moment you're counting down to.

2. Use setInterval() to update the timer every second
3. Subtract current time from target time to get:

days

hours

minutes

seconds
*/

const targetDate = new Date("2025-11-24 00:00:00").getTime();

const timer = setInterval(() => {
    const now = new Date().getTime();
    const difference = targetDate - now;

    if (difference <= 0) {
        clearInterval(timer);
        console.log("⏰ Countdown Finished!");
        return;
    }

    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((difference % (1000 * 60)) / 1000);

    console.log(`${days}d ${hours}h ${minutes}m ${seconds}s`);
}, 1000);
