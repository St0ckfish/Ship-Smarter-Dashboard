import Link from 'next/link';
import React from 'react'
import TableComponent from './TableComponent';

interface ThirdStepProps {
    handleNext: () => void;
    handlePrev: () => void;
}

const ThirdStep: React.FC<ThirdStepProps> = ({ handleNext, handlePrev }) => {
    return (
        <div>
            <h1 className='text-center text-lg md:text-2xl lg:text-[32px] font-semibold	mb-16 text-[#2C2C2C]'>Cost of tracks</h1>

            <div className='border border-gray-300 p-5'>
                <div className='flex justify-between flex-wrap items-center'>
                    <div className='relative py-2 px-5 rounded-md border-gray-300 border'>
                        <svg className='absolute left-3 top-3' width="19" height="18" viewBox="0 0 19 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M17.1 18L10.8 11.7C10.3 12.1 9.725 12.4167 9.075 12.65C8.425 12.8833 7.73333 13 7 13C5.18333 13 3.64583 12.3708 2.3875 11.1125C1.12917 9.85417 0.5 8.31667 0.5 6.5C0.5 4.68333 1.12917 3.14583 2.3875 1.8875C3.64583 0.629167 5.18333 0 7 0C8.81667 0 10.3542 0.629167 11.6125 1.8875C12.8708 3.14583 13.5 4.68333 13.5 6.5C13.5 7.23333 13.3833 7.925 13.15 8.575C12.9167 9.225 12.6 9.8 12.2 10.3L18.5 16.6L17.1 18ZM7 11C8.25 11 9.3125 10.5625 10.1875 9.6875C11.0625 8.8125 11.5 7.75 11.5 6.5C11.5 5.25 11.0625 4.1875 10.1875 3.3125C9.3125 2.4375 8.25 2 7 2C5.75 2 4.6875 2.4375 3.8125 3.3125C2.9375 4.1875 2.5 5.25 2.5 6.5C2.5 7.75 2.9375 8.8125 3.8125 9.6875C4.6875 10.5625 5.75 11 7 11Z" fill="#98A1B3" />
                        </svg>
                        <input className='ms-5 xl:w-[350px] outline-0' placeholder='Search' type="text" name="" id="" />
                    </div>
                    <Link className='flex items-center hover:opacity-70 text-[#6315DB] border border-[#6315DB] px-7 py-2 rounded-md font-semibold' href={"/"}>
                        <svg className='me-2' width="13" height="12" viewBox="0 0 13 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M5.66699 6.83317H0.666992V5.1665H5.66699V0.166504H7.33366V5.1665H12.3337V6.83317H7.33366V11.8332H5.66699V6.83317Z" fill="#6315DB" />
                        </svg>
                        Add Track
                    </Link>
                </div>

                <TableComponent/>

            </div>

            <div className='flex  items-end flex-col-reverse md:flex-row justify-end'>
                <button onClick={handlePrev} className='md:me-5 flex items-center text-base mt-7 md:mt-10 hover:opacity-70 border border-[#6315DB]  text-[#6315DB] px-5 md:px-10 py-2 md:py-3 rounded-lg font-medium '>
                    <svg className='me-4' width="10" height="14" viewBox="0 0 10 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1.81351 9L9.52888 16.7154C9.67631 16.8628 9.74907 17.0401 9.74716 17.2471C9.74522 17.4542 9.67054 17.6314 9.52311 17.7788C9.37567 17.9263 9.19843 18 8.99138 18C8.78433 18 8.60709 17.9263 8.45966 17.7788L0.823105 10.1365C0.661572 9.975 0.543621 9.79487 0.469254 9.59615C0.394904 9.39743 0.35773 9.19872 0.35773 9C0.35773 8.80128 0.394904 8.60257 0.469254 8.40385C0.543621 8.20513 0.661572 8.025 0.823105 7.86345L8.4654 0.221149C8.61284 0.0737152 8.78912 0.000957489 8.99426 0.00287437C9.19939 0.00480843 9.37567 0.0794907 9.52311 0.226925C9.67054 0.374359 9.74426 0.5516 9.74426 0.75865C9.74426 0.9657 9.67054 1.14294 9.52311 1.29037L1.81351 9Z" fill="#6315DB" />
                    </svg>
                    PREVIOUS
                </button>
                <button onClick={handleNext} className=' flex items-center text-base mt-5 md:mt-10 hover:opacity-70 bg-[#6315DB] text-white px-10  py-2 md:py-3 rounded-lg font-medium '>
                    NEXT
                    <svg className='ms-5' width="12" height="15" viewBox="0 0 10 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M8.18652 9L0.471151 1.28463C0.323717 1.13719 0.250958 0.959941 0.252875 0.752875C0.254808 0.545825 0.329492 0.368584 0.476925 0.22115C0.624359 0.0737169 0.8016 0 1.00865 0C1.2157 0 1.39294 0.0737169 1.54038 0.22115L9.17693 7.86345C9.33846 8.025 9.45641 8.20513 9.53078 8.40385C9.60513 8.60257 9.6423 8.80128 9.6423 9C9.6423 9.19872 9.60513 9.39743 9.53078 9.59615C9.45641 9.79487 9.33846 9.975 9.17693 10.1365L1.53463 17.7789C1.38719 17.9263 1.21091 17.999 1.00577 17.9971C0.800642 17.9952 0.624359 17.9205 0.476925 17.7731C0.329492 17.6256 0.255775 17.4484 0.255775 17.2414C0.255775 17.0343 0.329492 16.8571 0.476925 16.7096L8.18652 9Z" fill="white" />
                    </svg>
                </button>
            </div>

        </div>
    )
}

export default ThirdStep
