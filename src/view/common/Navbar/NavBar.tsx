import {Component} from "react";
import icon from '../../../images/Organic Shop Logo.png';
export class NavBar extends Component {
    render() {
        return (
            <>
                <div className="p-2 bg-[#444544] flex">
                    <h1 className="text-1xl
                    text-secondary">Organic Shop
                    </h1>
                    <img className="h-6 w-6 ml-1" src={icon} alt=" "/>
                   <ul className="list-none ml-[830px] ">
                       <li className="inline-block mr-5 text-[#e6f0e6] cursor-pointer hover:text-green-500">Home </li>
                       <li className="inline-block mr-5 text-[#e6f0e6] cursor-pointer hover:text-green-500">About</li>
                       <li className="inline-block mr-5 text-[#e6f0e6] cursor-pointer hover:text-green-500">Contact</li>
                   </ul>
                </div>
            </>
        );
    }
}