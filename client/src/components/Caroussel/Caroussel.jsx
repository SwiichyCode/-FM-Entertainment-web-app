import React from "react";
import Slider from "react-slick";

import { CarousselWrapper } from "./Caroussel.style";
import TrendingCard from "../TrendingCard/TrendingCard";

export default function Caroussel({ data }) {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    arrows: false,
    variableWidth: true,
  };

  const trending = data.filter((item) => item.thumbnail.trending);

  return (
    <CarousselWrapper>
      <h2 className="caroussel-title">Trending</h2>
      <Slider {...settings}>
        {trending.map((item, index) => (
          <div
            key={index}
            style={{
              width: 470,
            }}
          >
            <TrendingCard item={item} />
          </div>
        ))}
      </Slider>
    </CarousselWrapper>
  );
}
