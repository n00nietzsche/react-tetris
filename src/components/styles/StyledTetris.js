import { styled } from "styled-components";
import bgImage from "../../img/bg.png";

export const StyledTetrisWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  background: url(${bgImage}) #000;
  background-size: cover;
  overflow: hidden;
`;

/*
  vw, vh란 것은 뷰포트를 기준으로 하는 너비와 높이
  뷰포트란? 사용자가 실제로 웹 브라우저에서 보는 화면의 크기를 말함

  background-size: cover 는
  이미지가 찌그러지지 않는 한도 내에서 가장 크게 설정하는 것.
  이미지의 가로세로비가 요소와 다르다면 이미지를 세로 또는 가로방향으로 잘라내어 빈 공간이 생기지 않도록 합니다.
*/

export const StyledTetris = styled.div`
  display: flex;
  align-items: flex-start;
  padding: 40px;
  margin: 0 auto;
  max-width: 900px;
`;

/*
  align-items: flex-start; 는 flex 디스플레이만을 위한 옵션이며
  align-items는 사실상 flex의 vertical align을 담당합니다.

  flex-start는
  [ *** ]
  [ --- ]
  [ --- ] 와 같은 형식으로 flex를 배치하며

  center 는
  [ --- ]
  [ *** ]
  [ --- ] 와 같은 형식으로 flex를 배치하며

  flex-end 는
  [ --- ]
  [ --- ]
  [ *** ] 와 같은 형식으로 flex를 배치합니다.
*/
