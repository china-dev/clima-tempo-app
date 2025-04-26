export function useDayCondition () {

  const daysOfWeek = [
    "Dom",
    "Seg",
    "Ter",
    "Qua",
    "Qui",
    "Sex",
    "Sáb"
  ];

  function getDayNameFromToday(offset: number): string {
    const today = new Date();
    const todayIndex = today.getDay();
    
    const dayIndex = (todayIndex + offset) % 7;
    
    return daysOfWeek[dayIndex];
  }

  return { getDayNameFromToday };
}