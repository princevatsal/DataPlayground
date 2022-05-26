import React, { useEffect, useState } from "react";
const CommandResult = ({ tableName, tables }) => {
  useEffect(() => {
    console.log(tableName);
  }, [tableName]);
  const [data, setData] = useState([]);

  const normalizeData = (dataList) => {
    return dataList.map((dataItem) => {
      var newItem = {};
      Object.keys(dataItem).forEach((key) => {
        if (typeof dataItem[key] != "object") {
          newItem[key] = dataItem[key];
        } else {
          Object.keys(dataItem[key]).map((innerKey) => {
            newItem[innerKey] = dataItem[key][innerKey];
          });
        }
      });
      return newItem;
    });
  };

  useEffect(() => {
    setData(normalizeData(tables[tableName]));
  }, []);
  return (
    <div
      style={
        data.length > 0
          ? { ...styles.table, width: Object.keys(data[0]).length * 20 + "%" }
          : styles.table
      }
    >
      <div style={styles.head}>
        <div style={styles.headTop}>
          <p style={styles.tableName}>{tableName}</p>
        </div>
        <div style={styles.columns}>
          {data.length > 0 &&
            Object.keys(data[0]).map((key, index) => (
              <p
                style={
                  index == Object.keys(data[0]).length - 1
                    ? {
                        ...styles.col,
                        borderRight: 0,
                        minWidth: 100 / Object.keys(data[0]).length + "%",
                      }
                    : {
                        ...styles.col,
                        minWidth: 100 / Object.keys(data[0]).length + "%",
                      }
                }
              >
                {key}
              </p>
            ))}
        </div>
      </div>
      <div style={styles.body}>
        {data.length > 0 &&
          data.map((item) => (
            <div style={styles.row}>
              {Object.values(item).map((it) => (
                <p
                  style={{
                    ...styles.value,
                    minWidth: 100 / Object.keys(item).length + "%",
                  }}
                >
                  {it}
                </p>
              ))}
            </div>
          ))}
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
    width: "100%",
    display: "flex",
    flexDirection: "column",
    width: "100%",
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
    width: "30%",
    color: "#fff",
    fontSize: "11px",
    // marginLeft: "25px",
    // paddingRight: "25px",
    borderRight: "1.5px solid grey",
    minWidth: "28px",
  },
  value: {
    color: "#fff",
    fontSize: "11px",
    textAlign: "center",
  },
  body: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    borderTop: "2px dashed grey",
  },
  row: {
    display: "flex",
    width: "100%",
  },
};
export default CommandResult;
