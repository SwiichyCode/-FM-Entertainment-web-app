import styled from "styled-components";

export const NavWrapper = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 40px;

  .nav-icon {
    font-size: 1.7em;
    transition: all 200ms ease-in-out;

    &:hover {
      color: #fc4747;
    }
  }

  .link {
    color: #5a698f;
  }

  .active-link {
    color: #fff;
  }
`;
