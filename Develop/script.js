// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword() {

  // Crates a variable named password with no value assigned to it
  var password = "";

  // Window prompt commands
  // Prompt the user for the length of the password
  var passwordLength = prompt("Enter the length of the password between 8 and 128 characters:");

  // Check if the user entered a valid length
  if (passwordLength < 8 || passwordLength > 128) {
    alert("Invalid password length! Please enter a number between 8 and 128.");
    return;
  }

  // Window confirm Commands
  // Prompt the user for password criteria
  var includeUppercase = confirm("Include uppercase letters?");
  var includeLowercase = confirm("Include lowercase letters?");
  var includeNumbers = confirm("Include numbers?");
  var includeSpecialChars = confirm("Include special characters?");

  // Check if the user selected at least one criteria
  if (!includeUppercase && !includeLowercase && !includeNumbers && !includeSpecialChars) {
    alert("Please select at least one criteria for the password.");
    return;
  }

  // Define the character sets based on the selected criteria
  var uppercaseCharacters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var lowercaseCharacters = "abcdefghijklmnopqrstuvwxyz";
  var numberCharacters = "0123456789";
  var specialCharacters = "!@#$%^&*()_+~`|}{[]:;?><,./-=";


  // Generate the password based on the selected criteria and length
  for (var i = 0; i < passwordLength; i++) {
    // Select a random character set based on the selected criteria
    var charSet = "";
    if (includeUppercase) charSet += uppercaseCharacters;
    if (includeLowercase) charSet += lowercaseCharacters;
    if (includeNumbers) charSet += numberCharacters;
    if (includeSpecialChars) charSet += specialCharacters;

    // Select a random character from the character set
    var randomChar = charSet.charAt(Math.floor(Math.random() * charSet.length));

    // Append the random character to the password
    password += randomChar;
  }

  return password; // return generated password
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
