// https://school.programmers.co.kr/learn/courses/30/lessons/120869
function solution(spell, dic) {
  let answer = 2
  dic.forEach((data) => {
    if (answer == 1) return answer
    let sum = 0
    spell.forEach((ch) => {
      if (data.includes(ch)) sum++
      if (sum >= spell.length) {
        answer = 1
        return
      }
    })
  })
  return answer
}
console.log(
  solution(['s', 'o', 'm', 'd'], ['moos', 'dzx', 'smm', 'sunmmo', 'som']),
)
