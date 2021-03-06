// adder(base) takes the sum of the arguments passed to it if they are numbers. Returns NaN otherwise.
function adder(base) {
  base = Number(base);
  for (var i = 1; i < arguments.length; i++) {
    base += Number(arguments[i]);
  }
  return base;
}
// range(x,y,step) gives an array of the range of x and y, with an optional step argument
// Detects if start > end and lists appropriately 
function range(start, end, step){
  start = Number(start);
  end = Number(end);
  if (step == undefined) {step = 1;}
  step = Math.abs(step);
  var result = [];
  if (step == 0){
    return start;
  }
  else if (start > end){
    for (var i = start; i >= end; i -= step){
      result.push (i);
    }
    return result;
    } else {
      for (var i = start; i <= end; i += step){
        result.push (i);
      }
  return result;
  };
};

         
// rangeSum(start,end) gives the sum of the range from start to end.          
function rangeSum(start,end,step){
  var result = range(start, end, step);
  return result.reduce(function(a,b){
    return a + b;   
  });
};

