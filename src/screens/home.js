import React, { useState, useRef, useEffect } from "react";
import InputBar from "../components/atomic/inputBar";
import CommandResult from "../components/atomic/commandResult";
import StaticInputBar from "../components/atomic/staticInputBar";
import HelpUtility from "../components/molecular/helpUtility";
import QueryUtility from "../components/molecular/queriesUtility";
import TablesUtility from "../components/molecular/tablesUtility";
import Categories from "../assets/json/categories.json";
import Customers from "../assets/json/customers.json";
import Suppliers from "../assets/json/suppliers.json";
import Products from "../assets/json/products.json";
import Shippers from "../assets/json/shippers.json";
import "../css/home.css";
const Home = () => {
  const [history, setHistory] = useState([]);
  const terminalRef = useRef(null);
  const scrollToBottom = () => {
    terminalRef.current.scrollIntoView(false, { behavior: "smooth" });
  };
  const tables = {
    CATEGORIES: Categories,
    CUSTOMERS: Customers,
    SUPPLIERS: Suppliers,
    PRODUCTS: Products,
    SHIPPERS: Shippers,
  };
  const commandParser = (command) => {
    //SELECT , INSERT , UPDATE , DELETE

    let parameters = {};
    command = command.toUpperCase().trim();
    if (command.startsWith("SELECT")) {
      // SELECT * FROM STUDENTS
      // SELECT NAME FROM STUDENTS
      // SELECT NAME,AGE FROM STUDENTS
      // SELECT NAME, AGE FROM STUDENTS
      // SELECT NAME , AGE FROM STUDENTS
      // SELECT NAME ,AGE FROM STUDNETS
      // SELECT NAME,AGE,CLASS FROM STUDENTS
      var fieldsRequired = command
        .slice(6, command.indexOf("FROM") != -1 ? command.indexOf("FROM") : 0)
        .split(",")
        .map((i) => i.trim());
      fieldsRequired = fieldsRequired.filter((field) => field != "");

      var tableName = command
        .slice(command.indexOf("FROM") + 4, command.length)
        .trim();

      if (fieldsRequired.length == 0) {
        parameters["error"] = true;
        parameters["errorMessage"] = "Please enter columns required";
      } else if (!tableName || tableName.length == 0) {
        parameters["error"] = true;
        parameters["errorMessage"] = "Please enter table name";
      } else if (
        !Object.keys(tables).find((table) => table.toUpperCase() == tableName)
      ) {
        parameters["error"] = true;
        parameters["errorMessage"] = "No table found";
      } else {
        parameters["action"] = "SELECT";
        parameters["fieldsRequired"] = fieldsRequired;
        parameters["tableName"] = tableName;
      }
    } else if (command.startsWith("INSERT")) {
      parameters["error"] = true;
      parameters["errorMessage"] = "Invalid Command";
    } else if (command.startsWith("UPDATE")) {
      parameters["error"] = true;
      parameters["errorMessage"] = "Invalid Command";
    } else if (command.startsWith("DATE")) {
      parameters["error"] = true;
      parameters["errorMessage"] = "Invalid Command";
    } else {
      parameters["error"] = true;
      parameters["errorMessage"] = "Invalid Command";
    }
    return parameters;
  };
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
          <div style={styles.terminal} ref={terminalRef}>
            <p style={styles.head}>WEB SQL ACCESS, 25 MAY 2022 , 5:6 PM</p>
            {history.map((item) => (
              <React.Fragment key={item.id}>
                <StaticInputBar value={item.command} />
                {(function () {
                  console.log("rendering history");
                  let parameters = commandParser(item.command);
                  return parameters ? (
                    parameters.error ? (
                      <p style={styles.message}>{parameters.errorMessage}</p>
                    ) : (
                      parameters.action == "SELECT" && (
                        <CommandResult
                          tableName={parameters.tableName}
                          tables={tables}
                          fieldsRequired={parameters.fieldsRequired}
                        />
                      )
                    )
                  ) : (
                    ""
                  );
                })()}
              </React.Fragment>
            ))}
            <InputBar
              history={history}
              setHistory={setHistory}
              scrollToBottom={scrollToBottom}
            />
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
  message: {
    color: "yellow",
    fontSize: 12,
    margin: 0,
  },
};
export default Home;
