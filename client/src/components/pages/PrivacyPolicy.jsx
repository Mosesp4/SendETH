import React from 'react';
import { Link } from 'react-router-dom';

const PrivacyPolicy = () => {
    return (
        <div className="bg-white py-8 px-10">
            <div className="max-w-screen-xl mx-auto text-center">
                <h1 className="text-3xl font-bold text-white-900 width-full h-20 pt-5 bg-orange-600">Privacy Policy</h1>
                <p className="mt-4 text-gray-600 ">
                    This privacy policy sets out how SendETH uses and protects any information that you give SendETH when you use this web app.
                </p>
                <p className="mt-4 text-gray-600">
                    SendETH is committed to ensuring that your privacy is protected. Should we ask you to provide certain 
                    information by which you can be identified when using this app, then you can be assured that it will only 
                    be used in accordance with this privacy statement.
                </p>
                <p className="mt-4 text-gray-600">
                    SendETH may change this policy from time to time by updating this page. You should check this page 
                    from time to time to ensure that you are happy with any changes.
                </p>
            </div>
            <div className="max-w-screen-xl mx-auto mt-12">
                <h2 className="text-lg font-bold text-orange-600">What we collect when you use SendETH</h2>
                <p className="mt-4 text-gray-600">
                    We may collect the following information:
                </p>
                <ul className="mt-4 list-inside list-disc">
                    <li className="text-gray-600">Information about your device, such as your device model, 
                    operating system, and IP address.</li>
                    <li className="text-gray-600">Information about your usage of our app, such as the pages 
                    you visit and the actions you take within the app.</li>
                    <li className="text-gray-600">Information you provide us directly, such as your email address and any 
                    other personal information you choose to provide.</li>

                </ul>
            </div>

            <div className="max-w-screen-xl mx-auto mt-12">
                <h2 className="text-lg font-bold text-orange-600">MetaMask</h2>
                <p className="mt-4 text-gray-600">
                Our app integrates with MetaMask, a browser extension that allows you to securely manage your 
                Ethereum accounts and send transactions. When you connect your MetaMask wallet to our app, 
                we may collect the following types of information:
                </p>
                <ul className="mt-4 list-inside list-disc">
                    <li className="text-gray-600">Public address of your Ethereum wallet(s)</li>
                    <li className="text-gray-600">Information about your transactions, such as 
                    the recipient address, transaction amount, and transaction history</li>
                   
                </ul>
                <br />
                <p className="text-lg font-bold text-orange-600">
                We do not collect or store your private key, seed phrase, or any other 
                sensitive information from your MetaMask wallet.
                </p>
            </div>


            <div className="max-w-screen-xl mx-auto mt-12">
                <h2 className="text-lg font-bold text-orange-600">How We Use Your Information</h2>
                <p className="mt-4 text-gray-600">
                We use the information we collect to provide and improve our services. 
                Specifically, we may use your information for the following purposes:

                </p>
                <ul className="mt-4 list-inside list-disc">
                    <li className="text-gray-600">To provide you with the services you request, such as sending Ethereum 
                    to a specified address.</li>
                    <li className="text-gray-600">To communicate with you about your use of our app and respond to your inquiries.</li>
                    <li className="text-gray-600">To improve our app and develop new features and services.</li>
                    <li className="text-gray-600">To analyze and understand how our users use our app.</li>
                </ul>
            </div>
            <div className="max-w-screen-xl mx-auto mt-12">
                <h2 className="text-lg font-bold text-orange-600">Sharing Your Information</h2>
                <p className="mt-4 text-gray-600">
                We do not sell or share your information with third parties for their own 
                marketing or advertising purposes. We may share your information with third-party 
                service providers who perform services on our behalf, such as hosting, 
                analytics, and email delivery. These third-party service providers are 
                contractually bound to use your information only for the purposes of 
                providing the services they perform for us.
                </p>
            </div>

            <div className="max-w-screen-xl mx-auto mt-12">
                <h2 className="text-lg font-bold text-orange-600">Security</h2>
                <p className="mt-4 text-gray-600">
                We take the security of your information seriously and employ reasonable 
                technical and organizational measures to protect it from unauthorized 
                access, use, or disclosure. However, no method of transmission over the 
                internet or method of electronic storage is 100% secure, so we cannot 
                guarantee the absolute security of your information.
                </p>
            </div>

            <div className="max-w-screen-xl mx-auto mt-12">
                <h2 className="text-lg font-bold text-orange-600">Changes to Our Privacy Policy</h2>
                <p className="mt-4 text-gray-600">
                We may update this Privacy Policy from time to time to reflect changes in our practices 
                or for other operational, legal, or regulatory reasons. We will provide 
                notice of any material changes to the Privacy Policy by posting the new 
                policy on our app or by other means. Your continued use of our app after any 
                changes to this Privacy Policy will constitute acceptance of the new terms.
                </p>
            </div>


            <div className="max-w-screen-xl mx-auto mt-12">
                <h2 className="text-lg font-bold text-orange-600">How we use cookies</h2>
                <p className="mt-4 text-gray-600">
                    A cookie is a small file which asks permission to be placed on your device's hard drive. 
                    Once you agree, the file is added and the cookie helps analyze web traffic or lets you 
                    know when you visit a particular site. Cookies allow web applications to respond to you 
                    as an individual. The web application can tailor its operations to your needs, likes and 
                    dislikes by gathering and remembering information about your preferences.
                </p>
                <p className="mt-4 text-gray-600">
                    We use traffic log cookies to identify which pages are being used. This helps us analyze  
                    Information about your transactions, such as the recipient address, transaction amount, and 
                    transaction history about web page traffic and improve our app in order to tailor it to customer needs. 
                    We only use this information for statistical analysis purposes and then the data is removed from the system.
                </p>
                <p className="mt-4 text-gray-600">
                    Overall, cookies help us provide you with a better app, by enabling us to monitor which pages you find 
                    useful and which you do not. A cookie in no way gives us access to your device or any information about 
                    you, other than the data you choose to share with us.
                </p>
                <p className="mt-4 text-gray-600">
                    You can choose to accept or decline cookies. Most web browsers automatically accept cookies, 
                    but you can usually modify your browser setting to decline cookies if you prefer. This may 
                    prevent you from taking full advantage of the app.
                </p>
            </div>
            <div className="max-w-screen-xl mx-auto mt-12">
                <h2 className="text-lg font-bold text-orange-600">Links to other websites</h2>
                <p className="mt-4 text-gray-600">
                    Our app may contain links to other websites of interest. However, once you have used these links to 
                    leave our app, you should note that we do not have any control over that other website. 
                    Therefore, we cannot be responsible for the protection and privacy of any information which you 
                    provide while visiting such sites and such sites are not governed by this privacy statement. 
                    You should exercise caution and look at the privacy statement applicable to the website in question.
                </p>
            </div>
          
        </div>
    );
}

export default PrivacyPolicy;




