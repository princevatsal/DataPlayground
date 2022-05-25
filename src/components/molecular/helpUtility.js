import React from "react";
import Minus from "../../assets/minus.png";
import Plus from "../../assets/plus.png";

const HelpUtility = () => {
  return (
    <div style={styles.utilityRow}>
      <img src={Minus} style={styles.minus} />
      <p style={styles.utilityName}>HELP</p>
    </div>
  );
};
const styles = {
  utilityRow: {
    borderTop: "1.5px solid black",
    borderBottom: "1.5px solid black",
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
};

export default HelpUtility;
