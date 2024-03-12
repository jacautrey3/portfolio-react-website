import React from "react";

import Certificate from "./certificate";
import { faCertificate } from "@fortawesome/free-solid-svg-icons";

import INFO from "../../data/user";

import "./styles/allCertificates.css";
import Card from "../common/card";

const AllCertificates = () => {
    return (
        <div className="all-certificates-container">
            <Card
                icon={faCertificate}
                title="Certifications"
                body={
                    <div className="certificates-body">
                        {INFO.certificates.map((certificate, index) => (
                            <div className="all-certificates-certificate" key={index}>
                                <Certificate
                                    logo={certificate.logo}
                                    title={certificate.title}
                                    description={certificate.description}
                                    linkText={certificate.linkText}
                                    link={certificate.link}
                                />
                            </div>
                        ))}
                    </div>
                }
            />
        </div >
    );
};

export default AllCertificates;
