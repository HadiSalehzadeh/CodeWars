/* 
Write a function that calculates the original product price, without VAT.

Example
If a product price is 200.00 and VAT is 15%, then the final product price (with VAT) is: 200.00 + 15% = 230.00

Thus, if your function receives 230.00 as input, it should return 200.00

Notes:

VAT is always 15% for the purposes of this Kata.
Round the result to 2 decimal places.
If null value given then return -1
*/

function calculateOriginalPrice(priceWithVat) {
    if (priceWithVat === null) {
      return -1;
    }else{
      const vatPercentage = 15;
      const priceWithoutVat = priceWithVat / (1 + (vatPercentage / 100));
      return Math.round(priceWithoutVat * 100) / 100;
    }
    
    
}
  