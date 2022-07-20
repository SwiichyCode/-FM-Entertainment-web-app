import React from "react";
import Slider from "react-slick";

import { CarousselWrapper } from "./Caroussel.style";
import TrendingCard from "../CardTrending/CardTrending";

export default function Caroussel({ data, loading }) {
  const settings = {
    dots: false,
    infinite: true,
    speed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 8000,
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
