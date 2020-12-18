const quotetext = document.getElementById('quote');
const quoteauthor = document.getElementById('author');
const newQuoteBtn = document.getElementById('newquote');
const apiurl = "https://type.fit/api/quotes";
let apiquotes = [];
//get quote from api
async function getQuotes(){
	try{
		const response = await fetch(apiurl);
		apiquotes = await response.json();
		console.log(apiquotes);
		newQuote();
	}
	catch(e)
	{

	}
}
function newQuote(){
	try{
		//get random quote in api array
		singlePiece = apiquotes[Math.floor(Math.random()*apiquotes.length)];
		console.log(singlePiece);
		quotetext.innerText= singlePiece.text;
		if(!singlePiece.author){
			quoteauthor.innerText= "Unknown";
		}
		else{
			quoteauthor.innerText= singlePiece.author;
		}
	}
	catch(e){

	}
}
newQuoteBtn.addEventListener('click',newQuote);
getQuotes();
