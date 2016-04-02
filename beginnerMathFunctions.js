// sum(x,y) takes the sum of two numbers
var sum = function(x,y){
	return x + y;
};
// range(x,y,step) gives an array of the range of x and y, with an optional step argument
var range = function(x, y, step){
	if (step == null) step = 1;
  var arr = [];
  
  if (step > 0) {
    for (var i = x; i <= y; i += step)
      arr.push(i);
  } else {
    	for (var i = x; i >= y; i += step)
      	arr.push(i);
  }
 	return arr;
};
// rangeSum(start,end) gives the sum of the range from start to end.          
var rangeSum = function(start,end){
  var arr = [];
  for (var i = start; i <= end; i++) 
    arr.push(i);
  return arr.reduce(function(a,b){
    return a + b;
  });
};




