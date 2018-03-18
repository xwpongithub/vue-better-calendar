// 对数字字符串进行补0操作
export function pad(num, n = 2, str = '0') {
  let len = num.toString().length
  while (len < n) {
    num = str + num
    len++
  }
  return num
}
