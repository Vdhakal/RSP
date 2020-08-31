	/*Instance variables*/
	var win = 0;
	var loss = 0;
	var tie = 0;
	/*
	*This is an asychronous function that gets triggered when form is submitted.
	*/
	async function formProcessor()
	{
		//Disabling the submit button so that user cannot click on it more than once until the game completes
		document.getElementById("submit").disabled = true;
		//Instance variables
		var userChoice = "";
		var userValue = null;
		//Using the Math class to generate random number between 0 and 2
		var computerValue = Math.floor((Math.random() * 3));

		//Hidding the images on the computer's side
		comroc.style.visibility='hidden';
		compap.style.visibility='hidden';
		comsci.style.visibility='hidden';
		result.style.visibility="hidden";

		//To display the scoreboard
		scoreBoard.style.visibility="visible";
		game.score.value = "Won Tied Lost\n"+win+"  "+tie+"  "+loss;
		
		//Getting the user's coice 
		if (game.rps[0].checked)userValue=0;
		if (game.rps[1].checked)userValue=1;
		if (game.rps[2].checked)userValue=2;
		
		//This 2*2 array determines the user's win state
		var winTable = 
		[
			["T","L","W"],
			["W","T","L"],
			["L","W","T"],
		];

		//This deals with animating the images on computer's side. By changing their visibilty within a constant time
		for (let i = 0; i <= 3; i++) {
		comroc.style.visibility='visible';
		await sleep(120);//this is a function call to sleep(), that uses the set timeout() function of javaScript 
		comroc.style.visibility='hidden';
		await sleep(80);
		compap.style.visibility='visible';
		await sleep(120);
		compap.style.visibility='hidden';
		await sleep(80);
		comsci.style.visibility='visible';
		await sleep(120);
		comsci.style.visibility='hidden';
		await sleep(80);
		}
		//This dislplays the result of the game
		await sleep(80);
		result.style.visibility="visible";

		//This displays the image on computer's side depending on the value generated from random function(computer's choice) 
		if(computerValue == 0)
		{
		comroc.style.visibility='visible';
		}
		if(computerValue == 1)
		{
		compap.style.visibility='visible';
		}
		if(computerValue == 2)
		{
		comsci.style.visibility='visible';
		}

		//This determines if the user won, lost, or tied and displays the corresponding message
		if(winTable[userValue][computerValue] == "W")//if won
		{
		game.response.value = "Congratulations You Won! \\(‾▿‾\\)";
		win++;//increasing the win count(for the scoreboard)
		}

		if(winTable[userValue][computerValue] == "L")//if won
		{
		game.response.value = "Sorry You Lost! (╯_╰)";
		loss++;//increasing the loss count(for the scoreboard)
		}

		if(winTable[userValue][computerValue] == "T")//if tied
		{
		game.response.value = "It's a tie! -_-";
		tie++;//increasing the tie count(for the scoreboard)
		}
		//formatting the message inside the textarea
		game.score.value = "Won Tied Lost\n"+win+"  "+tie+"  "+loss;
		document.getElementById("submit").disabled = false;
	}
	/*This function returns the value returned by set timeout function and takes miliseconds as arguement*/
	function sleep(ms) 
	{
  	return new Promise(resolve => setTimeout(resolve, ms));//the arguement passed on sleep() function gets passed to the setTimeout function and returns the value returned by the promise function, that pauses the program. 
	}
	