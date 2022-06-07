import { TextField } from '@mui/material';
import {
  HeaderStyled,
  Logo
} from './Header.styled'


export default function Header() {
  return (
    <>
      <HeaderStyled>
          <Logo src={'/logo.png'}/>
      </HeaderStyled>
    </>
  );
}




