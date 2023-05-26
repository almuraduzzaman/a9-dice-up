import React, { useEffect, useState } from 'react';
import { getStoredJobs } from '../../utilities/fakedb';
import AppliedJobsCard from '../AppliedJobsCard/AppliedJobsCard';
import { ChevronDownIcon} from '@heroicons/react/24/solid'

const AppliedJobs = () => {
    const [jobs, setJobs] = useState([]);
    const [card, setCard] = useState([]);
    const [filterJob, setFilterJob]=useState([]);


    // loading data from api 
    useEffect(() => {
        fetch('featuredJobs.json')
            .then(res => res.json())
            .then(data => setJobs(data))
    }, []);

    // loading data from localStorage 
    useEffect(() => {
        const storedJobs = getStoredJobs();
        const savedJobs = [];

        for (const id in storedJobs) {
            const addedJob = jobs.find(job => job.id == id);
            if (addedJob) {
                savedJobs.push(addedJob);
            }
        }

        setCard(savedJobs)
        setFilterJob(savedJobs)

    }, [jobs]);

    // validation for filter 
    const filterRemote = () => {
        const remoteJob = filterJob?.filter(jobType => jobType.remote_or_onsite == 'Remote');
        setCard(remoteJob)
    };

    const filterOnsite = () => {
        const onsiteJob = filterJob?.filter(jobType => jobType.remote_or_onsite == 'Onsite');
         setCard(onsiteJob);
    };


    return (
        <div>
            <div className='relative bg-slate-100 text-center text-2xl font-extrabold pt-10 pb-28'>
                <img className='absolute md:right-0 -top-96 md:-top-36' src="/Vector-1.png" />
                Applied Jobs
                <img className='absolute  left-0 bottom-0' src="/Vector.png" />
            </div>

            <div className='mt-32 px-8 md:px-[300px] '>
                <div className="dropdown dropdown-hover flex justify-end">
                    <label tabIndex={0} className="btn m-1 text-black bg-slate-100 hover:bg-slate-200 border-0">Filter By <ChevronDownIcon className="h-5 w-5 inline" /></label>
                    <ul tabIndex={0} className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52 mt-14">
                        <li onClick={() => filterRemote()}><a>Remote</a></li>
                        <li onClick={() => filterOnsite()}><a>On-site</a></li>
                    </ul>
                </div>
                {
                    card.map(singleCard => <AppliedJobsCard key={singleCard.id} singleCard={singleCard}></AppliedJobsCard>)
                }
            </div>
        </div>
    );
};

export default AppliedJobs;