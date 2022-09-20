import React from 'react'
import { Route, BrowserRouter } from "react-router-dom";
import NoSsr from "@material-ui/core/NoSsr";

//components
import Header from './Header'
import Logo from './Logo'
import Content from './Content'

class App extends React.Component{
  state = {
    lastEvent: this.props.loading  ? null : this.props.getUser.lastevent
  }
  changeStage = nextStage => {
    this.setState({lastEvent:nextStage})
  }
  render(){

    if(this.props.loading){
      return <div>  </div>
    }
    const StageApiKey = this.props.getUser.stages.items.filter(data => data.stage.title !== this.props.lastEvent)[0].stage.id
    const stages = this.props.getUser.stages
    console.log('StageAPIkey:', StageApiKey)
    return(
      <React.Fragment>
        <div className="grid-container">
          <Logo />
          <NoSsr>
            <BrowserRouter>
              <Route
                path="/"
                render={() => (
                  <React.Fragment>

                    <Content UserId={this.props.UserId} StageApiKey={StageApiKey}/>
                    <Header UserId={this.props.UserId} lastEvent={this.state.lastEvent} stages={stages} changeStage={this.changeStage}/>
                                      
                  </React.Fragment>
                )}
              />
            </BrowserRouter>
          </NoSsr>
        </div>
      </React.Fragment>
    )
  }
}

export default App

App.defaultProps = {
  loading: false,
  getUser: {
    id: "1234",
    username: "AA",
    lastevent: "Inputs",
    stages: {
      items: [
        {
          stage: {
            "id": "Outputs",
            "title": "Outputs"
          }
        },
        {
          stage: {
            "id": "Inputs",
            "title": "Inputs"
          }
        }
      ]
    }
  }

}