import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import AvailableJobs from '../AvailableJobs/AvailableJobs';
import Featured from '../Featured/Featured';

const Homepage = () => {

    const categories = useLoaderData();

    const [features, setFeatures] = useState([]);
    const [showFeaturesAll, setShowFeaturesAll] = useState(false);
    // console.log(features)

    useEffect(() => {
        fetch('featuredJobs.json')
            .then(res => res.json())
            .then(data => {
                setFeatures(data)
                // setShowFeaturesAll(data)
            })
    }, []);

    
    return (
        <div>
            {/* banner section  */}
            <section className='grid md:grid-cols-2 gap-x-16 px-8 md:px-36 bg-slate-100'>
                <div className='my-auto'>
                    <p className='text-5xl md:text-7xl font-extrabold'>
                        One Step Closer To Your <span className='text-purple-500'>Dream Job</span>
                    </p>
                    <p className='mt-6 mb-8 font-medium text-slate-500'>Explore thousands of job opportunities with all the information you need. Its your future. Come find it. Manage all your job application from start to finish.</p>

                    <button className=' px-5 py-3 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 bg-gradient-to-r from-purple-500 to-blue-500 text-white font-extrabold rounded-md'>Get Started</button>
                </div>
                <div>
                    <img src="/banner.png" />
                </div>
            </section>

            {/* Job Category List */}
            <section className='mt-32 px-8 md:px-36'>
                <div className='text-center'>
                    <h2 className='text-5xl font-extrabold'>Job Category List</h2>
                    <p className='font-medium text-slate-500 mt-4 mb-8'>Explore thousands of job opportunities with all the information you need. Its your future</p>
                </div>
                <div className='grid md:grid-cols-4 gap-6'>
                    {
                        categories.map((category, idx) => <AvailableJobs category={category} key={idx} />)
                    }
                </div>
            </section>

            {/* Featured Jobs */}
            <section className='mt-32 px-8 md:px-[300px]'>
                <div className='text-center'>
                    <h2 className='text-5xl font-extrabold'>Featured Jobs</h2>
                    <p className='font-medium text-slate-500 mt-4 mb-8'>Explore thousands of job opportunities with all the information you need. Its your future</p>
                </div>

                <div className='grid md:grid-cols-2 gap-6'>
                    {
                        features?.slice(0, showFeaturesAll ? 6 : 4).map(feature => <Featured key={feature.id} feature={feature} />)
                    }
                </div>


                {/* hiding show all jobs button  */}
                {
                    showFeaturesAll ? <div className=' mt-12 mb-36'></div> : <div className='flex justify-center mt-12 mb-36'>
                        <button onClick={() => setShowFeaturesAll(true)} className='px-5 py-3 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 bg-gradient-to-r from-purple-500 to-blue-500 text-white font-extrabold rounded-md'>See All Jobs</button>
                    </div>
                }

            </section>
        </div>
    );
};

export default Homepage;