
////Transpose of a matrix


function getPrimaryDiagonals(matrix) {
  const diagonals = [];
  const n = matrix.length;
  const m = matrix[0].length;

  // Primary diagonals starting from the first row
  for (let col = 0; col < m; col++) {
      const diagonal = [];
      for (let i = 0; i < Math.min(n, m - col); i++) {
          diagonal.push(matrix[i][col + i]);
      }
      diagonals.push(diagonal);
  }

  // Primary diagonals starting from the first column (excluding the first element of the first diagonal)
  for (let row = 1; row < n; row++) {
      const diagonal = [];
      for (let i = 0; i < Math.min(n - row, m); i++) {
          diagonal.push(matrix[row + i][i]);
      }
      diagonals.push(diagonal);
  }

  return diagonals;
}

function getSecondaryDiagonals(matrix) {
  const diagonals = [];
  const n = matrix.length;
  const m = matrix[0].length;

  // Secondary diagonals starting from the first row
  for (let col = m - 1; col >= 0; col--) {
      const diagonal = [];
      for (let i = 0; i < Math.min(n, col + 1); i++) {
          diagonal.push(matrix[i][col - i]);
      }
      diagonals.push(diagonal);
  }

  // Secondary diagonals starting from the last column (excluding the first element of the first diagonal)
  for (let row = 1; row < n; row++) {
      const diagonal = [];
      for (let i = 0; i < Math.min(n - row, m); i++) {
          diagonal.push(matrix[row + i][m - 1 - i]);
      }
      diagonals.push(diagonal);
  }

  return diagonals;
}

const wordSearch = (letters, word) => { 
  const horizontalJoin = letters.map(ls => ls.join(''))
  let backwardJoin= horizontalJoin.map(s => s.split('').reverse().join(''));
  let diagonal1=getPrimaryDiagonals(letters);
  let diagonal2=getSecondaryDiagonals(letters);
  diagonal1=diagonal1.map(ls => ls.join(''));
  diagonal2=diagonal2.map(ls => ls.join(''));
  console.log(diagonal1) ;
  console.log(diagonal2)
    for (l of horizontalJoin) {
        
            if (l.includes(word)) {
              
                return true;
        }      
    } 
    for (l of backwardJoin) {
      
        if (l.includes(word)) {
          
            return true;
    }
            
  }
  for (l of diagonal1) {
      
    if (l.includes(word)) {
      
        return true;
}
        
}
for (l of diagonal2) {
      
  if (l.includes(word)) {
    
      return true;
}
      
}


  
      return false;
    
  };
    
    
module.exports=wordSearch;
    