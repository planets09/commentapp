

function todoList(){
//Using .getElementById, you are targeting the ID class information.
//Using .value to return the information provided by user.
//Next, assign a variable to the information provided. 
	var userInfo = document.getElementById('user-input').value;
	var picInfo = document.getElementById('image-link').value;
	var msgInfo = document.getElementById('comment').value;
	// console.log(userInfo, picInfo, msgInfo);

	
	var userInput = document.createTextNode("Information: " + userInfo);
	var msgInput = document.createTextNode("Message: " + msgInfo);

//create a empty div tag
	var newDiv = document.createElement('DIV');
//create a image tag 
	var newImg = document.createElement('IMG'); 


//You are taking the image and will then update the src value.
	newImg.src = picInfo 
//take the user's information and attach/add to empty div.
	newDiv.appendChild(userInput);
	newDiv.appendChild(msgInput);
	newDiv.appendChild(newImg);
	// console.log(newImg, newDiv);


//You now "pointing" at empty div id="display" so items can appear.
	document.getElementById('display').appendChild(newImg);
	document.getElementById('display').appendChild(newDiv);


	if(picInfo === ""){
		alert("Please put URL link");
	}

}