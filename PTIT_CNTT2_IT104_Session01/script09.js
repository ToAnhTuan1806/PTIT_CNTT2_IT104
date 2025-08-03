function mergeAndSort(arr1, arr2){
    return [...arr1, ...arr2].sort((a, b)=> a-b);
}

console.log(mergeAndSort([1,2,3,5,9], [4,6,7,8]));
