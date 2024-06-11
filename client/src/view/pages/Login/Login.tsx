import React, { Component } from "react";

export class Login extends Component {
    render() {
        return (
            <div className="flex justify-center items-center min-h-screen ">
                <div className="w-full max-w-md p-8 bg-white rounded-lg shadow-lg">
                    <h2 className="pb-4 text-4xl text-green-500 underline text-center">
                        Sign In
                    </h2>
                    <form className="space-y-6">
                        <div>
                            <label className="block text-lg text-gray-700 mb-1">
                                Email:
                            </label>
                            <input
                                className="w-full px-3 py-2 placeholder-gray-400 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-400"
                                type="email"
                                placeholder="Enter your email"
                            />
                        </div>
                        <div>
                            <label className="block text-lg text-gray-700 mb-1">
                                Password:
                            </label>
                            <input
                                className="w-full px-3 py-2 placeholder-gray-400 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-400"
                                type="password"
                                placeholder="Enter your password"
                            />
                        </div>
                        <div>
                            <button
                                className="w-full py-3 bg-green-500 text-white text-lg rounded-md hover:bg-green-600 transition duration-300"
                            >
                                Sign In
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}
