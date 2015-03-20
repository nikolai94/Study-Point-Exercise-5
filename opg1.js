var a1 = [0,1,2,3,4];

function num(arr,cal1,cal2){

    var numBigger3 = [];
    var numTimes10 = [];

    for(var i =0; i < arr.length; i++)
    {
        numTimes10.push(arr[i]*10);
        if(arr[i] >= 3){
            numBigger3.push(arr[i]);
        }
    }
    cal1(numBigger3);
    cal2(numTimes10);
}


num(a1,function(res){
    console.log(res.join(","));
},function(res){
    console.log(res.join(","));
});

/*a1.forEach(function(item){ console.log(item); });
var a2 = a1.filter(function(item){return item >=3});
var a3 = a1.map(function(item){return item * 10});*/