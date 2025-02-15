import React, { useState } from 'react'
import NoteCard from '../../components/Cards/NoteCard'
import Navbar from '../../components/Navbar/Navbar'
import { MdDelete, MdCreate, MdAdd } from 'react-icons/md'
import AddEditNotes from './AddEditNotes'
import Modal from "react-modal";


const Home = () => {
  const [openAddEditModal,setOpenAddEditModal]=useState({
    isShown:false,
    type:"add",
    data:null,
  })
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
setOpenAddEditModal({isShown:true, type:"add", data:null})
}}><MdAdd className='text-[32px text-white]'/></button>
  <Modal
  isOpen={openAddEditModal.isShown}
  onRequestClose={()=>{
   
  }}
  style={{
      overlay:{
        backgroundColor:"rgba(0,0,0,0.2)",
      },
  }}
  contentLabel=""
  className="w-[40%] max-h-3/4 bg-white rounded-md mx-auto mt-14 p-5 overflow-scroll"
  >

<AddEditNotes
type={openAddEditModal.type}
noteData={openAddEditModal.data}
onClose={()=>{
  setOpenAddEditModal({isShown:false, type:"add", data:null})
}}
/>
</Modal>
   </>
  )
}

export default Home
