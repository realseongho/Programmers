// https://school.programmers.co.kr/learn/courses/30/lessons/120840
function solution(balls, share) {
  let i,
    top = 1,
    bot = 1
  if (balls - share < share) {
    for (i = balls; i > share; i--) {
      top *= i
    }
    for (i = balls - share; i > 0; i--) {
      bot *= i
    }
  } else {
    for (i = balls; i > balls - share; i--) {
      top *= i
    }
    for (i = share; i > 0; i--) {
      bot *= i
    }
  }
  return top / bot
}
