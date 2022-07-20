import styled from "styled-components";
import { PlayBtnWrapper } from "../PlayBtn/PlayBtn.style";

export const CardTrendingWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: flex-end;
  height: 230px;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
  border-radius: 8px;
  padding: 24px;

  &:hover ${PlayBtnWrapper} {
    background-color: rgba(123, 122, 122, 0.38);
    opacity: 1;
    transition: opacity 0.3s ease-in-out;
  }

  .trendingCard-data {
    display: flex;
    flex-direction: column;
    gap: 3px;
  }

  .trendingCard-list {
    display: flex;
    align-items: center;
    gap: 8px;
    mix-blend-mode: normal;
    opacity: 0.75;

    .item {
      display: flex;
      align-items: center;
      color: #ffffff;
    }

    .dot {
      width: 3px;
      height: 3px;
      background: #ffffff;
      border-radius: 50%;
    }

    .category {
      display: flex;
      align-items: center;
      gap: 8px;
    }
  }

  h2 {
    font-weight: 500;
    font-size: 24px;
    line-height: 30px;
    color: #ffffff;
  }
`;
