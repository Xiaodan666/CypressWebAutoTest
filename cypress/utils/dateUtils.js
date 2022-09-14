export default class DateUtils{

    getCurrentDate(){
        const date = new Date();
        const year = date.getFullYear()
        const month = date.getMonth()
        const day = date.getDate()
        return year + '-' + (Number(month)+1) + '-' + day
    }

    getTimestamp(){
        const date = new Date();
        return date.getTime()
    }
}