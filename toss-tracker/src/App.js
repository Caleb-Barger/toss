import React from 'react';
import './App.css';
import {Grid, Typography, AppBar, Toolbar, makeStyles} from '@material-ui/core';
import TossTable from './components/TossTable';


const useStyles = makeStyles({
  appBarBackground: {
      background: "rgba(0, 0, 0, 0.85)"
  }
})

function App() {

  const classes = useStyles();

 return (
   <>
   <AppBar position="sticky" className={classes.appBarBackground}>
     <Toolbar>
       <Grid contatiner>
         <Grid item xs={12}>
            <Typography>
              Toss Tracker - Grangeville Border Days
            </Typography>
         </Grid>
       </Grid>
     </Toolbar>
   </AppBar>
   <TossTable />
   </>
 );
}

export default App;
