import {
  Box,
  AppBar,
  Typography,
  Toolbar,
} from "@mui/material";

const Header = () => {
  return (
  
      <Box>
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Geniome
            </Typography>
            <img width="90" height="90" src="/assets/Images/logo.png" alt="logo" />
          </Toolbar>
        </AppBar>
      </Box>
   
  );
};

export default Header;
