import React, {useState} from 'react';
import {Form, Button} from 'react-bootstrap'
import {NavLink} from 'react-router-dom';
import {useForm} from "react-hook-form";

export const NewEvent = (props) => {
  const {register, handleSubmit, errors} = useForm();
  const onSubmit = data => console.log('onSubmit_data===', data);

  return (
    <div className="container">

      {/* "handleSubmit" will validate your inputs before invoking "onSubmit" */}
      <form onSubmit={handleSubmit(onSubmit)} >

        <div className='new_event_container'>
          <div>
            {/* register your input into the hook by invoking the "register" function */}
            <div>Name of the event</div>
            {/* include validation with required or other standard HTML validation rules */}
            < input name="eventName" ref={register({required: true})} />
            {/* errors will return when field validation fails  */}
            {errors.exampleRequired && <div>This field is required</div>}
          </div>





          <div className="new_event_button_container">
            <NavLink to={`/`} style={{textDecoration: 'none'}}>
              <Button variant="secondary" type="cancel">
                Cancel
             </Button>
            </NavLink>
            <Button variant="secondary" type="submit">
              Submit
            </Button>
          </div>
        </div>

      </form >
    </div>
  );


  // return (
  //   <div className="container">
  //     <div className='new_event_container'>
  //       <Form onSubmit={handleSubmit(onSubmit)}>

  //         <Form.Group controlId="eventTitleInput">
  //           <div className="dropdown_row_item">
  //             <Form.Label>Name of the event</Form.Label>
  //             <Form.Control
  //               name="eventTitleInput"
  //               ref={register({required: true})}
  //               required
  //               placeholder="Enter text..."
  //               type="text"
  //               defaultValue=""
  //             />
  //             {errors.eventTitleInput && <span>This field is required</span>}
  //           </div>
  //         </Form.Group>

  //         <Form.Group controlId="ParticipantsSelect">
  //           <div className="dropdown_row_item">
  //             <Form.Label>Participants</Form.Label>
  //             <Form.Control as="select" defaultValue="" required>
  //               <option>Maria</option>
  //               <option>Bob</option>
  //               <option>Alex</option>
  //             </Form.Control>
  //           </div>
  //         </Form.Group>

  //         <Form.Group controlId="DaySelect">
  //           <div className="dropdown_row_item">
  //             <Form.Label>Day</Form.Label>
  //             <Form.Control as="select">
  //               <option>Monday</option>
  //               <option>Tuesday</option>
  //               <option>Wednesday</option>
  //               <option>Thursday</option>
  //               <option>Friday</option>
  //             </Form.Control>
  //           </div>
  //         </Form.Group>

  //         <Form.Group controlId="TimeSelect">
  //           <div className="dropdown_row_item">
  //             <Form.Label>Time</Form.Label>
  //             <Form.Control as="select">
  //               <option>10:00</option>
  //               <option>11:00</option>
  //               <option>12:00</option>
  //               <option>13:00</option>
  //               <option>14:00</option>
  //               <option>15:00</option>
  //               <option>16:00</option>
  //               <option>17:00</option>
  //               <option>18:00</option>
  //             </Form.Control>
  //           </div>
  //         </Form.Group>
  //       </Form>
  //       <div className="new_event_button_container">
  //         <Form>
  //           <NavLink to={`/`} style={{textDecoration: 'none'}}>
  //             <Button variant="secondary" type="cancel">
  //               Cancel
  //           </Button>
  //           </NavLink>
  //         </Form>
  //         <Form>
  //           <Button type="submit">Submit</Button>
  //         </Form>
  //       </div>
  //     </div>
  //   </div>
  // );
}





