import styled from "styled-components";

export const SearchBarWrapper = styled.div`
  width: 100%;
  display: flex;
  margin-top: 64px;
  margin-bottom: 19px;
  padding-right: 36px;
  box-sizing: border-box;
  img {
    width: 32px;
    height: 32px;
    margin-right: 32px;
  }

  input {
    width: 100%;
    caret-color: red;
    font-weight: 300;
    font-size: 24px;
    line-height: 30px;
    color: #ffffff;
    background: transparent;
    padding: 0;
    border: none;
    padding-bottom: 15px;

    &:focus {
      outline: none;
      height: -1px;
    }
  }

  .content-input {
    width: 100%;
    position: relative;
  }

  .input-border {
    position: absolute;
    bottom: 0;
    width: 0%;
    height: 1px;
    background: #5a698f;
    transition: all 150ms ease-in-out;
  }

  input:focus ~ .input-border {
    width: 100%;
  }
`;
