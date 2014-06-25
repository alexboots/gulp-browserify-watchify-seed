//accepts "#, #, add" OR "#, #, minus"
module.exports = function(value1, value2, whatDoYouWantToDo) {

  var addNumbers   = require('./mathModules/addNumbers'),
      minusNumbers = require('./mathModules/minusNumbers');

      if(whatDoYouWantToDo === "add") {
        return addNumbers(value1, value2);  
      } else if(whatDoYouWantToDo === "minus") {
        return minusNumbers(value1, value2);  
      } else {
        console.log('passing incorrect want');
      }
      
}