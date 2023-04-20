import {useState} from 'react';
import { Form } from "./components/Form";
import { Todos } from "./components/Todos";
import { Provider } from 'react-redux';
import { store } from './redux/store';

function App() {
  // update form visibility state
  const [editFormVisibility, setEditFormVisibility]=useState(false);

  // editTodo state
  const [editTodo, setEditTodo]=useState('');

  // this function will trigger when someone clicks the edit icon
  const handleEditClick=(todo)=>{
    setEditFormVisibility(true);
    setEditTodo(todo);
  }

  // back button click
  const cancelUpdate=()=>{
    setEditFormVisibility(false);
  }

    return (
      <Provider store={store}>
    <div className="wrapper">
      <br></br>
      <h2 className="text-center">Todo app using redux</h2>
      <Form editFormVisibility={editFormVisibility} editTodo={editTodo}
      cancelUpdate={cancelUpdate}/>
      <Todos handleEditClick={handleEditClick} editFormVisibility={editFormVisibility}/>
    </div>
    </Provider>
  );
}

export default App;

