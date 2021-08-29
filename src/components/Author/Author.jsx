import React, {Component} from 'react';
import {Avatar,Divider} from "antd";
import {GithubOutlined,QqOutlined,WechatOutlined} from '@ant-design/icons'
import './Author.less'
const Author = ()=>{
    return (
        <div className='author-div comm-box'>
            <div>
                <Avatar size={100} src='http://hello.img.zhguang.xyz/T.jpg'></Avatar>
            </div>
            <div className='author-introduction'>
                因为美好的东西都是免费的，比如水、阳光和空气，所以........
                <Divider>社交账号</Divider>
                <Avatar size={28} className='account'><GithubOutlined /></Avatar>
                <Avatar size={28} className='account'><QqOutlined /></Avatar>
                <Avatar size={28} className='account'><WechatOutlined /></Avatar>
            </div>
        </div>
    )
}

export default Author;
