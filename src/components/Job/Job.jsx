import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import { BriefcaseIcon, CurrencyDollarIcon, PhoneIcon, EnvelopeIcon, MapPinIcon } from '@heroicons/react/24/solid'
import { addToDb } from '../../utilities/fakedb';

const Job = () => {
    const featuredJobs = useLoaderData();
    const param = useParams();
    // console.log(featuredJobs, param.id);

    const [jobDetails, setJobDetails] = useState({});
    // console.log(jobDetails);
    const { id, company_logo, job_title, company_name, remote_or_onsite, location, fulltime_or_parttime, salary, job_description, job_responsibility, educational_requirements, experiences, contact_information } = jobDetails;

    useEffect(() => {
        if (Array.isArray(featuredJobs)) {
            const validate = featuredJobs.find((featuredJob) => featuredJob.id == param.id);
            setJobDetails(validate);
            // console.log(validate);
        }
    }, [featuredJobs, param.id]);

    return (
        <div>
            <div className='relative bg-slate-100 text-center text-2xl font-extrabold pt-10 pb-28'>
                <img className='absolute md:right-0 -top-96 md:-top-36' src="/Vector-1.png" />
                Job Details
                <img className='absolute  left-0 bottom-0' src="/Vector.png" />
            </div>

            <div className='my-20 md:my-32 md:px-36 grid md:grid-cols-2 gap-6'>
                <div className='text-slate-500 px-8'>
                    <p><strong>Job Description:</strong> {job_description}</p>
                    <p className='my-3'><strong>Job Responsibility:</strong> {job_responsibility}</p>
                    <p><strong className='block'>Educational Requirements:</strong> {educational_requirements}</p>
                    <p className='my-3'><strong className='block'>Experiences:</strong> {experiences}</p>
                </div>
                {/* card  */}
                <div className='bg-slate-100 p-7 rounded-md'>
                    <h2 className='text-lg font-extrabold'>Job Details</h2>

                    <div className='border-2 border-slate-200 my-4'></div>

                    <p className='text-lg font-semibold flex items-center mb-3'><CurrencyDollarIcon className="h-5 w-5 inline mr-2 text-purple-400" />Salary: <span className='text-slate-500 ml-2'> {salary} (Per Month)</span></p>
                    <p className='text-lg font-semibold flex items-center'><BriefcaseIcon className="h-5 w-5 inline mr-2 text-purple-400" />Job Title: <span className='text-slate-500 ml-2'> {job_title}</span></p>
                    <h2 className='text-lg font-extrabold mt-4'>Contact Information</h2>

                    <div className='border-2 border-slate-200 my-4'></div>

                    <p className='text-lg font-extrabold mb-3'><PhoneIcon className="h-5 w-5 inline mr-2 text-purple-400" />Phone: <span className='text-slate-500 ml-2'> {contact_information?.phone}</span></p>
                    <p className='text-lg font-extrabold mb-3'><EnvelopeIcon className="h-5 w-5 inline mr-2 text-purple-400" />Email: <span className='text-slate-500 ml-2'> {contact_information?.email}</span></p>
                    <p className='text-lg font-extrabold'><MapPinIcon className="h-5 w-5 inline mr-2 text-purple-400" />Address: <span className='text-slate-500 ml-2'> {location}</span></p>

                    {/* button  */}
                    <div className=' mt-6'>
                        <button onClick={() => addToDb(id)} className=' w-full px-5 py-3 bg-gradient-to-r from-purple-500 to-blue-500 hover:bg-gradient-to-t text-white font-extrabold rounded-md'>Apply Now</button>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Job;
