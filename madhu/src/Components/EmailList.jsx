import React, { useEffect, useState } from 'react';
import EmailService from '../services/EmailService';

const EmailList = () => {
    const [emails, setEmails] = useState([]);

    useEffect(() => {
        EmailService.getAllEmails().then((response) => {
            setEmails(response.data);
        });
    }, []);

    return (
        <div>
            <h2>Sent Emails</h2>
            <ul>
                {emails.map((email) => (
                    <li key={email.id}>
                        To: {email.recipient}, Subject: {email.subject}, Body: {email.body}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default EmailList;
