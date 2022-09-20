import React from 'react'
import { withStyles } from '@material-ui/core/styles';
import { Switch, Route } from "react-router-dom";
import Dashboard from './Dashboard'

const styles = theme => ({
  root: {
    background: '#F0F0F0',
    overflowY: 'scroll',
  },
})

class Content extends React.Component {
  render() {
    console.log("contents says userId is", this.props.UserId)
   
    const { classes, StageApiKey} = this.props
    const classname = ["Content"]
    classname.push(classes.root)
    return (   
          <div className={classname.join(" ")}>
            <Switch>

              <Route path={"/"} render={() => <Dashboard UserId={"UserId"} defaultProps={this.defaultProps}/>}  />

            </Switch>
          </div>
    )
  }
}

export default withStyles(styles)(Content)

