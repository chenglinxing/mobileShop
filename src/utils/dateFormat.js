export function dateFormate(date) {
    let getTime;
    let newDate = new Date(date);
    let year = newDate.getFullYear();
    let month = newDate.getMonth() + 1 > 10 ? newDate.getMonth() + 1 : '0' + newDate.getMonth() + 1;
    let day = newDate.getDate() > 10 ? newDate.getDate() : '0' + newDate.getDate()
    let hour = newDate.getHours() > 10 ? newDate.getHours() : '0' + newDate.getHours()
    let minute = newDate.getMinutes() > 10 ? newDate.getMinutes() : '0' + newDate.getMinutes()
    let second = newDate.getSeconds() > 10 ? newDate.getSeconds() : '0' + newDate.getSeconds()
    getTime = year + '-' + month + '-' + day + ' ' + hour + ':' + minute + ':' + second
    return getTime
}