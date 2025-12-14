/**
 * Function: countdownTimer
 * Description: Creates a countdown timer that logs the remaining time at regular intervals and stops at 0.
 *
 * Steps:
 * 1. Accept two parameters: `startTime` (in seconds) and `interval` (in milliseconds).
 * 2. Use `setInterval` to decrement the time and log the remaining time.
 * 3. Stop the timer using `clearInterval` when the remaining time reaches 0.
 * 4. Return the timer ID so it can be used for test validation.
 *
 * Example Usage:
 * countdownTimer(10, 1000); // Logs remaining time every second for 10 seconds.
 */
function countdownTimer(startTime, interval) {
  // Initialize the remaining time with the starting time
  let remainingTime = startTime;

  // Set up a repeating timer using setInterval
  const timerID = setInterval(() => {
    // Log the current remaining time
    // Logging first ensures the countdown starts with the correct number
    console.log(remainingTime);

    // Decrement remainingTime for the next interval
    remainingTime--;

    // If remaining time reaches 0, stop the interval to prevent further execution
    if (remainingTime <= 0) {
      clearInterval(timerID); // Stops the countdown timer
    }
  }, interval); // Interval specifies how often the function is executed

  // Return the timer ID so it can be used for tests or manually clearing the interval
  return timerID;
}

// Export the function so it can be imported in other modules or test files
module.exports = { countdownTimer };
