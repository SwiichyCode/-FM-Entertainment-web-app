import styled from "styled-components";

export const CardTextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;

  h2 {
    font-size: ${({ titleSize }) => titleSize};
    color: #ffffff;
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
`;
