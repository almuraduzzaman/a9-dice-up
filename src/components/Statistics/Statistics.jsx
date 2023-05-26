import React from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const assignmentMarks = [
    { name: "A1", marks: 60 },
    { name: "A2", marks: 59 },
    { name: "A3", marks: 60 },
    { name: "A4", marks: 58 },
    { name: "A5", marks: 60 },
    { name: "A6", marks: 57 },
    { name: "A7", marks: 60 },
    { name: "A8", marks: 60 }
];


const Statistics = () => {
    return (
        <>
            <div className='relative bg-slate-100 text-center text-2xl font-extrabold pt-10 pb-28'>
                <img className='absolute md:right-0 -top-96 md:-top-36' src="/Vector-1.png" />
                Statistics
                <img className='absolute  left-0 bottom-0' src="/Vector.png" />
            </div>

            <div className='border-2 border-purple-500 rounded-md my-20 p-4 md:p-10 flex justify-center bg-purple-100'>
                <ResponsiveContainer width='100%' height={400}>
                    <AreaChart data={assignmentMarks}>
                        <Area type="monotone" dataKey="marks" stroke="#8884d8" fill="#8884d8" />
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip />
                        <CartesianGrid/>
                    </AreaChart>
                </ResponsiveContainer>
            </div>
        </>
    );
};

export default Statistics;