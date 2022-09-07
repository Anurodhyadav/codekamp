import styled, { keyframes } from "styled-components";

const Loader = () => {
  return (
    <BackgroundFilter>
      <Clock></Clock>
    </BackgroundFilter>
  );
};

export default Loader;

const BackgroundFilter = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  height: 100vh;
  width: 100%;
  background: rgba(0, 0, 0, 0.9);
  z-index: 10;
`;

const spinAnimation = keyframes`
 to {
    transform: rotate(1turn);
  }
`;

const Clock = styled.div`
  --clock-color: var(--lightPurple);
  --clock-width: 4rem;
  --clock-radius: calc(var(--clock-width) / 2);
  --clock-minute-length: calc(var(--clock-width) * 0.4);
  --clock-hour-length: calc(var(--clock-width) * 0.2);
  --clock-thickness: 0.2rem;

  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: var(--clock-width);
  height: var(--clock-width);
  border: 3px solid var(--clock-color);
  border-radius: 50%;

  &:before,
  &:after {
    position: absolute;
    content: "";
    top: calc(var(--clock-radius) * 0.25);
    width: var(--clock-thickness);
    background: var(--clock-color);
    border-radius: 10px;
    transform-origin: center calc(100% - calc(var(--clock-thickness) / 2));
    animation: ${spinAnimation} infinite linear;
  }

  &:before {
    height: var(--clock-minute-length);
    animation-duration: 2s;
  }

  &:after {
    top: calc(var(--clock-radius) * 0.25 + var(--clock-hour-length));
    height: var(--clock-hour-length);
    animation-duration: 15s;
  }
`;
