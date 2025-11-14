
 function upperbound(arr,target){
    let high=arr.length-1;
    let low=0;
    let ans=arr.length;
    while(low<=high){
        let mid=Math.floor((low+high)/2);
        if(arr[mid]>target){
            ans=mid;
            high=mid-1;
        }
        else if(arr[mid]<target){
            low=mid+1;
        }
    }
    return ans;
 }

 console.log(upperbound([1,2,3,4,5,6,7,7,8,9],8));