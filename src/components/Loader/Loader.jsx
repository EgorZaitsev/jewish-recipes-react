import React from 'react';
import loader from "../../assets/loader.png";
import styled from "styled-components";


const LoaderWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`

const LoaderImg = styled.img`
  @keyframes rotateLoad {
    from {
      transform: rotate(0);
    }
    to {
      transform: rotate(360deg);
    }
  }

  margin-top: 20%;
  animation: 3s infinite normal rotateLoad;
`


const Loader = () => {
  return (
      <LoaderWrapper>
        <LoaderImg src={loader}/>
      </LoaderWrapper>
  );
};

export default Loader;