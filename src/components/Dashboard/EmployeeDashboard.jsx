import React, {useContext} from 'react';
import Header from '../others/Header';
import TaskListNumbers from '../others/TaskListNumbers';
import TaskList from '../TaskList/TaskList';
import { AuthContext } from '../../context/AuthProvider';

const EmployeeDashboard = ({changeUser, data}) => {
    const [userData, setUserData] = useContext(AuthContext);

    const onTaskUpdate = (taskId, newStatus) => {
        const updatedData = userData.map((employee) => {
            if (employee.id === data.id) {
                const updatedTasks = employee.tasks.map((task) => {
                    if (task.taskTitle === taskId) {
                        return { ...task, ...newStatus };
                    }
                    return task;
                });

                const taskCounts = updatedTasks.reduce(
                    (acc, task) => {
                        if (task.active) acc.active++;
                        if (task.newTask) acc.newTask++;
                        if (task.completed) acc.completed++;
                        if (task.failed) acc.failed++;
                        return acc;
                    },
                    { active: 0, newTask: 0, completed: 0, failed: 0 }
                );
                return { ...employee, tasks: updatedTasks, taskCounts };
            }
            return employee;
        });

        setUserData(updatedData);
    };
    return (
        <div className='p-10 bg-[#1C1C1C]'>
            <Header changeUser={changeUser} data={data}/>
            <TaskListNumbers data={data}/>
            <TaskList data={data} onTaskUpdate={onTaskUpdate}/>
        </div>
    )
}

export default EmployeeDashboard