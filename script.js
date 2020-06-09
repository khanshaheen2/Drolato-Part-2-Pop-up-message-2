
//****************//
// This function checks whether the name is empty
function isValidName(name) {
  // Return false if the name field is empty
  if (name === '') {
    return false;
  }
  return true;
}
//****************//

//****************//
// This runs when the checkout button is clicked
$('.checkout-button').click(function() {
  // Check whether the user wants a cone or a cup
  const getIcecreamType = $('.icecream-type').val();
  
  // Get the user's name at checkout
  const getName = $('.name-for-checkout').val();

  // Check if the name input is empty
  if (!isValidName(getName)) {
    alert('Please enter a name for the order!');
    return;
  }

  

  let messageText = 'what a great choice, ' + getName + '. A ' +getIcecreamType + 'is a greate option ';

  // Alert with final amount
  alert(messageText);
});
//****************//