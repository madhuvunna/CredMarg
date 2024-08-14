import axios from 'axios';

const API_URL = 'http://localhost:8080/emails';

class EmailService {
    sendEmail() {
        return axios.post(`${API_URL}/send`);
    }

    getAllEmails() {
        return axios.get(API_URL);
    }
}

export default new EmailService();