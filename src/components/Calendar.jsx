import React from 'react'

export default function Calendar(props) {
  let d = new Date()
  let { year, month, date } = props;

  let lastDate = new Date(year, month + 1, 0).getDate(); // 현재 년-월의 마지막 말일 구하기
  let start_date = new Date(year, month, 1).getDay(); // 요일(달력에서 시작할 위치 참조)
  console.log(lastDate, start_date);

  return (
    <div className='calendar'>
      <header>
        <h2>{year}</h2>
        <span style={{fontSize: '1.5rem', fontWeight: 'bold'}}>{month + 1}월</span>
      </header>
    
      <ul className='date'>
        { Array(start_date).fill().map((_, i) => (
          <li key={i} data-desc='빈칸추가'></li>
        ))}
        {
          Array(lastDate).fill().map((_, i) => (
            <li
              data-desc='여기부터 표시'
              key={i} 
              className={
                date === i + 1 && 
                month === d.getMonth() && 
                year === d.getFullYear() ? 'today' : 
                new Date(year, month, i + 1).getDay() === 0 || 
                new Date(year, month, i + 1).getDay() === 6 ? 'holyday' : ''                
              }
              // style={{
              //   backgroundColor: 
              //     date === i + 1 && 
              //     month === d.getMonth() && 
              //     year === d.getFullYear() ? 'red' : '',
              //   borderRadius: '10px',
              //   color: 
              //     new Date(year, month, i + 1).getDay() === 0 || 
              //     new Date(year, month, i + 1).getDay() === 6 ? '#999' : ''
              // }}
            >{i + 1}</li>
          ))
        }
      </ul>
    </div>
  )
}
