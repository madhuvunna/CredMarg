import React, { useEffect, useState } from 'react';
import VendorService from '../services/VendorService';

const VendorList = () => {
    const [vendors, setVendors] = useState([]);

    useEffect(() => {
        VendorService.getAllVendors().then((response) => {
            setVendors(response.data);
        });
    }, []);

    return (
        <div>
            <h2>Vendors</h2>
            <ul>
                {vendors.map((vendor) => (
                    <li key={vendor.email}>
                        {vendor.name} - {vendor.upi} - {vendor.email}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default VendorList;
