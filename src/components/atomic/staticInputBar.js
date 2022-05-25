import React, { useState } from "react";

const StaticInputBar = ({ value }) => {
  return (
    <div style={styles.bar}>
      <p style={styles.text}>SQL:{">"}</p>
      <p style={styles.input}>{value}</p>
    </div>
  );
};

const styles = {
  bar: {
    display: "flex",
    width: "100%",
    justifyContent: "flex-start",
    alignItems: "center",
  },
  text: {
    color: "lightblue",
    fontSize: "12px",
  },
  input: {
    margin: 0,
    paddingLeft: "10px",
    fontSize: "12px",
    color: "#fff",
    textTransform: "uppercase",
  },
};
export default StaticInputBar;
