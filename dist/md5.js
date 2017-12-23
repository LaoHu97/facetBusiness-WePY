"use strict";

/*
 * A JavaScript implementation of the RSA Data Security, Inc. MD5 Message
 * Digest Algorithm, as defined in RFC 1321.
 * Version 1.1 Copyright (C) Paul Johnston 1999 - 2002.
 * Code also contributed by Greg Holt
 * See http://pajhome.org.uk/site/legal.html for details.
 */

/*
 * Add integers, wrapping at 2^32. This uses 16-bit operations internally
 * to work around bugs in some JS interpreters.
 */
function safe_add(x, y) {
  var lsw = (x & 0xFFFF) + (y & 0xFFFF);
  var msw = (x >> 16) + (y >> 16) + (lsw >> 16);
  return msw << 16 | lsw & 0xFFFF;
}

/*
 * Bitwise rotate a 32-bit number to the left.
 */
function rol(num, cnt) {
  return num << cnt | num >>> 32 - cnt;
}

/*
 * These functions implement the four basic operations the algorithm uses.
 */
function cmn(q, a, b, x, s, t) {
  return safe_add(rol(safe_add(safe_add(a, q), safe_add(x, t)), s), b);
}
function ff(a, b, c, d, x, s, t) {
  return cmn(b & c | ~b & d, a, b, x, s, t);
}
function gg(a, b, c, d, x, s, t) {
  return cmn(b & d | c & ~d, a, b, x, s, t);
}
function hh(a, b, c, d, x, s, t) {
  return cmn(b ^ c ^ d, a, b, x, s, t);
}
function ii(a, b, c, d, x, s, t) {
  return cmn(c ^ (b | ~d), a, b, x, s, t);
}

/*
 * Calculate the MD5 of an array of little-endian words, producing an array
 * of little-endian words.
 */
function coreMD5(x) {
  var a = 1732584193;
  var b = -271733879;
  var c = -1732584194;
  var d = 271733878;

  for (var i = 0; i < x.length; i += 16) {
    var olda = a;
    var oldb = b;
    var oldc = c;
    var oldd = d;

    a = ff(a, b, c, d, x[i + 0], 7, -680876936);
    d = ff(d, a, b, c, x[i + 1], 12, -389564586);
    c = ff(c, d, a, b, x[i + 2], 17, 606105819);
    b = ff(b, c, d, a, x[i + 3], 22, -1044525330);
    a = ff(a, b, c, d, x[i + 4], 7, -176418897);
    d = ff(d, a, b, c, x[i + 5], 12, 1200080426);
    c = ff(c, d, a, b, x[i + 6], 17, -1473231341);
    b = ff(b, c, d, a, x[i + 7], 22, -45705983);
    a = ff(a, b, c, d, x[i + 8], 7, 1770035416);
    d = ff(d, a, b, c, x[i + 9], 12, -1958414417);
    c = ff(c, d, a, b, x[i + 10], 17, -42063);
    b = ff(b, c, d, a, x[i + 11], 22, -1990404162);
    a = ff(a, b, c, d, x[i + 12], 7, 1804603682);
    d = ff(d, a, b, c, x[i + 13], 12, -40341101);
    c = ff(c, d, a, b, x[i + 14], 17, -1502002290);
    b = ff(b, c, d, a, x[i + 15], 22, 1236535329);

    a = gg(a, b, c, d, x[i + 1], 5, -165796510);
    d = gg(d, a, b, c, x[i + 6], 9, -1069501632);
    c = gg(c, d, a, b, x[i + 11], 14, 643717713);
    b = gg(b, c, d, a, x[i + 0], 20, -373897302);
    a = gg(a, b, c, d, x[i + 5], 5, -701558691);
    d = gg(d, a, b, c, x[i + 10], 9, 38016083);
    c = gg(c, d, a, b, x[i + 15], 14, -660478335);
    b = gg(b, c, d, a, x[i + 4], 20, -405537848);
    a = gg(a, b, c, d, x[i + 9], 5, 568446438);
    d = gg(d, a, b, c, x[i + 14], 9, -1019803690);
    c = gg(c, d, a, b, x[i + 3], 14, -187363961);
    b = gg(b, c, d, a, x[i + 8], 20, 1163531501);
    a = gg(a, b, c, d, x[i + 13], 5, -1444681467);
    d = gg(d, a, b, c, x[i + 2], 9, -51403784);
    c = gg(c, d, a, b, x[i + 7], 14, 1735328473);
    b = gg(b, c, d, a, x[i + 12], 20, -1926607734);

    a = hh(a, b, c, d, x[i + 5], 4, -378558);
    d = hh(d, a, b, c, x[i + 8], 11, -2022574463);
    c = hh(c, d, a, b, x[i + 11], 16, 1839030562);
    b = hh(b, c, d, a, x[i + 14], 23, -35309556);
    a = hh(a, b, c, d, x[i + 1], 4, -1530992060);
    d = hh(d, a, b, c, x[i + 4], 11, 1272893353);
    c = hh(c, d, a, b, x[i + 7], 16, -155497632);
    b = hh(b, c, d, a, x[i + 10], 23, -1094730640);
    a = hh(a, b, c, d, x[i + 13], 4, 681279174);
    d = hh(d, a, b, c, x[i + 0], 11, -358537222);
    c = hh(c, d, a, b, x[i + 3], 16, -722521979);
    b = hh(b, c, d, a, x[i + 6], 23, 76029189);
    a = hh(a, b, c, d, x[i + 9], 4, -640364487);
    d = hh(d, a, b, c, x[i + 12], 11, -421815835);
    c = hh(c, d, a, b, x[i + 15], 16, 530742520);
    b = hh(b, c, d, a, x[i + 2], 23, -995338651);

    a = ii(a, b, c, d, x[i + 0], 6, -198630844);
    d = ii(d, a, b, c, x[i + 7], 10, 1126891415);
    c = ii(c, d, a, b, x[i + 14], 15, -1416354905);
    b = ii(b, c, d, a, x[i + 5], 21, -57434055);
    a = ii(a, b, c, d, x[i + 12], 6, 1700485571);
    d = ii(d, a, b, c, x[i + 3], 10, -1894986606);
    c = ii(c, d, a, b, x[i + 10], 15, -1051523);
    b = ii(b, c, d, a, x[i + 1], 21, -2054922799);
    a = ii(a, b, c, d, x[i + 8], 6, 1873313359);
    d = ii(d, a, b, c, x[i + 15], 10, -30611744);
    c = ii(c, d, a, b, x[i + 6], 15, -1560198380);
    b = ii(b, c, d, a, x[i + 13], 21, 1309151649);
    a = ii(a, b, c, d, x[i + 4], 6, -145523070);
    d = ii(d, a, b, c, x[i + 11], 10, -1120210379);
    c = ii(c, d, a, b, x[i + 2], 15, 718787259);
    b = ii(b, c, d, a, x[i + 9], 21, -343485551);

    a = safe_add(a, olda);
    b = safe_add(b, oldb);
    c = safe_add(c, oldc);
    d = safe_add(d, oldd);
  }
  return [a, b, c, d];
}

/*
 * Convert an array of little-endian words to a hex string.
 */
function binl2hex(binarray) {
  var hex_tab = "0123456789abcdef";
  var str = "";
  for (var i = 0; i < binarray.length * 4; i++) {
    str += hex_tab.charAt(binarray[i >> 2] >> i % 4 * 8 + 4 & 0xF) + hex_tab.charAt(binarray[i >> 2] >> i % 4 * 8 & 0xF);
  }
  return str;
}

/*
 * Convert an array of little-endian words to a base64 encoded string.
 */
function binl2b64(binarray) {
  var tab = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
  var str = "";
  for (var i = 0; i < binarray.length * 32; i += 6) {
    str += tab.charAt(binarray[i >> 5] << i % 32 & 0x3F | binarray[i >> 5 + 1] >> 32 - i % 32 & 0x3F);
  }
  return str;
}

/*
 * Convert an 8-bit character string to a sequence of 16-word blocks, stored
 * as an array, and append appropriate padding for MD4/5 calculation.
 * If any of the characters are >255, the high byte is silently ignored.
 */
function str2binl(str) {
  var nblk = (str.length + 8 >> 6) + 1; // number of 16-word blocks
  var blks = new Array(nblk * 16);
  for (var i = 0; i < nblk * 16; i++) {
    blks[i] = 0;
  }for (var i = 0; i < str.length; i++) {
    blks[i >> 2] |= (str.charCodeAt(i) & 0xFF) << i % 4 * 8;
  }blks[i >> 2] |= 0x80 << i % 4 * 8;
  blks[nblk * 16 - 2] = str.length * 8;
  return blks;
}

/*
 * Convert a wide-character string to a sequence of 16-word blocks, stored as
 * an array, and append appropriate padding for MD4/5 calculation.
 */
function strw2binl(str) {
  var nblk = (str.length + 4 >> 5) + 1; // number of 16-word blocks
  var blks = new Array(nblk * 16);
  for (var i = 0; i < nblk * 16; i++) {
    blks[i] = 0;
  }for (var i = 0; i < str.length; i++) {
    blks[i >> 1] |= str.charCodeAt(i) << i % 2 * 16;
  }blks[i >> 1] |= 0x80 << i % 2 * 16;
  blks[nblk * 16 - 2] = str.length * 16;
  return blks;
}

