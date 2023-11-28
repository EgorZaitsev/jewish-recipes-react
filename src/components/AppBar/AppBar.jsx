import styled from "styled-components";
import Span from "../StyledComponents/Span.jsx"
import {Link} from "react-router-dom";
import useGetSize from "../../hooks/useGetSize.jsx";
import MenuBurger from "../MenuBurger/MenuBurger.jsx";

const Logo = styled.h1`


  @media (max-width: 768px) {
    width: 90px;
    margin-left: 5px;

  }
  padding: 2px 5px 5px 5px;
  margin-left: 111px;
  font-size: 36px;
  color: black;
  font-family: "Cormorant Garamond", serif;
`

const MenuBar = styled.ul`
  @media (max-width: 768px) {
    margin-right: 5px;
  }
  @media (max-width: 550px) {
    width: 300px;
  }
  margin-right: 111px;
  list-style: none;
  display: flex;
  flex-direction: row;
  gap: 35px;

`

const MenuPosition = styled.li`
  :hover {
    color: red;
    transition: color .5s ease;
  }

  color: white;
  font-size: 20px;
  transition: color .5s;
  font-family: Roboto, sans-serif;
`
const DecoLink = styled(Link)`
  color: black;
  text-decoration: none;
  transition: color .5s;
`
const NavBar = styled.header`
  @media print {
    display: none;
  }
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
  gap: 5px;
  position: sticky;
  top: 0;
  background-color: rgba(255, 255, 255, 0.84);
  box-shadow: 0px 4px 5px 1px rgba(34, 60, 80, 0.2);

  &:before {
    width: 100%;
    height: 100%;
    position: absolute;
    left: 0;
    z-index: -1;
    content: '';
    backdrop-filter: blur(8px);
  }
}
`


const AppBar = () => {
  const pageWidth = useGetSize();

  return (
      <NavBar>
        <Logo><Span>Jewish</Span> recipes</Logo>
        {pageWidth > 550 ? (
            <MenuBar>
              <MenuPosition><DecoLink onClick={() => {
                window.scroll({top: 0, behavior: 'smooth'})
              }} to='/'>Home</DecoLink></MenuPosition>
              <MenuPosition><DecoLink onClick={() => {
                window.scroll({top: 0, behavior: 'smooth'})
              }} to='/recipes'>Recipes</DecoLink></MenuPosition>
              <MenuPosition><DecoLink onClick={() => {
                window.scroll({top: 0, behavior: 'smooth'})
              }} to='/social'>Social</DecoLink></MenuPosition>
            </MenuBar>

        ) : (<>
              <MenuBurger/>
            </>
        )
        }
      </NavBar>
  );
};

export default AppBar;