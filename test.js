// https://school.programmers.co.kr/learn/courses/30/lessons/181836
function solution(picture, k) {
  let picture2 = []
  let count = 0
  for (let i = 0; i < picture.length * k; i++) picture2.push('') // 배열에 필요한 인덱스까지 빈배열 할당
  picture.forEach((pic, index) => {
    count++
    for (i = 0; i < pic.length; i++)
      for (let j = 0; j < k; j++)
        picture2[index * k] = picture2[index * k].concat(pic[i]) // 행*k
    while (count < (index + 1) * k) picture2[count++] = picture2[index * k] // 열*k
  })
  return picture2
}
