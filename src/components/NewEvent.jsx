import React, {useState} from 'react';
import {Form, Button} from 'react-bootstrap'
import {NavLink} from 'react-router-dom';
import {useForm} from "react-hook-form";
import Select from 'react-select';

export const NewEvent = ({getNewEventData}) => {
  const [participants, setParticipants] = useState([]);
  const {register, handleSubmit, errors} = useForm();

  const onSubmit = (data) => {
    let newData = {...data, participants}
    console.log('onSubmit_data2===', newData)
    getNewEventData(newData);
  };

  const allParticipants = [
    {value: 'Maria', label: 'Maria'},
    {value: 'Bob', label: 'Bob'},
    {value: 'Alex', label: 'Alex'},
    {value: 'Bill', label: 'Bill'},
    {value: 'Ann', label: 'Ann'},
  ]

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
                name="colors"
                options={allParticipants}
                className="basic-multi-select"
                classNamePrefix="select"
                value={participants}
                onChange={(participants) => {setParticipants(participants)}}
              />
              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            </Form.Group>

            <Form.Group>
              <Form.Label>Day</Form.Label>
              <Form.Control as="select" name="day" defaultValue="not_selected" ref={register}>
                <option value="not_selected"></option>
                <option value="Monday">Monday</option>
                <option value="Tuesday">Tuesday</option>
                <option value="Wednesday">Wednesday</option>
                <option value="Thursday">Thursday</option>
                <option value="Friday">Friday</option>
              </Form.Control>
            </Form.Group>

            <Form.Group>
              <Form.Label>Time</Form.Label>
              <Form.Control name="time" type="number" ref={register({min: 10, max: 18})} defaultValue="10" />
            </Form.Group>
          </div>

          <div className="new_event_button_container">
            <NavLink to={`/`} style={{textDecoration: 'none'}}>
              <Button variant="outline-secondary" type="cancel">
                Cancel
             </Button>
            </NavLink>
            <NavLink to={`/`} style={{textDecoration: 'none'}}>
              <Button variant="secondary" type="submit">
                Submit
            </Button>
            </NavLink>
          </div>
        </div>
      </Form >
    </div>
  );
}





