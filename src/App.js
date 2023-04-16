import React from 'react';
import Header from './components/Header';
import WeekDays from './components/WeekDays';
import Calendar from './components/Calendar';
import Footer from './components/Footer';
import './components/Calendar.css';
import './components/Footer.css';
import './components/DayCard.css';
import './components/Header.css';
import './App.css';
import { signInWithGoogle } from './components/firebaseAuth';

function App() {
  const [view, setView] = React.useState('month');

  const renderView = () => {
    if (view === 'month') {
      return <Calendar />;
    } else if (view === 'week') {
      return <WeekDays />;
    } else {
      return null;
    }
  };

  return (
    <div className="App">
      <Header setView={setView} />
      <button onClick={signInWithGoogle}>Gmail ile giriş yap</button>
      {renderView()}
      <Footer />
    </div>
  );
}

export default App;