import React from "react";
//components
import ShowcaseLayout from "./DashboardLayout";

class Dashboard extends React.Component {
  constructor(props) {
    super(props);

    this.onLayoutChange = this.onLayoutChange.bind(this);
  }

  onLayoutChange(layout) {
    //this.setState({ layout: layout });
    console.log('Layout changed:', layout)
    console.log("mutation => new layout")
  }


  render() {
    const layout = this.props.getStage.layoutcomponents.items  
    return (
      <React.Fragment>   
        <ShowcaseLayout 
          onLayoutChange={this.onLayoutChange} 
          layout={layout}
        />      
      </React.Fragment>
    );
  }
}

export default Dashboard

//for testing
Dashboard.defaultProps = {
    getStage: {
      id: "Inputs",
      title: "Inputs",
      "layoutcomponents": {
        "items": [
            {
              "i": "Geometria",
              "x": 0,
              "y": 0,
              "w": 2,
              "h": 2
            },
            {
              "i": "Materiales",
              "x": 2,
              "y": 0,
              "w": 2,
              "h": 2
            },
            {
              "i": "Cargas",
              "x": 0,
              "y": 2,
              "w": 4,
              "h": 2
            }
          ]
      }
    },

}
