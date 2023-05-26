import React from 'react';

const Blog = () => {
    return (
        <div>
            <div className='relative bg-slate-100 text-center text-2xl font-extrabold pt-10 pb-28'>
                <img className='absolute md:right-0 -top-96 md:-top-36' src="/Vector-1.png" />
                Blog
                <img className='absolute  left-0 bottom-0' src="/Vector.png" />
            </div>

            <div className='mt-20 px-8 md:px-[300px] text-center'>
                <div className='border-2 rounded-md border-purple-500 bg-purple-50 p-10 mb-10'>
                    <h1 className='text-center text-2xl font-extrabold mb-2'>When should you use context API?</h1>
                    <p className='text-slate-600'>We should use the Context API in React when we need to share data or state between multiple components, avoid prop drilling, or provide a theme or authentication state to all components without passing them down through props.</p>
                </div>

                <div className='border-2 rounded-md border-purple-500 bg-purple-50 p-10 mb-10'>
                    <h1 className='text-center text-2xl font-extrabold mb-2'>What is a custom hook?</h1>
                    <p className='text-slate-600'>A custom hook is a reusable function in React that encapsulates logic and stateful behavior, which can be shared across multiple components in a React application. It starts with the prefix 'use' and enables us to abstract away complex code from our components, making them more readable and maintainable.</p>
                </div>

                <div className='border-2 rounded-md border-purple-500 bg-purple-50 p-10 mb-10'>
                    <h1 className='text-center text-2xl font-extrabold mb-2'>What is useRef?</h1>
                    <p className='text-slate-600'>useRef is a hook in React that returns a mutable ref object whose current property is initialized to a specified value. It allows us to create a persistent reference to an element or value in the component, which can be accessed across re-renders without triggering a component update.</p>
                </div>

                <div className='border-2 rounded-md border-purple-500 bg-purple-50 p-10 mb-10'>
                    <h1 className='text-center text-2xl font-extrabold mb-2'>What is useMemo?</h1>
                    <p className='text-slate-600'>useMemo is a hook in React that memoizes the result of a function with certain dependencies and returns the memoized value. It is used to optimize performance by avoiding unnecessary computations and re-renders when the dependencies have not changed.</p>
                </div>

            </div>

        </div>
    );
};

export default Blog;