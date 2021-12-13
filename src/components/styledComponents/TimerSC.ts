import styled/*, { keyframes }*/ from "styled-components";

// const timer = keyframes`
//     0% {
//         border-left-color: linear-gradient(90deg, #fff 0%, #AA00FF 0%);
//     }
//     25% {
//         border-left-color: linear-gradient(90deg, #fff 100%, #AA00FF 100%);
//     }
//     50% {
//         border-left-color: linear-gradient(90deg, #fff 100%, #AA00FF 100%);
//     }
//     100% {
//         border-left-color: linear-gradient(90deg, #fff 100%, #AA00FF 100%);
//     }
// `;

export const TimerProgress = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 150px;
    height: 150px;
    border-radius: 150px;
    border: 5px solid ${({color}) => color};
    
`;

export const TimerTextTime = styled.div`
    font-size: 35px;
    color: ${({color}) => color};
`;

// animation: ${timer} 1s linear infinite;