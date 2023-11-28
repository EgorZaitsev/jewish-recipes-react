import Main from "../Main/Main.jsx";
import {useContext} from "react";
import {AllPosts} from "../../Posts.jsx";
import loader from "../../assets/loader.png"
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

  margin: auto;
  animation: 3s infinite normal rotateLoad;
`

const Home = () => {
  const {loading} = useContext(AllPosts);
  return (
      <>
        {loading ? <Main/> : (
            <LoaderWrapper>
              <LoaderImg src={loader}/>
            </LoaderWrapper>
        )}
      </>
  );
};


export default Home;