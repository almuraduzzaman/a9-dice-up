import toast, { Toaster } from 'react-hot-toast';

// use local storage to manage cart data
const addToDb = id => {
    let storedJobs = getStoredJobs();
    // add quantity
    const quantity = storedJobs[id];
    if (!quantity) {
        storedJobs[id] = 1;
        toast.success('Successfully Applied!');
    }
    else {
        toast.error("Already Applied!");
    }
    localStorage.setItem('stored-jobs', JSON.stringify(storedJobs));
}

const removeFromDb = id => {
    const storedJobs = getStoredJobs();
    if (id in storedJobs) {
        delete storedJobs[id];
        localStorage.setItem('stored-jobs', JSON.stringify(storedJobs));
    }
}

const getStoredJobs = () => {
    let storedJobs = {};

    //get the shopping cart from local storage
    const storedCart = localStorage.getItem('stored-jobs');
    if (storedCart) {
        storedJobs = JSON.parse(storedCart);
    }
    return storedJobs;
}

const deleteStoredJobs = () => {
    localStorage.removeItem('stored-jobs');
}

export {
    addToDb,
    removeFromDb,
    getStoredJobs,
    deleteStoredJobs
}
