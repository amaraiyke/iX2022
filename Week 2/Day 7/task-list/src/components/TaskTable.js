import React from 'react'

export default function TaskTable(props) {


    return (
        <div>
            <table className="table">
            <thead>
                <tr>
                    <th>#</th>
                    <th>Name</th>
                    <th>Completed</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                {/* <tr>
                        <th scope="row">1</th>
                        <td>Mark</td>
                        <td>Otto</td>
                        <td>@mdo</td>
                    </tr> */}
                {
                    props.tasks.map((task) => 
                        <tr>
                            <th>{task.id}</th>
                            <td>{task.name}</td>
                            <td>
                                <div onClick={(e) => props.onTaskCompleteToggle(task.id)}>
                                    <i className={ task.complete ? "bi bi-circle-fill" : "bi bi-circle"
                                    }></i>
                                </div>
                            </td>

                            <td>
                            <i className="bi bi-trash" onClick={() => props.onTaskRemove(task.id)}></i>
                                {/* <div onClick={() => props.onTaskRemove(task.id)}>
                                    <i className="bi bi-trash" onClick={() => props.onTaskRemove(task.id)}></i>
                                </div> */}
                            </td>
                        </tr>
                    )
                }   
        </tbody>
        </table>
        </div>
    )
}
