import React, {Component} from 'react';
import {Col, Row,Breadcrumb} from "antd";
import {FolderOutlined,CalendarOutlined,FireOutlined} from '@ant-design/icons'

import {initMetric} from "web-vitals/dist/modules/lib/initMetric";
import './index.less'
import Author from "../../components/Author/Author";
import Header from '../../components/Header/index'
import Advert from "../../components/Advert/Advert";
const Detail = ()=>{
    return (
        <Row className='comm-main' type='flex' justify='center'>
            <Col className='comm-left' xs={24} sm={24} md={16} lg={18} xl={14}>
               <div>
                   <div className='bread-div'>
                       <Breadcrumb>
                           <Breadcrumb.Item>
                               <a href='/'>首页</a>
                               <a href='/'>视频列表</a>
                               <a href='/'>XXXX</a>
                           </Breadcrumb.Item>
                       </Breadcrumb>
                   </div>
                   <div>
                       <div className='detailed-title'>
                           React学习视频教程-loocc
                       </div>
                       <div className='list-icon center'>
                            <span><CalendarOutlined/>2021/09/01</span>
                            <span><FolderOutlined/>视频教程</span>
                            <span><FireOutlined/>8439人</span>
                       </div>
                       <div className='detailed-content'>
                            markdown内容：纟
                       </div>
                   </div>
               </div>
            </Col>
            <Col className='comm-right' xs={0} sm={0} md={7} lg={5} xl={4}>
                <Author/>
                <Advert/>
            </Col>
        </Row>
    )
}
export default Detail
