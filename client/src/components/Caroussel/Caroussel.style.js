import styled from "styled-components";

export const CarousselWrapper = styled.div`
  width: 100%;
  margin-bottom: 40px;

  .caroussel-title {
    font-weight: 300;
    font-size: 32px;
    line-height: 40px;
    letter-spacing: -0.5px;
    color: #ffffff;
    margin-bottom: 25px;
  }

  .slick-slide {
    margin-right: 40px;
    cursor: pointer;

    div {
      outline: none;
    }
  }
`;
