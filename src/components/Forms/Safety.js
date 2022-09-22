import React, { Component } from "react";
// reactstrap components
import {
  Table,
  Row,
  Col,
  CardHeader,
  Input,
  CardTitle
} from "reactstrap";

class MaterialProperties extends Component {
  constructor(props) {
    super(props);
    this.onInputchange = this.onInputchange.bind(this);

  }

  onInputchange(event) {
    this.props.childToParent(event);
    console.log(event.target.value)
  }
  

  render() {
  
    return (
        <div>
          <Table>
            <CardHeader>
              <Row>
                <h5 className="card-category">Coeficientes de Seguridad</h5>
              </Row>

              <Row>
                <Col>
                  <CardTitle tag="h2">Mayoracion</CardTitle>
                  <Row>
                    <label>
                      Acciones Permanentes: 
                      <Input
                        name="gammaG"
                        defaultValue={this.props.gammaG}
                        type="float"
                        onChange={this.onInputchange}
                      />
                    </label>
                  </Row>
                  <Row>
                    <label>
                      Acciones Variables: 
                      <Input
                        name="gammaQ"
                        defaultValue={this.props.gammaQ}
                        type="float"
                        onChange={this.onInputchange}
                      />
                    </label>
                  </Row>
                </Col>
                <Col>
                  <CardTitle tag="h2">Minoracion</CardTitle>   
                  <Row>
                    <label>
                      Elementos de union:   
                      <Input
                        name="gammaV"
                        defaultValue={this.props.gammaV}
                        type="float"
                        onChange={this.onInputchange}
                      />
                    </label>
                  </Row>
                  <Row>
                    <label>
                      Hormigon:   
                      <Input
                        name="gammaC"
                        defaultValue={this.props.gammaC}
                        type="float"
                        onChange={this.onInputchange}
                      />
                    </label>
                  </Row>
                  <Row>
                    <label>
                      Madera:   
                      <Input
                        title="Madera"
                        name="gammaM"
                        defaultValue={this.props.gammaM}
                        type="float"
                        onChange={this.onInputchange}
                      />
                    </label>
                  </Row>
                  <Row>
                    <label>
                      Pernos:   
                      <Input
                        name="gammaS"
                        defaultValue={this.props.gammaS}
                        type="float"
                        onChange={this.onInputchange}
                      />
                    </label>
                  </Row>
                </Col>
              </Row>
            </CardHeader>  
  
        
          </Table>
        <div>
          
        </div>
        </div>
    );
  }
}

export default MaterialProperties;