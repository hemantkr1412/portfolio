import { Icon } from "@iconify/react";
import React, { Fragment } from "react";
import { Fade } from "react-reveal";
import { Col, Container, Row, UncontrolledTooltip } from "reactstrap";
import DisplayLottie from "../components/DisplayLottie";
import { skillsSection } from "../portfolio";
import imageProfile from './profile-picHemant.png'
import {
	Card,
	CardBody,
	CardTitle,
	CardSubtitle,
	CardText,
} from "reactstrap";

const Personal = ({prof}) => {
	return skillsSection && (
		<Container className="text-center my-5 section section-lg">
			{/* <h1 className="h1">{skillsSection.title}</h1>
			<p className="lead">{skillsSection.subTitle}</p> */}
					<Row className="my-5">
						<Col lg="6" className="order-1 order-lg-1">
							<Fade left duration={2000}>
								{/* <DisplayLottie
									animationPath={section.lottieAnimationFile}
								/> */}
                                <img src={imageProfile}
								style={{ width: "200px" }}
								alt=""
								className="rounded-circle img-center img-fluid shadow shadow-lg--hover mb-4" />

							</Fade>
						</Col>
						<Col lg="6" className="order-2 order-lg-2">
							<Fade right duration={2000}>
                                <Card
                                    style={{ flex: 1,}}
                                    className="shadow-lg--hover mb-3 shadow border-0 text-center rounded"
                                >
                                    <h3 className="h3 mb-2">{"Hemant Kumar"}</h3>
                                    <div className="d-flex justify-content-center flex-wrap mb-2">
                                        <p>
                                            {"Software Engineer"}
                                        </p>
                                        <p>
                                            {" | "}
                                        </p>
                                        <p>
                                            {"India"}
                                        </p>
                                    </div>
                                    {/* <div className="d-flex justify-content-center flex-wrap mb-2">
                                        <p>
                                            "I am a software engineer with 3+ years of experience in building web applications. I have worked on a wide range of technologies and have a good understanding of the entire stack. I am passionate about building scalable and robust applications. I am currently working as a software engineer at a startup in India. I am also a part-time instructor at Udemy where I teach web development."
                                        </p>
                                    </div> */}
                                    
                                

                                        {/* {section.softwareSkills.map((skill, i) => {
                                            return (
                                                <Fragment key={i}>
                                                    <div
                                                        className="icon icon-lg icon-shape shadow-sm rounded-circle m-1"
                                                        id={skill.skillName.replace(/\s/g, '')}
                                                    >
                                                        <Icon
                                                            icon={
                                                                skill.fontAwesomeClassname
                                                            }
                                                            data-inline="false"
                                                        ></Icon>
                                                    </div>
                                                    <UncontrolledTooltip
                                                        delay={0}
                                                        placement="bottom"
                                                        target={skill.skillName.replace(/\s/g, '')}
                                                    >
                                                        {skill.skillName}
                                                    </UncontrolledTooltip>
                                                </Fragment>
                                            );
                                        })} */}
                                    {/* </div> */}
                                    
                                
                                    <div>
                                        {/* {section.skills.map((skill, i) => {
                                            return <p key={i}>{skill}</p>;
                                        })} */}
                                        <p>Hey, I am an enthusiastic and hardworking individual looking forward work for an organization to learn and explore new technologies and improve my skills, that can help me again perspective.
                                            Currently I'm Intern at Beyond Imaginations Technologies.
                                        </p>
                                    </div>
                                </Card>
							</Fade>
						</Col>
					</Row>
		</Container>
	);
};

export default Personal;
