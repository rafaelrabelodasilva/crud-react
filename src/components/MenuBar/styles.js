import styled from "styled-components";

export const SideBar = styled.div`
  /* background-color: bisque; */
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(8, 1fr);
  grid-column-gap: 0px;
  grid-row-gap: 0px;
  min-height: 100vh;
  text-align: center;
  background-color: #CBE4DE;
`;

export const SideBarTop = styled.div`
  /* background-color:darkcyan; */
  grid-area: 1 / 1 / 2 / 2;
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: 10px;
`;

export const SideBarMiddle = styled.div`
  /* background-color:powderblue; */
  grid-area: 2 / 1 / 8 / 2;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  ul > li {
    padding: 10px 8px;
    border-radius: 10px;
  }

  ul > li > a {
    color: black;
  }
`;

export const SideBarBottom = styled.div`
  /* background-color: thistle; */
  grid-area: 8 / 1 / 9 / 2;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;

  a {
    color: black;
  }
`;