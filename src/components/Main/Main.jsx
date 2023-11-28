import styled from "styled-components";
import HotRecipe from "../HotRecipe/HotRecipe.jsx";
import Span from "../StyledComponents/Span.jsx";
import {Link} from "react-router-dom";
import useGetSize from "../../hooks/useGetSize.jsx";

const DecoLink = styled(Link)`
  text-decoration: none;

  :hover {
    color: rgba(255, 0, 0, 0.58);
  }
`


const Title = styled.h2`
  @media (max-width: 968px) {
    font-size: 36px;
    text-align: center;
  }
  padding-top: 25px;
  padding-bottom: 16px;
  margin-bottom: 15px;
  line-height: 50px;
  font-family: 'Cormorant Garamond', serif;
  font-size: 48px;
`

const Description = styled.p`
  @media (max-width: 968px) {
    font-size: 20px;
    text-align: center;
  }

  font-family: "Roboto Light", sans-serif;
  font-size: 26px;
`

const General = styled.main`
  @media (max-width: 968px) {
    flex-direction: column;
    padding-left: 0;
  }

  padding-left: 111px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-top: 75px;
`

const Text = styled.div`
  @media (max-width: 968px) {
    margin-bottom: 35px;
  }

  display: flex;
  flex-direction: column;


`


const Main = () => {
  const windowWidth = useGetSize();
  return (
      <General>
        <Text>
          {windowWidth < 700 ? (
                  <>
                    <Title>Delicious <DecoLink to='/recipes'><Span>food</Span></DecoLink><br/> and <br/> <DecoLink
                        to='/recipes'><Span>recipes</Span></DecoLink></Title>
                    <Description>View a lot of healthy and yummy recipes <br/>for you and your family</Description>
                  </>
              ) :
              (
                  <>
                    <Title>Delicious <DecoLink to='/recipes'><Span>food</Span></DecoLink> and <DecoLink
                        to='/recipes'><Span>recipes</Span></DecoLink></Title>
                    <Description>View a lot of healthy and yummy recipes <br/>for you and your family</Description>
                  </>
              )}

        </Text>
        <HotRecipe/>
      </General>
  );
};

export default Main;