import styled from "styled-components";

/**
 * Grid layout
 *
 * > references
 * https://css-tricks.com/snippets/css/complete-guide-grid/
 *
 * unlike flexbox which is largely a 1-dimensional system,
 * you work with grid layout about columns and rows (2 dimensional system)
 *
 * it works very well together with flexbox!
 *
 * in case of grid-template-rows, it decides how much ratio this row will have.
 * if i give that 50% the one tile of grid will account for 50% of all the area it is given.
 *
 * repeat(5, 20%) means "20% 20% 20% 20% 20%" that is just short cut for this.
 */
export const StyledStage = styled.div`
  display: grid;
  grid-template-rows: repeat(
    ${props => props.height},
    calc(25vw / ${props => props.width})
  );
  grid-template-columns: repeat(${props => props.width}, 1fr);
  grid-gap: 1px;
  border: 2px solid #333;
  width: 100%;
  max-width: 25vw;
  background: #111;
`;
