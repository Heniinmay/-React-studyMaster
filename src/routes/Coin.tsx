import { useState } from "react";
import { useLocation, useParams } from "react-router";
import styled from "styled-components";

const Container = styled.div`
  padding: 0 20px;
  max-width: 480px;
  margin: 0 auto;
`;
const Header = styled.div`
  height: 10vh;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
`;

const Title = styled.h1`
  color: ${(props) => props.theme.accentColor};
  font-size: 32px;
  font-weight: 700;
`;
const Loader = styled.div`
  text-align: center;
`;
interface Params {
  coinId: string;
}
interface RouteState {
  name: string;
}
function Coin() {
  const { coinId } = useParams<Params>();
  // url의 parameta 부분을 잡아내고 싶을때 useParams를 사용한다.
  // url에서 관심있어 하는 정보를 잡아낼 수 있게 해준다.
  //   console.log(params);
  const [loading, setLoading] = useState(true);
  const { state } = useLocation<RouteState>();
  console.log(state.name);

  return (
    <Container>
      <Header>
        <Title>{state?.name} || "Loading..." </Title>
      </Header>
      {loading ? <Loader>Loading...</Loader> : null}
    </Container>
  );
}
export default Coin;
