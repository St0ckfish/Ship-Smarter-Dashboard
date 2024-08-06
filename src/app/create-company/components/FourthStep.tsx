import React from 'react'
interface FourthStepProps {
    handleNext: () => void;
}

const FourthStep: React.FC<FourthStepProps> = ({ handleNext }) => {
    return (
        <div>
            <h1 className='text-center text-lg md:text-2xl lg:text-[32px] font-semibold	mb-16 text-[#2C2C2C]'>Add More Information</h1>
            <div>
                <div className='flex flex-col'>
                    <label className='mb-3 font-semibold' htmlFor="photos">Upload photos</label>
                    <input id='photos' className='xl:w-1/2 px-3 py-5 rounded-md border border-gray-300 ' type="file" />
                </div>
                <div className='grid lg:grid-cols-2 gap-10 mt-10'>
                    <div>
                        <div className='flex flex-col '>
                            <label className='mb-3 font-semibold' htmlFor="about">About company</label>
                            <textarea id='about' placeholder='Type about company...' className='w-full h-[100px] px-3 py-4 rounded-md border border-gray-300 outline-[#EF4887]' />
                        </div>
                        <div className='flex flex-col my-8'>
                            <label className='mb-3 font-semibold' htmlFor="advantages">Advantages</label>
                            <textarea id='advantages' placeholder='Type advantages...' className='w-full h-[100px] px-3 py-4 rounded-md border border-gray-300 outline-[#EF4887]'/>
                        </div>
                       
                    </div>
                    <div>
                        <div className='flex flex-col'>
                            <label className='mb-3 font-semibold' htmlFor="description">Description</label>
                            <textarea id='description' placeholder='Type some description...' className='w-full h-[100px] px-3 py-4 rounded-md border border-gray-300 outline-[#EF4887]'  />
                        </div>
                        <div className='flex flex-col my-8'>
                            <label className='mb-3 font-semibold' htmlFor="disadvantages">Disadvantages</label>
                            <textarea id='disadvantages' placeholder='Type disadvantages...' className='w-full h-[100px] px-3 py-4 rounded-md border border-gray-300 outline-[#EF4887]'  />
                        </div>
                       
                    </div>

                </div>


            </div>

            <div className='flex items-end flex-col-reverse md:flex-row justify-end'>

                <button onClick={handleNext} className=' flex items-center text-base mt-5 md:mt-10 hover:opacity-70 border md:me-5 border-[#6315DB] text-[#6315DB] px-16 py-3 rounded-lg font-medium '>
                    skip
                    
                </button>
                <button onClick={handleNext} className=' flex items-center text-base md:mt-10 hover:opacity-70 bg-[#6315DB] text-white px-11 py-3 rounded-lg font-medium '>
                    NEXT
                    <svg className='ms-5' width="12" height="15" viewBox="0 0 10 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M8.18652 9L0.471151 1.28463C0.323717 1.13719 0.250958 0.959941 0.252875 0.752875C0.254808 0.545825 0.329492 0.368584 0.476925 0.22115C0.624359 0.0737169 0.8016 0 1.00865 0C1.2157 0 1.39294 0.0737169 1.54038 0.22115L9.17693 7.86345C9.33846 8.025 9.45641 8.20513 9.53078 8.40385C9.60513 8.60257 9.6423 8.80128 9.6423 9C9.6423 9.19872 9.60513 9.39743 9.53078 9.59615C9.45641 9.79487 9.33846 9.975 9.17693 10.1365L1.53463 17.7789C1.38719 17.9263 1.21091 17.999 1.00577 17.9971C0.800642 17.9952 0.624359 17.9205 0.476925 17.7731C0.329492 17.6256 0.255775 17.4484 0.255775 17.2414C0.255775 17.0343 0.329492 16.8571 0.476925 16.7096L8.18652 9Z" fill="white" />
                    </svg>
                </button>
            </div>

        </div>
    )
}

export default FourthStep
