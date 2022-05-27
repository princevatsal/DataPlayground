import React, { useState } from "react";
import Minus from "../../assets/minus.png";
import Plus from "../../assets/plus.png";
import Play from "../../assets/play.png";
const QueryUtility = ({ setValue }) => {
  const [open, setOpen] = useState(true);

  const Table = ({ name, command1, command2 }) => {
    const [OPEN, setOPEN] = useState(false);
    return (
      <>
        <div style={styles.tableCover} onClick={() => setOPEN((old) => !old)}>
          <img src={OPEN ? Minus : Plus} style={styles.minus} alt="switch" />
          <div>{name}</div>
        </div>
        {OPEN && (
          <div style={styles.extras}>
            <div
              style={styles.showCover}
              onClick={() => {
                console.log("setting command:", command2);
                setValue(command2);
              }}
            >
              <img src={Play} style={styles.minus} alt="play" />
              <div>DELETE</div>
            </div>
            <div style={styles.showCover} onClick={() => setValue(command1)}>
              <img src={Play} style={styles.minus} alt="play" />
              <div>DELETE ALL</div>
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
        <p style={styles.utilityName}>DELETE</p>
      </div>
      {open && (
        <div style={styles.panel}>
          <Table
            name="Categories"
            command1={"DELETE FROM CATEGORIES WHERE TRUE"}
            command2={"DELETE FROM CATEGORIES WHERE CATEGORYID=1"}
          />
          <Table
            name="Customers"
            command1={"DELETE FROM CUSTOMERS WHERE TRUE"}
            command2={"DELETE FROM CUSTOMERS WHERE CUSTOMERID=1"}
          />
          <Table
            name="Products"
            command1={"DELETE FROM PRODUCTS WHERE TRUE"}
            command2={"DELETE FROM PRODUCTS WHERE PRODUCTID=1"}
          />
          <Table
            name="Shippers"
            command1={"DELETE FROM SHIPPERS WHERE TRUE"}
            command2={"DELETE FROM SHIPPERS WHERE SHIPPERID=1"}
          />
          <Table
            name="Suppliers"
            command1={"DELETE FROM SUPPLIERS WHERE TRUE"}
            command2={"DELETE FROM SUPPLIERS WHERE SUPPLIERID=1"}
          />
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

export default QueryUtility;
