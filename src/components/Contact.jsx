import { CONTACT } from "../constants";

const Contact = () => {
    return (
        <div id="contact" className="border-b border-neutral-900 pb-4">
            <h1 className="my-20 text-center text-4xl">Contact</h1>
            <div className="flex justify-center">
                <div className="my-8">
                    <p className="py-4">{CONTACT.address}</p>
                    <p className="py-4">{CONTACT.phoneNo}</p>
                    <p>
                        {" "}
                        <a href="#">{CONTACT.email}</a>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Contact;
