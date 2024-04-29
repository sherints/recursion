const a=[4,2,13,0,43]
function splitarray(a)
{

    if(a.length===1)
        return a
   let mid=a.length/2
    
   let left=a.slice(0,mid)
        // console.log(left);
   let right=a.slice(mid,a.length)

    return merge(splitarray(left),splitarray(right))
 

}
function merge(left,right)
{
const output=[]
let i=0
let j=0
let k=0
  

    while(i<left.length && j<right.length)
    {
        if(right[j]>left[i])
        {
            output[k]=left[i];
            i++;
            k++;
            // console.log(output);
            
            
        }
            
        else
        {
            output[k]=right[j];
            j++;
            k++;
            
            console.log('-------');
          

        }

    }
  

    while(i<left.length)
    {
        output[k]=left[i]
            i++
            k++
    }

    while(j<right.length)
    {
        output[k]=right[j]
            j++
            k++
    }

    
  
return output;

}



console.log('output is');
console.log(splitarray(a));


