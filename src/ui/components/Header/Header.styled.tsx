import { styled } from "@mui/material";

const HeaderStyled = styled("header")`
  display: flex;
  justify-content: center;
  border-bottom: 1px solid #f0f0f0;
  padding: ${({ theme }) => theme.spacing(4)};
  background-color:#f0eeee;
`
const Logo = styled('img')`
  max-width: 100%;
  width: 320px;
  `

export {
  HeaderStyled,
  Logo
}
