
var i =0 ;
var quote = document.getElementById('quote');
var num = document.getElementById('num');
  
  
function quoteGenerator(){

    fetch("https://type.fit/api/quotes")
    .then(function(response) {
      return response.json();
    })
    .then(function(data) {
      console.log(data[i].text);
      var randomNumber = Math.floor(Math.random() * data.length);
      quote.innerHTML = "''" +  data[randomNumber].text + "''";
      num.innerHTML = "advice #" + randomNumber;
    });

}
