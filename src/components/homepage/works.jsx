import React from "react";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";

import Card from "../common/card";

import "./styles/works.css";

const Works = () => {
	return (
		<div className="works">
			<Card
				icon={faBriefcase}
				title="Work"
				body={
					<div className="works-body">
						<div className="work">
							<img
								src="./cdk_icon.png"
								alt="cdk"
								className="work-image"
							/>
							<div className="work-title">CDK Global</div>
							<div className="work-subtitle">
								DevOps Engineer
							</div>
							<div className="work-duration">2020 - 2023</div>
						</div>

					</div>
				}
			/>
		</div>
	);
};

export default Works;
