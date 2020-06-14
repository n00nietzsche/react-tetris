import styled from "styled-components";

/*
  box-sizing property allow us to include the padding 
  and border in an element's total width and height.

  if I set box-sizing: border-box; on an element,
  padding and border are included in the width and height.
  
  It prevent the size exceeds width and height.
 */

/*
  reason why 'outline: none' is 
  when we click the button, it shows its outline.
 */
export const StyledStartButton = styled.button`
  box-sizing: border-box;
  margin: 0 0 20px 0;
  padding: 20px;
  min-height: 30px;
  width: 100%;
  border-radius: 20px;
  border: none;
  color: white;
  background: #333;
  font-family: Pixel, Arial, Helvetica, sans-serif;
  font-size: 1rem;
  outline: none;
  cursor: pointer;
`;
