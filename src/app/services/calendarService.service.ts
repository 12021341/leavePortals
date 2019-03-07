

export class CalendarService {
    constructor() { }

    _MONTHS = ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'];
    _DAYS = ['MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT', 'SUN'];
    _TODAY = new Date();
    _CURRENTMONTH = this._TODAY.getMonth();
    _CURRENTYEAR = this._TODAY.getUTCFullYear();
    _CURRENTDAY = this._TODAY.getUTCDate();
    


    getMonthName(month) {
        return this._MONTHS[month];
    }

    getDaysInMonth(month, year) {                                                                                                                                                                                                                   
        var date = new Date(year, month, 1);
        var days = [];
        while (date.getMonth() === month) {
            days.push(date.getDate());
            date.setDate(date.getDate() + 1);
        }
        return days;
    }

    createFillSpan(month, year) {
        return this._DAYS.indexOf(this._DAYS[(new Date(year, month, 1)).getDay()]);
    }

    getNextMonth(){
        if(this._CURRENTMONTH == 11){

        }else{
            this._CURRENTMONTH = this._CURRENTMONTH + 1;
        }
        this.getMonthName(this._CURRENTMONTH);
        this.getDaysInMonth(this._CURRENTMONTH, this._CURRENTYEAR);
        this.createFillSpan(this._CURRENTMONTH, this._CURRENTYEAR);
        console.log(this._CURRENTMONTH);
        return new Date(this._CURRENTYEAR, this._CURRENTMONTH, this._CURRENTDAY);
    }
    
    getPrevMonth(){
        if(this._CURRENTMONTH == 11){

        }else{
            this._CURRENTMONTH = this._CURRENTMONTH - 1;
        }
        this.getMonthName(this._CURRENTMONTH);
        this.getDaysInMonth(this._CURRENTMONTH, this._CURRENTYEAR);
        this.createFillSpan(this._CURRENTMONTH, this._CURRENTYEAR);
    }

    getDay() {

    }

   

}