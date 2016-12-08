function sum(n){
    var sum=0
    for(var i=0;i<n.length;i++){
    sum=sum+n[i]
}
    return sum
}


function mean(n){
   return sum(n)/n.length
}

console.log("mean([1,2,3,4,5])="+mean([1,2,3,4,5]))


function cd(n){
    var m=mean(n),result=0
    for(var i=0;i<n.length;i++){
        var differ=n[i]-m
        result=result+differ*differ
    }
    return Math.sqrt(result/n.length)
}


console.log("cd([1,2,3,4,5])="+cd([1,2,3,4,5]))