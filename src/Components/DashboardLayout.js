import React from "react";
import { WidthProvider, Responsive } from "react-grid-layout";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import { withStyles } from "@material-ui/core/styles";
import Typography from '@material-ui/core/Typography';
import CardActions from '@material-ui/core/CardActions';
import { defaults } from 'react-chartjs-2'

defaults.global.legend.display = false;

const ResponsiveReactGridLayout = WidthProvider(Responsive);

const styles = theme => ({

  root: {
    background: "#fff !important",
    //borderRadius: 0,
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
  geometriacard: {
    height: 'calc( 90% - 15px )',
    width: '100%',
  },
  headerbtn: {
    width: '30px',
    height: '30px',
    padding: '3px',
    '&:hover': {
      //background: theme.palette.primary.main,
      background: "#f44336",
      color: theme.palette.common.white,
    }
  },
  floatAddbtn:{
  background:'	#1E90FF',
  position: 'absolute',
  right: 0,
  bottom: 0,
  margin:'20px',
  }
});

class Layout extends React.Component {
  static defaultProps = {
    className: "layout",
    cols: { lg: 4, md: 4, sm: 4, xs: 4, xxs: 4 },
    rowHeight: 210
  };

  constructor(props) {
    super(props);
    this.state = {
      newCounter: 0
    };
    this.onBreakpointChange = this.onBreakpointChange.bind(this);
  }

  onBreakpointChange(breakpoint, cols) {
    this.setState({
      breakpoint: breakpoint,
      cols: cols
    });
  }

  onLayoutChange = layout => {
    this.props.onLayoutChange(layout);
  };

  render() {
   
    const { classes } = this.props;
    return (
      <div className={classes.rot}>

        <ResponsiveReactGridLayout
          onLayoutChange={this.onLayoutChange}
          onBreakpointChange={this.onBreakpointChange}
          {...this.props}
          useCSSTransforms={true}>

          {this.props.layout.map((data, index) => (
            <Card key={data.i} data-grid={data} className={classes.root}>

              <CardActions className={classes.cardheader}>
                <Typography variant="h5">
                  {data.i}
                </Typography>

              </CardActions>

              <CardContent className={classes.geometriacard}>
                {data.i}
              </CardContent>

            </Card>

           
          ))}
        </ResponsiveReactGridLayout>
      </div>
    );
  }
}

export default withStyles(styles)(Layout);
