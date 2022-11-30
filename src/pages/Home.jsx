import { Link } from "react-router-dom";
import React from "react";
import Button from "../components/Button";
import Light from "../images/ideia.png";

const Home = () => {
  return (
    <main className="h-screen text-white bg-gray-900 animate__animated animate__fadeInUp">
      <section className="containerCard">
        <div className="pt-10">
          <h1 className="pb-5 text-6xl font-medium animate__animated animate__fadeInRightBig">
            Me dá uma Luz <img src={Light} alt="light.png"  className='inline w-14'/>
          </h1>
          <h2 className="w-1/2 text-3xl font-medium animate__animated animate__fadeInRightBig animate__delay-1s">
            Calcule o consumo de sua energia mensal e também o consumo de seu
            aparelho individualmente.
          </h2>
        </div>
        <Link to='/consumption'>
        <Button>
          Começar
        </Button>
        </Link>
      </section>
    </main>
  );
};

export default Home;
