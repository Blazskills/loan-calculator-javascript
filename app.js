//Listen for Submit
document.querySelector('#loan-form').addEventListener('submit', function (e) {

  //Hide results
  document.querySelector('#results').style.display = 'none';

  //Show LOader
  document.querySelector('#loading').style.display = 'block';
  setTimeout(calculateREsults, 1000);

  e.preventDefault()
});

//Calculate Result
function calculateREsults() {
  console.log('calculating...');
  //UI Vars
  const amount = document.querySelector('#amount');
  const interest = document.querySelector('#interest');
  const years = document.querySelector('#years');
  const monthlyPayment = document.querySelector('#monthly-payment');
  const totalPayment = document.querySelector('#total-payment');
  const totalInterest = document.querySelector('#total-interest');


  const principal = parseFloat(amount.value)
  const calculatedInterest = parseFloat(interest.value) / 100 / 12;
  const calculatedPayments = parseFloat(years.value) * 12

  //Compute Monthly Payment 

  const x = Math.pow(1 + calculatedInterest, calculatedPayments);
  const monthly = (principal * x * calculatedInterest) / (x - 1);

  if (isFinite(monthly)) {
    monthlyPayment.value = monthly.toFixed(2);
    totalPayment.value = (monthly * calculatedPayments).toFixed(2);
    totalInterest.value = ((monthly * calculatedPayments) - principal).toFixed(2);
    //Show result
    document.querySelector('#results').style.display = 'block';

    //Hide Loader
    document.querySelector('#loading').style.display = 'none';
  } else {
    showError('Please Check your Numbers')

  }
}


//Show Error

function showError(error) {
  //Hide result
  document.querySelector('#results').style.display = 'none';

  //Hide Loader
  document.querySelector('#loading').style.display = 'none';
  // create Div
  const errorDiv = document.createElement('div');

  //Get elements
  const card = document.querySelector('.card')
  const heading = document.querySelector('.heading');
  //Add Class
  errorDiv.className = 'alert alert-danger';

  //Create Text node and append to div

  errorDiv.appendChild(document.createTextNode(error));

  //Insert error above heading
  card.insertBefore(errorDiv, heading);

  //Clear error after 3 seconds
  setTimeout(clearError, 2000);


}

//CLear error
function clearError() {
  document.querySelector('.alert').remove();
}















































// //Listen for Submit
// document.querySelector('#loan-form').addEventListener('submit', calculateREsults);

// //Calculate Result
// function calculateREsults(e) {
//   console.log('calculating...');
//   //UI Vars
//   const amount = document.querySelector('#amount');
//   const interest = document.querySelector('#interest');
//   const years = document.querySelector('#years');
//   const monthlyPayment = document.querySelector('#monthly-payment');
//   const totalPayment = document.querySelector('#total-payment');
//   const totalInterest = document.querySelector('#total-interest');


//   const principal = parseFloat(amount.value)
//   const calculatedInterest = parseFloat(interest.value) / 100 / 12;
//   const calculatedPayments = parseFloat(years.value) * 12

//   //Compute Monthly Payment 

//   const x = Math.pow(1 + calculatedInterest, calculatedPayments);
//   const monthly = (principal * x * calculatedInterest) / (x - 1);

//   if (isFinite(monthly)) {
//     monthlyPayment.value = monthly.toFixed(2);
//     totalPayment.value = (monthly * calculatedPayments).toFixed(2);
//     totalInterest.value = ((monthly * calculatedPayments) - principal).toFixed(2);
//   } else {
//     showError('Please Check your Numbers')

//   }
//   e.preventDefault()
// }


// //Show Error

// function showError(error) {
//   // create Div
//   const errorDiv = document.createElement('div');

//   //Get elements
//   const card = document.querySelector('.card')
//   const heading = document.querySelector('.heading');
//   //Add Class
//   errorDiv.className = 'alert alert-danger';

//   //Create Text node and append to div

//   errorDiv.appendChild(document.createTextNode(error));

//   //Insert error above heading
//   card.insertBefore(errorDiv, heading);

//   //Clear error after 3 seconds
//   setTimeout(clearError, 3000);


// }

// //CLear error
// function clearError(){
//   document.querySelector('.alert').remove();
// }