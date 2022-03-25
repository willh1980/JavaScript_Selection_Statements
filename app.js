console.log("Hello World!\n==========\n");
console.log("Follow the steps in the README.md file to complete the exercises:\n==========\n");

// Exercise 1
let favoriteNumber = 10;

let numberSelection = window.prompt();

if(favoriteNumber > numberSelection) {
    console.log("Too Low!")

} else if(favoriteNumber < numberSelection) {
    console.log("Too High!")
} else {
    console.log("Congradulations!!!!")
}





// Exercise 2

let userInput = window.prompt();

switch(userInput) {
    case "Monday":
      console.log("Monday is your favorite weekday? WTF")
      break;
    case "Tuesday":
        console.log("You must love tacos!")
      break;
    case "Wednesday":
        console.log("No better day than a humpday.")
      break;
    case "Thursday":
        console.log("Thursday traffic. YUCK!!")
        break;
    case "Friday":
        console.log("I love knocking on the weekend's door.")
        break;
    default:
        console.log("Capitalize and spell your favorite weekday correctly.")
  }