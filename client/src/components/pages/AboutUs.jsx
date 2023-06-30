import React from 'react';
import image from "../../../images/abtus.jpg";
import dev from "../../../images/linked.jpg";

const AboutUs = () => {
    return (
        <>
            <h1 className="text-center text-5xl font-bold m-8 text-red-600">About Us</h1>
            <div className="flex flex-col items-center md:flex-row md:items-start">
                <img
                    className="w-80 h-90  m-6 md:mr-8"
                    src={image}
                    alt="team member"
                />
                <div className="text-center md:text-left mr-6">
                    <h2 className="text-1xl font-medium">About Us</h2>
                    <p className="text-center text-gray-500 leading-relaxed">
                        Our Ethereum sending app is designed to make it easy for users to send and
                        receive Ethereum tokens. <br />We believe in the power of blockchain
                        technology and the potential it has to change the world. <br /> Our goal is to make it
                        accessible to everyone, regardless of their technical skill level.
                        Our app is user-friendly and secure, with state-of-the-art encryption to protect
                        your transactions and assets. We also offer low <br /> transaction fees and fast transfer
                        speeds. We are constantly working to improve our service <br /> and offer new features
                        to our users.  <br />
                        Our team of experienced developers and blockchain enthusiasts are committed to
                        providing the best experience for our users. We believe in decentralization and the
                        democratization of finance, and we are dedicated to making that a reality.
                        We welcome your feedback and suggestions for improving our app. Please don't hesitate
                        to contact us with any questions or concerns. We are always here to help.
                    </p>
                    <p className="text-center text-gray-700 leading-relaxed my-4">
                    </p>
                    <p className="text-center text-gray-700 leading-relaxed my-4">
                    </p>
                    <p className="text-center text-gray-700 leading-relaxed my-4">

                    </p>
                </div>
            </div>
        


        </>
    );
};

export default AboutUs;