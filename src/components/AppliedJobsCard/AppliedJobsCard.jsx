import React from 'react';
import { MapPinIcon, CurrencyDollarIcon } from '@heroicons/react/24/solid'
import { Link } from 'react-router-dom';

const AppliedJobsCard = ({ singleCard }) => {
    // console.log(singleCard);
    const { id, company_logo, job_title, company_name, remote_or_onsite, location, fulltime_or_parttime, salary } = singleCard;
    return (
        <div className='mb-6'>
            <div className='rounded-md border-2 p-10 flex flex-col md:flex-row items-center gap-x-8'>
                <div className='w-[240px] h-[240px] bg-gray-200 rounded-md flex justify-center items-center'>
                    <img className='w-[145px] h-[40px]' src={company_logo} />
                </div>
                <div>
                    <h2 className='text-2xl font-extrabold mt-8 mb-2'>{job_title}</h2>
                    <h5 className='text-xl font-semibold text-slate-500'>{company_name}</h5>
                    <div className='flex gap-x-4 my-4 text-purple-500 font-extrabold'>
                        <p className='py-2 px-4 border-2 border-purple-500 rounded-md'>{remote_or_onsite}</p>
                        <p className='py-2 px-4 border-2 border-purple-500 rounded-md'>{fulltime_or_parttime}</p>
                    </div>
                    <div className='flex gap-x-4 mb-6'>
                        <p className='text-slate-500'><MapPinIcon className="h-5 w-5 inline mr-2" />{location}</p>
                        <p className='text-slate-500'><CurrencyDollarIcon className="h-5 w-5 inline mr-2" />Salary: {salary}</p>
                    </div>
                </div>

                <Link className='ml-auto' to={`/job/${id}`}><button className=' px-5 py-3 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 bg-gradient-to-r from-purple-500 to-blue-500 text-white font-extrabold rounded-md'>View Details</button></Link>

            </div>
        </div>
    );
};

export default AppliedJobsCard;