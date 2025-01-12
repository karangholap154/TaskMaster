import React from 'react'
import Header from '../others/Header'
import CreateTask from '../others/CreateTask'
import AllTask from '../others/AllTask'

const AdminDashboard = ({changeUser, data}) => {
    return (
        <div className='h-screen w-full p-10'>
            <Header changeUser={changeUser} data={data}/>
            <CreateTask/>
            <AllTask/>
        </div>
    )
}

export default AdminDashboard