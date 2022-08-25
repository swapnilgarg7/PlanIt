//jshint esversion:6

exports.getQuote = function() {
    
    fetch('https://api.quotable.io/random')
        .then(response => response.json())
        .then(data => {
            const quote = data.content;
        });
  
    return quote
  
};
  
