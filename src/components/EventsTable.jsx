import React from 'react';
import data from '../data/data.json';

export const EventsTable = () => {
  console.log("EventsTable_data", data)
  const daysOfWeek = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'];
  const hoursOfDay = ['10', '11', '12', '13', '14', '15', '16', '17', '18'];

  const events = (data, days) => {
    for (let key in data) {
      for (let day of days) {
        if (key.slice(0, 3) === day) {
          return (data[key]);
        }
      }
    }
  };

  const dayFilter = (hoursArr, day) => {
    const result = hoursArr.map(hour => {
      return (
        <div className="time_title_item" key={day + hour}>
          {day} {hour}
        </div>
      )
    })
    return result;
  }

  return (
    <div className="calendar_container">

      <div className="time_name_column">
        <div className="time_title_item">Name</div>
        {hoursOfDay.map(time => {
          return <span className="time_title_item" key={time}>{time}</span>;
        })}
      </div>

      <div className="table_content">

        <div className="table_day_header">
          {daysOfWeek.map(day => {
            return <span className="time_title_item" key={day}>{day}</span>;
          })}
        </div>

        <div className="table_day_events" >

          {daysOfWeek.map(day => {
            return (<div key={day}>{dayFilter(hoursOfDay, day)}</div>)
          })}

        </div>
      </div>
    </div>
  );
}