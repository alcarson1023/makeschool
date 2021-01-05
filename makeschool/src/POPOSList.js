// import React from "react";
import POPOSSpace from "./POPOSSpace";
import "./POPOSList.css";
import data from "./sfpopos-data.json";


function POPOSList() {
  const spaces = data.map((obj, i) => {
    return (
      <POPOSSpace
        id={i}
        key={obj.title}
        name={obj.title}
        address={obj.address}
        image={obj.images[0]}
        hours={obj.hours}
      />
    );
  });

  return <div className="POPOSList">{spaces}</div>;
}

export default POPOSList;
