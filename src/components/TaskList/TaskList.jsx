import React from 'react'
import AcceptTask from './AcceptTask'
import NewTask from './NewTask'
import CompletedTask from './CompletedTask'
import FailedTask from './FailedTask'

const TaskList = ({data, onTaskUpdate}) => {
    return (
        <div id='taskList' className='h-[300px] overflow-x-auto flex items-center justify-start gap-5 flex-nowrap w-full py-5 mt-10'>
            {data.tasks.map((elem, idx)=>{
                if (elem.active) {
                    return <AcceptTask key={idx} data={elem} onTaskUpdate={onTaskUpdate} />;
                } else if (elem.newTask) {
                    return <NewTask key={idx} data={elem} onTaskUpdate={onTaskUpdate} />;
                } else if (elem.completed) {
                    return <CompletedTask key={idx} data={elem} />;
                } else if (elem.failed) {
                    return <FailedTask key={idx} data={elem} />;
                }
            })}
        </div>
    )
}

export default TaskList