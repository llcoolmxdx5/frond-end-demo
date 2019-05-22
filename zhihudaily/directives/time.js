var Time = {
    // 获取当前时间戳
    getUnix: function() {
        var date = new Date();
        return date.getTime();
    },
    // 获取今天 0 点 0 分 0 秒的时间戳
    getTodayUnix: function() {
        var date = new Date();
        date.setHours(0);
        date.setMinutes(0);
        date.setSeconds(0);
        date.setMilliseconds(0);
        return date.getTime();
    },
    // 获取今年1月1日0点0分0秒的时间戳
    getYearUnix: function() {
        var date = new Date();
        date.setMonth(0);
        date.setDate(1);
        date.setHours(0);
        date.setMinutes(0);
        date.setSeconds(0);
        date.setMilliseconds(0);
        return date.getTime();
    },
    // 获取标准年月日
    getLastDate: function() {
        // TODO
    }
}