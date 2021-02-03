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
            <Dropdown>
              <Dropdown.Toggle variant="secondary" id="dropdown-members">
                All members
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item eventKey="Maria">Maria</Dropdown.Item>
                <Dropdown.Item eventKey="Bob">Bob</Dropdown.Item>
                <Dropdown.Item eventKey="Alex">Alex</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>

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