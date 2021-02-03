import React from 'react';
import {Form, Button} from 'react-bootstrap'

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
                <option>Maria</option>
                <option>Bob</option>
                <option>Alex</option>
              </Form.Control>
            </div>
          </Form.Group>
        </Form>
        <div className="new_event_button_container">
          <Form>
            <Button variant="secondary" type="cancel">
              Cancel
            </Button>
          </Form>
          <Form>
            <Button variant="secondary" type="submit">
              Create
            </Button>
          </Form>
        </div>
      </div>

    </div>
  );
}