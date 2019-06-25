var a=1;
var b=[];
var c=0;
for(a;a<=10000000;a++){
  var count=1;
  c=a;
  while(c!=1){
    if(c%2==0){
      c=c/2;
      count++;
    }
    else{
      c=(c*3)+1;
      count++;
    }
  }
  b.push(count);
  
}
b=b.sort(function(a, b){return b-a});
console.log(b[0]);