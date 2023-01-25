// ITERATION 1
function updateSubtotal(product) {
  const price = product.querySelector('.price span').innerHTML;
  console.log(price)

  const quantity = product.querySelector('.quantity input').value;
  console.log(quantity)

  let valor = price * quantity

  let subtotal= product.querySelector('.subtotal span');
  console.log(subtotal)

 subtotal.innerHTML = valor
 return valor;
   
 
  }


function calculateAll() {
  /*// code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  const singleProduct = document.querySelector('product');
  updateSubtotal(singleProduct); */
  // end of test



  // ITERATION 2
  const allClasses = document.getElementsByClassName("product");
  let finalPrice = 0
for (let i = 0; i < allClasses.length; i++ ){

finalPrice += updateSubtotal(allClasses[i]) }


  // ITERATION 3

let calculateTotal = document.querySelector("#total-value span");
calculateTotal.innerHTML = finalPrice
}









// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  //... your code goes here
}

// ITERATION 5

function createProduct() {
  //... your code goes here
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  //... your code goes here
});
