"use client"
import React, { useState } from 'react'
import style from "./style.module.css"
import '../globals.css'
import FirstStep from './components/FirstStep';
import SecoundStep from './components/SecoundStep';
import LastStep from './components/LastStep';
import FourthStep from './components/FourthStep';
import ThirdStep from './components/Third';

function page() {

  const [activeStep, setActiveStep] = useState(2);

  const handleNext = () => {
    setActiveStep((cur) => cur + 1)
  }
  const handlePrev = () => {
    setActiveStep((cur) => cur - 1)
  }

  const steps = [
    {
      step: 1,
      ele: <FirstStep handleNext={handleNext} />
    },
    {
      step: 2,
      ele: <SecoundStep handlePrev={handlePrev} handleNext={handleNext} />
    },
    {
      step: 3,
      ele: <ThirdStep handlePrev={handlePrev} handleNext={handleNext} />
    },
    {
      step: 4,
      ele: <FourthStep handleNext={handleNext} />
    },
    {
      step: 5,
      ele: <LastStep  />
    }
  ];

  return (
    <main>
      <div className={`${style.bgLeftSide}   p-5  h-screen md:w-[500px]`}>

      </div>
      <div className=' py-10 p-5 w-[90%] md:w-[75%] bg-white h-[700px] sm:h-[750px] md:h-[800px]  overflow-auto shadow-2xl rounded-xl absolute top-1/2 bottom-1/2 left-1/2 right-1/2 -translate-x-1/2 -translate-y-1/2 '>
        <div className='flex justify-center items-center'>
          <div className='flex absolute left-5 top-0 flex-col justify-around h-full'>
            {steps.map((item, index) => (
              <div className='flex  items-center' key={index}>
                <div className={`cursor-pointer transition-all font-semibold duration-300 px-3 py-1  md:text-lg my-5 md:p-1.5 md:px-4 rounded-full shadow-md shadow-[#00000040] ${activeStep >= index
                  ? 'bg-[#EF4887] text-white'
                  : 'bg-[#F9F9F9] text-[#6315DB] '
                  }`}
                  onClick={() => setActiveStep(index)}
                >
                  {item.step}
                </div>
                
              </div>
            ))}
          </div>

          <div className=' w-[75%]  p-3 '>
            {steps[activeStep].ele}
          </div>
        </div>

      </div>
    </main>
  )
}

export default page
