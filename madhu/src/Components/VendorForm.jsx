import VendorService from '../services/VendorService';
import React, { useState } from 'react';

const VendorForm = () => {
    const [vendor, setVendor] = useState({ name: '', email: '', upi: '' });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setVendor({ ...vendor, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        VendorService.createVendor(vendor).then(() => {
            setVendor({ name: '', email: '', upi: '' });
        });
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" name="name" value={vendor.name} onChange={handleChange} placeholder="Name" />
            <input type="email" name="email" value={vendor.email} onChange={handleChange} placeholder="Email" />
            <input type="text" name="upi" value={vendor.upi} onChange={handleChange} placeholder="UPI" />
            <button type="submit">Add Vendor</button>
        </form>
    );
};

export default VendorForm;