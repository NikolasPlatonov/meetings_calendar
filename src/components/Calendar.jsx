import React from 'react';
import {Button, Dropdown} from 'react-bootstrap';
import {NavLink} from 'react-router-dom';
import {EventsTable} from './EventsTable';



export const Calendar = (props) => {
  // useEffect(() => {
  //   setAppState(data)
  // }, []);

  // useEffect(() => {
  //   async function fetchData () {
  //     const response = await data;
  //     setAppState(response)
  //   }
  //   fetchData();
  // }, []);

  // how get data from api
  // useEffect(() => {
  //   setAppState({loading: true});
  //   const events = `https://api.github.com/events/blablabla123/events`;
  //   fetch(events).then((responce) => responce.json()).then((events) => {setAppState({loading: false, events: events});});
  // }, [setAppState]);

  return (
    <div className="container">
      <div className="header_container">
        <div className="header">
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