import React from "react";
import "./Contact.css"

function Contact() {
    const email = 'info@example.com';
    const work_email = 'info+work@example.com';
    const project_email = 'info+project@example.com';

    return (
        <main className="page-wrapper">
            <h1>Contact information</h1>
            <p className="main-text">Here you may find how to contact me.</p>
            <div className="grid-wrapper">
                <section>
                    <h2>Work</h2>
                    <hr />
                    <p className="describe-text">
                        For information on my availability for full time work, please send me an email at <a className="describe-text" href={`mailto: ${work_email}`}>{work_email}</a>
                    </p>
                </section>
                <div className="mail-button-wrapper">
                    <a className="button-text mail-button" href={`mailto: ${work_email}`}>{work_email}</a>
                </div>
                <section>
                    <h2>Project</h2>
                    <hr />
                    <p className="describe-text">
                        If you have a limited project which you think might be of interest to me, feel free to email at <a className="describe-text" href={`mailto: ${project_email}`}>{project_email}</a>
                    </p>
                </section>
                <div className="mail-button-wrapper">
                    <a className="button-text mail-button" href={`mailto: ${project_email}`}>{project_email}</a>
                </div>
                <section>
                    <h2>Other</h2>
                    <hr />
                    <p className="describe-text">
                        For other questions, mail me at <a className="describe-text" href={`mailto: ${email}`}>{email}</a>
                    </p>
                </section>
                <div className="mail-button-wrapper">
                    <a className="button-text mail-button" href={`mailto: ${email}`}>{email}</a>
                </div>
            </div>
        </main>
    );
}

export default Contact;