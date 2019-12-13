// Defint iterativeLog.

function iterativeLog(acceptedArray) {
  acceptedArray.forEach((element, index, acceptedArray) => { // Pass to .forEach the passed array, and index and the array
    console.log(`${index}: ${element}`); // Logs the element and its index.
  })
}


function iterate (callBack) { // Define iterate function, that accepts the callBack function.
  var iterateArray = ["Michael", "Vogel"]; // Assign the array.
  iterateArray.forEach(element => { // Apply callBack to the elements of iterateArray.
    callBack(element);
  })
return iterateArray
}

function doToArray (acceptedArray, callBack) { // Define doToArray that accepts acceptedArray and callBack
  acceptedArray.forEach(element => {
    callBack(element);
  })
}
