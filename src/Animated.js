import React from 'react';
import styled from 'styled-components';

export const BouncyBall = styled.div`
  // You can go crazy on the animation stuff! No need for external libraries.
  @keyframes bounce {
    14% {
      background: red;
      left: 50%;
      top: calc(100% - 150px);
    }
    26% {
      background: green;
      left: 70vw;
      top: 0;
    }
    38% {
      background: brown;
      left: calc(100% - 150px);
      top: 80%;
    }
    40% {
      background: blue;
      left: 85%;
      top: calc(100% - 150px);
    }
    52% {
      background: pink;
      left: 65%;
      top: 0;
    }
    64% {
      background: yellow;
      left: 45%;
      top: calc(100% - 150px);
    }
    76% {
      background: grey;
      left: 30%;
      top: 0;
    }
    88% {
      background: orange;
      left: 15%;
      top: calc(100% - 150px);
    }
  }

  width: 150px;
  height: 150px;
  background: purple;
  border-radius: 50%;
  position: absolute;
  left: 0;
  top: 0;

  animation: bounce 10s infinite linear;
`;

export default () => <BouncyBall />;
