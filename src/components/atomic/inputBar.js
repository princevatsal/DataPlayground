import React, { useState } from "react";

const InputBar = () => {
  var [value, setValue] = useState("");
  return (
    <div style={styles.bar}>
      <p style={styles.text}>SQL:{">"}</p>
      <div className="cursor" style={styles.inputCover}>
        <input
          className="teminalInput"
          type="text"
          style={styles.input}
          value={value}
          onChange={(e) => setValue(e.target.value)}
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
