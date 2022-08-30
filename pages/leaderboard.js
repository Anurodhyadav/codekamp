import styled from "styled-components";
import { Table } from "../components/Table";

const LeaderBoard = () => {
  const points = {
    1: {
      rank: 1,
      nickname: "sankalpa",
      points: 200,
    },
    2: {
      rank: 2,
      nickname: "yashant",
      points: 400,
    },
  };
  const tableData = Object.values(points).map((data, index) => {
    return (
      <tr key={index}>
        <td>{data.rank}</td>
        <td>{data.nickname}</td>
        <td>{data.points}</td>
      </tr>
    );
  });

  return (
    <LeaderBoardContainer>
      <Title>LeaderBoard</Title>
      <Table>
        <thead>
          <th>Rank</th>
          <th>Nickname</th>
          <th>Points</th>
        </thead>
        <tbody>{tableData}</tbody>
      </Table>
    </LeaderBoardContainer>
  );
};

export default LeaderBoard;

const LeaderBoardContainer = styled.div`
  padding: 3%;
`;

const Title = styled.h2`
  margin-left: 10px;
`;
