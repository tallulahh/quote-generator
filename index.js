//Array of all quotes
var quoteBank = [
  {
    quote:"You can do anything, but not everything.",
    name: "David Allen"
  },
  {
    quote:"You must be the change you wish to see in the world.",
    name: "Gandhi"
  },
  {
    quote:"It is during our darkest moments that we must focus to see the light.",
    name: "Aristotle"
  },
    {
    quote:"I have no special talent. I am only passionately curious.",
    name: "Albert Einstein"
  },
  {
    quote:"All that we are is the result of what we have thought.",
    name: "Buddha"
  },
  {
    quote:"Insanity: doing the same thing over and over again and expecting different results.",
    name: "Albert Einstein"
  },
  {
    quote:"The greatest wealth is to live content with little.",
    name: "Plato"
  },
  {
    quote:"The future belongs to those who prepare for it today.",
    name: "Malcolm X"
  },
  {
    quote:"Don’t count the days, make the days count.",
    name: "Muhammad Ali"
  },
  {
    quote:"Keep calm and carry on.",
    name: "Winston Churchill"
  }
];

//Global Variables
var button = document.querySelector("button");
var quote = document.querySelector(".quote");
var source = document.querySelector(".source");

//Button Event Listener
button.addEventListener("click", function(){
  randomIndex();
});

//Generate random index number to select quote from array
function randomIndex(){
  var randomNum = Math.floor(Math.random() * quoteBank.length);
  displayQuote(randomNum);
};

//Function takes randomly generated index number and displays the quote
function displayQuote(index){
  quote.innerHTML = quoteBank[index].quote;
  quote.style.opacity = "1";
  source.innerHTML = "- " + quoteBank[index].name;
}
