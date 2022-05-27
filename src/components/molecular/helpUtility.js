import React, { useState } from "react";
import Minus from "../../assets/minus.png";
import Plus from "../../assets/plus.png";
import Play from "../../assets/play.png";
const HelpUtility = ({ setValue }) => {
  const [open, setOpen] = useState(true);
  const Table = ({ name, command }) => {
    const [OPEN, setOPEN] = useState(false);
    return (
      <>
        <div style={styles.tableCover} onClick={() => setOPEN((old) => !old)}>
          <img src={OPEN ? Minus : Plus} style={styles.minus} alt="switch" />
          <div>{name}</div>
        </div>
        {OPEN && (
          <div style={styles.extras}>
            <div style={styles.showCover} onClick={() => setValue("CLEAR")}>
              <img src={Play} style={styles.minus} alt="play" />
              <div>EXECUTE</div>
            </div>
          </div>
        )}
      </>
    );
  };

  return (
    <>
      <div style={styles.utilityRow} onClick={() => setOpen((old) => !old)}>
        <img src={open ? Minus : Plus} style={styles.minus} alt="switch" />
        <p style={styles.utilityName}>CLEAR</p>
      </div>
      {open && (
        <div style={styles.panel}>
          <Table name="CLEAR TERMINAL" />
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

export default HelpUtility;
