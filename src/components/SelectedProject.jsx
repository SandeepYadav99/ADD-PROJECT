import React from 'react'
import Tasks from './Tasks'

const SelectedProject = ({project, deleteProject, addTask, deleteTask, tasks}) => {


    // const formatDate = new Date(project.dueDate).toLocaleDateString("en_US", {
    //     year:"numeric",
    //     month:"short",
    //     day:"numeric"
    // })
  return (
    <div className='w-[35rem] mt-8'>
        <header className='border-b-2 border-stone-300 mb-4 pb-4'>
           <div className='flex items-center justify-between'>
            <h1 className='text-xl font-bold'>{project.title}</h1>
            <button className='text-stone-600 hover:text-stone-950 ' onClick={deleteProject}>Delete</button>
           </div>
           <p className='mb-4 text-stone-500'>{project?.dueDate}</p>
           <p className='text-stone-600 whitespace-pre-wrap w-72'>{project.newDescription}</p>
        </header>
        <Tasks onAddTask={addTask} onDeleteTask={deleteTask} tasks={tasks}/>
    </div>
  )
}

export default SelectedProject