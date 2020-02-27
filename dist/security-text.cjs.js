'use strict';

function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest();
}

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

function _iterableToArrayLimit(arr, i) {
  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;

  try {
    for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance");
}

function securityText(str, rule) {
  var parts = rule.split('|');

  for (var i = 0, len = parts.length; i < len; i++) {
    var part = parts[i];

    var _part$split = part.split(':'),
        _part$split2 = _slicedToArray(_part$split, 2),
        key = _part$split2[0],
        value = _part$split2[1];

    var reverse = key[0] === '!';
    var pureKey = key[0] === '!' ? key.substr(1) : key;
    var strlen = str.length;

    switch (pureKey) {
      // 从head开始计算
      case 'head':
        var hpos = Number(value);
        str = !reverse ? replace(str, 0, hpos) : replace(str, hpos, strlen);
        break;
      // 从tail开始计算

      case 'tail':
        var tpos = Number(value);
        str = !reverse ? replace(str, strlen - tpos, strlen) : replace(str, 0, strlen - tpos);
        break;

      case 'range':
        var values = value.split(',');
        var from = Number(values[0]);
        var to = Number(values[1]);
        str = replace(str, from, to);
    }
  }

  return str;
}

function repeat(str, count) {
  var result = '';

  for (var i = 0; i < count; i++) {
    result += str;
  }

  return result;
}

function replace(str, from, to, content) {
  content = content || repeat('*', to - from);
  return str.substr(0, from) + content + str.substring(to);
}

module.exports = securityText;
