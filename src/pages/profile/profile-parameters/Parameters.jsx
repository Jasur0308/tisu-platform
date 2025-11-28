import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

export default function UserProfileManagement() {
    const { t } = useTranslation();
    const [profileData, setProfileData] = useState({
        firstName: '',
        lastName: '',
        hemisId: '',
        department: '',
        orcid: '',
        ror: '',
        middleName: ''
    });

    const [passwordData, setPasswordData] = useState({
        oldPassword: '',
        newPassword: ''
    });

    const handleProfileChange = (e) => {
        setProfileData({
            ...profileData,
            [e.target.name]: e.target.value
        });
    };

    const handlePasswordChange = (e) => {
        setPasswordData({
            ...passwordData,
            [e.target.name]: e.target.value
        });
    };

    const handleSaveDetails = () => {
        console.log('Profile Data:', profileData);
        alert('Ma\'lumotlar saqlandi!');
    };

    const handleChangePassword = () => {
        if (!passwordData.oldPassword || !passwordData.newPassword) {
            alert('Iltimos, barcha parol maydonlarini to\'ldiring!');
            return;
        }
        console.log('Password Change:', passwordData);
        alert('Parol o\'zgartirildi!');
        setPasswordData({ oldPassword: '', newPassword: '' });
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-gray-800">
            <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-8 mt-24 mb-4">
                <h1 className="text-3xl font-bold text-gray-900 mb-8 pb-4 border-b">
                    User Profile Management
                </h1>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    {/* Update Details Section */}
                    <div>
                        <h2 className="text-2xl font-semibold text-gray-800 mb-6">
                            Update Details
                        </h2>

                        <div className="space-y-4">
                            <div className='flex gap-4'>

                                {/* First Name */}
                                <div className='flex-1'>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                        {t("firstName")} <span className="text-red-500">*</span>
                                    </label>
                                    <input
                                        type="text"
                                        name="firstName"
                                        value={profileData.firstName}
                                        onChange={handleProfileChange}
                                        placeholder={`${t("signUsernamePlaceholder")}`}
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
                                    />
                                </div>

                                {/* Last Name */}
                                <div className='flex-1'>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                        {t("lastName")} <span className="text-red-500">*</span>
                                    </label>
                                    <input
                                        type="text"
                                        name="lastName"
                                        value={profileData.lastName}
                                        onChange={handleProfileChange}
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
                                    />
                                </div>
                            </div>

                            <div className='flex gap-4'>

                                {/* Middle Name */}
                                <div className='flex-1'>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                        {t("middleName")} ({t("optional")})
                                    </label>
                                    <input
                                        type="text"
                                        name="middleName"
                                        value={profileData.middleName}
                                        onChange={handleProfileChange}
                                        placeholder="Middle Name"
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
                                    />
                                </div>

                                {/* Hemis ID */}
                                <div className='flex-1'>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                        Hemis ID ({t("optional")})
                                    </label>
                                    <input
                                        type="text"
                                        name="hemisId"
                                        value={profileData.hemisId}
                                        onChange={handleProfileChange}
                                        placeholder="Hemis ID"
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
                                    />
                                </div>
                            </div>

                            <div className='flex gap-4 items-center'>

                                {/* Department */}
                                <div className='flex-1'>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                        Department ({t("optional")})
                                    </label>
                                    <select
                                        name="department"
                                        value={profileData.department}
                                        onChange={handleProfileChange}
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
                                    >
                                        <option value="">Select your department</option>
                                        {/* <option value="it">IT Department</option>
                                        <option value="hr">HR Department</option>
                                        <option value="finance">Finance Department</option>
                                        <option value="marketing">Marketing Department</option>
                                        <option value="sales">Sales Department</option> */}
                                    </select>
                                </div>

                                {/* ROR */}
                                <div className='flex-1'>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                        ROR (0xxxxxxxX) ({t("optional")})
                                    </label>
                                    <input
                                        type="text"
                                        name="ror"
                                        value={profileData.ror}
                                        onChange={handleProfileChange}
                                        placeholder="ROR"
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
                                    />
                                </div>
                            </div>

                            {/* ORCID */}
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    ORCID (XXXX-XXXX-XXXX-XXXX) ({t("optional")})
                                </label>
                                <input
                                    type="text"
                                    name="orcid"
                                    value={profileData.orcid}
                                    onChange={handleProfileChange}
                                    placeholder="ORCID"
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
                                />
                            </div>

                            {/* Save Button */}
                            <button
                                onClick={handleSaveDetails}
                                className="w-full bg-blue-600 text-white font-semibold py-3 rounded-lg hover:bg-blue-700 transition duration-200 mt-4"
                            >
                                Save Details
                            </button>
                        </div>
                    </div>

                    {/* Update Password Section */}
                    <div>
                        <h2 className="text-2xl font-semibold text-gray-800 mb-6">
                            Update Password
                        </h2>

                        <div className="space-y-4">
                            {/* Old Password */}
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    Old Password
                                </label>
                                <input
                                    type="password"
                                    name="oldPassword"
                                    value={passwordData.oldPassword}
                                    onChange={handlePasswordChange}
                                    placeholder="Old Password"
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent outline-none"
                                />
                            </div>

                            {/* New Password */}
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    New Password
                                </label>
                                <input
                                    type="password"
                                    name="newPassword"
                                    value={passwordData.newPassword}
                                    onChange={handlePasswordChange}
                                    placeholder="New Password"
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent outline-none"
                                />
                            </div>

                            {/* Change Password Button */}
                            <button
                                onClick={handleChangePassword}
                                className="w-full bg-red-500 text-white font-semibold py-3 rounded-lg hover:bg-red-600 transition duration-200 mt-4"
                            >
                                Change Password
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}