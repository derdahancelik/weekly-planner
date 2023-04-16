import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const DayCard = ({ day }) => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [inputText, setInputText] = useState("");

  const handleInputChange = (event) => {
    setInputText(event.target.value);
  };

  const handleSave = () => {
    console.log(`Kaydedilen not: ${inputText}`);
    setInputText("");
  };

  return (
    <div className="daycard">
      <div className="day">{day}</div>
      <DatePicker
        selected={selectedDate}
        onChange={(date) => setSelectedDate(date)}
        dateFormat="dd/MM/yyyy"
      />
      <textarea
        placeholder="Buraya notunuzu girin"
        value={inputText}
        onChange={handleInputChange}
      />
      <button onClick={handleSave}>Kaydet</button>
    </div>
  );
};

export default DayCard;
