import React from "react";

const CommandResult = () => {
  return (
    <div style={styles.table}>
      <div style={styles.head}>
        <div style={styles.headTop}>
          <p style={styles.tableName}> Table Name</p>
        </div>
        <div style={styles.columns}>
          <p style={styles.col}>Col 1</p>
          <p style={styles.col}>Col 2</p>
          <p style={styles.col}>Col 3</p>
          <p style={{ ...styles.col, borderRight: 0 }}>Col 4</p>
        </div>
      </div>
      <div style={styles.body}>
        <div style={styles.row}>
          <p style={styles.value}>Priyansh</p>
          <p style={styles.value}>16</p>
          <p style={styles.value}>gzb</p>
          <p style={styles.value}>hindi</p>
        </div>
        <div style={styles.row}>
          <p style={styles.value}>Priyansh</p>
          <p style={styles.value}>16</p>
          <p style={styles.value}>gzb</p>
          <p style={styles.value}>hindi</p>
        </div>
        <div style={styles.row}>
          <p style={styles.value}>Priyansh</p>
          <p style={styles.value}>16</p>
          <p style={styles.value}>gzb</p>
          <p style={styles.value}>hindi</p>
        </div>
      </div>
    </div>
  );
};
const styles = {
  table: {
    display: "flex",
    flexDirection: "column",
    border: "2px dashed grey",
  },
  head: {
    display: "flex",
    flexDirection: "column",
    marginLeft: "2%",
    width: "100%",
    marginRight: "2%",
  },
  headTop: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  tableName: {
    color: "#fff",
    fontSize: "11px",
    margin: 0,
    marginTop: "5px",
  },
  columns: {
    display: "flex",
    spaceBetween: "space-evenly",
  },
  col: {
    color: "#fff",
    fontSize: "11px",
    marginLeft: "25px",
    paddingRight: "25px",
    borderRight: "1.5px solid grey",
    minWidth: "28px",
  },
  value: {
    color: "#fff",
    fontSize: "11px",
    marginLeft: "25px",
    marginRight: "25px",
  },
  body: {
    display: "flex",
    flexDirection: "column",
    borderTop: "2px dashed grey",
  },
  row: {
    display: "flex",
  },
};
export default CommandResult;
