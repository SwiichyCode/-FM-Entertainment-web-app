import styled from "styled-components";

export const PlayBtnWrapper = styled.button`
  display: flex;
  align-items: center;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 117px;
  height: 48px;
  mix-blend-mode: normal;
  opacity: 0;
  border-radius: 28.5px;
  border: none;
  padding: 0;
  z-index: 899;

  img {
    mix-blend-mode: unset;
    padding-left: 9px;
    margin-right: 19px;
  }

  span {
    font-weight: 500;
    font-size: 18px;
    line-height: 23px;
    color: #ffffff;
  }
`;
