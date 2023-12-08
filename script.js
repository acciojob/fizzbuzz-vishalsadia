
let output = "";

for (let i = 1; i <= 20; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    // Multiples of both three and five
    output += "FizzBuzz ;
  } else if (i % 3 === 0) {
    // Multiples of three
    output += "Fizz";
  } else if (i % 5 === 0) {
    // Multiples of five
    output += "Buzz";
  } else {
    // Numbers that are not multiples of three or five
    output += i.toString();
  }

  // Add a newline character after each number/string
  output += "\n";
}

// Display the output using alert()
alert(output);
