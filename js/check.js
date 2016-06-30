var family = []; // create an empty array

var name, surname, job, age, startBell; // declare some variables

var res = document.getElementById("myFamily");
var err = document.getElementById("error");

// create a handler function addMember()

function addMember() {

	res.innerHTML = ""; // clear field
	err.innerHTML = ""; // clear field

	// verification fields on the number
	function isNumeric(n) {
		return !isNaN(parseFloat(n)) && isFinite(n);
	}

	// ask a user to enter his name and check the field
	name = prompt("Enter your name", "");
	// loop which ask user to enter his name
	while( !name || name == null || isNumeric(name) ) {
			if( name === "" ){
				alert("Error! The field of name is empty. Try again.");
				var name = prompt("Enter your name", "");
			} else if ( name == null ) {
				alert( "Error! You have pressed the button 'cancel'. Try again." );
				var name = prompt('Enter your name', '');
			} else if (isNumeric(name)) {
				alert("Error! Number. It must be a string. Try again.");
				var name = prompt('Enter your name', '');
			}
		}


	// ask a user to enter his surname and check the field
	surname = prompt("Enter your surname", "");
	// loop which ask user to enter his surname
	while( !surname || surname == null || isNumeric(surname) ) {
			if( surname === "" ){
				alert("Error! The field of surname is empty. Try again.");
				var surname = prompt("Enter your surname", "");
			} else if ( surname == null ) {
				alert( "Error! You have pressed the button 'cancel'. Try again." );
				var surname = prompt("Enter your surname", "");
			} else if (isNumeric(surname)) {
				alert("Error! Number. It must be a string. Try again.");
				var surname = prompt('Enter your surname', '');
			}
		}

	// ask a user to enter his job and check the field
	job = prompt("What do you do?", "");
	// loop which ask user to enter his job
	while( !job || job == null || isNumeric(job)) {
			if( job === "" ){
				alert("Error! The field of the job is empty. Try again.");
				var job = prompt("Enter your name", "");
			} else if ( job == null ) {
				alert( "Error! You have pressed the button 'cancel'. Try again." );
				var job = prompt("What do you do?", "");
			} else if (isNumeric(job)) {
				alert("Error! Number. It must be a string. Try again.");
				job = prompt("What do you do?", "");
			}
		}

	// ask a user to enter his age and check the field
	age = prompt("How old are you?", "");
	// loop which ask user to enter only the number	on the field 'age'
		while (!isNumeric(age)) {
			alert("Error! You must enter a number. Try again.");
			age = prompt("How old are you?", "");
		}

	// ask a user to enter his start bell and check the field
	startBell = prompt("Enter your start bell", "");
	// loop which ask user to enter only the number	on the field 'startBell'	
		while (!isNumeric(startBell)) {
			alert("Error! You must enter a number. Try again.");
			startBell = prompt("Enter your start bell", "");
		}

	// create the function-constructor

	function CreaterMember(nameMember, surnameMember, jobMember, ageMember, bellMember) {

		this.nameMember = name;
		this.surnameMember = surname;
		this.jobMember = job;
		this.ageMember = age;
		this.bellMember = startBell;
	}

	// create an object
	var member = new CreaterMember();
	// add object to array 'Family'
	family.push(member);

	if( family.length !== 0 ) {
		res.innerHTML= "<h2>" + "Congratulations!!! The family was successfully created" + "</h2>";
	}
}

