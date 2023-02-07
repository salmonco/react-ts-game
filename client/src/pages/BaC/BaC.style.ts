import styled from "styled-components";

const Container = styled.div`
  max-width: 600px;
  margin: 40px auto;
  padding: 24px;
`;

const Flex = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Answer = styled.div`
  height: 40px;
  span {
    font-size: 22px;
    margin: 0 5px;
  }
`;

const Number = styled.div`
  text-align: center;
  button {
    width: 50px;
    height: 50px;
    font-size: 16px;
  }
`;

const Table = styled.table`
  width: 100%;
  font-size: 18px;
  border-spacing: 0 10px;
  td {
    text-align: center;
  }
`;

export default { Container, Flex, Answer, Number, Table };
