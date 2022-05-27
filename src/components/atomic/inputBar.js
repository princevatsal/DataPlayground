import React, { useState } from "react";

const InputBar = ({
  setHistory,
  scrollToBottom,
  history,
  tables,
  setTables,
}) => {
  var [value, setValue] = useState("");
  const parseCommand = (command) => {
    command = command.toUpperCase().trim();
    let parameters = {};
    if (command.startsWith("INSERT")) {
      parameters["error"] = true;
      parameters["errorMessage"] = "Insert command";
    } else if (command.startsWith("UPDATE")) {
      parameters["error"] = true;
      parameters["errorMessage"] = "Update command";
    } else if (command.startsWith("DELETE")) {
      // DELETE FROM CATEGORIES WHERE TRUE
      // DELETE FROM CATEGORIES WHERE NAME=Condiments

      if (command.indexOf("FROM") != -1 && command.indexOf("WHERE") != -1) {
        let tableName = command
          .slice(command.indexOf("FROM") + 4, command.indexOf("WHERE"))
          .trim();
        let condition = command
          .slice(command.indexOf("WHERE") + 5, command.length)
          .trim();
        if (
          tableName.length > 0 &&
          Object.keys(tables).find((table) => table == tableName)
        ) {
          if (tables[tableName].length < 1) {
            parameters["error"] = true;
            parameters["errorMessage"] = "Empty Table";
          } else {
            if (condition.length > 0) {
              if (condition == "TRUE") {
                var length = tables[tableName].length;
                tables[tableName] = [];
                setTables(tables);
                parameters["error"] = true;
                parameters["errorMessage"] =
                  "Delete successfull. Rows effected: " + length;
              } else if (condition == "FALSE") {
                parameters["error"] = true;
                parameters["errorMessage"] =
                  "Delete successfull. Rows effected: 0";
              } else {
                var params = condition.split("=").map((i) => i.trim());
                if (
                  params.length == 2 &&
                  params[0].length > 0 &&
                  params[1].length > 0
                ) {
                  let attr = Object.keys(tables[tableName][0]).find(
                    (key) => key.toUpperCase() == params[0].toUpperCase()
                  );
                  if (attr) {
                    let count = 0;
                    tables[tableName] = tables[tableName].filter((dataItem) => {
                      if (
                        (dataItem[attr] + "").toUpperCase() !=
                        (params[1] + "").toUpperCase()
                      ) {
                        return true;
                      } else {
                        count = count + 1;
                        return false;
                      }
                    });
                    setTables(tables);
                    parameters["error"] = true;
                    parameters["errorMessage"] =
                      "Delete Sucess . Rows effected " + count;
                  } else {
                    parameters["error"] = true;
                    parameters["errorMessage"] = "Invalid Field";
                  }
                } else {
                  parameters["error"] = true;
                  parameters["errorMessage"] = "Invalid condition";
                }
              }
            } else {
              parameters["error"] = true;
              parameters["errorMessage"] = "Please enter condition";
            }
          }
        } else {
          parameters["error"] = true;
          parameters["errorMessage"] = "Invalid table name";
        }
      } else {
        parameters["error"] = true;
        parameters["errorMessage"] = "Invalid command 1";
      }

      setHistory((old) => [...old, { command, id: Date.now(), ...parameters }]);
    } else if (command.startsWith("CLEAR")) {
      setHistory([]);
    } else {
      setHistory((old) => [...old, { command: value, id: Date.now() }]);
    }
    setValue("");
    setTimeout(() => scrollToBottom(), 100);
  };
  return (
    <div style={styles.bar}>
      <p style={styles.text}>SQL:{">"}</p>
      <div className="cursor" style={styles.inputCover}>
        <input
          className="teminalInput"
          type="text"
          style={styles.input}
          value={value}
          onKeyUp={(e) => {
            if (e.key == "Enter") {
              parseCommand(value);
            } else if (e.key == "ArrowUp") {
              history.length > 0 &&
                setValue(history[history.length - 1].command);
            }
          }}
          onChange={(e) => {
            setValue(e.target.value);
          }}
          placeholder="type your command here"
        />
        <i></i>
      </div>
    </div>
  );
};

const styles = {
  bar: {
    display: "flex",
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    color: "lightblue",
    fontSize: "12px",
  },
  inputCover: {
    width: "100%",
    display: "flex",
    justifyContent: "flex-start",
  },
  input: {
    background: "none",
    borderWidth: 0,
    width: "100%",
    height: "25px",
    paddingLeft: "10px",
    paddingTop: 0,
    paddingBottom: 0,
    fontSize: "12px",
    color: "#fff",
    textTransform: "uppercase",
  },
};
export default InputBar;
