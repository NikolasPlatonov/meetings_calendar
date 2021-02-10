import React from 'react';

export const Event = ({title, day, time, deleteEvent}) => {

  return (
    <div className="event_container">
      <div className="event_title">{title}</div>
      <div className="event_delete" onClick={() => {deleteEvent(day, time)}}>
        &#10006;
      </div>
    </div>
  );
}