// My 5th kata, and 1st in a planned series of rock climbing themed katas.

// In rock climbing (bouldering specifically), the V/Vermin (USA) climbing grades start at 'VB' (the easiest grade), and then go 'V0', 'V0+', 'V1', 'V2', 'V3', 'V4', 'V5' etc. up to 'V17' (the hardest grade). You will be given a list (lst) of climbing grades and you have to write a function (sort_grades) to return a list of the grades sorted easiest to hardest.

// If the input is an empty list, return an empty list; otherwise the input will always be a valid list of one or more grades.

// Please do vote, rank, and provide any feedback on the kata.

function sortGrades(lst) {
  return lst.sort((a, b) => {
    if (a === 'VB') return -1;
    if (b === 'VB') return 1;
    
    const gradeA = parseInt(a.substring(1));
    const gradeB = parseInt(b.substring(1));
    
    if (gradeA < gradeB) {
      return -1;
    } else if (gradeA > gradeB) {
      return 1;
    } else {
      return a.localeCompare(b);
    }
  });
}