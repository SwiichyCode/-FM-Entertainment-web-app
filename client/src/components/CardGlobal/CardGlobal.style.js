import styled from "styled-components";
import { PlayBtnWrapper } from "../PlayBtn/PlayBtn.style";

export const CardGlobalWrapper = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 280px;
  height: 226px;

  &:hover ${PlayBtnWrapper} {
    background-color: rgba(123, 122, 122, 0.38);
    opacity: 1;
    transition: opacity 0.3s ease-in-out;
  }

  .content-img {
    position: relative;
    margin-bottom: 8px;

    .img-global {
      width: 280px;
      max-height: 174px;
      border-radius: 8px;
    }
  }

  .content-text {
    display: flex;
    flex-direction: column;
  }
`;
