import React,{useState, useEffect} from 'react'
import { useDispatch } from 'react-redux';
import { addTodo, handleEditSubmit } from '../redux/todoapp/actions';
import {plus} from 'react-icons-kit/feather/plus'
import Icon from 'react-icons-kit';

export const Form = ({editFormVisibility, editTodo, cancelUpdate}) => {

  // dispatch function to dispatch an action
  const dispatch = useDispatch();

  // todo value state for normal add todo form
  const [todoValue, setTodoValue]=useState('');

  // state for if someone changes the (to edit) value in update form
  const [editValue, setEditValue]=useState('');

  // useEffect is to show the (to edit) value in update form
  useEffect(()=>{
    setEditValue(editTodo.todo);
  },[editTodo])

  // normal add todo submit
  const handleSubmit=(e)=>{
      e.preventDefault();
      let date = new Date();
      let time = date.getTime();
      let todoObj={
          id: time,
          todo: todoValue,
          completed: false
      }
      setTodoValue('');
      dispatch(addTodo(todoObj))
  }

  // update form submit
  const editSubmit = (e) =>{
    e.preventDefault();
    let editedObj={
      id: editTodo.id,
      todo: editValue,
      completed: false
    }
    dispatch(handleEditSubmit(editedObj))
  }

  return (
    <>
      {editFormVisibility===false?(
        <form className='form-group custom-form' onSubmit={handleSubmit}>
          <label><h4>Start your productive day</h4></label>
          <br />
          <div className='input-and-btn'>
              <input type="text" className='form-control' required
              value={todoValue} onChange={(e)=>setTodoValue(e.target.value)}/>
              <button type="submit" className='btn btn-primary btn-md rounded-circle' style={{'marginLeft':"10px", 'color':"whitesmoke", 'paddingBottom':"10px"}}><Icon icon={plus} size={24}/></button>
          </div>
        </form>
      ):(
        <form className='form-group custom-form' onSubmit={editSubmit}>
          <label>Update your todo-items</label>
          <div className='input-and-btn'>
              <input type="text" className='form-control' required
              value={editValue||""} onChange={(e)=>setEditValue(e.target.value)}/>
              <button type="submit" className='btn btn-primary btn-md'>UPDATE</button>
          </div>
          <button type="button" className='btn btn-warning btn-md back-btn'
          onClick={cancelUpdate}>BACK</button>
        </form>
      )}
    </>
  )
}
