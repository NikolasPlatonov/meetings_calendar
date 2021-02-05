import React from 'react';
import {Form, Button} from 'react-bootstrap'
import {NavLink} from 'react-router-dom';

export const NewEvent = (props) => {
  return (
    <div className="container">
      <div className='new_event_container'>
        <Form>
          <Form.Group>
            <div className="dropdown_row_item">
              <Form.Label>Name of the event</Form.Label>
              <Form.Control type="text" placeholder="Enter text..." />
            </div>
          </Form.Group>

          <Form.Group controlId="ParticipantsSelect">
            <div className="dropdown_row_item">
              <Form.Label>Participants</Form.Label>
              <Form.Control as="select">
                <option>Maria</option>
                <option>Bob</option>
                <option>Alex</option>
              </Form.Control>
            </div>
          </Form.Group>

          <Form.Group controlId="DaySelect">
            <div className="dropdown_row_item">
              <Form.Label>Day</Form.Label>
              <Form.Control as="select">
                <option>Monday</option>
                <option>Tuesday</option>
                <option>Wednesday</option>
                <option>Thursday</option>
                <option>Friday</option>
              </Form.Control>
            </div>
          </Form.Group>

          <Form.Group controlId="TimeSelect">
            <div className="dropdown_row_item">
              <Form.Label>Time</Form.Label>
              <Form.Control as="select">
                <option>10:00</option>
                <option>11:00</option>
                <option>12:00</option>
                <option>13:00</option>
                <option>14:00</option>
                <option>15:00</option>
                <option>16:00</option>
                <option>17:00</option>
                <option>18:00</option>
              </Form.Control>
            </div>
          </Form.Group>
        </Form>
        <div className="new_event_button_container">
          <Form>
            <NavLink to={`/`} style={{textDecoration: 'none'}}>
              <Button variant="secondary" type="cancel">
                Cancel
            </Button>
            </NavLink>
          </Form>
          <Form>

            <NavLink to={`/`} style={{textDecoration: 'none'}}>
              <Button variant="secondary" type="submit">
                Create
            </Button>
            </NavLink>
          </Form>
        </div>
      </div>

    </div>
  );
}