import React,{Component} from 'react';
import {Layout} from 'antd';
import HeaderCustom from '../components/HeaderCustom';
import SiderCustom from '../components/SiderCustom';
class App extends Component {
  state = {
    collapsed: false,
  };
  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  };
  render() {
    return (
      <Layout className="main">
        <HeaderCustom toggle={this.toggle} />
        <SiderCustom path={this.props.location.pathname} collapsed={this.state.collapsed} />
        <style>{`
                    .main {
                        width: 100%;
                        height: 100%;
                    }
                `}</style>
      </Layout>
    );
  }
}

export default App;
