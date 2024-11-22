import styled from "styled-components";
import { useState, useEffect } from "react";

const Container = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  height: 100vh;
`;
const Carousel = ({ items }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Função para ir ao próximo slide
  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === items.length - 1 ? 0 : prevIndex + 1
    );
  };

  // Função para ir ao slide anterior
  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? items.length - 1 : prevIndex - 1
    );
  };

  // Hook para alterar automaticamente o slide a cada 4 segundos
  useEffect(() => {
    const timer = setInterval(nextSlide, 4000); // Troca a cada 4 segundos
    return () => clearInterval(timer); // Limpa o intervalo ao desmontar o componente
  }, [currentIndex]); // Reexecuta o efeito se o índice mudar

  return (
    <div className="carousel">
      <button id="button" onClick={prevSlide}>
        ◀
      </button>
      <div className="carousel-content">
        <div
          className="carousel-wrapper"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {items.map((item, index) => (
            <div key={index} className="slide">
              <img src={item} alt={`Slide ${index + 1}`} />
            </div>
          ))}
        </div>
      </div>
      <button onClick={nextSlide} id="button">
        ▶
      </button>

      <style>{`
        .carousel {
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto;
          margin-top: -0em;
          z-index: 1;
          padding: 1em;
        }
        .carousel-content {
          overflow: hidden;
          width: 100%;
          height: 300px;
          z-index: 1;
        }
        .carousel-wrapper {
          display: flex;
          transition: transform 0.5s ease-in-out;
          gap: 10px;
          align-items: center;
          margin-left: 4em;
          z-index: 1;
        }
        .slide {
          flex-shrink: 0;
          width: 600px;
          height: 300px;
        }
        img {
          backkground-color: #333;
          width: 90%;
          height: 100%;
          object-fit: cover;
          border-radius: 20px;
          z-index: 1;
        }
        #button {
          background-color: rgba(201, 52, 52, 0.884);
          color: #fff;
          text-decoration: none;
          cursor: pointer;
          font-size: 20px;
          font-weight: 400;
          line-height: 45px;
          z-index: 99;
        }
      `}</style>
    </div>
  );
};

// Uso do componente
const images = [
  "https://github.com/Kapitour/Imgs-Padr-o/blob/main/carousel/lagoa.jpg?raw=true",
  "https://github.com/Kapitour/Imgs-Padr-o/blob/main/carousel/praia.jpg?raw=true",
  "https://github.com/Kapitour/Imgs-Padr-o/blob/main/carousel/itaipuacu.jpg?raw=true",
  "https://github.com/Kapitour/Imgs-Padr-o/blob/main/carousel/2.jpg?raw=true",
  "https://github.com/Kapitour/Imgs-Padr-o/blob/main/carousel/1.png?raw=true",
];

const Caroussel = () => {
  return (
      <Carousel items={images} />
  );
};

export default Caroussel;
