export const getCurrentDate = () => {

    //yyyy-mm-dd-hh=-mm
    const date = new Date();
    const currentDate = date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + date.getDate() + ' ' + date.getHours() + ':' + date.getMinutes()
    return currentDate

}