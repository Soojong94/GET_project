import React, { useState } from 'react';
import './App.css';
import Routing from './routing/Routing';


function App() {

  const [events, setEvents] = useState([
    { title: 'Event 1', start: '2022-03-01' },
    { title: 'Event 2', start: '2022-03-02' }
  ]);

  const handleNewSchedule = (newEvent) => {
    console.log('handle New Schedule Fuc',events)
    const { calendarType, title, startDate, endDate, time, location, description } = newEvent;
    const start = `${startDate}T${time || '00:00'}`;
    const end = endDate ? `${endDate}T${time || '00:00'}` : null;

    const event = {
      title,
      start,
      end,
      calendarType,
      location,
      description
    };

    setEvents([...events, event]);
  };

  return (
    <div>

        <Routing events={events} handleNewSchedule={handleNewSchedule}/>

    
    </div>
  );
}

export default App;