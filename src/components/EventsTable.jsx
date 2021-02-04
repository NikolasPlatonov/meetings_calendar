import React from 'react';

export const EventsTable = ({state}) => {
  const tableDaysTitles = ['Name', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri'];
  const tableTimeTitles = ['10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00', '17:00', '18:00'];
  console.log("state", state)
  return (
    <div className="calendar_container">
      <div className="table_header">

        {tableDaysTitles.map(day => {
          return <span className="table_header_item" key={day}>{day}</span>;
        })}
        {/* <div className="table_header_item">Name</div>       
        <div className="table_header_item">Mon</div>
        <div className="table_header_item">Tue</div>
        <div className="table_header_item">Wed</div>
        <div className="table_header_item">Thu</div>
        <div className="table_header_item">Fri</div> */}
      </div>
      <div className="table_content">

        <div className="time_name_column">
          {tableTimeTitles.map(time => {
            return <span key={time}>{time}</span>;
          })}
          {/* <div>10:00</div>
          <div>11:00</div>
          <div>12:00</div>
          <div>13:00</div>
          <div>14:00</div>
          <div>15:00</div>
          <div>16:00</div>
          <div>17:00</div>
          <div>18:00</div> */}
        </div>
      </div>
    </div>
  );
}