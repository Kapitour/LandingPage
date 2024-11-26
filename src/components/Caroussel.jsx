import styled from "styled-components";
import { useState, useEffect } from "react";

const CarouselContainer = styled.div`
  position: relative;
  width: 80%;
  height: 300px;
  margin: 0 auto;
  overflow: hidden;
  border-radius: 15px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);

  @media (max-width: 768px) {
    width: 100%; /* Ajusta a largura para ocupar a tela toda */
    height: 250px; /* Pode ajustar a altura para dispositivos menores */
  }
`;

const CarouselContent = styled.div`
  display: flex;
  transition: transform 0.5s ease-in-out;
  transform: translateX(-${(props) => props.currentIndex * 50}%); /* Mostra 2 slides (50% cada) */

  @media (max-width: 768px) {
    transform: translateX(-${(props) => props.currentIndex * 100}%); /* Mostra 1 slide (100% cada) */
  }
`;

const Slide = styled.div`
  flex-shrink: 0;
  width: 50%; /* Cada slide ocupa 50% da largura */
  height: 300px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #1a1a1d;

  @media (max-width: 1020px) {
    width: 100%; /* Cada slide ocupa 100% da largura no celular */
    height: 250px; /* Ajusta a altura para dispositivos menores */
  }
`;

const Image = styled.img`
  width: 95%;
  height: 95%;
  object-fit: cover;
  border-radius: 15px;

  @media (max-width: 1020px) {
    width: 100%; /* Imagem ocupa toda a largura no celular */
    height: auto; /* Mantém a proporção da altura */
  }
`;

const Button = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: rgba(0, 0, 0, 0.5);
  color: white;
  border: none;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  z-index: 2;

  &:hover {
    background: rgba(0, 0, 0, 0.8);
  }

  &.prev {
    left: 10px;
  }
  &.next {
    right: 10px;
  }

  @media (max-width: 1020px) {
    width: 30px; /* Botões menores no celular */
    height: 30px;
  }
`;

const Carousel = ({ items }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === Math.ceil(items.length / 2) - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? Math.ceil(items.length / 2) - 1 : prevIndex - 1
    );
  };

  useEffect(() => {
    const timer = setInterval(nextSlide, 4000);
    return () => clearInterval(timer);
  }, [currentIndex]);

  return (
    <CarouselContainer>
      <Button className="prev" onClick={prevSlide}>
        ◀
      </Button>
      <CarouselContent currentIndex={currentIndex}>
        {items.map((item, index) => (
          <Slide key={index}>
            <Image src={item} alt={`Slide ${index + 1}`} />
          </Slide>
        ))}
      </CarouselContent>
      <Button className="next" onClick={nextSlide}>
        ▶
      </Button>
    </CarouselContainer>
  );
};

const images = [
  "https://github.com/Kapitour/Imgs-Padr-o/blob/main/carousel/lagoa.jpg?raw=true",
  "https://github.com/Kapitour/Imgs-Padr-o/blob/main/carousel/praia.jpg?raw=true",
  "https://github.com/Kapitour/Imgs-Padr-o/blob/main/carousel/itaipuacu.jpg?raw=true",
  "https://github.com/Kapitour/Imgs-Padr-o/blob/main/carousel/2.jpg?raw=true",
  "https://github.com/Kapitour/Imgs-Padr-o/blob/main/carousel/1.png?raw=true",
  "https://github.com/Kapitour/Imgs-Padr-o/blob/main/Recanto.jpeg?raw=true",
];

const Caroussel = () => {
  return <Carousel items={images} />;
};

export default Caroussel;
