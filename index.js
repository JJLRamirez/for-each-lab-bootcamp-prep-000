function iterativeLog(arr) {
  arr.forEach((element,index,arr) => {
    console.log(`${index}: ${element}`);
  })
}

function iterate(callback) {
  var games=["Hearthstone","Overwatch","Diablo"];
  games.forEach(callback);
  return games;
}

function doToArray(arr2,callback2) {
  arr2.forEach(callback2);
}
