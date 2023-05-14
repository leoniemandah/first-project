import React, { useEffect, useState } from "react";
import "../App.css";
import Card from "../components/Card";

function Page1() {
  const [toogle, setToogle] = useState(false);

  useEffect(() => {
    if (toogle) {
      document.title = `Affichez la phrase`;
    } else {
      document.title = `Cachez la phrase`;
    }
  }, [toogle]);
  return (
    <>
      <h1 className="text-center text-2xl font-bold m-8">Ma galérie</h1>
      <div className="flex flex-row justify-center m-4">
        <button
          onClick={() => setToogle(!toogle)}
          className="text-white bg-blue-700 hover:bg-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2"
        >
          {!toogle ? "Afficher" : "Cacher"}
        </button>
      </div>
      {toogle ? (
        <p className="text-center text-2xl font-bold m-8">Je suis là</p>
      ) : (
        ""
      )}
      <div className="flex flex-row justify-center m-8">
      <div className="flex">   <Card title="Mes images" />       <Card title="Mes images" />        <Card title="Mes images" /> </div>
      </div>
    </>
  );
}

export default Page1;
