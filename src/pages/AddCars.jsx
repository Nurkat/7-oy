
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function AddCars() {
    const [imgURL,setImgURL] =useState({})
    const navigate = useNavigate()
  function  handleSubmit(e){
    e.preventDefault()
     const data ={
        
            id:Math.floor(Math.random()*10),
            name:e.target.name.value,
            surname:e.target.surname.value,
            age:e.target.age.value,
            imgUrl:imgURL
     }
     fetch("http://localhost:3000/cars", {
        method:"POST",
        body:JSON.stringify(data)
     }).then(res =>{
        setTimeout(()=>{
            e.target.reset()
            navigate(-1)
        })

     })
  }
  return (
    <div className='p-8 '>
    <form className='space-x-[12px]' onSubmit={handleSubmit}>
        <input required className='w-[200px] border-[1px] border-slate-400 p-[2]' type="text" name='carname' placeholder='Enter your Car name' />
        <input required className='w-[200px] border-[1px] border-slate-400 p-[2]' type="text" name='carRate' placeholder='Enter Car rate' />
        <input required className='w-[200px] border-[1px] border-slate-400 p-[2]' type="text" name='carViewers' placeholder='Enter your view' />
        <input required className='w-[200px] border-[1px] border-slate-400 p-[2]' type="text" name='passangers' placeholder='Enter Passanger number' />
        <input required className='w-[200px] border-[1px] border-slate-400 p-[2]' type="text" name='gearBox' placeholder='Enter GearBox' />
        <input required className='w-[200px] border-[1px] border-slate-400 p-[2]' type="text" name='carDoors' placeholder='Enter Car Doors' />
        <input required className='w-[200px] border-[1px] border-slate-400 p-[2]' type="text" name='Carprice' placeholder='Enter Car Price' />
        <input onChange={(e) =>setImgURL(URL.createObjectURL(e.target.files[0]))} className=' w-[200px] border-[1px] border-slate-400 p-[2]' type="file" name='age' placeholder='Enter your Car img' />
        <button type='submit' className='w-[200px] rounded-[10px] mt-[20px] ml-[10px]  p-[10px] border-[1px] border-slate-400 text-white bg-slate-400 text-[16px]'>Save</button>
    </form>
    </div>
  )
}

export default AddCars