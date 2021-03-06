// ==UserScript==
// @name            GZTown
// @namespace       https://github.com/inu1255/soulsign-chrome
// @version         1.0.0
// @author          GSM
// @loginURL        https://pt.gztown.net
// @updateURL       https://github.com/lzl20110/soulsign-chrome/upload/master/public/demos/GZTown.js
// @expire          14400e3
// @domain          pt.gztown.net
// ==/UserScript==

exports.run = async function() {
    var { data } = await axios.get('https://pt.gztown.net/attendance.php');
    if (/签到成功/.test(data)) return '签到成功';
    if (/您今天已经签到过了/.test(data)) return '今日已签';
    throw '访问失败';
};

exports.check = async function() {
    var { data } = await axios.get('https://pt.gztown.net/index.php');
    return /欢迎回来/.test(data);
};
