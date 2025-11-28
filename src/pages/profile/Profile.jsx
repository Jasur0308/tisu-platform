import React from "react";
import { Camera, Mail, Phone, User, Settings, LogOut } from "lucide-react";

export default function Profile() {
    return (
        <div className="pt-28 pb-20 px-6 flex justify-center">
            <div className="max-w-3xl w-full">

                {/* Profile Card */}
                <div
                    className="
                    bg-white dark:bg-gray-900 rounded-3xl shadow-xl p-8
                    border border-gray-200 dark:border-gray-700
                    transition-all duration-500 hover:shadow-2xl
                    "
                >
                    {/* Avatar */}
                    <div className="flex flex-col items-center text-center">
                        <div className="relative group">
                            <img
                                src="https://i.pravatar.cc/200"
                                alt="avatar"
                                className="w-36 h-36 rounded-full object-cover shadow-lg"
                            />
                            <button
                                className="
                                absolute bottom-2 right-2 p-2 rounded-full
                                bg-blue-600 text-white shadow
                                opacity-0 group-hover:opacity-100
                                transition-all duration-300
                                "
                            >
                                <Camera size={18} />
                            </button>
                        </div>

                        <h2 className="text-3xl font-bold mt-4 dark:text-white">
                            Jasur Abdisoatov
                        </h2>
                        <p className="text-gray-600 dark:text-gray-300">
                            Fullstack Developer
                        </p>
                    </div>

                    {/* Info */}
                    <div className="mt-10 space-y-4">
                        <div className="flex items-center gap-4 p-4 rounded-xl bg-gray-100 dark:bg-gray-800">
                            <User className="text-blue-500" />
                            <span className="text-gray-700 dark:text-gray-200">jasur_dev</span>
                        </div>

                        <div className="flex items-center gap-4 p-4 rounded-xl bg-gray-100 dark:bg-gray-800">
                            <Mail className="text-blue-500" />
                            <span className="text-gray-700 dark:text-gray-200">
                                jasur@example.com
                            </span>
                        </div>

                        <div className="flex items-center gap-4 p-4 rounded-xl bg-gray-100 dark:bg-gray-800">
                            <Phone className="text-blue-500" />
                            <span className="text-gray-700 dark:text-gray-200">
                                +998 90 123 45 67
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}