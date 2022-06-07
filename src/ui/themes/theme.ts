import { createTheme } from '@mui/material'

const theme = createTheme({
  palette: {
    primary: {
      light: "#76d275",
      main: "#43a047",
      dark: "#00701a",
    },
    secondary: {
      light: "#aee571",
      main: "#7cb342",
      dark: "#4b830d",
    },
    text: {
      primary: "#fafafa",
      secondary: "#212121",
    },
  },
  typography: {
    fontFamily: "Rubik, Roboto, sans-serif",
  },
  shape: {
    borderRadius: "3px",
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "none",
          borderRadius: "5px",
          fontWeight: "normal",
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          boxShadow: "0px 0px 39px rgba(0, 0, 0, 0.05)",
        },
      },
    },
    MuiTextField: {
      defaultProps: {
        InputLabelProps: {
          required: false,
        },
        required: true,
      },
    },
    MuiTableHead: {
      styleOverrides: {
        root: {
          "& .MuiTableCell-root": {
            fontWeight: "bold",
          },
        },
      },
    },
    MuiTableCell: {
      styleOverrides: {
        root: {
          border: "1px solid #D8D8D8",
        },
      },
    },
  },
});

export default theme
