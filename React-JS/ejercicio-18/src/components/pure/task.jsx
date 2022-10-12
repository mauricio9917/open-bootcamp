import React, {useEffect} from 'react';
import PropTypes from 'prop-types';
import {Task} from '../../models/task.class'
import {LEVELS} from "../../models/levels.enum"

// se importa la hoja de estilos de css
import '../../styles/task.scss'


const TaskComponent = ({task, complete, remove}) => {

    useEffect(() => {
        console.log('Created Task')
        return () => {
            console.log(`Task: ${task.name} is going to unmount`)
        };
    }, [task]);

    /**
     * Function that returns a badge depending on the level of the task
     */
    function taskLevelBadge() {
        switch (task.level) {
            case LEVELS.NORMAL:
                return(
                <h6 className='mb-0'>
                    <span className='badge bg-primary'>
                        {task.level}
                    </span>
                </h6>)
            case LEVELS.URGENT:
                return(
                <h6 className='mb-0'>
                    <span className='badge bg-warning'>
                        {task.level}
                    </span>
                </h6>)
            case LEVELS.BLOCKING:
                return(
                <h6 className='mb-0'>
                    <span className='badge bg-danger'>
                        {task.level}
                    </span>
                </h6>)
            default:
                break;
        }
    }

    /**
     * Function that returns icon depending on completation of the task
     */
    function taskCompletedIcon(){
        if(task.completed){
            return (<i onClick={() => complete(task)} className='bi-toggle-on task-action' style={{color:'green'}}></i>)
        } else {
            return (<i onClick={() => complete(task)} className='bi-toggle-off task-action' style={{color:'gray'}}></i>)
        }
    }

    const taskCompleted = {
        color:'green',
        fontWeight: 'bold',
        textDecoration: 'line-through',
    }

    const taskPending = {
        color:'red',
        fontWeight: 'bold'
    }

    return (
        <tr className="fw-normal" style={task.completed ? taskCompleted : taskPending}>
            <th>
                <span className="ms-2">{task.name}</span>
            </th>
            <td className="align-middle">
                <span>{task.description}</span>
            </td>
            <td className="align-middle">
                {/* execution of function to return badge element */}
                {taskLevelBadge()}
            </td>
            <td className="align-middle">
                {/* Execution of function to return icon depending the completion*/}
                {taskCompletedIcon()}
                {/* <span>{task.completed ? 'Completed' : 'Failed'}</span> */}
                <i className='bi-trash task-action' style={{color:'tomato'}} onClick={() => remove(task)}></i>
            </td>
        </tr>
        // <div>
        //     <h2 className='task-name'>
        //         Nombre: {task.name}
        //     </h2>
        //     <h3>
        //         Descripcion: {task.description}
        //     </h3>
        //     <h4>
        //         Level: {task.level}
        //     </h4>
        //     <h5>
        //         This class is: {task.completed ? 'COMPLETED':'PENDING'}
        //     </h5>
        // </div>
    );
};


TaskComponent.propTypes = {
    task: PropTypes.instanceOf(Task).isRequired,
    complete: PropTypes.func.isRequired,
    remove: PropTypes.func.isRequired
};


export default TaskComponent;
