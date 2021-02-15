import './App.css';
import React, { useState } from 'react';
import { Route, BrowserRouter, Switch } from 'react-router-dom';
import { Calendar } from './components/Calendar';
import { NewEvent } from './components/NewEvent';
import allParticipants from './data/dataParticipants.json';
import dataEvents from './data/dataEvents.json';
import _ from 'lodash';

export const App = () => {
  const [participants, setParticipants] = useState([]);
  const [day, setDay] = useState();
  const [time, setTime] = useState();
  const [data, setData] = useState(dataEvents);
  console.log('App_state===', data);

  const deleteEvent = (day, time) => {
    let newState = _.cloneDeep(data);
    _.unset(newState, day + '.' + time);
    setData(newState);
  };

  const getNewEventData = (newEvent) => {
    setData({ ...data, newEvent });
  };

  return (
    <BrowserRouter>
      <Switch>
        <Route
          exact
          path="/"
          render={() => <Calendar data={data} deleteEvent={deleteEvent} />}
        />
        <Route
          path="/create-event"
          render={() => (
            <NewEvent
              allParticipants={allParticipants}
              participants={participants}
              setParticipants={setParticipants}
              getNewEventData={getNewEventData}
              day={day}
              setDay={setDay}
              time={time}
              setTime={setTime}
            />
          )}
        />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
