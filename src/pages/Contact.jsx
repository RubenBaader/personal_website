import React from "react";
import "./Contact.css"

function Contact() {
    return (
        <main className="page-wrapper">
            <h1>Contact information</h1>
            <p className="main-text">Here you may find how to contact me.</p>
            <div className="grid-wrapper">
                <section className="main-text">
                    For information on my availability for full time work, please send me an email at
                </section>
                <div className="mail-button-wrapper">
                    <a className="main-text mail-button" href="mailto:">email@example.com</a>
                </div>
                <section className="main-text">
                    If you have a limited project which you think might be of interest to me, feel free to email at
                </section>
                <div className="mail-button-wrapper">
                    <a className="main-text mail-button" href="mailto:">email+1@example.com</a>
                </div>
                <section className="main-text">
                    For other questions, mail me at
                </section>
                <div className="mail-button-wrapper">
                    <a className="main-text mail-button" href="mailto:">info@example.com</a>
                </div>
            </div>
        </main>
    );
}

export default Contact;