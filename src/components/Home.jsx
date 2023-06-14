import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const Home = () => {
  const [panier, setPanier] = useState([]);
  const panierData = useSelector((state) => state.panier);

  useEffect(() => {
    setPanier(panierData);
    console.log(panierData);
  }, [panierData]);

  return (
    <div>
      <h1>Home</h1>

      <div>
        <h2>Panier</h2>
      </div>
    </div>
  );
};
export default Home;
