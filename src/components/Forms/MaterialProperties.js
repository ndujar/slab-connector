import React, { Component } from "react";
import classesCTE from "assets/tables/classesCTE.json"

// reactstrap components
import {
  Row,
  Col,
  Input,
  CardHeader,
  CardTitle
} from "reactstrap";

class MaterialProperties extends Component {
  constructor(props) {
    super(props);
    this.onInputchange = this.onInputchange.bind(this);

  }

  onInputchange(event) {
    this.props.childToParent(event);
  }
  

  render() {

    return (
        <div>
            <CardHeader>
              <Row>
                <h5 className="card-category">Propiedades de los materiales</h5>
              </Row>

              <Row>
                <Col>
                  <CardTitle tag="h2">Hormigon</CardTitle>
                  <Row>
                    <label>
                      Resistencia Característica
                      <Input
                        name="fck"
                        defaultValue={this.props.fck}
                        type="number"
                        onChange={this.onInputchange}
                      />
                    </label>
                  </Row>
                </Col>
                <Col>
                  <CardTitle tag="h2">Madera</CardTitle>   
                    <label>
                      Clase
                      <Input
                        name="ClaseMadera"
                        defaultValue={this.props.ClaseMadera}
                        type="select"
                        onChange={this.onInputchange}
                      >
                        {Array.from(new Map(Object.entries(classesCTE)).keys(), (clase) => {
                              return <option key={clase}>{clase}</option>
                        })}
                      </Input>
                    </label>  
                </Col>
                <Col>
                  <CardTitle tag="h2">Pernos</CardTitle>
                    <Row>
                      <label>
                        Resistencia Característica
                        <Input
                          name="fyk"
                          defaultValue={this.props.fyk}
                          type="number"
                          onChange={this.onInputchange}
                        />
                      </label>
                    </Row>                   
                </Col>
              </Row>
            </CardHeader>  
        </div>
    );
  }
}

export default MaterialProperties;