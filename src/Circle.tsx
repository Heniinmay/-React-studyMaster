import styled from "styled-components";

//코스 실행전에 오류들을 확인 할수 있다. 코드에서,
interface ContainerProps {
  bgColor: string;
  borderColor?: string;
}
const Container = styled.div<ContainerProps>`
  width: 200px;
  height: 200px;
  background-color: ${(props) => props.bgColor};
  border-radius: 100px;
  border: 1px solid ${(props) => props.borderColor};
`;

interface CircleProps {
  bgColor: string;
  borderColor?: string;
  text?: string;
}

function Circle({ bgColor, borderColor, text = "default text" }: CircleProps) {
  return (
    <Container bgColor={bgColor} borderColor={borderColor ?? bgColor}>
      {text}
    </Container>
  );
  // 적용 값 ?? Default 값
}

export default Circle;
