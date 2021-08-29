import React, {Component} from 'react';
import {Col, Row} from "antd";
import './index.less'
import Author from "../Author/Author";
import Advert from "../Advert/Advert";
import Footer from "../Footer/Footer";
import MainList from "./MainList";
const Main = ()=>{
    return (
        <div>
            <Row className='comm-main' type='flex' justify='center'>
                <Col className='comm-left' xs={24} sm={24} md={16} lg={18} xl={14}>
                    <MainList/>
                </Col>
                <Col className='comm-right' xs={0} sm={0} md={7} lg={5} xl={4}>
                    <Author/>
                    <Advert/>
                </Col>
            </Row>
            <Footer/>
        </div>
    )
}

export default Main;
