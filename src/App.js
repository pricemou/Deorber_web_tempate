import React, { useState } from "react";

// Style 
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "./Themes";
import {GlobalStyles ,StyledApp }  from './GlobalStyle'

// composents
import  {Home} from "./components/Home";
import  {Test} from "./components/Test";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

const App = () => {
    
  const [theme, setTheme] = useState("light");
  // const [state, setstate] = useState(initialState)


  const themeToggler = () => {
    theme === "light" ? setTheme("dark") : setTheme("light");
  };



  return (
    <Router>
      <Switch>
        <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
            <StyledApp>
              
                <Route path="/:id" exact>
                    <Home/>
                </Route>
                   
            </StyledApp>
            <GlobalStyles />
        </ThemeProvider>
    </Switch>
    </Router>
  );
}

export default App;