export function showCurrentDate() {
  // Create a new Date object to get the current date and time
  const currentDate = new Date();

  // Get the day of the week (0-6) and convert it to a string representation
  const day = currentDate.toLocaleString("en-US", { weekday: "long" });

  // Get the month (0-11) and convert it to a string representation
  const month = currentDate.toLocaleString("en-US", { month: "long" });

  // Get the date (1-31)
  const date = currentDate.getDate();

  // Get the full year (e.g., 2024)
  const year = currentDate.getFullYear();

  // Concatenate the day, month, date, and year
  return day + ", " + month + " " + date + ", " + year;

  // Display the result
  console.log(dateString);
}

// Call the function to display the current date
// showCurrentDate();
