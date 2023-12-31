export default function localTime(timeStamp) {
    let date = new Date(timeStamp * 1000)
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let ampm = hours >= 12 ? 'pm' : 'am';
    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'
    minutes = minutes < 10 ? '0'+minutes : minutes;
    let strTime = (hours < 10 ? '0' + hours : hours) + ':' + minutes + ' ' + ampm;
    return strTime;
  }