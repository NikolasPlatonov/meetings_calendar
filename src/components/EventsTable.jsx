import React, {useState} from 'react';
import data from '../data/data.json';

export const EventsTable = () => {
  const [state, setAppState] = useState(data);
  console.log("EventsTable_state_2", state)
  // const tableDaysTitles = ['Name', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri'];
  const tableTimeTitles = ['Name', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00', '17:00', '18:00'];
  return (
    <div className="calendar_container">
      <div className="time_name_column">
        {tableTimeTitles.map(time => {
          return <span className="time_title_item" key={time}>{time}</span>;
        })}


      </div>

      <div className="table_content">





        {/* {state[0].eventTime.map(time => {
            return <span key={Object.keys(time)}>{Object.keys(time)}</span>;
          })} */}

      </div>
    </div>
  );
}