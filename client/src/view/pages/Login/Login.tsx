import React, { Component } from "react";

export class Login extends Component {
    render() {
        return (
            <div className="flex h-screen bg-[#444544] items-center justify-center">
                <div className="w-1/3 p-8 border-gray-500 border-[0.5px] bg-white rounded-lg shadow-lg">
                    <h2 className="pb-4 text-4xl text-green-400 underline decoration-2 text-center">
                        Sign In
                    </h2>
                    <form className="space-y-6">
                        <div>
                            <label className="block text-lg text-gray-700 mb-1">
                                Email:
                            </label>
                            <input
                                className="w-full border-[1px] border-green-200 p-2 rounded-md"
                                type="email"
                            />
                        </div>
                        <div>
                            <label className="block text-lg text-gray-700 mb-1">
                                Password:
                            </label>
                            <input
                                className="w-full border-[1px] border-green-200 p-2 rounded-md"
                                type="password"
                            />
                        </div>
                        <div>
                            <button
                                className="w-full py-3 bg-green-400 text-white text-lg rounded-md hover:bg-green-500 transition duration-300"
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
