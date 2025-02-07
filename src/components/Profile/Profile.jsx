import { onAuthStateChanged } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { auth } from "../../firebase/firebase"
import { logOut } from "../../redux-features/auth";
import { useDispatch, useSelector } from 'react-redux';

const Profile = () => {
    const [user, setUser] = useState();

    useEffect(() => {
        document.title = "Profile - Bookstore";
    }, []);


    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            setUser(user)
        })
    }, [auth]);

    const imageUrl = "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png";


    const dispatch = useDispatch();

    const [pending, setPending] = useState(false);

    const handleLogOut = () => {
        setPending(true);
        setTimeout(() => {
            dispatch(logOut());
        }, 500)
    }

    return (
        <div className="w-[95%] m-auto mt-3 lg:mt-6 flex flex-col items-center">
            {
                !pending &&
                <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-2xl">
                    <h2 className="text-lg font-bold mb-2 text-center">Dashboard</h2>
                    <div className="flex flex-col items-center">
                        <img
                            className="w-24 h-24 rounded-full mb-4"
                            src={user?.photoURL ? user?.photoURL : imageUrl}
                            alt="Profile"
                        />
                        <h3 className="text-base font-semibold">{user?.email.split('@')[0]}</h3>
                        {/* <p className="text-gray-600">{user?.email}</p> */}
                    </div>
                    <div className="mt-6 w-full">
                        <h4 className="text-lg font-semibold mb-4">Account Details</h4>
                        <div className="flex flex-col gap-4">
                            <div className="flex lg:justify-between gap-2 items-center">
                                <span className="text-gray-600">Full Name:</span>
                                <span className="font-medium text-sm lg:text-lg">{user?.displayName || user?.email.split('@')[0]}</span>
                            </div>
                            <div className="flex gap-2 items-center lg:justify-between">
                                <span className="text-gray-600">Email:</span>
                                <span className="font-medium text-sm lg:text-lg">{user?.email}</span>
                            </div>
                            {/* <div className="flex justify-between items-center">
                            <span className="text-gray-600">Phone:</span>
                            <span className="font-medium">{user?.phoneNumber || "N/A"}</span>
                        </div> */}
                            <div className="flex gap-2 lg:justify-between items-center">
                                <span className="text-gray-600">Address:</span>
                                <span className="font-medium text-sm lg:text-lg">123 Main St, City, Country</span>
                            </div>
                        </div>
                    </div>
                    <div className="mt-6 w-full">
                        <h4 className="text-lg font-semibold mb-4">Order History</h4>
                        <div className="flex flex-col gap-4">
                            <div className="flex justify-between items-center">
                                <span className="text-gray-600">Order #12345</span>
                                <span className="font-medium">$50.00</span>
                            </div>
                        </div>
                    </div>
                    <div className="mt-6 w-full flex justify-evenly">
                        {/* <button className="bg-green-600 text-white font-bold py-2 px-4 rounded hover:bg-green-700">
                        Edit Profile
                    </button> */}
                        <button className="bg-red-500 text-white font-bold py-2 px-4 rounded hover:bg-red-700"
                            onClick={handleLogOut}
                        >
                            Log Out
                        </button>
                    </div>
                </div>
            }
            {
                pending &&
                <div className="w-full flex items-center justify-center" style={{ minHeight: "calc(100vh - 240px)" }}>
                    <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-green-600"></div>
                </div>
            }

        </div>
    );
};

export default Profile;