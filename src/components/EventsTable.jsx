import React, {useState} from 'react';
import _ from 'lodash';
import data from '../data/data.json';
import {Event} from './Event';

export const EventsTable = () => {
  const [state, setState] = useState(data);
  console.log("1_STATE===", state)

  const daysOfWeek = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];
  const hoursOfDay = ['10', '11', '12', '13', '14', '15', '16', '17', '18'];

  const deleteEvent = (day, time) => {
    let newState = _.cloneDeep(state);
    _.unset(newState, day + '.' + time)
    setState(newState)
  }

  const dayFilter = (data, hoursArr, day) => {
    let result = hoursArr.map(hour => {
      return (
        <div className="event_item" key={day + hour}>
          {data[day] && data[day][hour] ?
            <Event title={data[day][hour]['title']} day={day} time={hour} deleteEvent={deleteEvent} /> :
            ''}

        </div>
      )
    })
    return result;
  }


  return (
    <div className="calendar_container">

      <div className="time_name_column">
        <div className="time_day_title_item">Name</div>
        {hoursOfDay.map(time => {
          return <span className="time_day_title_item" key={time}>{time}:00</span>;
        })}
      </div>

      <div className="table_content">

        <div className="table_day_header">
          {daysOfWeek.map(day => {
            return <span className="time_day_title_item" key={day}>{day.slice(0, 3)}</span>;
          })}
        </div>

        <div className="table_day_events" >

          {daysOfWeek.map(day => {
            return (<div key={day}>{dayFilter(state, hoursOfDay, day)}</div>)
          })}

        </div>
      </div>
    </div>
  );
}