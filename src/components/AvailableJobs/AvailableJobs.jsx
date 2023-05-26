import React from 'react';

const AvailableJobs = ({category}) => {
    return (
        <>
            <div className='bg-slate-100 p-12 rounded-md '>
                <div className='bg-slate-200 p-3.5 rounded-md w-[70px] h-[70px]'>
                    <img src={category.logo} />
                </div>
                <h6 className='text-xl font-extrabold mt-8 mb-2 '>{category.name}</h6>
                <p className='text-slate-500'>{category.jobs_available} Jobs Available</p>
            </div>
        </>
    );
};

export default AvailableJobs;