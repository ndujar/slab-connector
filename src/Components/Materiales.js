import React from 'react'
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import TextField from "@material-ui/core/TextField";
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';


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
      height:'70%',
    },
    '& > div:nth-of-type(2)': {
      height: '30%',
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
  materialescard: {
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
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: "50%"
  },
})

class Materiales extends React.Component{
  render(){
    const { classes } = this.props
    return (
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

export default withStyles(styles)(Materiales)

const CardItem = props => (
  <Card className={props.classes.paper}>

    <CardActions className={props.classes.cardheader}>
      <Typography variant="h5">
        Materiales
      </Typography>
    </CardActions>
    <TextField
          id="standard-helperText"
          label="Mat prop"
          defaultValue="30"
          helperText={"Valor de resistencia en "}
          margin="normal"
        />
    <CardContent className={props.classes.materialescard}>
      {props.object}
    </CardContent>

  </Card>
)




