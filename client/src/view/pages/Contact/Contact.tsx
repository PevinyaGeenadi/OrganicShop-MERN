import { Component } from "react";
import axios from "axios";
interface ContactProps {
    data: any
}
interface ContactState {
    email: string;
    subject: string;
    message: string
}

export class Contact extends Component<ContactProps, ContactState> {
    private api: any;

    constructor(props: any) {
        super(props);
        this.api = axios.create({
            baseURL:
                `http://localhost:4000`
        });
        this.state = {
            email: '',
            subject: '',
            message: ''
        }
    }

    private onSendBtnClick
        = () => {
        try {
            this.api
                .post('/contact/submit', {
                    "email": "someone@gmail.com",
                    "subject": "Contact Subject",
                    "message": "Something went wrong"
                }).then((res: {data: any}) => {
                const response = res.data;
                alert(response);
            }).catch((error: any) => {
                console.error('Axios Error:'
                    , error);
            });
        } catch (error) {
            console.error(
                'Error:', error);
        }
    }
    private handleEmailChange
        = (event: {target:
            { value: string; }}) => {
        this.setState({
            email: event.target.value
        });
    }

    private handleSubjectChange
        = (event: {target:
            { value: string; }}) => {
        this.setState({
            subject: event.target.value
        });
    }

    private handleMessageChange
        = (event: {target:
            { value: string; }}) => {
        this.setState({
            message: event.target.value
        });
    }
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
                                className="w-full mt-1 p-2 border-2 border-green-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-400" onChange={this.handleEmailChange}
                            />
                        </div>
                        <div>
                            <label className="block text-gray-700 text-base lg:text-lg">
                                Your Subject:
                            </label>
                            <input type="text" className="w-full mt-1 p-2 border-2 border-green-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-400" onChange={this.handleSubjectChange}
                            />
                        </div>
                        <div>
                            <label className="block text-gray-700 text-base lg:text-lg">
                                Your Message:
                            </label>
                            <textarea
                                className="w-full mt-1 p-2 border-2 border-green-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-400" onChange={this.handleMessageChange}
                            />
                        </div>
                        <div className="text-center">
                            <button className="mt-4 px-4 py-2 bg-green-500 text-white rounded-md text-base lg:text-lg hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-400" onClick={this.onSendBtnClick}>
                                Send Message
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}
