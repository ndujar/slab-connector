import React from 'react'
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import IconButton from '@material-ui/core/IconButton';
import ClearIcon from '@material-ui/icons/Clear';
import { defaults } from 'react-chartjs-2'
defaults.global.legend.display = false;


const styles = theme => ({
  root: {
    flexGrow: 1,
    padding:'10px',
    height: '100%'
  },
  paper: {
    height:'100%',
    color: theme.palette.text.secondary,
    borderRadius:0,
  },
  grid:{
    
    height:'100%',
    '& > div:nth-of-type(1)':{
      height:'100%',
    },
    '& > div:nth-of-type(2)': {
      height: '100%',
    },
  
  },
  test:{
    height: '30%',
  },
  //card component
  cardheader: {
    paddingLeft: '10px',
    paddingRight: '10px',
    //borderBottom: '1px solid #ddd',
    height: '45px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  cargascard: {
    height: 'calc( 90% - 15px )',
    width: '100%',
  },
   headerbtn:{
    width: '30px', 
    height: '30px', 
    padding: '3px',
    '&:hover': {
      //background: theme.palette.primary.main,
      background: "#f44336",
      color:theme.palette.common.white,
    }
  }
})

class Cargas extends React.Component{
  render(){
    const {classes} = this.props
    return(
      <div className={classes.root}>
        <Grid container spacing={16} className={classes.grid}>
          <Grid item xs={12} sm={16}>
            <CardItem classes={classes} object={<div classes={classes} />} />
          </Grid>         
        </Grid>
      </div>
    )
  }
}


export default withStyles(styles)(Cargas)

const CardItem = props => (
  <Card className={props.classes.paper}>

    <CardActions className={props.classes.cardheader}>
      <Typography variant="h5">
        Cargas
      </Typography>

      <IconButton className={props.classes.headerbtn} >
        <ClearIcon />
      </IconButton>
    </CardActions>


    <CardContent className={props.classes.cargascard}>
      {props.object}
    </CardContent>

  </Card>
)