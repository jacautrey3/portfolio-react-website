import React from "react";
import { GrCertificate } from "react-icons/gr";

import "./styles/certificate.css";
import { Link } from "react-router-dom";

const Certificate = (props) => {
    const { logo, title, description, linkText, link } = props;

    return (
        <React.Fragment>
            <div className="certificate-container">
                <div className="certificate-logo">
                    <img src={logo} alt="logo" />
                </div>
                <div className="certificate-info-container">
                    <div className="certificate-title">{title}</div>
                    <div className="certificate-description">{description}</div>
                </div>
                <div className="certificate-link-container">
                    <Link to={link} className="certificate-link">
                        <div className="certificate-link-icon">
                            <GrCertificate />
                        </div>

                        <div className="certificate-link-text">{linkText}</div>
                    </Link>
                </div>
            </div>
        </React.Fragment>
    );
};

export default Certificate;
