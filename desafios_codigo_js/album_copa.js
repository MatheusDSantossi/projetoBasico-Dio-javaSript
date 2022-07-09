const numTotal = 3
const numFigCompradas = 3
const setFig = new Set()
// const arr = [5, 8, 3]
const arr = [2, 1, 3, 3]

for(let i = 0; i <= numTotal; i++){
  const fig = arr[i]
  console.log(fig);
  console.log(setFig.has(fig));
  if(!setFig.has(fig) && fig) {
    setFig.add(fig)
  }
}

console.log(numTotal - setFig.size)
// console.log(setFig.size)
