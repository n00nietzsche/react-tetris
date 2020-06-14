import styled from "styled-components";
import bgImage from "../../img/bg.png";

/*
  vw, vh란 것은 뷰포트를 기준으로 하는 너비와 높이
  뷰포트란? 사용자가 실제로 웹 브라우저에서 보는 화면의 크기를 말함

  > references
  https://www.w3schools.com/css/css_rwd_viewport.asp
  https://aboooks.tistory.com/352
  https://webclub.tistory.com/356
  https://taimouse.tistory.com/8

  background-size: cover 는
  이미지가 찌그러지지 않는 한도 내에서 가장 크게 설정하는 것.
  이미지의 가로세로비가 요소와 다르다면 이미지를 세로 또는 가로방향으로 잘라내어 빈 공간이 생기지 않도록 합니다.

  > references
  https://developer.mozilla.org/ko/docs/Web/CSS/background-size
*/

export const StyledTetrisWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  background: url(${bgImage}) #000;
  background-size: cover;
  overflow: hidden;
`;

/*
  align-items: flex-start; 는 flex 디스플레이만을 위한 옵션이며
  align-items는 사실상 flex의 vertical align을 담당합니다.

  > references
  http://www.tcpschool.com/examples/tryit/tryhtml.php?filename=css3_expand_flexbox_07
  http://www.tcpschool.com/css/css3_expand_flexbox
  https://css-tricks.com/snippets/css/a-guide-to-flexbox/

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

export const StyledTetris = styled.div`
  display: flex;
  align-items: flex-start;
  padding: 40px;
  margin: 0 auto;
  max-width: 900px;

  aside {
    width: 100%;
    max-width: 200px;
    display: block;
    padding: 0 20px;
  }
`;
