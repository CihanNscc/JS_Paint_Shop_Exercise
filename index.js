function paintShop() {
  let canPerArea = parseInt(document.getElementById("cansOfPaint").value);
  let roomLength = parseInt(document.getElementById("roomLength").value);
  let roomWidth = parseInt(document.getElementById("roomWidth").value);
  let roomHeight = parseInt(document.getElementById("roomHeight").value);

  let areaOutput = (roomLength * roomHeight * 2) + (roomWidth * roomHeight * 2);
  let paintOutput = Math.ceil(areaOutput / canPerArea);

  document.getElementById("areaOutput").innerHTML = areaOutput;
  document.getElementById("paintOutput").innerHTML = paintOutput;
}
