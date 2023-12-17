// Create an identity matrix of the specified size( >= 0).

// Some examples:

// (1)  =>  [[1]]

// (2) => [ [1,0],
//          [0,1] ]

//        [ [1,0,0,0,0],
//          [0,1,0,0,0],
// (5) =>   [0,0,1,0,0],
//          [0,0,0,1,0],
//          [0,0,0,0,1] ]

function getMatrix(number) {
  let matrix = [];
  for (let i = 0; i < number; i++) {
    let row = [];
    for (let j = 0; j < number; j++) {
      if (i === j) {
        row.push(1);
      } else {
        row.push(0);
      }
    }
    matrix.push(row);
  }
  return matrix;
}
