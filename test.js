// https://school.programmers.co.kr/learn/courses/30/lessons/181830
function solution(array) {
  let row = array.length
  let col = array[0].length
  let i, j
  if (row < col) {
    for (i = row; i < col; i++) {
      array.push([0])
      for (j = 0; j < col - 1; j++) array[i].push(0)
    }
  } else if (row > col)
    for (i = 0; i < row; i++) for (j = col; j < row; j++) array[i].push(0)

  return array
}
console.log(
  solution([
    [57, 192, 534, 2],
    [9, 345, 192, 999],
  ]),
)
