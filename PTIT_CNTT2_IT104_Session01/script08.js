function insertArrAtPos(arr1, arr2, pos){
    if(pos<0 || pos>arr1.length){
        console.log("Vi tri khog hop le");
        return;
    }

    const result=[...arr1.slice(0, pos), ...arr2, ...arr1.slice(pos)];
    console.log(result);
    return result;
}

insertArrAtPos([1, 2, 3, 7, 8], [4, 5, 6], 3);

insertArrAtPos(['a', 'b', 'e', 'f'], ['c', 'd'], 2);

insertArrAtPos([1, 2, 3], [4, 5], 10);