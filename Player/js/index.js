// console.log(lrc)

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
  return result;
}
var LrcData = parseLrc();
var doms = {
  audio: document.querySelector('audio'),
  ul: document.querySelector('ul'),
  container: document.querySelector('.container')
}

/**
 * 计算出当前LrcData中的应该高亮的歌词下标
 * 如果没有任何一句歌词需要显示则得到-1
 */
function findIndex() {
  var curTime = doms.audio.currentTime;
  for (var i = 0; i < LrcData.length; i++) {
    if (curTime < LrcData[i].time) {
      return i - 1;
    }
  }
  // 遍历之后都没找到说明是最后一句歌词
  return LrcData.length - 1;
}
/**
 * 创建歌词 li
 */
function createDom() {
  var flag = document.createDocumentFragment(); //创建fragment对象,文档片段，脱离dom数
  for (let i = 0; i < LrcData.length; i++) {
    var li = document.createElement('li');
    li.textContent = LrcData[i].word; // 改动dom树
    flag.appendChild(li);
  }
  doms.ul.appendChild(flag);
}
createDom();

var containerHeight = doms.container.clientHeight;
// 每个li的高度
var linHeight = doms.ul.children[0].clientHeight;
var maxHeight = doms.ul.clientHeight - containerHeight;
console.log(containerHeight, linHeight, maxHeight)
/**
 * 设置ul的偏移量
 */
function setOffset() {
  var index = findIndex();
  var offset = linHeight * index + linHeight / 2 - containerHeight / 2;
  if (offset < 0) {
    offset = 0;
  }
  if (offset > maxHeight) {
    offset = maxHeight
  }
  doms.ul.style.transform = `translateY(-${offset}px)`;
  var li = doms.ul.querySelector('.active')
  if (li) {
    li.classList.remove('active');
  }
  li = doms.ul.children[index];
  if (li) {
    li.classList.add('active');
  }
  // console.log(offset)
}

doms.audio.addEventListener('timeupdate', setOffset);