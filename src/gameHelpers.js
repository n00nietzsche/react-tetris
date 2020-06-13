export const STAGE_WIDTH = 12;
export const STAGE_HEIGHT = 20;
export const createStage = () =>
  Array.from(Array(STAGE_HEIGHT), () =>
    new Array(STAGE_WIDTH).fill([0, "clear"])
  );

/* 
  Array.from() 메서드는 유사 배열 객체(array-like object)나반복 가능한 객체(iterable object)를 얕게 복사해새로운Array 객체를 만듭니다.
  https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/from

  Array(Number) makes empty array as many as Number's number
*/

/*
  -> these two might be equal

  Array.from(Array(STAGE_HEIGHT), () =>
    new Array(STAGE_WIDTH).fill([0, "clear"])
  );
  
  Array(STAGE_HEIGHT).fill(new Array(STAGE_WIDTH).fill([0, 'clear']);
*/
