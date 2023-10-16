import React, { useState } from "react";

import "./Style/Costome.css";
const Costome = ({ title, clo, tr }) => {
  const [togg, setTogg] = useState(false);

  const colSe = async () => {
    await setTogg(!togg);
    await clo(togg);
  };

  return (
    <>
      <div>
        <div className="alertBix">
          <div className="altbox">
            <div className="title-alt">{title.title}</div>
            <div className="altBoxDeteals">
              <div className="animated-text ">{title.dec}</div>
            </div>

            <div className="altclose">
              <button className="oK" onClick={colSe}>
                Ok
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Costome;
