import React from 'react'
import { withStyles } from '@material-ui/core/styles';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import FilledInput from '@material-ui/core/FilledInput';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';


const styles = theme => ({
  grow: {
    flexGrow: 1,
    
  },
  title: {
    width:"70%",
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
  root: {
    flexGrow: 1,
    background: theme.palette.background.headerpanel,
    borderBottom:'1px solid #ddd',
    
  },
  dropdown:{
    flexGrow: 1,
    marginRight: theme.spacing.unit * 2,
  },
  formControl: {
    width: '100%',
    margin: theme.spacing.unit,
    minWidth: 120,
  },
  selectBG: {
    backgroundColor: "#fff !important",
    borderRadius: '0.25em',
    border: "1px solid #ddd"
  },
  profileIcon: {
    fontSize: 40,
  },
})

class Header extends React.Component {

  nextEvent = event =>{
    //this.setState({ lastEvent: event.target.value})
    this.props.changeStage(event.target.value)
  }
  render() {
    const {classes, stages, lastEvent} = this.props  
    const title = String(window.location.pathname) === "/" ? "Dashboard": String(window.location.pathname).substring(1)
    return (
      <React.Fragment>
          <div className="Header">
          <AppBar position="static" className={classes.root} elevation={0}>
            <Toolbar>

              <Typography variant="h4"  className={classes.title}>
                {title}
              </Typography>

              <DropDown classes={classes} Stages={stages} LastEvent={lastEvent} nextEvent={this.nextEvent}/>

            </Toolbar>
          </AppBar>
          </div>
      </React.Fragment>
    )
  }
}

export default withStyles(styles)(Header)

const DropDown = props => (
  <div className={props.classes.dropdown}>
    <FormControl variant="filled" className={props.classes.formControl} margin="dense">
      <InputLabel htmlFor="filled-age-simple">Stage:</InputLabel>
      <Select
        value={props.LastEvent}
        onChange={props.nextEvent}
        input={<FilledInput name="age" autoFocus={false} id="filled-age-simple" disableUnderline={true} className={props.classes.selectBG} />}
      >
        <MenuItem value={props.LastEvent} disabled>
          {props.LastEvent}
        </MenuItem>
        {props.Stages.items.filter(data => data.stage.title !== props.LastEvent).map((data, i)=>(
          <MenuItem key={i} value={data.stage.title}>{data.stage.title}</MenuItem>
        ))}
        
      </Select>
    </FormControl>
  </div>
)

