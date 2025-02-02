function toCase(text) {
  // write your code here
	let lowerCaseStr = text.toLowerCase();
	let upperCaseStr = text.toUpperCase();
	return lowerCaseStr+ "-" + upperCaseStr;
}

// DO not change the code below

const text = prompt("Enter text:");
alert(toCase(text));
