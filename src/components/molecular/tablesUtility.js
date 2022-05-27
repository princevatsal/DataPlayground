import React, { useState } from "react";
import Minus from "../../assets/minus.png";
import Plus from "../../assets/plus.png";
import Play from "../../assets/play.png";
const TablesUtility = ({ setValue }) => {
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
            <div style={styles.showCover} onClick={() => setValue(command)}>
              <img src={Play} style={styles.minus} alt="play" />
              <div>Show All</div>
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
        <p style={styles.utilityName}>SELECT</p>
      </div>
      {open && (
        <div style={styles.panel}>
          <Table name="Categories" command={"SELECT * FROM CATEGORIES"} />
          <Table name="Customers" command={"SELECT * FROM CUSTOMERS"} />
          <Table name="Products" command={"SELECT * FROM PRODUCTS"} />
          <Table name="Shippers" command={"SELECT * FROM SHIPPERS"} />
          <Table name="Suppliers" command={"SELECT * FROM SUPPLIERS"} />
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
