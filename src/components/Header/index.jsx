import {Col, Menu, Row} from "antd";
import {Link, Route, Router} from 'react-router-dom'
import {HomeOutlined,VideoCameraOutlined,SmileOutlined} from "@ant-design/icons";
import Detail from "../../pages/detail";

const Header = (props)=>(
    <Router history={props.history}>
        <div className='header'>
            {/* flex属性可以设置，中，左，右 */}
            <Row type='flex' justify='center'>
                {/*各种屏幕大小适配 xs，sm屏幕下占满24列(整行),md，lg,xl屏幕下占10行，留给后面的元素*/}
                <Col xs={24} sm={24} md={10} lg={15} xl={12}>
                    <span className='header-logo'>yyds</span>
                    <span className='header-txt'>XXX!欢迎你，哈哈哈哈哈哈哈哈哈哈哈哈</span>
                </Col>


                <Col xs={0} sm={0} md={14} lg={8} xl={6}>
                    <Menu mode='horizontal'>
                        <Menu.Item key='home'>
                            <HomeOutlined /><Link to='/detail'>详情</Link>
                        </Menu.Item>

                        <Menu.Item key='video'>
                            <VideoCameraOutlined />视频
                        </Menu.Item>

                        <Menu.Item key='life'>
                            <SmileOutlined />生活
                        </Menu.Item>
                    </Menu>
                </Col>
            </Row>
            <Route path='/detail' component={Detail}/>
        </div>

    </Router>
)

export default Header
