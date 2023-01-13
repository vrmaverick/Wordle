var tries = 0;
// const genrate = (data,tries) =>{
// 	if(tries==0){
// 	// let data = ["Seize","Serve",	"Sharp",	"Shelf",	"Shine",	"Slice",	"Solid",	"Space",	"Stand",	"Stone"]
// 	var n = Math.floor(Math.random()*10)+1
// 	var wor = data[n]
// 	console.log(wor);
// 	var word = Array.from(wor);
// 	return word;
// 	}
// 	else{
// 		return word;
// 	}
// }
function myFunction() {
	let data = ["seize","serve",	"sharp",	"shelf",	"shine",	"slice",	"solid",	"space",	"stand",	"stone"]
	var col = ["a","b","c","d","e"]
	var row = ["a","b","c","d","e"]
	var count=0;
	if(tries==0){
	n = Math.floor(Math.random()*10)+1;
	wor = data[n]
	word = Array.from(wor);//without declaring it becomes window property
	console.log(wor);//without declaring its working
	}
	var x = document.getElementById("myText").value;
	// console.log(typeof x);
	// document.getElementById("demo").innerHTML = x;
	// console.log(col[tries]);//abcd
	var guess = Array.from(x);
	for(let z=0; z<=4; z++){
		document.getElementsByClassName("c"+ row[tries])[z].innerHTML = guess[z];
		}
		if(tries<=5) 	
		{	
			for(let i in guess)
			{
			console.log(i);
				for(let j in word)
				{
				console.log("j=" + j);
					if(guess[i]==word[j])
					{
						if(i==j)
						{
						let a = document.getElementById(row[tries]+col[i])
						console.log("a="+ a)
						a.style.backgroundColor="green"
						}
					else{
						let b = document.getElementById(row[tries]+col[i])
						b.style.backgroundColor="yellow"
						console.log
						}
					}
				}
			}	
			tries++;
			 document.getElementById('myText').value = "";
			 	for(let f=0;f<=4;f++)
				{
					if(word[f]==guess[f])
					{
						count++;
					}
			 	}
				setTimeout(function(){					
					if(count==5)
					{
						alert("YOU WON THE GAME!!!")
					}
				},2000);
			if(tries==5)
			{
			setTimeout(function(){
				alert("GAME OVER YOU LOST");
				document.getElementById("demo").innerHTML = data[n];
			},2000);
			}
		
		}
	}