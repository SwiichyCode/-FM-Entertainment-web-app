import styled from "styled-components";

export const AuthInputWrapper = styled.div`
  position: relative;
  width: 100%;

  input {
    width: 100%;
    background: transparent;
    border: none;
    border-bottom: 1px solid #5a698f;
    padding: 15px 0px 17px 16px;
    font-weight: 300;
    font-size: 15px;
    line-height: 19px;
    color: #ffffff;
    caret-color: #fc4747;
    transition: all 200ms ease-in-out;

    &:focus {
      outline: none;
      border-bottom: 1px solid #fff;
    }
    &::placeholder {
      color: #ffffff;
      mix-blend-mode: normal;
      opacity: 0.5;
    }
  }

  span {
    position: absolute;
    top: 0;
    right: 0;
    font-weight: 300;
    font-size: 13px;
    line-height: 16px;
    color: #fc4747;
  }
`;
