// import { Button } from 'bootstrap';
import { greetings } from 'portfolio';
import React from 'react';

import {
  Button,
    Card,
    Col,
    Row,
    Container,
} from "reactstrap";

import SocialLinks from "../components/SocialLinks";

const GithubProfileCard = ({prof}) => {
    return ( 
            <Card className="section-lg bg-gradient-info shadow-lg border-0">
                <Container className="">
                <div className="p-2">
                  <Row className="">
                  <Col className="order-lg-2" lg="4">
                      <img src={prof.avatar_url} style={{width: "200px"}} alt="" className="rounded-circle img-center img-fluid shadow shadow-lg--hover mb-4"/>
                    </Col>
                    <Col lg="8" className="order-lg-1">
                      <h2 className="text-white">
                        Reach Out to me!
                      </h2>
                      <p className="lead text-white mt-3">
                        DISCUSS A PROJECT OR JUST WANT TO SAY HI? MY INBOX IS OPEN FOR ALL
                      </p>
                      <p className="text-white mt-3">
                          {prof.bio}
                      </p>
                      {/* <div className="my-3 icon-shape bg-gradient-white shadow rounded text-info">
                        <i className="ni ni-pin-3 text-info mr-2" />
                        {prof.location}
                        </div> */}
                        <div className="btn-wrapper my-4">
                        <Button
                          className="btn-white btn-icon mb-3 mb-sm-0 ml-1"
                          color="default"
                          
                        >
                          <span className="btn-inner--icon mr-1">
                            <i className="fa fa-envelope" />
                          </span>
                          <span className="btn-inner--text">
                            ipentankayode5@gmail.com
                          </span>
                        </Button>
                        <Button
                          className="btn-white btn-icon mb-3 mb-sm-0 ml-1"
                          color="default"
                          
                        >
                          <span className="btn-inner--icon mr-1">
                            <i className="fa fa-phone" />
                          </span>
                          <span className="btn-inner--text">
                           07037671754
                          </span>
                        </Button>
                  </div>
                        <SocialLinks />
                    </Col>                    
                  </Row>
                  
                </div>

                </Container>
              </Card>
     );
}
 
export default GithubProfileCard;