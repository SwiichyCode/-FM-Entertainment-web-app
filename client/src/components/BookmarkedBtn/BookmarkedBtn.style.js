import styled from "styled-components";

export const BookmarkedBtnWrapper = styled.div`
  position: absolute;
  top: 16px;
  right: 24px;
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  background: #10141e;
  mix-blend-mode: normal;
  opacity: 0.5;
  cursor: pointer;
  z-index: 999;

  .bookmark-icon {
    color: #fff;
  }
`;
