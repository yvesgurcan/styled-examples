import React from 'react';
import styled from 'styled-components';

export const BouncyBall = styled.div`
    // You can go crazy on the animation stuff! No need for external libraries.
    @keyframes bounce {
        14% {
            left: 50%;
            top: calc(100% - 50px);
        }
        26% {
            left: 70vw;
            top: 0;
        }
        38% {
            left: calc(100% - 50px);
            top: 80%;
        }
        40% {
            left: 85%;
            top: calc(100% - 50px);
        }
        52% {
            left: 65%;
            top: 0;
        }
        64% {
            left: 45%;
            top: calc(100% - 50px);
        }
        76% {
            left: 30%;
            top: 0;
        }
        88% {
            left: 15%;
            top: calc(100% - 50px);
        }
    }

    width: 50px;
    height: 50px;
    background: purple;
    border-radius: 50%;
    position: absolute;
    left: 0;
    top: 0;

    animation: bounce 10s infinite linear;
`;

export default () => <BouncyBall />;
