import { Component } from "react";

export class About extends Component {
    render() {
        return (
            <div className="flex justify-center items-center min-h-screen bg-gray-100">
                <div className="bg-white shadow-lg rounded-lg p-10 mx-5 lg:mx-auto max-w-screen-lg">
                    <h2 className="pb-3 text-3xl lg:text-4xl font-bold text-green-500 underline decoration-4">
                        About Us
                    </h2>
                    <p className="pb-3 text-[17px] lg:text-lg leading-relaxed text-gray-700">
                        It's a food retailer that specializes in organic, natural and eco-friendly products. The products
                        available at an organic grocery store are often free of pesticides, preservatives, and artificial
                        flavors. These stores may also offer locally sourced and sustainably grown products. Organic foods
                        often have more beneficial nutrients, such as antioxidants, than their conventionally-grown
                        counterparts and people with allergies to foods, chemicals, or preservatives may find their symptoms
                        lessen or go away when they eat only organic foods. Organic produce contains fewer pesticides.
                        <br />
                        <br />
                        <strong>Mission:</strong> Our mission is to make organic living accessible to all, fostering a harmonious
                        relationship between people and the environment. We are committed to offering a diverse range of
                        high-quality, ethically sourced, and sustainable products that promote health, wellness, and a greener
                        lifestyle.
                    </p>
                </div>
            </div>
        );
    }
}
