//Caching selectors/querys inside variables:

var button = document.getElementById("shoppinglistenter");
var input = document.getElementById("shoppinglistuserinput");
var ul = document.getElementById("shopping-list");

// button.addEventListener("click", function() {
// 	if (input.value.length > 0) { //6. Don't add "nothing" to the list if nothing is entered but enter is clicked.
// 		//1. console.log("click is working"); //Just a test if "click" is working
// 		var li = document.createElement("li"); //2. Create an HTML element with the tag <li>, declare it as the variable named "li".
// 		//li.appendChild(document.createTextNode("testing")); //3. Take newly created <li> element and append TextNode "testing" as child.
// 		li.appendChild(document.createTextNode(input.value)); //5. Take newly created <li> element and append value of input as child.
// 		ul.appendChild(li); //4. Take <li> element and append as child of <ul> element.
// 		input.value = ""; //7. Make sure the input field is clread after entering something.
// 	}
// })

// //Add items to shopping list by not clicking "enter" button but hitting the enter-key:

// input.addEventListener("keypress", function(event) { //8. The keypress event listens to ANY keypress. But via the functions property (in this case "event") added to the if condition, we can declare:
// 	if (input.value.length > 0 && event.keyCode === 13) {  //9. Run actions only if event.KeyCode === 13 which means the return key.
// 		var li = document.createElement("li"); 
// 		li.appendChild(document.createTextNode(input.value)); 
// 		ul.appendChild(li); 
// 		input.value = "";
// 	}
// })

//Refactored version below:

function inputLength() {
	return input.value.length;
}

function createElements() {
		var li = document.createElement("li"); 
		li.appendChild(document.createTextNode(input.value)); 
		li.classList.add("shopping-list-item");
		ul.appendChild(li); 
		input.value = ""; 

		var btn = document.createElement("button");
		btn.classList.add("del-toggle");
		btn.appendChild(document.createTextNode("X"));
 		li.appendChild(btn);
 		btn.onclick = removeParent;
}

function addListAfterClick() {
		if (inputLength() > 0) { 
		createElements();
	}
}

function addListAfterKeyPress(event) {
		if (inputLength() > 0 && event.keyCode === 13) {
		createElements();
	}
}

function listLength() {
	return ul.children.length;
}

function removeParent(evt) {
	evt.target.removeEventListener("click", removeParent, false);
	evt.target.parentNode.remove();
}

function checked(event) {
	if (event.target.className === "shopping-list-item" ||
		event.target.className === "shopping-list-item done") {
		event.target.classList.toggle("done");
	}
}

for (i = 0; i < listLength(); i++ ) {
    var btn = document.createElement("button");
    		btn.classList.add("del-toggle");
 		    btn.appendChild(document.createTextNode("X"));
 		    ul.children[i].appendChild(btn);
 		    btn.onclick = removeParent;
  	}


button.addEventListener("click", addListAfterClick); //This is just a reference to a function, without the command () to run it. This is called a callback function.

input.addEventListener("keypress", addListAfterKeyPress);

ul.addEventListener("click", checked);
  	
// Shopping List inspired by fellow student drood87 (see: https://github.com/drood87/drood87.github.io-shoppingList)



