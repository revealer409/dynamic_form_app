  let GetDate = () => {
  return new Date().getDate().toString();
};

  let GetMonth = () => {
  return new Date().getMonth().toString();
};

  let GetYear = () => {
  return new Date().getFullYear().toString();
};

class DateHelper {
    static formatDate(date: Date): string {
      return date.toISOString();
    }
  
    static addDays(date: Date, days: number): Date {
      const newDate = new Date(date);
      newDate.setDate(date.getDate() + days);
      return newDate;
    }
  
    static isFutureDate(date: Date): boolean {
      const currentDate = new Date();
      return date > currentDate;
    }

    static getCurrentMonth(){
        return GetMonth();
    }
  
    static getCurrentYear(){
        return GetYear();
    }

    static getDate(){
        return GetDate();
    }
    // Add more methods as needed
  }
  
  export default DateHelper;
  