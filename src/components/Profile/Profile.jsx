import React from 'react';

const Profile = () => {
    return (
        <div className="w-[95%] m-auto mt-3 lg:mt-8 flex flex-col items-center">
            <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-2xl">
                <h2 className="text-2xl font-bold mb-6 text-center">Profile Dashboard</h2>
                <div className="flex flex-col items-center">
                    <img
                        className="w-24 h-24 rounded-full mb-4"
                        src="https://via.placeholder.com/150"
                        alt="Profile"
                    />
                    <h3 className="text-xl font-semibold">John Doe</h3>
                    <p className="text-gray-600">johndoe@example.com</p>
                </div>
                <div className="mt-6 w-full">
                    <h4 className="text-lg font-semibold mb-4">Account Details</h4>
                    <div className="flex flex-col gap-4">
                        <div className="flex justify-between items-center">
                            <span className="text-gray-600">Full Name:</span>
                            <span className="font-medium">John Doe</span>
                        </div>
                        <div className="flex justify-between items-center">
                            <span className="text-gray-600">Email:</span>
                            <span className="font-medium">johndoe@example.com</span>
                        </div>
                        <div className="flex justify-between items-center">
                            <span className="text-gray-600">Phone:</span>
                            <span className="font-medium">+1234567890</span>
                        </div>
                        <div className="flex justify-between items-center">
                            <span className="text-gray-600">Address:</span>
                            <span className="font-medium">123 Main St, City, Country</span>
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
                        <div className="flex justify-between items-center">
                            <span className="text-gray-600">Order #67890</span>
                            <span className="font-medium">$30.00</span>
                        </div>
                        <div className="flex justify-between items-center">
                            <span className="text-gray-600">Order #11223</span>
                            <span className="font-medium">$70.00</span>
                        </div>
                        <div className="flex justify-between items-center">
                            <span className="text-gray-600">Order #44556</span>
                            <span className="font-medium">$20.00</span>
                        </div>
                    </div>
                </div>
                <div className="mt-6 w-full flex justify-center">
                    <button className="bg-green-600 text-white font-bold py-2 px-4 rounded hover:bg-green-700">
                        Edit Profile
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Profile;