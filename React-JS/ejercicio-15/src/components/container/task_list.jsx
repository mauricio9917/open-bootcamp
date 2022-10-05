import React, { useState, useEffect } from 'react';
import { LEVELS } from '../../models/levels.enum'
import {Task} from '../../models/task.class'
import TaskComponent from '../pure/task'
import Taskform from '../pure/forms/taskForm'

//Se importa el estilo de scss
import '../../styles/task.scss'

const TaskListComponent = () => {

    const defaultTask1 = new Task('Example1', 'Description1', true, LEVELS.NORMAL)
    const defaultTask2 = new Task('Example2', 'Description2', false, LEVELS.URGENT)
    const defaultTask3 = new Task('Example3', 'Description3', false, LEVELS.BLOCKING)

    //Estado del componente
    const [tasks, setTasks] = useState([defaultTask1, defaultTask2, defaultTask3]);
    const [loading, setLoading] = useState(true);

    //Control del ciclo de vida del componente
    useEffect(() => {
        console.log('Task State has been modified')
        setTimeout(() => {
            setLoading(false)
        }, 2000)
        return () => {
            console.log('TaskList component is going to unmount')
        };
    }, [tasks]);

    function completeTask(task){
        console.log('Complete this task', task)
        const index = tasks.indexOf(task)
        const tempTasks = [...tasks]
        tempTasks[index].completed = !tempTasks[index].completed
        // we update the state of the component and it will update the iteration of the tasks in order to show the tasks updated.
        setTasks(tempTasks)
    }

    function removeTask(task){
        console.log('Delete this task', task)   
        const index = tasks.indexOf(task)
        const tempTasks = [...tasks]
        tempTasks.splice(index,1)
        setTasks(tempTasks)
    }

    function addTask(task){
        console.log('Delete this task', task)
        // const index = tasks.indexOf(task)
        const tempTasks = [...tasks]
        tempTasks.push(task)
        setTasks(tempTasks)
    }

    const Table = () => {
        return (
            <table>
                <thead>
                    <tr>
                        <th scope='row'>Title</th>
                        <th scope='row'>Description</th>
                        <th scope='row'>Priority</th>
                        <th scope='row'>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    { tasks.map((task, index) => {
                        return (
                        <TaskComponent key={index} task={task} complete={completeTask} remove={removeTask}></TaskComponent>
                        )
                    })}
                </tbody>
            </table>
        )
    }

    let tasksTable

    if(tasks.length > 0){
        tasksTable = <Table></Table>
    } else {
        tasksTable = (
            <div>
                <h3>There are no tasks to show</h3>
                <h4>Please, create one</h4>
            </div>
        )
    }

    const loadingStyle = {
        color: 'gray',
        fontSize: '30px',
        fontWeight: 'bold'
    }

    return (
        <div>
            <div className='col-12'>
                <div className='card'>
                    <div className='card-header p-3'>
                        <h5>Your tasks:</h5>
                    </div>
                    <div className='card-body' data-mdb-perfect-scrollbar='true' style={{position: 'relative', height:'400px'}}>
                        {/* TODO: Add loading spinner */}
                        {loading ? (<p style={loadingStyle}>Loading...</p>) : tasksTable}
                    </div>
                    
                </div>
            </div>
            {/* TODO: Aplicar un for/map para renderizar una lista */}
            {/* <TaskComponent task={defaultTask}></TaskComponent> */}
            <Taskform add={addTask} length={tasks.length}></Taskform>
        </div>
    );
};

export default TaskListComponent;
