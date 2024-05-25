import {Component} from "react";

export class MainContent extends Component {
    render() {
        return (
            <div className="md : px12 p-4 mx-auto pt-28 pb-28 bg-amber-100 bg-gradient-to-br from-green-300 via-blue-300 yto-yellow-300" >
                <h1 className="text-1xl text-secondary text-center">This is Main content</h1>
                <div className="h-20 max-w-screen-2xl bg-yellow-300 text-center p-1 rotate-12 shadow-lg shadow-gray-500 hover:shadow-red-500 cursor-pointer">
                    Height <br/>& <br/> Width
                </div>


            </div>

        );
    }
}