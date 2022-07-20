import { useParams } from "react-router";

interface Params {
  coinId: string;
}
function Coin() {
  const { coinId } = useParams<Params>();
  // url의 parameta 부분을 잡아내고 싶을때 useParams를 사용한다.
  // url에서 관심있어 하는 정보를 잡아낼 수 있게 해준다.

  //   console.log(params);

  return <h1>Coin</h1>;
}
export default Coin;
