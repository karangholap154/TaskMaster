import React from 'react';

const CompletedTask = ({data}) => {
    return (
        <div className='flex-shrink-0 h-full w-[300px] p-5 bg-blue-400 rounded-xl'>
                <div className='flex justify-between items-center'>
                    <h3 className='bg-blue-600 text-sm px-3 py-1 rounded'>{data.category}</h3>
                    <h4 className='text-sm'>{data.taskDate}</h4>
                </div>
                <h2 className='mt-5 text-xl font-semibold'>{data.taskTitle}</h2>
                <p className='text-sm mt-2'>
                {data.taskDescription}
                </p>
                <div className='mt-2'>
                    <button className='w-full bg-blue-500 rounded  py-1 px-2 text-xs'>Complete</button>
                </div>
            </div>
    )
}

export default CompletedTask