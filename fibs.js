function fibs(n){
    res=[]
    res[0]=0
    res[1]=1
    for(let i=0;i<n;i++){
      
   a=res[i]
   b=res[i+1]
   res[i+2]=a+b
    }
    console.log(res)
}

function fibsrec(n){
    if (n==0||n==1){
     return n}
     else{return (fibsrec(n-2)+fibsrec(n-1))
    }
   
   
}

// console.log(sum)
 console.log(fibsrec(5))

 for(i=0;i<5;i++)

 
 {
    console.log(fibsrec(i));
 }
 