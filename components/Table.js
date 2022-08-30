import styled from "styled-components";

export const Table = styled.table`
  width: 50%;
  margin: 10px;
  border-collapse: collapse;
  font-family: Tahoma, sans-serif;
  font-size: 14px;
  overflow-x: scroll;
  text-align: left;

  & > thead {
    color: white;
    border: none;
    cursor: pointer;
  }

  & > thead > tr > th {
    padding: 6px 10px;
  }

  & td {
    padding: 4px 10px;
    color: black;
    background: var(--lightPurple);
  }
`;
