

function commentList(){
//Using .getElementById, you are targeting the ID class information.
//Using .value to return the information provided by user.
//Next, assign a variable to the information provided. 
	var userInfo = document.getElementById('user-input').value;
	var picInfo = document.getElementById('image-link').value;
	var msgInfo = document.getElementById('comment').value;
	// console.log(userInfo, picInfo, msgInfo);

	
	var userInput = document.createTextNode("Information: " + userInfo + <br>);
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
	document.getElementById('display').appendChild(newDiv);
	document.getElementById('display').appendChild(newImg);
	console.log(display);

//If the user did not submit URL link, then if statement will run.
 	if(!picInfo){
        alert("Please put URL link");
    } 
}

//As a second option, you can also run the code this way:
//Note: using null or undefined did not work; had to use empty ""
	// if(picInfo ==== ""){
	// 	alert("Please submit URL link.")
	// }




