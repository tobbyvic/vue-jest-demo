/**
 * Created by jiachenpan on 16/11/18.
 */

/**
 * @param time datetime
 * @param cFormat
 * @returns {*} yyyy-mm-dd hh:min:ss
 */
export function parseTime(time, cFormat) {
  if (arguments.length === 0) {
    return null;
  }
  const format = cFormat || '{y}-{m}-{d} {h}:{i}:{s}';
  let date;
  if (typeof time === 'object') {
    date = time;
  } else {
    if (('' + time).length === 10) time = parseInt(time) * 1000;
    date = new Date(time);
  }
  const formatObj = {
    y: date.getFullYear(),
    m: date.getMonth() + 1,
    d: date.getDate(),
    h: date.getHours(),
    i: date.getMinutes(),
    s: date.getSeconds(),
    a: date.getDay()
  };
  return format.replace(/{(y|m|d|h|i|s|a)+}/g, (result, key) => {
    let value = formatObj[key];
    if (key === 'a') {
      return ['一', '二', '三', '四', '五', '六', '日'][value - 1];
    }
    if (result.length > 0 && value < 10) {
      value = '0' + value;
    }
    return value || 0;
  });
}

/**
 * @param time datetime
 * @param option
 * @returns {*} 距离现在的时间差 或 time 的日期和时间
 */
export function formatTime(time, option) {
  time = +time * 1000;
  const d = new Date(time);
  const now = Date.now();

  const diff = (now - d) / 1000;

  if (diff < 30) {
    return '刚刚';
  } else if (diff < 3600) {
    // less 1 hour
    return Math.ceil(diff / 60) + '分钟前';
  } else if (diff < 3600 * 24) {
    return Math.ceil(diff / 3600) + '小时前';
  } else if (diff < 3600 * 24 * 2) {
    return '1天前';
  }
  if (option) {
    return parseTime(time, option);
  } else {
    return (
      d.getMonth() +
      1 +
      '月' +
      d.getDate() +
      '日' +
      d.getHours() +
      '时' +
      d.getMinutes() +
      '分'
    );
  }
}
/**
 * @param time datetime
 * @param cFormat
 * @returns {*} 获取当前日期
 */
export function currentTime(format) {
  let date = new Date();
  const timeFormat = format || '{y}-{m}-{d}';
  const formatObj = {
    y: date.getFullYear(),
    m: date.getMonth() + 1,
    d: date.getDate(),
    h: date.getHours(),
    i: date.getMinutes(),
    s: date.getSeconds(),
    a: date.getDay()
  };
  return timeFormat.replace(/{(y|m|d|h|i|s|a)+}/g, (res, key) => {
    let value = formatObj[key];
    if (res.length > 0 && value < 10) {
      value = '0' + value;
    }
    return value || 0;
  });
}

/**
 * @param formate number
 * @param cFormat
 * @returns {*} 格式化大于1000的数字
 */
export function formatNumber(num) {
  let temp = [];
  let result = '';
  if (num > 1000) {
    // 大于1000的数才进行格式化
    let origin = num.toString().split('').reverse();
    origin.forEach((str, index) => {
      if (index !== 0 && index % 3 === 0) {
        temp.push(',');
      }
      temp.push(str);
    });
    result = temp.reverse().join('');
  } else {
    result = num + '';
  }
  return result;
}
