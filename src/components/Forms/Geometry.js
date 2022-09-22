import React, { Component } from "react";
// reactstrap components
import {
  Table,
  Input,
  Row,
  Col,
  CardHeader,
  CardTitle
} from "reactstrap";

class Geometry extends Component {
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
          <CardHeader>
            <Row>
              <h5 className="card-category">Geometría</h5>
            </Row>

            <Row>
              <Col>
                <CardTitle tag="h2">Forjado</CardTitle>   
                  <label>
                  Espesor Capa Compresion (Ecc):
                  <Input
                    name="Ecc"
                    defaultValue={this.props.Ecc}
                    type="float"
                    onChange={this.onInputchange}
                  />
                  </label>  
              </Col>
              <Col>
                <CardTitle tag="h2">Viguetas</CardTitle>
                <Row>
                  <label>
                  Longitud (L):
                  <Input
                    name="Lvig"
                    defaultValue={this.props.Lvig}
                    type="float"
                    onChange={this.onInputchange}
                  />
                  </label>
                </Row>
                <Row>
                  <label>
                  Base (B):
                  <Input
                    name="Bvig"
                    defaultValue={this.props.Bvig}
                    type="float"
                    onChange={this.onInputchange}
                  />
                  </label>
                </Row>
                <Row>
                  <label>
                  Altura (H):
                  <Input
                    name="Hvig"
                    defaultValue={this.props.Hvig}
                    type="float"
                    onChange={this.onInputchange}
                  />
                  </label>
                </Row>
                <Row>
                  <label>
                  Separacion (S):
                  <Input
                    name="Svig"
                    defaultValue={this.props.Svig}
                    type="float"
                    onChange={this.onInputchange}
                  />
                  </label>
                </Row>
              </Col>
              <Col>
                <CardTitle tag="h2">Pernos</CardTitle>  
                  <Row> 
                    <label>
                    Diámetro Conectores (DCon):
                    <Input
                      name="Dcon"
                      defaultValue={this.props.Dcon}
                      type="float"
                      onChange={this.onInputchange}
                    />
                    </label>  
                  </Row>
                  <Row>
                    <label>
                    Separación en los extremos (Smin):
                    <Input
                      name="Smin"
                      defaultValue={this.props.Smin}
                      type="float"
                      onChange={this.onInputchange}
                    />
                    </label>  
                  </Row>
                  <Row>
                    <label>
                    Separación en el centro (Smax):
                    <Input
                      name="Smax"
                      defaultValue={this.props.Smax}
                      type="float"
                      onChange={this.onInputchange}
                    />
                    </label>  
                  </Row>
                  <Row>
                    <label>
                    Altura (Hcon):
                    <Input
                      name="Hcon"
                      defaultValue={this.props.Hcon}
                      type="float"
                      onChange={this.onInputchange}
                    />
                    </label>  
                  </Row>
                  <Row>
                    <label>
                    Profundidad (Pcon):
                    <Input
                      name="Pcon"
                      defaultValue={this.props.Pcon}
                      type="float"
                      onChange={this.onInputchange}
                    />
                    </label>  
                  </Row>
              </Col>
            </Row>
          </CardHeader>  
        <div>
          
        </div>
        </div>
    );
  }
}

export default Geometry;