import React, { Component } from "react";
import { Stage, Layer, Rect, Text, Line } from "react-konva";

class ColoredRect extends React.Component {

  render() {
    return (
      <Layer>
        <Rect
          x={this.props.posX}
          y={this.props.posY}
          width={this.props.B}
          height={this.props.H}
          fill={this.props.color}
          shadowBlur={2}
        />
      </Layer>
    );
  }
}

class CrossSection extends Component {
	constructor(){
	  super()
	}
  
	render() {
	  const offset={x:20, y:20};
	  const trim=10;
	  const scale = 5;
	  const Bvig = parseFloat(this.props.Bvig);
	  const Hvig = parseFloat(this.props.Hvig);
	  const Svig = parseFloat(this.props.Svig);
	  const Ecc = parseFloat(this.props.Ecc);
	  const colorBeam = 'green';
	  const colorConcrete = 'green';
	  
	  return (
		<div>
			<Stage width={800} height={500}>
				<ColoredRect position='Slab'
							posX={(offset.x - trim) * scale}
							posY={offset.y * scale}
							B={(Bvig + Svig + (2 * trim)) * scale}
							H={Ecc * scale}
							color={colorConcrete}
						/>
				<ColoredRect position='Beam right'
							posX={(offset.x + Svig) * scale} 
							posY={(offset.y + Ecc) * scale}
							B={Bvig * scale}
							H={Hvig * scale}
							color={colorBeam}
						/>
				<ColoredRect position='Beam left'
							posX={offset.x * scale}
							posY={(offset.y + Ecc) * scale}
							B={Bvig * scale}
							H={Hvig * scale}
							color={colorBeam}
						/>  
							
			</Stage>
		</div>

	  );
	}
  }

  export default CrossSection;