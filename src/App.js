import { useState } from 'react'
import Header from './components/Header'
import Tasks from './components/Tasks'

const App = () => {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: 'Doctors Appointment',
      day: 'Saturday',
      reminder: true,
    },
    {
      id: 2,
      text: 'Dentist Appointment',
      day: 'Tuesday',
      reminder: true,
    },
    {
      id: 3,
      text: 'Gym Class',
      day: 'Sunday',
      reminder: false,
    },
  ])

  return (
    <div className="container">
      <Header />
      <Tasks tasks={tasks} />
    </div>
  );
}



export default App;
