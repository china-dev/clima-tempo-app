export function useFormatDate() {
    function formatDateTime(dateTimeString: string): string {
      const [datePart, timePart] = dateTimeString.split(' ');
      const [year, month, day] = datePart.split('-');
  
      return `${timePart} ${day}/${month}/${year}`;
    }
  
    return { formatDateTime };
  }