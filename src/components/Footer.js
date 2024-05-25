import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-dark text-light py-3 mt-5">
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <p className="m-0">GrooveNest &copy; {new Date().getFullYear()}</p>
                    </div>
                    <div className="col-md-6 text-md-end">
                        <p className="m-0">Contact: info@groovenest.com</p>
                        <p className="m-0">Address: 123 Music Street, Surat, India</p>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
