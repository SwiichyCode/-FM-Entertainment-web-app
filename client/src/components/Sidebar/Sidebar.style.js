import styled from "styled-components";

export const SidebarWrapper = styled.div`
  width: 100%;
  height: 93%;
  max-width: 96px;
  max-height: 960px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  background: #161d2f;
  border-radius: 20px;
  margin: 32px;
  padding: 35px 0 32px 0;

  .sidebar-top {
    display: flex;
    flex-direction: column;
    gap: 75px;
  }
`;
