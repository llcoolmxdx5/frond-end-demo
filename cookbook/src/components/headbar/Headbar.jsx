import { TabBar } from 'antd-mobile';
import React, { Component } from 'react'

const tabList = [
  {
    id: 1,
    icon: require('images/cookbook.png'),
    iconActive: require('images/cookbook-active.png'),
    title: '菜谱大全',
    selectedTab: 'cookbook'
  },
  {
    id: 2,
    icon: require('images/menu.png'),
    iconActive: require('images/menu-active.png'),
    title: '分类',
    selectedTab: 'menu'
  },
  {
    id: 3,
    icon: require('images/more.png'),
    iconActive: require('images/more-active.png'),
    title: '更多',
    selectedTab: 'more'
  }
]

export default class Headbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedTab: 'cookbook',
      list: tabList
    };
  }

  render() {
    return (
      <div style={{ position: 'fixed', height: '100%', width: '100%', top: 0 }}>
        <TabBar
          unselectedTintColor="#000"
          tintColor="#000"
          barTintColor="white"
        >{
            this.state.list.map(item => {
              return (
                <TabBar.Item
                  title={item.title}
                  key={item.id}
                  icon={<div style={{
                    width: '22px',
                    height: '22px',
                    background: `url(${item.icon}) center center /  21px 21px no-repeat`
                  }}
                  />
                  }
                  selectedIcon={<div style={{
                    width: '22px',
                    height: '22px',
                    background: `url(${item.iconActive}) center center /  21px 21px no-repeat`
                  }}
                  />
                  }
                  selected={this.state.selectedTab === item.selectedTab}
                  onPress={() => {
                    this.setState({
                      selectedTab: item.selectedTab,
                    });
                  }}
                  data-seed="logId"
                >
                </TabBar.Item>
              )
            })
          }
        </TabBar>
      </div>
    );
  }
}

// #tab-bar.demo {
//   display: flex;
//   flex-direction: column;
// }
// #tab-bar .demoName {
//   height: 40px;
// }
// #tab-bar .demo-preview-item .am-tab-bar {
//   background-color: white;
// }
