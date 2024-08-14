import axios from 'axios';

const API_URL = 'http://localhost:8080/vendors';

class VendorService {
    createVendor(vendor) {
        return axios.post(API_URL, vendor);
    }

    getAllVendors() {
        return axios.get(API_URL);
    }
}

export default new VendorService();
