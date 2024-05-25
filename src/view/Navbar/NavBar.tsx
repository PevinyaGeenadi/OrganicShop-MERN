import {Component} from "react";
import icon from  '../../images/Organic Shop Logo.png';
export class NavBar extends Component {
    render() {
        return (
            <>
                <div className="p-2 bg-[#444544] flex">
                    <h1 className="text-1xl
                    text-secondary">Organic Shop
                    </h1>
                    <img className="h-6 w-6 ml-1" src={icon} alt=" "/>
                </div>
            </>
        );
    }
}