// create a handler function deleteMember()
function deleteMember() {

	res.innerHTML = ""; // clear field
	err.innerHTML = ""; // clear field

	var question = confirm("Do you want to delete a member of family?");

	if( question == true ) {

		// check if the array 'Family' is empty
		if(family.length === 0) {

			err.innerHTML = "<h1>" + "The family is empty. Nobody can be deleted" + "</h1>";

			// check if the array 'Family' isn't empty
		} else {
		// ask a user to chose a member who he wants to delete
			var choseMember = prompt("Chose a member who you want to delete", "");

			// verification on the number
			function isNumeric(n) {
				return !isNaN(parseFloat(n)) && isFinite(n);
			}

			// ask a user to enter a member whom he wants to delete and check the field
			do {
				if( choseMember === "" ){
					alert("Error! The field of name is empty. Try again.");
					choseMember = prompt("Chose a member who you want to delete", "");

				} else if ( choseMember == null ) {
					alert( "Error! You have pressed the button 'cancel'. Try again." );
					choseMember = prompt("Chose a member who you want to delete", "");

				} else if (isNumeric(choseMember)) {
					alert("Error! Number. It must be a string. Try again.");
					choseMember = prompt("Chose a member who you want to delete", "");
				}
			} while( !choseMember || choseMember == null || isNumeric(choseMember) );

			// loop through an array 'Family'
			for( var i = 0; i < family.length; i++ ) {

				// check if entered word 'choseMember' consists of one object's value
				if( choseMember === family[i].nameMember ) {
					// delete a member of family
					family.splice(i, 1);
					var deletedMember = document.getElementById("myFamily");
					deletedMember.innerHTML = "<h2>" + "The member was successfully deleted" + "</h2>";

				} else {
					err.innerHTML = "<h1>" + "Nobody can be found with such name" + "</h1>";
				}
			}
		}

    // if a user has pressed the button 'cancel'
	} else {
		alert("I changed my mind. I will not do it");
	}
}

// create a handler function setAction()
function setAction() {

	err.innerHTML = ""; // clear field
	res.innerHTML = ""; // clear field

	if (family.length === 0) {

		err.innerHTML = "<h1>" + "The family doesn't exist" + "</h1>";

	} else {

		var memberSetAction = prompt("Chose a member whom you want to set an action", "");

		// verification on the number
		function isNumeric(n) {
			return !isNaN(parseFloat(n)) && isFinite(n);
		}
		// ask a user to enter a member whom he wants to set an action and check the field
		do {
			if (memberSetAction === "") {
				alert("Error! The field of name is empty. Try again.");
				memberSetAction = prompt("Chose a member whom you want to set an action", "");

			} else if (memberSetAction == null) {
				alert("Error! You have pressed the button 'cancel'. Try again.");
				memberSetAction = prompt("Chose a member whom you want to set an action", "");

			} else if (isNumeric(memberSetAction)) {
				alert("Error! Number. It must be a string. Try again.");
				memberSetAction = prompt("Chose a member whom you want to set an action", "");
			}
		} while ( !memberSetAction || memberSetAction == null || isNumeric(memberSetAction) );

		// loop through an array 'Family'
		for (var i = 0; i < family.length; i++) {

			if( memberSetAction === family[i].nameMember ) {
				res.innerHTML = "<h2>" + "Bell is " + family[i].bellMember + "</h2>";

				const SPEND_MONEY = 10; // declare const

				var checkBell = family[i].bellMember - SPEND_MONEY;
				family[i].bellMember = checkBell;
				res.innerHTML = "<h2>" + "After going to the restaurant " + "<span>" + family[i].nameMember +

					"</span>" + ", his bell is " + family[i].bellMember + " $"+ "</h2>";

				if ( family[i].bellMember <= 0 ) {
					err.innerHTML = "<h1>" + "<span>" + family[i].nameMember + "</span>" +" hasn't enough money" + "</h1>";
				}
			} else {
				err.innerHTML = "<h1>"+ "Nobody can be found. Be careful" + "</h1>";
			}
		}
	}
}

// create a handler function showAllFamily()
function showAllFamily() {

	// check if 'family' is an array and it isn't empty
	if( Array.isArray(family) && family.length !== 0 ) {

		res.innerHTML = ""; // clear field
		err.innerHTML = ""; // clear field

		// loop through an array 'Family'
			for( var i = 0; i< family.length; i++) {

				res.innerHTML += "<h2>" + "<span>" + "name: "+ "</span>" + family[i].nameMember  + "<br />" +

					"<span>" + "surname: " + "</span>" + family[i].surnameMember + "<br />" + "<span>" + "job: " +

					   "</span>"+ family[i].jobMember + "<br />" + "<span>" + "age: " + "</span>"+ family[i].ageMember +

					" years" + "<br />" + "<span>" +"start bell: " + "</span>" + family[i].bellMember + " $" + "</h2>";
			}
		} else {
			err.innerHTML = "<h1>" + "The family doesn't exist. It had better create it." + "</h1>";
		}
}