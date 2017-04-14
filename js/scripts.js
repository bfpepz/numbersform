var entry = document.getElementById('number').value; 
var numbers = [];
var sum = 0; 



function confirmForm () {
var number = document.getElementById('number').value 
if (number == null || number === "") {
	alert("You have to enter a number! Duh!"); 
			}
	event.preventDefault(); 
}

function newEntry(number){
	if (n <= 0) {
	numbers.push(entry); 
	document.getElementById("count").innerHTML = ("This is what you entered " + numbers.length)
	var sum = sum + entry
		document.getElementById("sum").innerHTML = ("Total figure " + sum)

		document.getElementById("average").innerHTML = ("Average: " + sum / numbers.length)
		}
	event.preventDefault();
}

function clearForm() {
	sum = 0; 
	numbers = []; 
	
	document.getElementById("count").innerHTML = "Nothing here.";
	document.getElementById("sum").innerHTML = "No sum calculated yet.";
	document.getElementById("average").innerHTML = "No average yet.";
}