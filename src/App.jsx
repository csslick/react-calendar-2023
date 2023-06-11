import './App.css'
import { useState } from 'react'
import Header from './components/Header'
import Calendar from './components/Calendar'

function App() {
  const [year, setYear] = useState(new Date().getFullYear());
  const [month, setMonth] = useState(new Date().getMonth());
  const [date, setDate] = useState(new Date().getDate());
  
  const nextMonth = () => {
    if(month === 11){
      setMonth(0); // 1월로 넘어감
      setYear(year + 1); // 다음 년도로
      return;
    }
    setMonth(month + 1);
  }
  
  const prevMonth = () => {
    if(month === 0) {
      setMonth(11); // 12월로 
      setYear(year - 1); // 이전 년도로
      return;
    }
    setMonth(month - 1);
  }

  return (
    <div>
      <Header />
      <Calendar month={month} year={year} date={date} />
      <div className="btn-group">
        <button onClick={prevMonth}>prev</button>
        <button onClick={nextMonth}>next</button>
      </div>
    </div>
  )
}

export default App
