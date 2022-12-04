import React from "react";

import { Card, Col, Row, Container,Button, Form, FormGroup, Label, Input, FormText } from "reactstrap";

import SocialLinks from "../components/SocialLinks";
import Image from "next/image";

const GithubProfileCard = ({ prof }) => {
	return (
		
		<Card className="section-lg bg-gradient-info shadow-lg border-0">
			<Container className="">
				<div className="p-2">
					<Row className="">
						<Col className="order-lg-2" lg="4">
							<img
								src={prof.avatar_url}
								style={{ width: "200px" }}
								alt=""
								className="rounded-circle img-center img-fluid shadow shadow-lg--hover mb-4"
							/>
						</Col>
						<Col lg="8" className="order-lg-1">
							<h2 className="text-white">Thank You for visiting</h2>
							<p className="lead text-white mt-3">
								Reach Out to me!<br></br>
								DISCUSS A PROJECT OR JUST WANT TO SAY HI? MY
								INBOX IS OPEN FOR ALL.
							</p>
							{/* <p className="text-white mt-3">{prof.bio}</p> */}
							<FormGroup>
								<Label className="text-white mt-3" for="exampleEmail">Email</Label>
								<Input type="email" name="email" id="exampleEmail" placeholder="Email" />
							</FormGroup>
							<FormGroup>
								<Label className="text-white mt-3" for="exampleText">Message</Label>
								<Input type="textarea" name="text" id="exampleText" placeholder="Write message"/>
							</FormGroup>
							<Button className="mb-5" color="primary">Submit</Button>
							{/* <div className="my-3 mt-20 icon-shape bg-gradient-white shadow rounded text-info">
								<i className="ni ni-pin-3 text-info mr-2" />
								{prof.location}
							</div> */}
							<SocialLinks />
						</Col>
					</Row>
				</div>
			</Container>
		</Card>
	);
};

export default GithubProfileCard;
