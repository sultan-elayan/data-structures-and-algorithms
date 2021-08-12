let array = [1,2,3,4,5];
let array2 = [1,2,3,4,5,6];

const arrayInsertShift=(arr,value)=>{
    let newArray=[];

    if (arr.length %2==0) {
        let middle = arr.length/2;

        for (let i = 0; i < arr.length; i++) {
            if (middle===i){
                newArray.push(value);
            
            }
            newArray.push(arr[i]);
            
        }
    }else{
        let middle = Math.ceil(arr.length/2);
        for (let i = 0; i < arr.length; i++) {
            if(middle==i){
                newArray.push(value);

            }
            newArray.push(arr[i]);
            
        }
    }
return newArray ;
}

console.log(arrayInsertShift(array,0));
console.log(arrayInsertShift(array2,0));