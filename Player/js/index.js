console.log(lrc)

/**
 * 将一个时间字符串转换为数字
 * @param {*} timeStr 时间字符串
 * @returns 时间
 */
function parseTime(timeStr) {
  var parts = timeStr.split(':');
  return +parts[0] * 60 + +parts[1];
}

/**
 * 解析歌词字符串
 * 得到每个歌词对象的数组
 * {time:xx,word:xx}
 */
function parseLrc() {
  var lines = lrc.split('\n');
  var result = [];
  for (let i = 0; i < lines.length; i++) {
    const str = lines[i];
    var part = str.split(']');
    var timeStr = part[0].substring(1);
    var obj = { time: parseTime(timeStr), word: part[1] };
    result.push(obj);
  }
  console.log(result);
}
var LrcData = parseLrc();
 /**
  * 计算出当前LrcData中的应该
  */
function findIndex() {
  
}