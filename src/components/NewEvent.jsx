import React from 'react';
import {Form, Button} from 'react-bootstrap'
import {NavLink} from 'react-router-dom';
import {useForm} from "react-hook-form";
import Select from 'react-select';
import daysOfWeek from '../data/dataDays.json'
import hoursOfDay from '../data/dataTime.json'

export const NewEvent = ({allParticipants, participants, setParticipants, day, setDay, time, setTime, getNewEventData}) => {

  const {register,
    handleSubmit,
    // errors
  } = useForm();

  const onSubmit = (data) => {
    let dayName = day.label;
    let timeName = time.label;
    let newEvent =
    {
      [dayName]: {
        [timeName.slice(0, 2)]: {
          eventName: data.eventName,
          participants: participants.map((item) => {
            return item.value
          }),
        }
      }
    }

    getNewEventData(newEvent);
  };

  return (
    <div className="container">
      <Form onSubmit={handleSubmit(onSubmit)} >
        <div className='new_event_container'>
          <div>
            <Form.Group>
              <Form.Label>Name of the event</Form.Label>
              <Form.Control name="eventName" ref={register} placeholder="Enter event name..." />
              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            </Form.Group>

            <Form.Group>
              <Form.Label>Participants</Form.Label>
              <Select
                defaultValue=""
                isMulti
                options={allParticipants}
                className="basic-multi-select"
                classNamePrefix="select"
                value={participants}
                onChange={(selectedParticipant) => {setParticipants(selectedParticipant)}}
              />
              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            </Form.Group>

            <Form.Group>
              <Form.Label>Day</Form.Label>
              <Select
                defaultValue=""
                options={daysOfWeek}
                className="basic-multi-select"
                classNamePrefix="select"
                onChange={(selectedDay) => {setDay(selectedDay)}}
              />
            </Form.Group>

            <Form.Group>
              <Form.Label>Time</Form.Label>
              <Select
                defaultValue=""
                options={hoursOfDay}
                className="basic-multi-select"
                classNamePrefix="select"
                onChange={(selectedTime) => {setTime(selectedTime)}}
              />
            </Form.Group>
          </div>

          <div className="new_event_button_container">
            <NavLink to={`/`} style={{textDecoration: 'none'}}>
              <Button variant="outline-secondary" type="cancel">
                Cancel
             </Button>
            </NavLink>

            <Button variant="secondary" type="submit">
              Submit
            </Button>
          </div>
        </div>
      </Form >
    </div>
  );
}