const CalendarContext = createContext();

const useCalendar = () => {
  const contextValue = useContext(CalendarContext);
  return contextValue;
};

export {useCalendar, CalendarContext};