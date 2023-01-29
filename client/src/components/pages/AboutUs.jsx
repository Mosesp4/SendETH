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
                    <h2 className="text-2xl font-medium">About Us</h2>
                    <p className="text-center text-gray-700 leading-relaxed">
                        Our Ethereum sending app is designed to make it easy for users to send and
                        receive Ethereum tokens. We believe in the power of blockchain
                        technology and the potential it has to change the world. Our goal is to make it
                        accessible to everyone, regardless of their technical skill level.
                    </p>
                    <p className="text-center text-gray-700 leading-relaxed my-4">
                        Our app is user-friendly and secure, with state-of-the-art encryption to protect
                        your transactions and assets. We also offer low transaction fees and fast transfer
                        speeds. We are constantly working to improve our service and offer new features
                        to our users.
                    </p>
                    <p className="text-center text-gray-700 leading-relaxed my-4">
                        Our team of experienced developers and blockchain enthusiasts are committed to
                        providing the best experience for our users. We believe in decentralization and the
                        democratization of finance, and we are dedicated to making that a reality.
                    </p>
                    <p className="text-center text-gray-700 leading-relaxed my-4">
                        We welcome your feedback and suggestions for improving our app. Please don't hesitate
                        to contact us with any questions or concerns. We are always here to help.

                    </p>
                </div>
            </div>
            <section className="bg-orange-400 py-8">
                <h2 className="text-2xl font-medium text-center mb-4">Meet Our Developer</h2>
                <div className="md:grid md:grid gap-4">
                    <div className="p-4">
                        <img src={dev} alt="Developer 1" className="rounded-full w-32 mx-auto mb-4" />
                        <h3 className="text-lg font-medium text-center mb-2">ECHELA CHRISTOPHER MOSES</h3>
                        <p className="text-gray-700 text-center px-8">
                            An experienced front-end developer with a focus on user experience. He is responsible for 
                            building the UI and user interactions of this web app.  He is also an entry-level blockchain developer with 
                          focus on smart contract and security. He is responsible for 
                            implementing the smart contract functionality and ensuring the security of the Ethereum sending app.
                            As at the time of developing this app, Echela Moses is a solidity developer intern with Grandida LLC.
                        </p>
                    </div>
                   
                </div>
            </section>


        </>
    );
};

export default AboutUs;