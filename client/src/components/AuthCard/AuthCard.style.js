import styled from "styled-components";

export const AuthCardWrapper = styled.div`
  position: relative;
  width: 100%;
  max-width: 400px;
  background: #161d2f;
  border-radius: 20px;
  color: #ffffff;
  padding: 32px;

  img {
    position: absolute;
    left: 50%;
    top: -108px;
    transform: translate(-50%);
  }

  h1 {
    font-weight: 300;
    font-size: 32px;
    line-height: 40px;
    letter-spacing: -0.5px;
    color: #ffffff;
    text-transform: capitalize;
    padding-bottom: 41px;
  }

  .auth-link {
    text-align: center;
    font-weight: 300;
    font-size: 15px;
    line-height: 19px;

    a {
      text-decoration: none;
      color: #fc4747;
    }
  }
`;
