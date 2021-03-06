import React from 'react';
import {Icon, Menu, Card, Button} from 'antd';
import UserManage from '../include/userManage'
import pub from '../js/pub.js';
import Logo from './logo';
import $ from 'jquery';

const SubMenu = Menu.SubMenu;

class MenuShow extends React.Component {
    state = {
        collapsed: false,
        current: 'firstPage',
        batchId: null,
        butcherId: null,
        showLogo: true
    }
    toggleCollapsed = () => {
        let a = this.state.collapsed
        this.setState({
            collapsed: !this.state.collapsed,
        })
        if (a == false) {
            console.log("menu collapsed")
            $("#div-menu").css("flex", '0 0 80px')
        } else {
            console.log("menu llllll")
            $("#div-menu").css("flex", '0 0 256px')
        }

    }
    handleMenuClick = (e) => {
        console.log('click ', e);
        this.setState({
            current: e.key,
        });
    }

    handleClickOut = () => {
        pub.removeCookie("Admin")
        let memberId = pub.getCookie("Admin");
        console.log(memberId);
        if (memberId == 0) {
            location.replace("#/index"); //或改location.hash
        }
    }

    componentWillMount() {
    }

    componentDidMount() {
        let a = this
        setTimeout(function () {
            $('#logo-div').animate({opacity: 0}, 'slow', function () {
                console.log("come in 2")
                a.setState({
                    showLogo: false,
                });
            });
        }, 1800);
        setTimeout(function () {
            $('#menu').animate({opacity: 1}, 'slow', function () {
                console.log("come in 2")
            });
        }, 2200);

    }

    render() {
        return (
            <div>
                {this.state.showLogo == true && <Logo id="logo-div"/>}
                <div className="ant-layout ant-layout-has-sider" id="menu" style={{opacity: 0}}>
                    <div id="div-menu" className=" index__sider___1tQnn ant-layout-sider"
                         style={{flex: '0 0 256px', width: 256}}>
                        <div className="ant-layout-sider-children">
                            <div className="index__logo___1Bu95">
                                <img alt="logo"
                                     src="images/logo2.png"/>
                                <h1 style={{fontSize: 25, marginLeft: 5}}>web base</h1>
                            </div>
                            <Menu
                                defaultSelectedKeys={['1']}
                                defaultOpenKeys={['sub1']}
                                mode="inline"
                                theme="dark"
                                onClick={this.handleMenuClick}
                                inlineCollapsed={this.state.collapsed}
                            >
                                <Menu.Item key="firstPage">
                                    <Icon type="pie-chart"/>
                                    <span>Option 1</span>
                                </Menu.Item>
                                <Menu.Item key="secondPage">
                                    <Icon type="desktop"/>
                                    <span>Option 2</span>
                                </Menu.Item>
                                <Menu.Item key="3">
                                    <Icon type="inbox"/>
                                    <span>Option 3</span>
                                </Menu.Item>
                                <SubMenu key="sub1" title={<span><Icon type="mail"/><span>Navigation One</span></span>}>
                                    <Menu.Item key="5">Option 5</Menu.Item>
                                    <Menu.Item key="6">Option 6</Menu.Item>
                                    <Menu.Item key="7">Option 7</Menu.Item>
                                    <Menu.Item key="8">Option 8</Menu.Item>
                                </SubMenu>
                                <SubMenu key="sub2"
                                         title={<span><Icon type="appstore"/><span>Navigation Two</span></span>}>
                                    <Menu.Item key="9">Option 9</Menu.Item>
                                    <Menu.Item key="10">Option 10</Menu.Item>
                                    <SubMenu key="sub3" title="Submenu">
                                        <Menu.Item key="11">Option 11</Menu.Item>
                                        <Menu.Item key="12">Option 12</Menu.Item>
                                    </SubMenu>
                                </SubMenu>
                            </Menu>
                        </div>
                    </div>
                    <div className="ant-layout">
                        <div className="ant-layout-header" style={{padding: 0}}>
                            <div className="index__header___1QOYl">
                                <Button className="header-btn" onClick={this.toggleCollapsed} style={{marginLeft: 24}}>
                                    <Icon type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}/>
                                </Button>
                                <div className="index__right___1w-5-">
                                    <span
                                        className="index__action___1N2nc index__search___2ElU0 index__headerSearch___7F287">
                         <Button className="anticon" type="primary" ghost icon="logout"
                                 onClick={this.handleClickOut}>退出</Button>
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className="ant-layout-content" style={{margin: "24px 24px 0px", height: "100%"}}>
                            {this.state.current == 'firstPage' &&
                            <UserManage title="firstPage"/>}
                            {this.state.current == 'secondPage' &&
                            <UserManage title="secondPage"/>}
                        </div>
                    </div>
                </div>
            </div>
        );
    }

}

module.exports = MenuShow;