import React from 'react';
import Header from './Header';
import WeekDays from './WeekDays';

const Calendar = () => {
  return (
    <div className="calendar">
      <Header />
      <WeekDays />
    </div>
  );
};

export default Calendar;
