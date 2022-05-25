import React, { useState } from "react";
import Minus from "../../assets/minus.png";
import Plus from "../../assets/plus.png";
import Play from "../../assets/play.png";
const Table = ({ name }) => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <div style={styles.tableCover} onClick={() => setOpen((old) => !old)}>
        <img src={open ? Minus : Plus} style={styles.minus} />
        <div>{name}</div>
      </div>
      {open && (
        <div style={styles.extras}>
          <div style={styles.showCover}>
            <img src={Play} style={styles.minus} />
            <div>Show Briefly</div>
          </div>
          <div style={styles.showCover}>
            <img src={Play} style={styles.minus} />
            <div>Show All</div>
          </div>
        </div>
      )}
    </>
  );
};
const TablesUtility = () => {
  const [open, setOpen] = useState(true);

  return (
    <>
      <div style={styles.utilityRow} onClick={() => setOpen((old) => !old)}>
        <img src={open ? Minus : Plus} style={styles.minus} />
        <p style={styles.utilityName}>TABLES</p>
      </div>
      {open && (
        <div style={styles.panel}>
          <Table name="Students" />
          <Table name="School" />
        </div>
      )}
    </>
  );
};
const styles = {
  utilityRow: {
    borderTop: "1.5px solid black",
    display: "flex",
    alignItems: "center",
    paddingLeft: "10px",
  },
  utilityName: {
    margin: "7px 0px",
    textAlign: "left",
    paddingLeft: "10px",
    fontWeight: "bold",
  },
  minus: {
    height: "20px",
  },
  tableCover: {
    display: "flex",
    marginLeft: "30px",
    marginTop: "5px",
    marginBottom: "5px",
  },
  showCover: {
    display: "flex",
    marginLeft: "50px",
    marginTop: "5px",
    marginBottom: "5px",
  },
  extras: {
    marginBottom: "10px",
  },
};

export default TablesUtility;
