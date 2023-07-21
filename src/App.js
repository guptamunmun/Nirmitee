
import './App.css';
import TaskForm from './components/Task/Home';
import CreateUser from './components/User/CreateUser';
import LoginUser from './components/User/LoginUser';



function App() {
  return (
    <div className="App">
      <CreateUser/>
      <LoginUser/>
    <TaskForm/>

        </div>
         
         )
}

export default App;
