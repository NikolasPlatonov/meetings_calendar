import React from 'react';

export const Event = ({title, day, time}) => {

  return (
    <div className="event_container">
      <div className="event_title">{title}</div>
      <div className="event_delete">
        &#10006;
      </div>
    </div>
  );
}