/*
 * External interface
 */
function hexMD5(str) {
  return binl2hex(coreMD5(str2binl(str)));
}
function hexMD5w(str) {
  return binl2hex(coreMD5(strw2binl(str)));
}
function b64MD5(str) {
  return binl2b64(coreMD5(str2binl(str)));
}
function b64MD5w(str) {
  return binl2b64(coreMD5(strw2binl(str)));
}
/* Backward compatibility */
function calcMD5(str) {
  return binl2hex(coreMD5(str2binl(str)));
}
module.exports = {
  hexMD5: hexMD5
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1kNS5qcyJdLCJuYW1lcyI6WyJzYWZlX2FkZCIsIngiLCJ5IiwibHN3IiwibXN3Iiwicm9sIiwibnVtIiwiY250IiwiY21uIiwicSIsImEiLCJiIiwicyIsInQiLCJmZiIsImMiLCJkIiwiZ2ciLCJoaCIsImlpIiwiY29yZU1ENSIsImkiLCJsZW5ndGgiLCJvbGRhIiwib2xkYiIsIm9sZGMiLCJvbGRkIiwiYmlubDJoZXgiLCJiaW5hcnJheSIsImhleF90YWIiLCJzdHIiLCJjaGFyQXQiLCJiaW5sMmI2NCIsInRhYiIsInN0cjJiaW5sIiwibmJsayIsImJsa3MiLCJBcnJheSIsImNoYXJDb2RlQXQiLCJzdHJ3MmJpbmwiLCJoZXhNRDUiLCJoZXhNRDV3IiwiYjY0TUQ1IiwiYjY0TUQ1dyIsImNhbGNNRDUiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiOztBQUFBOzs7Ozs7OztBQVFBOzs7O0FBSUEsU0FBU0EsUUFBVCxDQUFrQkMsQ0FBbEIsRUFBcUJDLENBQXJCLEVBQ0E7QUFDRSxNQUFJQyxNQUFNLENBQUNGLElBQUksTUFBTCxLQUFnQkMsSUFBSSxNQUFwQixDQUFWO0FBQ0EsTUFBSUUsTUFBTSxDQUFDSCxLQUFLLEVBQU4sS0FBYUMsS0FBSyxFQUFsQixLQUF5QkMsT0FBTyxFQUFoQyxDQUFWO0FBQ0EsU0FBUUMsT0FBTyxFQUFSLEdBQWVELE1BQU0sTUFBNUI7QUFDRDs7QUFFRDs7O0FBR0EsU0FBU0UsR0FBVCxDQUFhQyxHQUFiLEVBQWtCQyxHQUFsQixFQUNBO0FBQ0UsU0FBUUQsT0FBT0MsR0FBUixHQUFnQkQsUUFBUyxLQUFLQyxHQUFyQztBQUNEOztBQUVEOzs7QUFHQSxTQUFTQyxHQUFULENBQWFDLENBQWIsRUFBZ0JDLENBQWhCLEVBQW1CQyxDQUFuQixFQUFzQlYsQ0FBdEIsRUFBeUJXLENBQXpCLEVBQTRCQyxDQUE1QixFQUNBO0FBQ0UsU0FBT2IsU0FBU0ssSUFBSUwsU0FBU0EsU0FBU1UsQ0FBVCxFQUFZRCxDQUFaLENBQVQsRUFBeUJULFNBQVNDLENBQVQsRUFBWVksQ0FBWixDQUF6QixDQUFKLEVBQThDRCxDQUE5QyxDQUFULEVBQTJERCxDQUEzRCxDQUFQO0FBQ0Q7QUFDRCxTQUFTRyxFQUFULENBQVlKLENBQVosRUFBZUMsQ0FBZixFQUFrQkksQ0FBbEIsRUFBcUJDLENBQXJCLEVBQXdCZixDQUF4QixFQUEyQlcsQ0FBM0IsRUFBOEJDLENBQTlCLEVBQ0E7QUFDRSxTQUFPTCxJQUFLRyxJQUFJSSxDQUFMLEdBQVksQ0FBQ0osQ0FBRixHQUFPSyxDQUF0QixFQUEwQk4sQ0FBMUIsRUFBNkJDLENBQTdCLEVBQWdDVixDQUFoQyxFQUFtQ1csQ0FBbkMsRUFBc0NDLENBQXRDLENBQVA7QUFDRDtBQUNELFNBQVNJLEVBQVQsQ0FBWVAsQ0FBWixFQUFlQyxDQUFmLEVBQWtCSSxDQUFsQixFQUFxQkMsQ0FBckIsRUFBd0JmLENBQXhCLEVBQTJCVyxDQUEzQixFQUE4QkMsQ0FBOUIsRUFDQTtBQUNFLFNBQU9MLElBQUtHLElBQUlLLENBQUwsR0FBV0QsSUFBSyxDQUFDQyxDQUFyQixFQUEwQk4sQ0FBMUIsRUFBNkJDLENBQTdCLEVBQWdDVixDQUFoQyxFQUFtQ1csQ0FBbkMsRUFBc0NDLENBQXRDLENBQVA7QUFDRDtBQUNELFNBQVNLLEVBQVQsQ0FBWVIsQ0FBWixFQUFlQyxDQUFmLEVBQWtCSSxDQUFsQixFQUFxQkMsQ0FBckIsRUFBd0JmLENBQXhCLEVBQTJCVyxDQUEzQixFQUE4QkMsQ0FBOUIsRUFDQTtBQUNFLFNBQU9MLElBQUlHLElBQUlJLENBQUosR0FBUUMsQ0FBWixFQUFlTixDQUFmLEVBQWtCQyxDQUFsQixFQUFxQlYsQ0FBckIsRUFBd0JXLENBQXhCLEVBQTJCQyxDQUEzQixDQUFQO0FBQ0Q7QUFDRCxTQUFTTSxFQUFULENBQVlULENBQVosRUFBZUMsQ0FBZixFQUFrQkksQ0FBbEIsRUFBcUJDLENBQXJCLEVBQXdCZixDQUF4QixFQUEyQlcsQ0FBM0IsRUFBOEJDLENBQTlCLEVBQ0E7QUFDRSxTQUFPTCxJQUFJTyxLQUFLSixJQUFLLENBQUNLLENBQVgsQ0FBSixFQUFvQk4sQ0FBcEIsRUFBdUJDLENBQXZCLEVBQTBCVixDQUExQixFQUE2QlcsQ0FBN0IsRUFBZ0NDLENBQWhDLENBQVA7QUFDRDs7QUFFRDs7OztBQUlBLFNBQVNPLE9BQVQsQ0FBaUJuQixDQUFqQixFQUNBO0FBQ0UsTUFBSVMsSUFBSyxVQUFUO0FBQ0EsTUFBSUMsSUFBSSxDQUFDLFNBQVQ7QUFDQSxNQUFJSSxJQUFJLENBQUMsVUFBVDtBQUNBLE1BQUlDLElBQUssU0FBVDs7QUFFQSxPQUFJLElBQUlLLElBQUksQ0FBWixFQUFlQSxJQUFJcEIsRUFBRXFCLE1BQXJCLEVBQTZCRCxLQUFLLEVBQWxDLEVBQ0E7QUFDRSxRQUFJRSxPQUFPYixDQUFYO0FBQ0EsUUFBSWMsT0FBT2IsQ0FBWDtBQUNBLFFBQUljLE9BQU9WLENBQVg7QUFDQSxRQUFJVyxPQUFPVixDQUFYOztBQUVBTixRQUFJSSxHQUFHSixDQUFILEVBQU1DLENBQU4sRUFBU0ksQ0FBVCxFQUFZQyxDQUFaLEVBQWVmLEVBQUVvQixJQUFHLENBQUwsQ0FBZixFQUF3QixDQUF4QixFQUE0QixDQUFDLFNBQTdCLENBQUo7QUFDQUwsUUFBSUYsR0FBR0UsQ0FBSCxFQUFNTixDQUFOLEVBQVNDLENBQVQsRUFBWUksQ0FBWixFQUFlZCxFQUFFb0IsSUFBRyxDQUFMLENBQWYsRUFBd0IsRUFBeEIsRUFBNEIsQ0FBQyxTQUE3QixDQUFKO0FBQ0FOLFFBQUlELEdBQUdDLENBQUgsRUFBTUMsQ0FBTixFQUFTTixDQUFULEVBQVlDLENBQVosRUFBZVYsRUFBRW9CLElBQUcsQ0FBTCxDQUFmLEVBQXdCLEVBQXhCLEVBQTZCLFNBQTdCLENBQUo7QUFDQVYsUUFBSUcsR0FBR0gsQ0FBSCxFQUFNSSxDQUFOLEVBQVNDLENBQVQsRUFBWU4sQ0FBWixFQUFlVCxFQUFFb0IsSUFBRyxDQUFMLENBQWYsRUFBd0IsRUFBeEIsRUFBNEIsQ0FBQyxVQUE3QixDQUFKO0FBQ0FYLFFBQUlJLEdBQUdKLENBQUgsRUFBTUMsQ0FBTixFQUFTSSxDQUFULEVBQVlDLENBQVosRUFBZWYsRUFBRW9CLElBQUcsQ0FBTCxDQUFmLEVBQXdCLENBQXhCLEVBQTRCLENBQUMsU0FBN0IsQ0FBSjtBQUNBTCxRQUFJRixHQUFHRSxDQUFILEVBQU1OLENBQU4sRUFBU0MsQ0FBVCxFQUFZSSxDQUFaLEVBQWVkLEVBQUVvQixJQUFHLENBQUwsQ0FBZixFQUF3QixFQUF4QixFQUE2QixVQUE3QixDQUFKO0FBQ0FOLFFBQUlELEdBQUdDLENBQUgsRUFBTUMsQ0FBTixFQUFTTixDQUFULEVBQVlDLENBQVosRUFBZVYsRUFBRW9CLElBQUcsQ0FBTCxDQUFmLEVBQXdCLEVBQXhCLEVBQTRCLENBQUMsVUFBN0IsQ0FBSjtBQUNBVixRQUFJRyxHQUFHSCxDQUFILEVBQU1JLENBQU4sRUFBU0MsQ0FBVCxFQUFZTixDQUFaLEVBQWVULEVBQUVvQixJQUFHLENBQUwsQ0FBZixFQUF3QixFQUF4QixFQUE0QixDQUFDLFFBQTdCLENBQUo7QUFDQVgsUUFBSUksR0FBR0osQ0FBSCxFQUFNQyxDQUFOLEVBQVNJLENBQVQsRUFBWUMsQ0FBWixFQUFlZixFQUFFb0IsSUFBRyxDQUFMLENBQWYsRUFBd0IsQ0FBeEIsRUFBNkIsVUFBN0IsQ0FBSjtBQUNBTCxRQUFJRixHQUFHRSxDQUFILEVBQU1OLENBQU4sRUFBU0MsQ0FBVCxFQUFZSSxDQUFaLEVBQWVkLEVBQUVvQixJQUFHLENBQUwsQ0FBZixFQUF3QixFQUF4QixFQUE0QixDQUFDLFVBQTdCLENBQUo7QUFDQU4sUUFBSUQsR0FBR0MsQ0FBSCxFQUFNQyxDQUFOLEVBQVNOLENBQVQsRUFBWUMsQ0FBWixFQUFlVixFQUFFb0IsSUFBRSxFQUFKLENBQWYsRUFBd0IsRUFBeEIsRUFBNEIsQ0FBQyxLQUE3QixDQUFKO0FBQ0FWLFFBQUlHLEdBQUdILENBQUgsRUFBTUksQ0FBTixFQUFTQyxDQUFULEVBQVlOLENBQVosRUFBZVQsRUFBRW9CLElBQUUsRUFBSixDQUFmLEVBQXdCLEVBQXhCLEVBQTRCLENBQUMsVUFBN0IsQ0FBSjtBQUNBWCxRQUFJSSxHQUFHSixDQUFILEVBQU1DLENBQU4sRUFBU0ksQ0FBVCxFQUFZQyxDQUFaLEVBQWVmLEVBQUVvQixJQUFFLEVBQUosQ0FBZixFQUF3QixDQUF4QixFQUE2QixVQUE3QixDQUFKO0FBQ0FMLFFBQUlGLEdBQUdFLENBQUgsRUFBTU4sQ0FBTixFQUFTQyxDQUFULEVBQVlJLENBQVosRUFBZWQsRUFBRW9CLElBQUUsRUFBSixDQUFmLEVBQXdCLEVBQXhCLEVBQTRCLENBQUMsUUFBN0IsQ0FBSjtBQUNBTixRQUFJRCxHQUFHQyxDQUFILEVBQU1DLENBQU4sRUFBU04sQ0FBVCxFQUFZQyxDQUFaLEVBQWVWLEVBQUVvQixJQUFFLEVBQUosQ0FBZixFQUF3QixFQUF4QixFQUE0QixDQUFDLFVBQTdCLENBQUo7QUFDQVYsUUFBSUcsR0FBR0gsQ0FBSCxFQUFNSSxDQUFOLEVBQVNDLENBQVQsRUFBWU4sQ0FBWixFQUFlVCxFQUFFb0IsSUFBRSxFQUFKLENBQWYsRUFBd0IsRUFBeEIsRUFBNkIsVUFBN0IsQ0FBSjs7QUFFQVgsUUFBSU8sR0FBR1AsQ0FBSCxFQUFNQyxDQUFOLEVBQVNJLENBQVQsRUFBWUMsQ0FBWixFQUFlZixFQUFFb0IsSUFBRyxDQUFMLENBQWYsRUFBd0IsQ0FBeEIsRUFBNEIsQ0FBQyxTQUE3QixDQUFKO0FBQ0FMLFFBQUlDLEdBQUdELENBQUgsRUFBTU4sQ0FBTixFQUFTQyxDQUFULEVBQVlJLENBQVosRUFBZWQsRUFBRW9CLElBQUcsQ0FBTCxDQUFmLEVBQXdCLENBQXhCLEVBQTRCLENBQUMsVUFBN0IsQ0FBSjtBQUNBTixRQUFJRSxHQUFHRixDQUFILEVBQU1DLENBQU4sRUFBU04sQ0FBVCxFQUFZQyxDQUFaLEVBQWVWLEVBQUVvQixJQUFFLEVBQUosQ0FBZixFQUF3QixFQUF4QixFQUE2QixTQUE3QixDQUFKO0FBQ0FWLFFBQUlNLEdBQUdOLENBQUgsRUFBTUksQ0FBTixFQUFTQyxDQUFULEVBQVlOLENBQVosRUFBZVQsRUFBRW9CLElBQUcsQ0FBTCxDQUFmLEVBQXdCLEVBQXhCLEVBQTRCLENBQUMsU0FBN0IsQ0FBSjtBQUNBWCxRQUFJTyxHQUFHUCxDQUFILEVBQU1DLENBQU4sRUFBU0ksQ0FBVCxFQUFZQyxDQUFaLEVBQWVmLEVBQUVvQixJQUFHLENBQUwsQ0FBZixFQUF3QixDQUF4QixFQUE0QixDQUFDLFNBQTdCLENBQUo7QUFDQUwsUUFBSUMsR0FBR0QsQ0FBSCxFQUFNTixDQUFOLEVBQVNDLENBQVQsRUFBWUksQ0FBWixFQUFlZCxFQUFFb0IsSUFBRSxFQUFKLENBQWYsRUFBd0IsQ0FBeEIsRUFBNkIsUUFBN0IsQ0FBSjtBQUNBTixRQUFJRSxHQUFHRixDQUFILEVBQU1DLENBQU4sRUFBU04sQ0FBVCxFQUFZQyxDQUFaLEVBQWVWLEVBQUVvQixJQUFFLEVBQUosQ0FBZixFQUF3QixFQUF4QixFQUE0QixDQUFDLFNBQTdCLENBQUo7QUFDQVYsUUFBSU0sR0FBR04sQ0FBSCxFQUFNSSxDQUFOLEVBQVNDLENBQVQsRUFBWU4sQ0FBWixFQUFlVCxFQUFFb0IsSUFBRyxDQUFMLENBQWYsRUFBd0IsRUFBeEIsRUFBNEIsQ0FBQyxTQUE3QixDQUFKO0FBQ0FYLFFBQUlPLEdBQUdQLENBQUgsRUFBTUMsQ0FBTixFQUFTSSxDQUFULEVBQVlDLENBQVosRUFBZWYsRUFBRW9CLElBQUcsQ0FBTCxDQUFmLEVBQXdCLENBQXhCLEVBQTZCLFNBQTdCLENBQUo7QUFDQUwsUUFBSUMsR0FBR0QsQ0FBSCxFQUFNTixDQUFOLEVBQVNDLENBQVQsRUFBWUksQ0FBWixFQUFlZCxFQUFFb0IsSUFBRSxFQUFKLENBQWYsRUFBd0IsQ0FBeEIsRUFBNEIsQ0FBQyxVQUE3QixDQUFKO0FBQ0FOLFFBQUlFLEdBQUdGLENBQUgsRUFBTUMsQ0FBTixFQUFTTixDQUFULEVBQVlDLENBQVosRUFBZVYsRUFBRW9CLElBQUcsQ0FBTCxDQUFmLEVBQXdCLEVBQXhCLEVBQTRCLENBQUMsU0FBN0IsQ0FBSjtBQUNBVixRQUFJTSxHQUFHTixDQUFILEVBQU1JLENBQU4sRUFBU0MsQ0FBVCxFQUFZTixDQUFaLEVBQWVULEVBQUVvQixJQUFHLENBQUwsQ0FBZixFQUF3QixFQUF4QixFQUE2QixVQUE3QixDQUFKO0FBQ0FYLFFBQUlPLEdBQUdQLENBQUgsRUFBTUMsQ0FBTixFQUFTSSxDQUFULEVBQVlDLENBQVosRUFBZWYsRUFBRW9CLElBQUUsRUFBSixDQUFmLEVBQXdCLENBQXhCLEVBQTRCLENBQUMsVUFBN0IsQ0FBSjtBQUNBTCxRQUFJQyxHQUFHRCxDQUFILEVBQU1OLENBQU4sRUFBU0MsQ0FBVCxFQUFZSSxDQUFaLEVBQWVkLEVBQUVvQixJQUFHLENBQUwsQ0FBZixFQUF3QixDQUF4QixFQUE0QixDQUFDLFFBQTdCLENBQUo7QUFDQU4sUUFBSUUsR0FBR0YsQ0FBSCxFQUFNQyxDQUFOLEVBQVNOLENBQVQsRUFBWUMsQ0FBWixFQUFlVixFQUFFb0IsSUFBRyxDQUFMLENBQWYsRUFBd0IsRUFBeEIsRUFBNkIsVUFBN0IsQ0FBSjtBQUNBVixRQUFJTSxHQUFHTixDQUFILEVBQU1JLENBQU4sRUFBU0MsQ0FBVCxFQUFZTixDQUFaLEVBQWVULEVBQUVvQixJQUFFLEVBQUosQ0FBZixFQUF3QixFQUF4QixFQUE0QixDQUFDLFVBQTdCLENBQUo7O0FBRUFYLFFBQUlRLEdBQUdSLENBQUgsRUFBTUMsQ0FBTixFQUFTSSxDQUFULEVBQVlDLENBQVosRUFBZWYsRUFBRW9CLElBQUcsQ0FBTCxDQUFmLEVBQXdCLENBQXhCLEVBQTRCLENBQUMsTUFBN0IsQ0FBSjtBQUNBTCxRQUFJRSxHQUFHRixDQUFILEVBQU1OLENBQU4sRUFBU0MsQ0FBVCxFQUFZSSxDQUFaLEVBQWVkLEVBQUVvQixJQUFHLENBQUwsQ0FBZixFQUF3QixFQUF4QixFQUE0QixDQUFDLFVBQTdCLENBQUo7QUFDQU4sUUFBSUcsR0FBR0gsQ0FBSCxFQUFNQyxDQUFOLEVBQVNOLENBQVQsRUFBWUMsQ0FBWixFQUFlVixFQUFFb0IsSUFBRSxFQUFKLENBQWYsRUFBd0IsRUFBeEIsRUFBNkIsVUFBN0IsQ0FBSjtBQUNBVixRQUFJTyxHQUFHUCxDQUFILEVBQU1JLENBQU4sRUFBU0MsQ0FBVCxFQUFZTixDQUFaLEVBQWVULEVBQUVvQixJQUFFLEVBQUosQ0FBZixFQUF3QixFQUF4QixFQUE0QixDQUFDLFFBQTdCLENBQUo7QUFDQVgsUUFBSVEsR0FBR1IsQ0FBSCxFQUFNQyxDQUFOLEVBQVNJLENBQVQsRUFBWUMsQ0FBWixFQUFlZixFQUFFb0IsSUFBRyxDQUFMLENBQWYsRUFBd0IsQ0FBeEIsRUFBNEIsQ0FBQyxVQUE3QixDQUFKO0FBQ0FMLFFBQUlFLEdBQUdGLENBQUgsRUFBTU4sQ0FBTixFQUFTQyxDQUFULEVBQVlJLENBQVosRUFBZWQsRUFBRW9CLElBQUcsQ0FBTCxDQUFmLEVBQXdCLEVBQXhCLEVBQTZCLFVBQTdCLENBQUo7QUFDQU4sUUFBSUcsR0FBR0gsQ0FBSCxFQUFNQyxDQUFOLEVBQVNOLENBQVQsRUFBWUMsQ0FBWixFQUFlVixFQUFFb0IsSUFBRyxDQUFMLENBQWYsRUFBd0IsRUFBeEIsRUFBNEIsQ0FBQyxTQUE3QixDQUFKO0FBQ0FWLFFBQUlPLEdBQUdQLENBQUgsRUFBTUksQ0FBTixFQUFTQyxDQUFULEVBQVlOLENBQVosRUFBZVQsRUFBRW9CLElBQUUsRUFBSixDQUFmLEVBQXdCLEVBQXhCLEVBQTRCLENBQUMsVUFBN0IsQ0FBSjtBQUNBWCxRQUFJUSxHQUFHUixDQUFILEVBQU1DLENBQU4sRUFBU0ksQ0FBVCxFQUFZQyxDQUFaLEVBQWVmLEVBQUVvQixJQUFFLEVBQUosQ0FBZixFQUF3QixDQUF4QixFQUE2QixTQUE3QixDQUFKO0FBQ0FMLFFBQUlFLEdBQUdGLENBQUgsRUFBTU4sQ0FBTixFQUFTQyxDQUFULEVBQVlJLENBQVosRUFBZWQsRUFBRW9CLElBQUcsQ0FBTCxDQUFmLEVBQXdCLEVBQXhCLEVBQTRCLENBQUMsU0FBN0IsQ0FBSjtBQUNBTixRQUFJRyxHQUFHSCxDQUFILEVBQU1DLENBQU4sRUFBU04sQ0FBVCxFQUFZQyxDQUFaLEVBQWVWLEVBQUVvQixJQUFHLENBQUwsQ0FBZixFQUF3QixFQUF4QixFQUE0QixDQUFDLFNBQTdCLENBQUo7QUFDQVYsUUFBSU8sR0FBR1AsQ0FBSCxFQUFNSSxDQUFOLEVBQVNDLENBQVQsRUFBWU4sQ0FBWixFQUFlVCxFQUFFb0IsSUFBRyxDQUFMLENBQWYsRUFBd0IsRUFBeEIsRUFBNkIsUUFBN0IsQ0FBSjtBQUNBWCxRQUFJUSxHQUFHUixDQUFILEVBQU1DLENBQU4sRUFBU0ksQ0FBVCxFQUFZQyxDQUFaLEVBQWVmLEVBQUVvQixJQUFHLENBQUwsQ0FBZixFQUF3QixDQUF4QixFQUE0QixDQUFDLFNBQTdCLENBQUo7QUFDQUwsUUFBSUUsR0FBR0YsQ0FBSCxFQUFNTixDQUFOLEVBQVNDLENBQVQsRUFBWUksQ0FBWixFQUFlZCxFQUFFb0IsSUFBRSxFQUFKLENBQWYsRUFBd0IsRUFBeEIsRUFBNEIsQ0FBQyxTQUE3QixDQUFKO0FBQ0FOLFFBQUlHLEdBQUdILENBQUgsRUFBTUMsQ0FBTixFQUFTTixDQUFULEVBQVlDLENBQVosRUFBZVYsRUFBRW9CLElBQUUsRUFBSixDQUFmLEVBQXdCLEVBQXhCLEVBQTZCLFNBQTdCLENBQUo7QUFDQVYsUUFBSU8sR0FBR1AsQ0FBSCxFQUFNSSxDQUFOLEVBQVNDLENBQVQsRUFBWU4sQ0FBWixFQUFlVCxFQUFFb0IsSUFBRyxDQUFMLENBQWYsRUFBd0IsRUFBeEIsRUFBNEIsQ0FBQyxTQUE3QixDQUFKOztBQUVBWCxRQUFJUyxHQUFHVCxDQUFILEVBQU1DLENBQU4sRUFBU0ksQ0FBVCxFQUFZQyxDQUFaLEVBQWVmLEVBQUVvQixJQUFHLENBQUwsQ0FBZixFQUF3QixDQUF4QixFQUE0QixDQUFDLFNBQTdCLENBQUo7QUFDQUwsUUFBSUcsR0FBR0gsQ0FBSCxFQUFNTixDQUFOLEVBQVNDLENBQVQsRUFBWUksQ0FBWixFQUFlZCxFQUFFb0IsSUFBRyxDQUFMLENBQWYsRUFBd0IsRUFBeEIsRUFBNkIsVUFBN0IsQ0FBSjtBQUNBTixRQUFJSSxHQUFHSixDQUFILEVBQU1DLENBQU4sRUFBU04sQ0FBVCxFQUFZQyxDQUFaLEVBQWVWLEVBQUVvQixJQUFFLEVBQUosQ0FBZixFQUF3QixFQUF4QixFQUE0QixDQUFDLFVBQTdCLENBQUo7QUFDQVYsUUFBSVEsR0FBR1IsQ0FBSCxFQUFNSSxDQUFOLEVBQVNDLENBQVQsRUFBWU4sQ0FBWixFQUFlVCxFQUFFb0IsSUFBRyxDQUFMLENBQWYsRUFBd0IsRUFBeEIsRUFBNEIsQ0FBQyxRQUE3QixDQUFKO0FBQ0FYLFFBQUlTLEdBQUdULENBQUgsRUFBTUMsQ0FBTixFQUFTSSxDQUFULEVBQVlDLENBQVosRUFBZWYsRUFBRW9CLElBQUUsRUFBSixDQUFmLEVBQXdCLENBQXhCLEVBQTZCLFVBQTdCLENBQUo7QUFDQUwsUUFBSUcsR0FBR0gsQ0FBSCxFQUFNTixDQUFOLEVBQVNDLENBQVQsRUFBWUksQ0FBWixFQUFlZCxFQUFFb0IsSUFBRyxDQUFMLENBQWYsRUFBd0IsRUFBeEIsRUFBNEIsQ0FBQyxVQUE3QixDQUFKO0FBQ0FOLFFBQUlJLEdBQUdKLENBQUgsRUFBTUMsQ0FBTixFQUFTTixDQUFULEVBQVlDLENBQVosRUFBZVYsRUFBRW9CLElBQUUsRUFBSixDQUFmLEVBQXdCLEVBQXhCLEVBQTRCLENBQUMsT0FBN0IsQ0FBSjtBQUNBVixRQUFJUSxHQUFHUixDQUFILEVBQU1JLENBQU4sRUFBU0MsQ0FBVCxFQUFZTixDQUFaLEVBQWVULEVBQUVvQixJQUFHLENBQUwsQ0FBZixFQUF3QixFQUF4QixFQUE0QixDQUFDLFVBQTdCLENBQUo7QUFDQVgsUUFBSVMsR0FBR1QsQ0FBSCxFQUFNQyxDQUFOLEVBQVNJLENBQVQsRUFBWUMsQ0FBWixFQUFlZixFQUFFb0IsSUFBRyxDQUFMLENBQWYsRUFBd0IsQ0FBeEIsRUFBNkIsVUFBN0IsQ0FBSjtBQUNBTCxRQUFJRyxHQUFHSCxDQUFILEVBQU1OLENBQU4sRUFBU0MsQ0FBVCxFQUFZSSxDQUFaLEVBQWVkLEVBQUVvQixJQUFFLEVBQUosQ0FBZixFQUF3QixFQUF4QixFQUE0QixDQUFDLFFBQTdCLENBQUo7QUFDQU4sUUFBSUksR0FBR0osQ0FBSCxFQUFNQyxDQUFOLEVBQVNOLENBQVQsRUFBWUMsQ0FBWixFQUFlVixFQUFFb0IsSUFBRyxDQUFMLENBQWYsRUFBd0IsRUFBeEIsRUFBNEIsQ0FBQyxVQUE3QixDQUFKO0FBQ0FWLFFBQUlRLEdBQUdSLENBQUgsRUFBTUksQ0FBTixFQUFTQyxDQUFULEVBQVlOLENBQVosRUFBZVQsRUFBRW9CLElBQUUsRUFBSixDQUFmLEVBQXdCLEVBQXhCLEVBQTZCLFVBQTdCLENBQUo7QUFDQVgsUUFBSVMsR0FBR1QsQ0FBSCxFQUFNQyxDQUFOLEVBQVNJLENBQVQsRUFBWUMsQ0FBWixFQUFlZixFQUFFb0IsSUFBRyxDQUFMLENBQWYsRUFBd0IsQ0FBeEIsRUFBNEIsQ0FBQyxTQUE3QixDQUFKO0FBQ0FMLFFBQUlHLEdBQUdILENBQUgsRUFBTU4sQ0FBTixFQUFTQyxDQUFULEVBQVlJLENBQVosRUFBZWQsRUFBRW9CLElBQUUsRUFBSixDQUFmLEVBQXdCLEVBQXhCLEVBQTRCLENBQUMsVUFBN0IsQ0FBSjtBQUNBTixRQUFJSSxHQUFHSixDQUFILEVBQU1DLENBQU4sRUFBU04sQ0FBVCxFQUFZQyxDQUFaLEVBQWVWLEVBQUVvQixJQUFHLENBQUwsQ0FBZixFQUF3QixFQUF4QixFQUE2QixTQUE3QixDQUFKO0FBQ0FWLFFBQUlRLEdBQUdSLENBQUgsRUFBTUksQ0FBTixFQUFTQyxDQUFULEVBQVlOLENBQVosRUFBZVQsRUFBRW9CLElBQUcsQ0FBTCxDQUFmLEVBQXdCLEVBQXhCLEVBQTRCLENBQUMsU0FBN0IsQ0FBSjs7QUFFQVgsUUFBSVYsU0FBU1UsQ0FBVCxFQUFZYSxJQUFaLENBQUo7QUFDQVosUUFBSVgsU0FBU1csQ0FBVCxFQUFZYSxJQUFaLENBQUo7QUFDQVQsUUFBSWYsU0FBU2UsQ0FBVCxFQUFZVSxJQUFaLENBQUo7QUFDQVQsUUFBSWhCLFNBQVNnQixDQUFULEVBQVlVLElBQVosQ0FBSjtBQUNEO0FBQ0QsU0FBTyxDQUFDaEIsQ0FBRCxFQUFJQyxDQUFKLEVBQU9JLENBQVAsRUFBVUMsQ0FBVixDQUFQO0FBQ0Q7O0FBRUQ7OztBQUdBLFNBQVNXLFFBQVQsQ0FBa0JDLFFBQWxCLEVBQ0E7QUFDRSxNQUFJQyxVQUFVLGtCQUFkO0FBQ0EsTUFBSUMsTUFBTSxFQUFWO0FBQ0EsT0FBSSxJQUFJVCxJQUFJLENBQVosRUFBZUEsSUFBSU8sU0FBU04sTUFBVCxHQUFrQixDQUFyQyxFQUF3Q0QsR0FBeEMsRUFDQTtBQUNFUyxXQUFPRCxRQUFRRSxNQUFSLENBQWdCSCxTQUFTUCxLQUFHLENBQVosS0FBb0JBLElBQUUsQ0FBSCxHQUFNLENBQU4sR0FBUSxDQUE1QixHQUFrQyxHQUFqRCxJQUNBUSxRQUFRRSxNQUFSLENBQWdCSCxTQUFTUCxLQUFHLENBQVosS0FBb0JBLElBQUUsQ0FBSCxHQUFNLENBQTFCLEdBQWdDLEdBQS9DLENBRFA7QUFFRDtBQUNELFNBQU9TLEdBQVA7QUFDRDs7QUFFRDs7O0FBR0EsU0FBU0UsUUFBVCxDQUFrQkosUUFBbEIsRUFDQTtBQUNFLE1BQUlLLE1BQU0sa0VBQVY7QUFDQSxNQUFJSCxNQUFNLEVBQVY7QUFDQSxPQUFJLElBQUlULElBQUksQ0FBWixFQUFlQSxJQUFJTyxTQUFTTixNQUFULEdBQWtCLEVBQXJDLEVBQXlDRCxLQUFLLENBQTlDLEVBQ0E7QUFDRVMsV0FBT0csSUFBSUYsTUFBSixDQUFhSCxTQUFTUCxLQUFHLENBQVosS0FBbUJBLElBQUUsRUFBdEIsR0FBNkIsSUFBOUIsR0FDRU8sU0FBU1AsS0FBRyxJQUFFLENBQWQsS0FBcUIsS0FBR0EsSUFBRSxFQUEzQixHQUFrQyxJQUQ5QyxDQUFQO0FBRUQ7QUFDRCxTQUFPUyxHQUFQO0FBQ0Q7O0FBRUQ7Ozs7O0FBS0EsU0FBU0ksUUFBVCxDQUFrQkosR0FBbEIsRUFDQTtBQUNFLE1BQUlLLE9BQU8sQ0FBRUwsSUFBSVIsTUFBSixHQUFhLENBQWQsSUFBb0IsQ0FBckIsSUFBMEIsQ0FBckMsQ0FERixDQUN5QztBQUN2QyxNQUFJYyxPQUFPLElBQUlDLEtBQUosQ0FBVUYsT0FBTyxFQUFqQixDQUFYO0FBQ0EsT0FBSSxJQUFJZCxJQUFJLENBQVosRUFBZUEsSUFBSWMsT0FBTyxFQUExQixFQUE4QmQsR0FBOUI7QUFBbUNlLFNBQUtmLENBQUwsSUFBVSxDQUFWO0FBQW5DLEdBQ0EsS0FBSSxJQUFJQSxJQUFJLENBQVosRUFBZUEsSUFBSVMsSUFBSVIsTUFBdkIsRUFBK0JELEdBQS9CO0FBQ0VlLFNBQUtmLEtBQUcsQ0FBUixLQUFjLENBQUNTLElBQUlRLFVBQUosQ0FBZWpCLENBQWYsSUFBb0IsSUFBckIsS0FBZ0NBLElBQUUsQ0FBSCxHQUFRLENBQXJEO0FBREYsR0FFQWUsS0FBS2YsS0FBRyxDQUFSLEtBQWMsUUFBVUEsSUFBRSxDQUFILEdBQVEsQ0FBL0I7QUFDQWUsT0FBS0QsT0FBSyxFQUFMLEdBQVEsQ0FBYixJQUFrQkwsSUFBSVIsTUFBSixHQUFhLENBQS9CO0FBQ0EsU0FBT2MsSUFBUDtBQUNEOztBQUVEOzs7O0FBSUEsU0FBU0csU0FBVCxDQUFtQlQsR0FBbkIsRUFDQTtBQUNFLE1BQUlLLE9BQU8sQ0FBRUwsSUFBSVIsTUFBSixHQUFhLENBQWQsSUFBb0IsQ0FBckIsSUFBMEIsQ0FBckMsQ0FERixDQUN5QztBQUN2QyxNQUFJYyxPQUFPLElBQUlDLEtBQUosQ0FBVUYsT0FBTyxFQUFqQixDQUFYO0FBQ0EsT0FBSSxJQUFJZCxJQUFJLENBQVosRUFBZUEsSUFBSWMsT0FBTyxFQUExQixFQUE4QmQsR0FBOUI7QUFBbUNlLFNBQUtmLENBQUwsSUFBVSxDQUFWO0FBQW5DLEdBQ0EsS0FBSSxJQUFJQSxJQUFJLENBQVosRUFBZUEsSUFBSVMsSUFBSVIsTUFBdkIsRUFBK0JELEdBQS9CO0FBQ0VlLFNBQUtmLEtBQUcsQ0FBUixLQUFjUyxJQUFJUSxVQUFKLENBQWVqQixDQUFmLEtBQXVCQSxJQUFFLENBQUgsR0FBUSxFQUE1QztBQURGLEdBRUFlLEtBQUtmLEtBQUcsQ0FBUixLQUFjLFFBQVVBLElBQUUsQ0FBSCxHQUFRLEVBQS9CO0FBQ0FlLE9BQUtELE9BQUssRUFBTCxHQUFRLENBQWIsSUFBa0JMLElBQUlSLE1BQUosR0FBYSxFQUEvQjtBQUNBLFNBQU9jLElBQVA7QUFDRDs7QUFFRDs7O0FBR0EsU0FBU0ksTUFBVCxDQUFpQlYsR0FBakIsRUFBc0I7QUFBRSxTQUFPSCxTQUFTUCxRQUFTYyxTQUFTSixHQUFULENBQVQsQ0FBVCxDQUFQO0FBQTBDO0FBQ2xFLFNBQVNXLE9BQVQsQ0FBaUJYLEdBQWpCLEVBQXNCO0FBQUUsU0FBT0gsU0FBU1AsUUFBUW1CLFVBQVVULEdBQVYsQ0FBUixDQUFULENBQVA7QUFBMEM7QUFDbEUsU0FBU1ksTUFBVCxDQUFpQlosR0FBakIsRUFBc0I7QUFBRSxTQUFPRSxTQUFTWixRQUFTYyxTQUFTSixHQUFULENBQVQsQ0FBVCxDQUFQO0FBQTBDO0FBQ2xFLFNBQVNhLE9BQVQsQ0FBaUJiLEdBQWpCLEVBQXNCO0FBQUUsU0FBT0UsU0FBU1osUUFBUW1CLFVBQVVULEdBQVYsQ0FBUixDQUFULENBQVA7QUFBMEM7QUFDbEU7QUFDQSxTQUFTYyxPQUFULENBQWlCZCxHQUFqQixFQUFzQjtBQUFFLFNBQU9ILFNBQVNQLFFBQVNjLFNBQVNKLEdBQVQsQ0FBVCxDQUFULENBQVA7QUFBMEM7QUFDbEVlLE9BQU9DLE9BQVAsR0FBaUI7QUFDZk4sVUFBUUE7QUFETyxDQUFqQiIsImZpbGUiOiJtZDUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxyXG4gKiBBIEphdmFTY3JpcHQgaW1wbGVtZW50YXRpb24gb2YgdGhlIFJTQSBEYXRhIFNlY3VyaXR5LCBJbmMuIE1ENSBNZXNzYWdlXHJcbiAqIERpZ2VzdCBBbGdvcml0aG0sIGFzIGRlZmluZWQgaW4gUkZDIDEzMjEuXHJcbiAqIFZlcnNpb24gMS4xIENvcHlyaWdodCAoQykgUGF1bCBKb2huc3RvbiAxOTk5IC0gMjAwMi5cclxuICogQ29kZSBhbHNvIGNvbnRyaWJ1dGVkIGJ5IEdyZWcgSG9sdFxyXG4gKiBTZWUgaHR0cDovL3BhamhvbWUub3JnLnVrL3NpdGUvbGVnYWwuaHRtbCBmb3IgZGV0YWlscy5cclxuICovXHJcblxyXG4vKlxyXG4gKiBBZGQgaW50ZWdlcnMsIHdyYXBwaW5nIGF0IDJeMzIuIFRoaXMgdXNlcyAxNi1iaXQgb3BlcmF0aW9ucyBpbnRlcm5hbGx5XHJcbiAqIHRvIHdvcmsgYXJvdW5kIGJ1Z3MgaW4gc29tZSBKUyBpbnRlcnByZXRlcnMuXHJcbiAqL1xyXG5mdW5jdGlvbiBzYWZlX2FkZCh4LCB5KVxyXG57XHJcbiAgdmFyIGxzdyA9ICh4ICYgMHhGRkZGKSArICh5ICYgMHhGRkZGKVxyXG4gIHZhciBtc3cgPSAoeCA+PiAxNikgKyAoeSA+PiAxNikgKyAobHN3ID4+IDE2KVxyXG4gIHJldHVybiAobXN3IDw8IDE2KSB8IChsc3cgJiAweEZGRkYpXHJcbn1cclxuXHJcbi8qXHJcbiAqIEJpdHdpc2Ugcm90YXRlIGEgMzItYml0IG51bWJlciB0byB0aGUgbGVmdC5cclxuICovXHJcbmZ1bmN0aW9uIHJvbChudW0sIGNudClcclxue1xyXG4gIHJldHVybiAobnVtIDw8IGNudCkgfCAobnVtID4+PiAoMzIgLSBjbnQpKVxyXG59XHJcblxyXG4vKlxyXG4gKiBUaGVzZSBmdW5jdGlvbnMgaW1wbGVtZW50IHRoZSBmb3VyIGJhc2ljIG9wZXJhdGlvbnMgdGhlIGFsZ29yaXRobSB1c2VzLlxyXG4gKi9cclxuZnVuY3Rpb24gY21uKHEsIGEsIGIsIHgsIHMsIHQpXHJcbntcclxuICByZXR1cm4gc2FmZV9hZGQocm9sKHNhZmVfYWRkKHNhZmVfYWRkKGEsIHEpLCBzYWZlX2FkZCh4LCB0KSksIHMpLCBiKVxyXG59XHJcbmZ1bmN0aW9uIGZmKGEsIGIsIGMsIGQsIHgsIHMsIHQpXHJcbntcclxuICByZXR1cm4gY21uKChiICYgYykgfCAoKH5iKSAmIGQpLCBhLCBiLCB4LCBzLCB0KVxyXG59XHJcbmZ1bmN0aW9uIGdnKGEsIGIsIGMsIGQsIHgsIHMsIHQpXHJcbntcclxuICByZXR1cm4gY21uKChiICYgZCkgfCAoYyAmICh+ZCkpLCBhLCBiLCB4LCBzLCB0KVxyXG59XHJcbmZ1bmN0aW9uIGhoKGEsIGIsIGMsIGQsIHgsIHMsIHQpXHJcbntcclxuICByZXR1cm4gY21uKGIgXiBjIF4gZCwgYSwgYiwgeCwgcywgdClcclxufVxyXG5mdW5jdGlvbiBpaShhLCBiLCBjLCBkLCB4LCBzLCB0KVxyXG57XHJcbiAgcmV0dXJuIGNtbihjIF4gKGIgfCAofmQpKSwgYSwgYiwgeCwgcywgdClcclxufVxyXG5cclxuLypcclxuICogQ2FsY3VsYXRlIHRoZSBNRDUgb2YgYW4gYXJyYXkgb2YgbGl0dGxlLWVuZGlhbiB3b3JkcywgcHJvZHVjaW5nIGFuIGFycmF5XHJcbiAqIG9mIGxpdHRsZS1lbmRpYW4gd29yZHMuXHJcbiAqL1xyXG5mdW5jdGlvbiBjb3JlTUQ1KHgpXHJcbntcclxuICB2YXIgYSA9ICAxNzMyNTg0MTkzXHJcbiAgdmFyIGIgPSAtMjcxNzMzODc5XHJcbiAgdmFyIGMgPSAtMTczMjU4NDE5NFxyXG4gIHZhciBkID0gIDI3MTczMzg3OFxyXG5cclxuICBmb3IodmFyIGkgPSAwOyBpIDwgeC5sZW5ndGg7IGkgKz0gMTYpXHJcbiAge1xyXG4gICAgdmFyIG9sZGEgPSBhXHJcbiAgICB2YXIgb2xkYiA9IGJcclxuICAgIHZhciBvbGRjID0gY1xyXG4gICAgdmFyIG9sZGQgPSBkXHJcblxyXG4gICAgYSA9IGZmKGEsIGIsIGMsIGQsIHhbaSsgMF0sIDcgLCAtNjgwODc2OTM2KVxyXG4gICAgZCA9IGZmKGQsIGEsIGIsIGMsIHhbaSsgMV0sIDEyLCAtMzg5NTY0NTg2KVxyXG4gICAgYyA9IGZmKGMsIGQsIGEsIGIsIHhbaSsgMl0sIDE3LCAgNjA2MTA1ODE5KVxyXG4gICAgYiA9IGZmKGIsIGMsIGQsIGEsIHhbaSsgM10sIDIyLCAtMTA0NDUyNTMzMClcclxuICAgIGEgPSBmZihhLCBiLCBjLCBkLCB4W2krIDRdLCA3ICwgLTE3NjQxODg5NylcclxuICAgIGQgPSBmZihkLCBhLCBiLCBjLCB4W2krIDVdLCAxMiwgIDEyMDAwODA0MjYpXHJcbiAgICBjID0gZmYoYywgZCwgYSwgYiwgeFtpKyA2XSwgMTcsIC0xNDczMjMxMzQxKVxyXG4gICAgYiA9IGZmKGIsIGMsIGQsIGEsIHhbaSsgN10sIDIyLCAtNDU3MDU5ODMpXHJcbiAgICBhID0gZmYoYSwgYiwgYywgZCwgeFtpKyA4XSwgNyAsICAxNzcwMDM1NDE2KVxyXG4gICAgZCA9IGZmKGQsIGEsIGIsIGMsIHhbaSsgOV0sIDEyLCAtMTk1ODQxNDQxNylcclxuICAgIGMgPSBmZihjLCBkLCBhLCBiLCB4W2krMTBdLCAxNywgLTQyMDYzKVxyXG4gICAgYiA9IGZmKGIsIGMsIGQsIGEsIHhbaSsxMV0sIDIyLCAtMTk5MDQwNDE2MilcclxuICAgIGEgPSBmZihhLCBiLCBjLCBkLCB4W2krMTJdLCA3ICwgIDE4MDQ2MDM2ODIpXHJcbiAgICBkID0gZmYoZCwgYSwgYiwgYywgeFtpKzEzXSwgMTIsIC00MDM0MTEwMSlcclxuICAgIGMgPSBmZihjLCBkLCBhLCBiLCB4W2krMTRdLCAxNywgLTE1MDIwMDIyOTApXHJcbiAgICBiID0gZmYoYiwgYywgZCwgYSwgeFtpKzE1XSwgMjIsICAxMjM2NTM1MzI5KVxyXG5cclxuICAgIGEgPSBnZyhhLCBiLCBjLCBkLCB4W2krIDFdLCA1ICwgLTE2NTc5NjUxMClcclxuICAgIGQgPSBnZyhkLCBhLCBiLCBjLCB4W2krIDZdLCA5ICwgLTEwNjk1MDE2MzIpXHJcbiAgICBjID0gZ2coYywgZCwgYSwgYiwgeFtpKzExXSwgMTQsICA2NDM3MTc3MTMpXHJcbiAgICBiID0gZ2coYiwgYywgZCwgYSwgeFtpKyAwXSwgMjAsIC0zNzM4OTczMDIpXHJcbiAgICBhID0gZ2coYSwgYiwgYywgZCwgeFtpKyA1XSwgNSAsIC03MDE1NTg2OTEpXHJcbiAgICBkID0gZ2coZCwgYSwgYiwgYywgeFtpKzEwXSwgOSAsICAzODAxNjA4MylcclxuICAgIGMgPSBnZyhjLCBkLCBhLCBiLCB4W2krMTVdLCAxNCwgLTY2MDQ3ODMzNSlcclxuICAgIGIgPSBnZyhiLCBjLCBkLCBhLCB4W2krIDRdLCAyMCwgLTQwNTUzNzg0OClcclxuICAgIGEgPSBnZyhhLCBiLCBjLCBkLCB4W2krIDldLCA1ICwgIDU2ODQ0NjQzOClcclxuICAgIGQgPSBnZyhkLCBhLCBiLCBjLCB4W2krMTRdLCA5ICwgLTEwMTk4MDM2OTApXHJcbiAgICBjID0gZ2coYywgZCwgYSwgYiwgeFtpKyAzXSwgMTQsIC0xODczNjM5NjEpXHJcbiAgICBiID0gZ2coYiwgYywgZCwgYSwgeFtpKyA4XSwgMjAsICAxMTYzNTMxNTAxKVxyXG4gICAgYSA9IGdnKGEsIGIsIGMsIGQsIHhbaSsxM10sIDUgLCAtMTQ0NDY4MTQ2NylcclxuICAgIGQgPSBnZyhkLCBhLCBiLCBjLCB4W2krIDJdLCA5ICwgLTUxNDAzNzg0KVxyXG4gICAgYyA9IGdnKGMsIGQsIGEsIGIsIHhbaSsgN10sIDE0LCAgMTczNTMyODQ3MylcclxuICAgIGIgPSBnZyhiLCBjLCBkLCBhLCB4W2krMTJdLCAyMCwgLTE5MjY2MDc3MzQpXHJcblxyXG4gICAgYSA9IGhoKGEsIGIsIGMsIGQsIHhbaSsgNV0sIDQgLCAtMzc4NTU4KVxyXG4gICAgZCA9IGhoKGQsIGEsIGIsIGMsIHhbaSsgOF0sIDExLCAtMjAyMjU3NDQ2MylcclxuICAgIGMgPSBoaChjLCBkLCBhLCBiLCB4W2krMTFdLCAxNiwgIDE4MzkwMzA1NjIpXHJcbiAgICBiID0gaGgoYiwgYywgZCwgYSwgeFtpKzE0XSwgMjMsIC0zNTMwOTU1NilcclxuICAgIGEgPSBoaChhLCBiLCBjLCBkLCB4W2krIDFdLCA0ICwgLTE1MzA5OTIwNjApXHJcbiAgICBkID0gaGgoZCwgYSwgYiwgYywgeFtpKyA0XSwgMTEsICAxMjcyODkzMzUzKVxyXG4gICAgYyA9IGhoKGMsIGQsIGEsIGIsIHhbaSsgN10sIDE2LCAtMTU1NDk3NjMyKVxyXG4gICAgYiA9IGhoKGIsIGMsIGQsIGEsIHhbaSsxMF0sIDIzLCAtMTA5NDczMDY0MClcclxuICAgIGEgPSBoaChhLCBiLCBjLCBkLCB4W2krMTNdLCA0ICwgIDY4MTI3OTE3NClcclxuICAgIGQgPSBoaChkLCBhLCBiLCBjLCB4W2krIDBdLCAxMSwgLTM1ODUzNzIyMilcclxuICAgIGMgPSBoaChjLCBkLCBhLCBiLCB4W2krIDNdLCAxNiwgLTcyMjUyMTk3OSlcclxuICAgIGIgPSBoaChiLCBjLCBkLCBhLCB4W2krIDZdLCAyMywgIDc2MDI5MTg5KVxyXG4gICAgYSA9IGhoKGEsIGIsIGMsIGQsIHhbaSsgOV0sIDQgLCAtNjQwMzY0NDg3KVxyXG4gICAgZCA9IGhoKGQsIGEsIGIsIGMsIHhbaSsxMl0sIDExLCAtNDIxODE1ODM1KVxyXG4gICAgYyA9IGhoKGMsIGQsIGEsIGIsIHhbaSsxNV0sIDE2LCAgNTMwNzQyNTIwKVxyXG4gICAgYiA9IGhoKGIsIGMsIGQsIGEsIHhbaSsgMl0sIDIzLCAtOTk1MzM4NjUxKVxyXG5cclxuICAgIGEgPSBpaShhLCBiLCBjLCBkLCB4W2krIDBdLCA2ICwgLTE5ODYzMDg0NClcclxuICAgIGQgPSBpaShkLCBhLCBiLCBjLCB4W2krIDddLCAxMCwgIDExMjY4OTE0MTUpXHJcbiAgICBjID0gaWkoYywgZCwgYSwgYiwgeFtpKzE0XSwgMTUsIC0xNDE2MzU0OTA1KVxyXG4gICAgYiA9IGlpKGIsIGMsIGQsIGEsIHhbaSsgNV0sIDIxLCAtNTc0MzQwNTUpXHJcbiAgICBhID0gaWkoYSwgYiwgYywgZCwgeFtpKzEyXSwgNiAsICAxNzAwNDg1NTcxKVxyXG4gICAgZCA9IGlpKGQsIGEsIGIsIGMsIHhbaSsgM10sIDEwLCAtMTg5NDk4NjYwNilcclxuICAgIGMgPSBpaShjLCBkLCBhLCBiLCB4W2krMTBdLCAxNSwgLTEwNTE1MjMpXHJcbiAgICBiID0gaWkoYiwgYywgZCwgYSwgeFtpKyAxXSwgMjEsIC0yMDU0OTIyNzk5KVxyXG4gICAgYSA9IGlpKGEsIGIsIGMsIGQsIHhbaSsgOF0sIDYgLCAgMTg3MzMxMzM1OSlcclxuICAgIGQgPSBpaShkLCBhLCBiLCBjLCB4W2krMTVdLCAxMCwgLTMwNjExNzQ0KVxyXG4gICAgYyA9IGlpKGMsIGQsIGEsIGIsIHhbaSsgNl0sIDE1LCAtMTU2MDE5ODM4MClcclxuICAgIGIgPSBpaShiLCBjLCBkLCBhLCB4W2krMTNdLCAyMSwgIDEzMDkxNTE2NDkpXHJcbiAgICBhID0gaWkoYSwgYiwgYywgZCwgeFtpKyA0XSwgNiAsIC0xNDU1MjMwNzApXHJcbiAgICBkID0gaWkoZCwgYSwgYiwgYywgeFtpKzExXSwgMTAsIC0xMTIwMjEwMzc5KVxyXG4gICAgYyA9IGlpKGMsIGQsIGEsIGIsIHhbaSsgMl0sIDE1LCAgNzE4Nzg3MjU5KVxyXG4gICAgYiA9IGlpKGIsIGMsIGQsIGEsIHhbaSsgOV0sIDIxLCAtMzQzNDg1NTUxKVxyXG5cclxuICAgIGEgPSBzYWZlX2FkZChhLCBvbGRhKVxyXG4gICAgYiA9IHNhZmVfYWRkKGIsIG9sZGIpXHJcbiAgICBjID0gc2FmZV9hZGQoYywgb2xkYylcclxuICAgIGQgPSBzYWZlX2FkZChkLCBvbGRkKVxyXG4gIH1cclxuICByZXR1cm4gW2EsIGIsIGMsIGRdXHJcbn1cclxuXHJcbi8qXHJcbiAqIENvbnZlcnQgYW4gYXJyYXkgb2YgbGl0dGxlLWVuZGlhbiB3b3JkcyB0byBhIGhleCBzdHJpbmcuXHJcbiAqL1xyXG5mdW5jdGlvbiBiaW5sMmhleChiaW5hcnJheSlcclxue1xyXG4gIHZhciBoZXhfdGFiID0gXCIwMTIzNDU2Nzg5YWJjZGVmXCJcclxuICB2YXIgc3RyID0gXCJcIlxyXG4gIGZvcih2YXIgaSA9IDA7IGkgPCBiaW5hcnJheS5sZW5ndGggKiA0OyBpKyspXHJcbiAge1xyXG4gICAgc3RyICs9IGhleF90YWIuY2hhckF0KChiaW5hcnJheVtpPj4yXSA+PiAoKGklNCkqOCs0KSkgJiAweEYpICtcclxuICAgICAgICAgICBoZXhfdGFiLmNoYXJBdCgoYmluYXJyYXlbaT4+Ml0gPj4gKChpJTQpKjgpKSAmIDB4RilcclxuICB9XHJcbiAgcmV0dXJuIHN0clxyXG59XHJcblxyXG4vKlxyXG4gKiBDb252ZXJ0IGFuIGFycmF5IG9mIGxpdHRsZS1lbmRpYW4gd29yZHMgdG8gYSBiYXNlNjQgZW5jb2RlZCBzdHJpbmcuXHJcbiAqL1xyXG5mdW5jdGlvbiBiaW5sMmI2NChiaW5hcnJheSlcclxue1xyXG4gIHZhciB0YWIgPSBcIkFCQ0RFRkdISUpLTE1OT1BRUlNUVVZXWFlaYWJjZGVmZ2hpamtsbW5vcHFyc3R1dnd4eXowMTIzNDU2Nzg5Ky9cIlxyXG4gIHZhciBzdHIgPSBcIlwiXHJcbiAgZm9yKHZhciBpID0gMDsgaSA8IGJpbmFycmF5Lmxlbmd0aCAqIDMyOyBpICs9IDYpXHJcbiAge1xyXG4gICAgc3RyICs9IHRhYi5jaGFyQXQoKChiaW5hcnJheVtpPj41XSA8PCAoaSUzMikpICYgMHgzRikgfFxyXG4gICAgICAgICAgICAgICAgICAgICAgKChiaW5hcnJheVtpPj41KzFdID4+ICgzMi1pJTMyKSkgJiAweDNGKSlcclxuICB9XHJcbiAgcmV0dXJuIHN0clxyXG59XHJcblxyXG4vKlxyXG4gKiBDb252ZXJ0IGFuIDgtYml0IGNoYXJhY3RlciBzdHJpbmcgdG8gYSBzZXF1ZW5jZSBvZiAxNi13b3JkIGJsb2Nrcywgc3RvcmVkXHJcbiAqIGFzIGFuIGFycmF5LCBhbmQgYXBwZW5kIGFwcHJvcHJpYXRlIHBhZGRpbmcgZm9yIE1ENC81IGNhbGN1bGF0aW9uLlxyXG4gKiBJZiBhbnkgb2YgdGhlIGNoYXJhY3RlcnMgYXJlID4yNTUsIHRoZSBoaWdoIGJ5dGUgaXMgc2lsZW50bHkgaWdub3JlZC5cclxuICovXHJcbmZ1bmN0aW9uIHN0cjJiaW5sKHN0cilcclxue1xyXG4gIHZhciBuYmxrID0gKChzdHIubGVuZ3RoICsgOCkgPj4gNikgKyAxIC8vIG51bWJlciBvZiAxNi13b3JkIGJsb2Nrc1xyXG4gIHZhciBibGtzID0gbmV3IEFycmF5KG5ibGsgKiAxNilcclxuICBmb3IodmFyIGkgPSAwOyBpIDwgbmJsayAqIDE2OyBpKyspIGJsa3NbaV0gPSAwXHJcbiAgZm9yKHZhciBpID0gMDsgaSA8IHN0ci5sZW5ndGg7IGkrKylcclxuICAgIGJsa3NbaT4+Ml0gfD0gKHN0ci5jaGFyQ29kZUF0KGkpICYgMHhGRikgPDwgKChpJTQpICogOClcclxuICBibGtzW2k+PjJdIHw9IDB4ODAgPDwgKChpJTQpICogOClcclxuICBibGtzW25ibGsqMTYtMl0gPSBzdHIubGVuZ3RoICogOFxyXG4gIHJldHVybiBibGtzXHJcbn1cclxuXHJcbi8qXHJcbiAqIENvbnZlcnQgYSB3aWRlLWNoYXJhY3RlciBzdHJpbmcgdG8gYSBzZXF1ZW5jZSBvZiAxNi13b3JkIGJsb2Nrcywgc3RvcmVkIGFzXHJcbiAqIGFuIGFycmF5LCBhbmQgYXBwZW5kIGFwcHJvcHJpYXRlIHBhZGRpbmcgZm9yIE1ENC81IGNhbGN1bGF0aW9uLlxyXG4gKi9cclxuZnVuY3Rpb24gc3RydzJiaW5sKHN0cilcclxue1xyXG4gIHZhciBuYmxrID0gKChzdHIubGVuZ3RoICsgNCkgPj4gNSkgKyAxIC8vIG51bWJlciBvZiAxNi13b3JkIGJsb2Nrc1xyXG4gIHZhciBibGtzID0gbmV3IEFycmF5KG5ibGsgKiAxNilcclxuICBmb3IodmFyIGkgPSAwOyBpIDwgbmJsayAqIDE2OyBpKyspIGJsa3NbaV0gPSAwXHJcbiAgZm9yKHZhciBpID0gMDsgaSA8IHN0ci5sZW5ndGg7IGkrKylcclxuICAgIGJsa3NbaT4+MV0gfD0gc3RyLmNoYXJDb2RlQXQoaSkgPDwgKChpJTIpICogMTYpXHJcbiAgYmxrc1tpPj4xXSB8PSAweDgwIDw8ICgoaSUyKSAqIDE2KVxyXG4gIGJsa3NbbmJsayoxNi0yXSA9IHN0ci5sZW5ndGggKiAxNlxyXG4gIHJldHVybiBibGtzXHJcbn1cclxuXHJcbi8qXHJcbiAqIEV4dGVybmFsIGludGVyZmFjZVxyXG4gKi9cclxuZnVuY3Rpb24gaGV4TUQ1IChzdHIpIHsgcmV0dXJuIGJpbmwyaGV4KGNvcmVNRDUoIHN0cjJiaW5sKHN0cikpKSB9XHJcbmZ1bmN0aW9uIGhleE1ENXcoc3RyKSB7IHJldHVybiBiaW5sMmhleChjb3JlTUQ1KHN0cncyYmlubChzdHIpKSkgfVxyXG5mdW5jdGlvbiBiNjRNRDUgKHN0cikgeyByZXR1cm4gYmlubDJiNjQoY29yZU1ENSggc3RyMmJpbmwoc3RyKSkpIH1cclxuZnVuY3Rpb24gYjY0TUQ1dyhzdHIpIHsgcmV0dXJuIGJpbmwyYjY0KGNvcmVNRDUoc3RydzJiaW5sKHN0cikpKSB9XHJcbi8qIEJhY2t3YXJkIGNvbXBhdGliaWxpdHkgKi9cclxuZnVuY3Rpb24gY2FsY01ENShzdHIpIHsgcmV0dXJuIGJpbmwyaGV4KGNvcmVNRDUoIHN0cjJiaW5sKHN0cikpKSB9XHJcbm1vZHVsZS5leHBvcnRzID0ge1xyXG4gIGhleE1ENTogaGV4TUQ1ICAgIFxyXG59XHJcbiJdfQ==