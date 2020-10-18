import React from "react";
import TestNetworkRequest from "../test/TestNetworkRequest";
import {Home} from "../test/TestRouter";
import TestAntd from "../test/TestAntd";
import logo from '../../logo.png';

class IndexPage extends React.Component{
  //构造器
  constructor(props) {
    super(props);

    this.state = {}
  }

  //渲染函数
  render() {
    return(
      <div>
        <center>
          <img src={logo} style={{width: "200px", height: "200px"}} alt=""/>
          <br/>
          <h1>React APP</h1>
        </center>

        <br/>

        {/* 这是测试，不看测试的可以直接删掉下面这段内容 */}
        <div id="test" style={{margin: 50 + 'px', padding: 50 + 'px', borderRadius: 20 + 'px', backgroundColor: "#fcfcfc"}}>
          <p style={{fontSize: 10 + 'px', color: "#cecece"}}>这是测试，不看测试的可以直接删掉下面这段内容</p>


          <hr/>
          <h2>测试网络请求</h2>
          <TestNetworkRequest />
          <br/>

          <hr/>
          <h2>测试路由</h2>
          <Home />
          <hr/>

          <hr/>
          <h2>测试antd</h2>
          <TestAntd />
          <hr/>
        </div>
      </div>
    );
  }

  //组件挂载完成时调用
  componentDidMount() {

  }

  //组件卸载前调用
  componentWillUnmount() {

  }

}

export default IndexPage;
