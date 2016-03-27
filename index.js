/**
 * 
 * @authors vvwhehe (wfenng@gmail.com)
 * @date    2016-03-27 10:01:58
 * @version 0.0.1
 */

module.exports = leftpad;

/**
 * [leftpad description]
 * @param  String str 原始的字符串
 * @param  Number len 返回补充字符串的长度	
 * @param  String ch  返回补充之后的字符串
 * @return String     返回的类型是字符串
 */
function leftpad(str, len, ch){
	str = '' + str;
	var padlen = len - str.length;

	if(padlen <= 0){
		return str;
	} else {
		return (new Array(padlen + 1).join(ch || ' ') + str);
	}
}