// https://school.programmers.co.kr/learn/courses/30/lessons/181943
function solution(my_string, overwrite_string, s) {
  my_string = my_string.split('')
  overwrite_string = overwrite_string.split('')
  for (let i = s, j = 0; i < s + overwrite_string.length; i++, j++) {
    my_string[i] = overwrite_string[j]
  }
  return my_string.join('')
}
