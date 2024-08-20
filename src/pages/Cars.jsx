import React, {useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import FirstCar from '../assets/images/firstcar.svg'
import SecondCar from '../assets/images/secondcars.svg'
import ThirdCar from '../assets/images/thirdcar.svg'
import FourthCar from '../assets/images/fourthcar.svg'
import Star from '../assets/images/star.svg'
import AirIcon from '../assets/images/airicon.svg'
import DoorsIcon from '../assets/images/dooricon.svg'
import BoxIcon from '../assets/images/boxicon.svg'
import User from '../assets/images/user.svg'
function Cars() {
const [cars,setCars] =useState([])

useEffect(()=>{
    fetch("http://localhost:3000/cars").then(res =>res.json()).then(data =>setCars(data))

},[])
  return (
    <>
     <div className='flex flex-col items-center mt-[30px]'>
    <Link to={"add"} className='text-[14px] font-medium text-[#1572D3] bg-[#1572D31A] w-[130px] text-center rounded-[8px] p-[16px]'>Add Cars</Link>
    <h1 className='text-[38px] font-medium mb-[40px]'>Most popular cars rental deals</h1>
     </div>
     <div className='flex space-x-[32px] px-[30px]'>
     <ul className='px-[50px] w-[280px] shadow-md rounded-[10px] '>
        <li>
            <img src={FirstCar} alt="FisrCar" width={208} height={104}/>
            <h2 className=' text-[16px] font-medium mt-[25px] mb-[12px]'>Jaguar XE L P250</h2>
            <div className='flex items-center mb-[16px] '>
            <img src={Star} alt="star" width={16} height={16} />
            <p>4.8 (2.436 reviews)</p>
            </div>
            <div className='flex items-center space-x-[19px] mb-[24px] w-[256px]'>
                <div className='mb-[8px] space-y-3  '>
            <div className='flex items-center space-x-2'>
            <img src={User} alt="Icons"width={20} height={20}/>
            <p className='text-[#959595] text-[12px] font-normal'>4 Passangers</p>
            </div>
            <div className='flex items-center space-x-2'>
            <img src={AirIcon} alt="Icons" width={20} height={20}/>
            <p className='text-[#959595] text-[12px] font-normal'>Air Conditioning</p>
            </div>
                </div>
                <div className='mb-[8px] space-y-3'>
            <div className='flex items-center'>
            <img src={BoxIcon} alt="Icons" width={20} height={20}/>
            <p className='text-[#959595] text-[12px] font-normal' >Auto</p>
            </div>
            <div className='flex items-center'>
            <img src={DoorsIcon} alt="Icons" width={20} height={20}/>
            <p className='text-[#959595] text-[12px] font-normal'>4 Doors</p>
            </div>
         <div>

         </div>
            </div>
           
                </div>
        </li>
        <div className='flex justify-between border-t-2 '>
        <p className=''>Price</p>
        <span>$1800/day</span>
        </div>
        <button className='text-white w-[208px] mt-[24px] rounded-[10px] bg-[#1572D3] p-[8px] mb-[10px]'>Rent Now</button>
     </ul>
     <ul className='px-[50px] w-[280px] shadow-md rounded-[10px] '>
        <li>
            <img src={SecondCar} alt="FisrCar" width={208} height={104}/>
            <h2 className=' text-[16px] font-medium mt-[25px] mb-[12px]'>Audi R8</h2>
            <div className='flex items-center mb-[16px] '>
            <img src={Star} alt="star" width={16} height={16} />
            <p>4.6 (2.436 reviews)</p>
            </div>
            <div className='flex items-center space-x-[19px] mb-[24px] w-[256px]'>
                <div className='mb-[8px] space-y-3  '>
            <div className='flex items-center space-x-2'>
            <img src={User} alt="Icons"width={20} height={20}/>
            <p className='text-[#959595] text-[12px] font-normal'>2 Passangers</p>
            </div>
            <div className='flex items-center space-x-2'>
            <img src={AirIcon} alt="Icons" width={20} height={20}/>
            <p className='text-[#959595] text-[12px] font-normal'>Air Conditioning</p>
            </div>
                </div>
                <div className='mb-[8px] space-y-3'>
            <div className='flex items-center'>
            <img src={BoxIcon} alt="Icons" width={20} height={20}/>
            <p className='text-[#959595] text-[12px] font-normal' >Auto</p>
            </div>
            <div className='flex items-center'>
            <img src={DoorsIcon} alt="Icons" width={20} height={20}/>
            <p className='text-[#959595] text-[12px] font-normal'>2 Doors</p>
            </div>
         <div>

         </div>
            </div>
           
                </div>
        </li>
        <div className='flex justify-between border-t-2 '>
        <p className=''>Price</p>
        <span>$2100/day</span>
        </div>
        <button className='text-white w-[208px] mt-[24px] rounded-[10px] bg-[#1572D3] p-[8px] mb-[10px]'>Rent Now</button>
     </ul>
     <ul className='px-[50px] w-[280px] shadow-md rounded-[10px] '>
        <li>
            <img src={ThirdCar} alt="FisrCar" width={208} height={104}/>
            <h2 className=' text-[16px] font-medium mt-[25px] mb-[12px]'>BMW M3</h2>
            <div className='flex items-center mb-[16px] '>
            <img src={Star} alt="star" width={16} height={16} />
            <p>4.6 (2.436 reviews)</p>
            </div>
            <div className='flex items-center space-x-[19px] mb-[24px] w-[256px]'>
                <div className='mb-[8px] space-y-3  '>
            <div className='flex items-center space-x-2'>
            <img src={User} alt="Icons"width={20} height={20}/>
            <p className='text-[#959595] text-[12px] font-normal'>4 Passangers</p>
            </div>
            <div className='flex items-center space-x-2'>
            <img src={AirIcon} alt="Icons" width={20} height={20}/>
            <p className='text-[#959595] text-[12px] font-normal'>Air Conditioning</p>
            </div>
                </div>
                <div className='mb-[8px] space-y-3'>
            <div className='flex items-center'>
            <img src={BoxIcon} alt="Icons" width={20} height={20}/>
            <p className='text-[#959595] text-[12px] font-normal' >Auto</p>
            </div>
            <div className='flex items-center'>
            <img src={DoorsIcon} alt="Icons" width={20} height={20}/>
            <p className='text-[#959595] text-[12px] font-normal'>4 Doors</p>
            </div>
         <div>

         </div>
            </div>
           
                </div>
        </li>
        <div className='flex justify-between border-t-2 '>
        <p className=''>Price</p>
        <span>$1600/day</span>
        </div>
        <button className='text-white w-[208px] mt-[24px] rounded-[10px] bg-[#1572D3] p-[8px] mb-[10px]'>Rent Now</button>
     </ul>
     <ul className='px-[50px] w-[280px] shadow-md rounded-[10px] '>
        <li>
            <img src={FourthCar} alt="FisrCar" width={208} height={104}/>
            <h2 className=' text-[16px] font-medium mt-[25px] mb-[12px]'>Lamborghini Huracan</h2>
            <div className='flex items-center mb-[16px] '>
            <img src={Star} alt="star" width={16} height={16} />
            <p>4.6 (2.436 reviews)</p>
            </div>
            <div className='flex items-center space-x-[19px] mb-[24px] w-[256px]'>
                <div className='mb-[8px] space-y-3  '>
            <div className='flex items-center space-x-2'>
            <img src={User} alt="Icons"width={20} height={20}/>
            <p className='text-[#959595] text-[12px] font-normal'>2 Passangers</p>
            </div>
            <div className='flex items-center space-x-2'>
            <img src={AirIcon} alt="Icons" width={20} height={20}/>
            <p className='text-[#959595] text-[12px] font-normal'>Air Conditioning</p>
            </div>
                </div>
                <div className='mb-[8px] space-y-3'>
            <div className='flex items-center'>
            <img src={BoxIcon} alt="Icons" width={20} height={20}/>
            <p className='text-[#959595] text-[12px] font-normal' >Auto</p>
            </div>
            <div className='flex items-center'>
            <img src={DoorsIcon} alt="Icons" width={20} height={20}/>
            <p className='text-[#959595] text-[12px] font-normal'>2 Doors</p>
            </div>
         <div>

         </div>
            </div>
           
                </div>
        </li>
        <div className='flex justify-between border-t-2 '>
        <p className=''>Price</p>
        <span>$2300/day</span>
        </div>
        <button className='text-white w-[208px] mt-[24px] rounded-[10px] bg-[#1572D3] p-[8px] mb-[10px]'>Rent Now</button>
     </ul>
     </div>
     
    </>
  )
}

export default Cars