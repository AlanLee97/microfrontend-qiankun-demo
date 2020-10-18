import React from "react";

function push(subapp) {
  window.history.replaceState(null, subapp, subapp);
  window.location.href = window.location.href.split("#")[0];
}

function IndexPage(props) {
  const {loading} = props;

  const styles = {
    mainApp: {
      // backgroundColor: "rgba(248,248,248, .6)"
    },
    sideBar: {
      backgroundColor: "#fff",
      padding: "40px"
    },
    microApp: {
      backgroundColor: "rgba(231,231,231,0.2)",
      padding: "20px"
    }
  }

  return (
    <div style={styles.mainApp}>
      <div>
        <h1 style={{textAlign: "center", padding: "40px"}}>Main APP</h1>
      </div>

      <div style={{display: "flex", width: "80%", margin: "auto"}}>
        <div style={{width: "200px", ...styles.sideBar}}>
          <h3>微应用列表</h3>
          <ul>
            <li onClick={() => push('/react-app')}><h3><a>react-app</a></h3></li>
            <li onClick={() => push('/vue-app')}><h3><a>vue-app</a></h3></li>
          </ul>
        </div>

        <div style={{flexGrow: 1, ...styles.microApp}}>
          <h2 style={{textAlign: "center", padding: "20px"}}>Micro APP</h2>

          {loading && <h4 className="subapp-loading">Loading...</h4>}

          {/*展示微应用的节点*/}
          <div id="subapp-viewport"></div>
        </div>
      </div>
    </div>
  )
}

export default IndexPage;
