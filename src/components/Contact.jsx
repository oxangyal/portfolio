import { CONTACT } from "../constants";

const Contact = () => {
    return (
        <div id="contact" className="border-b border-neutral-900 pb-4">
            <h1 className="my-20 text-center text-4xl">Contact</h1>
            <div className="flex justify-center">
                <div className="my-8">
                    <p className="py-2">{CONTACT.address}</p>
                    <p className="py-2">{CONTACT.phoneNo}</p>
                    <p className="py-2">
                        <a href="mailto:oxana@angeleye.net">{CONTACT.email}</a>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Contact;
