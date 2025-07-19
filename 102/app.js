// 1. Create a date object for the current moment
const now = new Date();
console.log("Current date:", now);

// 2. Get year, month, day, hour, minute, second, millisecond
console.log("Year:", now.getFullYear());           // 4-digit year
console.log("Month (0-11):", now.getMonth());       // 0 = January
console.log("Day of month (1-31):", now.getDate());
console.log("Day of week (0-6):", now.getDay());    // 0 = Sunday
console.log("Hours (0-23):", now.getHours());
console.log("Minutes (0-59):", now.getMinutes());
console.log("Seconds (0-59):", now.getSeconds());
console.log("Milliseconds (0-999):", now.getMilliseconds());

// 3. Timestamp since Jan 1, 1970
console.log("getTime():", now.getTime());
console.log("Date.now():", Date.now()); // Static method

// 4. UTC versions
console.log("UTC Year:", now.getUTCFullYear());
console.log("UTC Month:", now.getUTCMonth());
console.log("UTC Date:", now.getUTCDate());

// 5. Timezone difference from UTC in minutes
console.log("Timezone offset (min):", now.getTimezoneOffset());

// 6. Modify date values
const d = new Date();
console.log("Original date:", d);
d.setFullYear(2001, 2, 25); // March 25, 2001
console.log("Updated with setFullYear:", d);
d.setDate(d.getDate() + 15); // Add 15 days
console.log("15 days later:", d);

// 7. Comparing two dates
const otherDate = new Date(2023, 0, 1); // Jan 1, 2023
if (otherDate > now) {
  console.log("2023 has not arrived yet.");
} else {
  console.log("2023 is already in the past.");
}
