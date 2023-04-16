import React from 'react';
import DayCard from './DayCard';

const WeekDays = () => {
  const days = ['Pazartesi', 'Salı', 'Çarşamba', 'Perşembe', 'Cuma'];

  return (
    <div className="weekdays">
      {days.map((day) => (
        <DayCard key={day} day={day} />
      ))}
    </div>
  );
};

export default WeekDays;
