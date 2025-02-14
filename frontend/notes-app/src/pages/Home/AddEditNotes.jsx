import React from 'react'
import TagInput from '../../components/Input/TagInput'

const AddEditNotes = () => {
  return (
    <div>
      <div className='flex flex-col gap-2'>
        <label className='text-xs text-slate-400'>Title</label>
        <input type="text" placeholder='Enter title |'  className='text-2xl text-slate-400 outline-none'/>

      </div>
      <div className='flex flex-col gap-2 mt-4'>
        <label className='text-xs text-slate-400' >CONTENT</label>
        <textarea name="" id="" type='text' className='text-sm text-slate-950 outline-none bg-slate-50 p-2 rounded' placeholder='Content' rows={10}></textarea>
      </div>
      <div className='mt-3'>
        <label className='text-xs text-slate-400'>Tags</label> 
       <TagInput/>
        </div>
        <button className='w-full bg-blue-500 font-medium mt-5 p-3' onClick={()=>{
             
        }}>ADD</button>
      
    </div>
  )
}

export default AddEditNotes
