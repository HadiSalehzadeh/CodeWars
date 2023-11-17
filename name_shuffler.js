// Write a function that returns a string in which firstname is swapped with last name.


const nameShuffler = (str) => {
  const [firstName, lastName] = str.split(" ")
  return `${lastName} ${firstName}`
}


console.log(nameShuffler('john McClane'))
console.log(nameShuffler('Mary jeggins'))
console.log(nameShuffler('tom jerry'))