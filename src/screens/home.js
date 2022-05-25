import React from "react";
import InputBar from "../components/atomic/inputBar";
import CommandResult from "../components/atomic/commandResult";
import StaticInputBar from "../components/atomic/staticInputBar";
import HelpUtility from "../components/molecular/helpUtility";
import QueryUtility from "../components/molecular/queriesUtility";
import TablesUtility from "../components/molecular/tablesUtility";
import "../css/home.css";
const Home = () => {
  return (
    <div style={styles.homepage}>
      <h1 style={styles.hero}>DATA PLAYGROUND</h1>
      <div style={styles.main}>
        <div style={styles.leftPanel}>
          <p style={styles.utility}>UTILITY BOX</p>
          <TablesUtility />
          <QueryUtility />
          <HelpUtility />
        </div>
        <div style={styles.rightPanel}>
          {/* <div style={styles.topBar}></div> */}
          <div style={styles.terminal}>
            <p style={styles.head}>WEB SQL ACCESS, 25 MAY 2022 , 5:6 PM</p>
            <StaticInputBar value="select * from students" />
            <CommandResult /> <InputBar />
          </div>
        </div>
      </div>
    </div>
  );
};
const styles = {
  homepage: {
    display: "flex",
    flexDirection: "column",
    width: "100%",
    height: "100%",
    textAlign: "center",
  },
  hero: {
    fontSize: 25,
  },
  main: {
    display: "flex",
    margin: "0% 3%",
  },
  leftPanel: {
    width: "28%",
    marginRight: "2%",
    height: "80vh",
    backgroundColor: "#E8E8E8",
    borderRadius: "5px",
  },
  rightPanel: {
    width: "70%",
    height: "80vh",
    backgroundColor: "black",
    overflow: "scroll",
    borderRadius: "5px",
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
  },
  topBar: {
    backgroundColor: "#606060",
    height: "3%",
    width: "100%",
    borderTopLeftRadius: "5px",
    borderTopRightRadius: "5px",
  },
  head: {
    color: "#fff",
    fontSize: 12,
  },
  terminal: {
    margin: "1%",
    width: "99%",
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
  },
  utility: {
    color: "#000",
    fontWeight: "bold",
  },
};
export default Home;
