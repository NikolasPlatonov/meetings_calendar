import React from 'react';
import {Button, Dropdown, DropdownButton} from 'react-bootstrap';
import {NavLink} from 'react-router-dom';
import {EventsTable} from './EventsTable';

export const Calendar = (props) => {
  return (
    <div className="container">
      <div className="content_container">
        <div className="header_container">
          <div className="title_container">Calendar</div>
          <div className="buttons_container">
            <DropdownButton
              menuAlign="right"
              title="Dropdown right"
              id="dropdown-menu-align-right"
            >
              <Dropdown.Item eventKey="1">Action</Dropdown.Item>
              <Dropdown.Item eventKey="2">Another action</Dropdown.Item>
              <Dropdown.Item eventKey="3">Something else here</Dropdown.Item>
              <Dropdown.Divider />
              <Dropdown.Item eventKey="4">Separated link</Dropdown.Item>
            </DropdownButton>
            <NavLink to={`/create-event`} style={{textDecoration: 'none'}}>
              <Button variant="secondary">New event +</Button>
            </NavLink>

          </div>
        </div>

      </div>
      <EventsTable />
    </div>
  );
}