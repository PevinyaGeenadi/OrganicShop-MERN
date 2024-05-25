import {Component} from "react";
import icon from '../../../images/Organic Shop Logo.png';
import {Link} from "react-router-dom";
export class NavBar extends Component {
    render() {
        function onSignInClick() {
            alert("Button clicked!")
        }

        return (
            <>
                <div className="p-2 bg-[#444544] flex">
                    <h1 className="text-1xl
                    text-secondary">Organic Shop
                    </h1>
                    <img className="h-6 w-6 ml-1" src={icon} alt=" "/>
                   <ul className="list-none ml-[830px] ">
                       <li className="inline-block mr-5 text-[#e6f0e6] cursor-pointer hover:text-green-500"><Link to="/">Home</Link> </li>
                       <li className="inline-block mr-5 text-[#e6f0e6] cursor-pointer hover:text-green-500"><Link to="/about">About</Link></li>
                       <li className="inline-block mr-5 text-[#e6f0e6] cursor-pointer hover:text-green-500"><Link to="/contact">Contact</Link></li>
                   </ul>
                    <button className="text-[14px] text-[#e6f0e6] bg-green-400 pl-3 pr-3 rounded hover:text-tertiary" onClick={onSignInClick}>Sign In</button>
                </div>
            </>
        );
    }
}