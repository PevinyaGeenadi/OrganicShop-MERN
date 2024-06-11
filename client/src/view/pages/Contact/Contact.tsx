import { Component } from "react";

export class Contact extends Component {
    render() {
        return (
            <div className="flex justify-center items-center min-h-screen bg-gray-100">
                <div className="bg-white shadow-lg rounded-lg p-6 mx-5 lg:mx-auto max-w-screen-md">
                    <div className="mb-6 text-center">
                        <h2 className="text-2xl lg:text-3xl font-bold text-green-500 underline decoration-4">
                            Contact Us
                        </h2>
                        <p className="mt-2 text-base lg:text-lg text-gray-700">
                            Got a technical issue? Want to contact us? Please let us assist you.
                        </p>
                    </div>
                    <form className="space-y-4">
                        <div>
                            <label className="block text-gray-700 text-base lg:text-lg">
                                Your Email:
                            </label>
                            <input
                                type="email"
                                className="w-full mt-1 p-2 border-2 border-green-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-400"
                            />
                        </div>
                        <div>
                            <label className="block text-gray-700 text-base lg:text-lg">
                                Your Subject:
                            </label>
                            <input
                                type="text"
                                className="w-full mt-1 p-2 border-2 border-green-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-400"
                            />
                        </div>
                        <div>
                            <label className="block text-gray-700 text-base lg:text-lg">
                                Your Message:
                            </label>
                            <textarea
                                className="w-full mt-1 p-2 border-2 border-green-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-400"
                            />
                        </div>
                        <div className="text-center">
                            <button className="mt-4 px-4 py-2 bg-green-500 text-white rounded-md text-base lg:text-lg hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-400">
                                Send Message
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}
