/**
 * Created by kl09 on 2017/7/28.
 */
import React, {Component} from 'react';
import {Menu, Icon, Layout, Badge} from 'antd';
import avater from '../style/image/b1.jpg';
const {Header} = Layout;
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

class HeaderCustom extends Component {
  state = {
    user: '',
  };

  componentDidMount() { // 组件渲染完成时执行
    // const QueryUser = queryUser();
  }

  screenFull = () => {
  };

  render() {
    return (
      <Header style={{background: '#fff', padding: 0, height: 65}} className="custom-theme">
        <div className="logo" />
        <Icon
          className="trigger custom-trigger"
          type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}
          onClick={this.props.toggle}
        />
        <Menu
          mode="horizontal"
          style={{lineHeight: '64px', float: 'right'}}
        >
          <Menu.Item key="full" onClick={this.screenFull}>
            <Icon type="arrows-alt" onClick={this.screenFull}/>
          </Menu.Item>
          <Menu.Item key="1">
            <Badge count={25} overflowCount={10} style={{marginLeft: 10}}>
              <Icon type="notification"/>
            </Badge>
          </Menu.Item>
          <SubMenu
            title={<span className="avatar"><img style={{height:'30px',width:'30px'}} src={avater} alt="头像"/><i className="on bottom b-white"/></span>}
          >
            <MenuItemGroup title="用户中心">
              <Menu.Item key="setting:1">你好 - {this.state.user.login}</Menu.Item>
              <Menu.Item key="setting:2">个人信息</Menu.Item>
            </MenuItemGroup>
            <MenuItemGroup title="设置中心">
              <Menu.Item key="setting:3">个人设置</Menu.Item>
              <Menu.Item key="setting:4">系统设置</Menu.Item>
            </MenuItemGroup>
          </SubMenu>
        </Menu>
        <style>{`
                    .ant-menu-submenu-horizontal > .ant-menu {
                        width: 120px;
                        left: -40px;
                    }
                `}</style>
      </Header>
    );
  }
}

export default HeaderCustom;
