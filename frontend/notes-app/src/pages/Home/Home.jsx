import React from 'react'
import NoteCard from '../../components/Cards/NoteCard'
import Navbar from '../../components/Navbar/Navbar'
import { MdDelete, MdCreate, MdAdd } from 'react-icons/md'
import AddEditNotes from './AddEditNotes'


const Home = () => {
  return (
   <>
  <Navbar/>
  <div className='container mx-auto'>
    <div className='grid grid-cols-3 gap-4 mt-8'>
    <NoteCard
    title="Meeting"
    date="20th April 2025"
    content="Meeting with client"
     tags="#meeting"        
      isPinned={true}
      onEdit={()=>{

      }}
      onDelete={()=>{

      }}
       onPinNote={()=>{

       }}
    />

    </div>
  </div>
<button className='w-16 h-16 flex items-center justify-center rounded-2xl bg-blue-500 hover:bg-blue-600 text-white absolute right-10 bottom-10' onClick={()=>{

}}><MdAdd className='text-[32px text-white]'/></button>

<AddEditNotes/>
   </>
  )
}

export default Home
