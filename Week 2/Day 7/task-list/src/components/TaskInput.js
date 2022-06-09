import React, {useState} from 'react'

export default function TaskInput(props) {

  const [task, setTask] = useState(""); 

  function onTaskFormSubmit(e) {
        e.preventDefault();

        props.onTaskCreate(task);

        setTask('');
  }

  return (
    <div>
        <form onSubmit={onTaskFormSubmit}>
            <div className="input-group mb-3">
                <input type="text" value={task} 
                onChange={(e) => setTask(e.target.value)}
                class="form-control" placeholder="Add a Task"/>
                <button className="btn btn-outline-secondary" type="submit">+</button>
            </div>
        </form>
        

    </div>
  )
}
