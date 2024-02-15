// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword() {

  // Crates a variable named password with no value assigned to it
  var password = "";

  // Window prompt commands
 
  var passwordLength = prompt("Enter the length of the password between 8 and 128 characters:");

  
  if (passwordLength < 8 || passwordLength > 128) {
    alert("Invalid password length! Please enter a number between 8 and 128.");
    return;
  }

  // Window confirm Commands
  var includeNumbers = confirm("Include numbers?");
  var includeUppercase = confirm("Include uppercase letters?");
  var includeLowercase = confirm("Include lowercase letters?");
  var includeSpecialChars = confirm("Include special characters?");


  if (!includeUppercase && !includeLowercase && !includeNumbers && !includeSpecialChars) {
    alert("Please select at least one criteria for the password.");
    return;
  }

  // Define the character sets based on the selected criteria
  var numberCharacters = "0123456789";
  var uppercaseCharacters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var lowercaseCharacters = "abcdefghijklmnopqrstuvwxyz";
  var specialCharacters = "!@#$%^&*()_+~`|}{[]:;?><,./-=";


  // Generate the password based on the selected criteria and length
  for (var i = 0; i < passwordLength; i++) {
    var charSet = "";
    if (includeUppercase) charSet += uppercaseCharacters;
    if (includeLowercase) charSet += lowercaseCharacters;
    if (includeNumbers) charSet += numberCharacters;
    if (includeSpecialChars) charSet += specialCharacters;

    var randomCharacter = charSet.charAt(Math.floor(Math.random() * charSet.length));

    // Append the random character to the password
    password += randomCharacter;
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
