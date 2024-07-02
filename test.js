// https://school.programmers.co.kr/learn/courses/30/lessons/120860
function solution(dots) {
  for (let i = 1; i < 4; i++)
    if (dots[i][0] != dots[0][0] && dots[i][1] != dots[0][1])
      return Math.abs((dots[0][0] - dots[i][0]) * (dots[0][1] - dots[i][1]))
}
