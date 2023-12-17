// Given value of sine,implement function which will return sine,cosine,tangent,and cotangent in list. order must be same as in the description and every number must be rounded to 2 decimal places.If tangent or cotangent can not be calculated just don't contain them in result list.

function sctc(sin){
  var arr=[];
  var a=Math.asin(sin);
  arr.push(Math.round(Math.sin(a)*100)/100);
  arr.push(Math.round(Math.cos(a)*100)/100);
  if (arr[1]!=0)
    arr.push(Math.round(Math.tan(a)*100)/100);
  if (arr[0]!=0)
    arr.push(Math.round(1/Math.tan(a)*100)/100);
  return arr
}
