import React from 'react';

export const EventsTable = (props) => {
  return (
    <div className="calendar_container">
      <div className="table_header">
        <div className="table_header_item">Name</div>
        <div className="table_header_item">Mon</div>
        <div className="table_header_item">Tue</div>
        <div className="table_header_item">Wed</div>
        <div className="table_header_item">Thu</div>
        <div className="table_header_item">Fri</div>
      </div>
      <div className="table_content">
        <div className="time_name_column">
          <div>10:00</div>
          <div>11:00</div>
          <div>12:00</div>
          <div>13:00</div>
          <div>14:00</div>
          <div>15:00</div>
          <div>16:00</div>
          <div>17:00</div>
          <div>18:00</div>
        </div>
      </div>
    </div>
  );
}