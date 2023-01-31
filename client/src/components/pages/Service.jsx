import React from "react";

const Service = () => {
  return (
    <div className="bg-white py-8 px-4 rounded-lg">
      <h2 className="text-2xl font-bold text-center mb-4 m-4 text-red-600">Our Services</h2>
      <div className="md:grid md:grid-cols-2 md:gap-4 m w-full">
        <div className="bg-orange-400 rounded-lg p-4 white-glassmorphism">
          <h3 className="text-lg font-bold text-gray-700 mb-2 uppercase">
            Secure Transactions
          </h3>
          <p className="text-white leading-relaxed">
            Our Ethereum sending app uses state-of-the-art encryption to secure your 
            transactions and assets. We also offer two-factor authentication for added security.
          </p>
          <p className="text-white leading-relaxed">
        We also have implemented smart contract support, allowing users to interact with 
        smart contracts on the Ethereum network, such as making payments, sending tokens, and 
        accessing decentralized applications.
      </p>
        </div>
        <div className="bg-gray-200 rounded-lg p-4 white-glassmorphism">
          <h3 className="text-lg font-bold text-gray-900 mb-2 uppercase">
            Low Transaction Fees
          </h3>
          <p className="text-gray-700 leading-relaxed">
            Our app offers low transaction fees, making it affordable for users to send and receive 
            Ethereum tokens.
          </p>
          <br />
          <p className="text-gray-700 leading-relaxed">
        Additionally, we also provide a feature where the user can set their own transaction 
        fee, giving them more control over their transactions.
      </p>

        </div>
        <div className="bg-gray-200 rounded-lg p-4">
          <h3 className="text-lg font-bold text-gray-900 mb-2 uppercase">
            Fast Transfer Speeds
          </h3>
          <p className="text-gray-700 leading-relaxed">
            Our app offers fast transfer speeds, allowing users to send and receive Ethereum 
            and other ERC-20 tokens quickly and efficiently.
          </p>
        </div>
        <div className="bg-orange-400  rounded-lg p-4">
          <h3 className="text-lg font-bold text-gray-700 mb-2 uppercase">
            ERC-20 Token Support
          </h3>
          <p className="text-white leading-relaxed">
            Our app supports not only Ethereum but also other ERC-20 tokens, giving 
            users more options for sending and receiving digital assets.
          </p>
        </div>
        <div className="bg-orange-400 rounded-lg p-4 white-glassmorphism">
          <h3 className="text-lg font-bold text-gray-900 mb-2 uppercase">
            User-Friendly Interface
          </h3>
          <p className="text-white leading-relaxed ">
            Our app has a user-friendly interface, making it easy for users of all technical 
            skill levels to send and receive Ethereum and other ERC-20 tokens.
          </p>
        </div>
        <div className="bg-gray-200 rounded-lg p-4 white-glassmorphism">
          <h3 className="text-lg font-bold text-gray-900 mb-2 uppercase">
            Gif notification
          </h3>
          <p className="text-black leading-relaxed ">
          We also have push notifications feature that notify the user when the transaction 
          is complete, with a GIF animation to make it more engaging.
          </p>
        </div>
      </div>
    </div>
  )
};

export default Service;
