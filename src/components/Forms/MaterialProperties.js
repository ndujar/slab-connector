import React, { Component } from "react";
// reactstrap components
import {
  Table,
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
    console.log(event.target.value)
  }
  

  render() {
  
    return (
        <div>
          <Table>
            <CardHeader>
              <Row>
                <h5 className="card-category">Propiedades de los materiales</h5>
              </Row>

              <Row>
                <Col>
                  <CardTitle tag="h2">Hormigon</CardTitle>
                  <Row>
                    <label>
                      fck = 
                      <Input
                        name="fck"
                        defaultValue={this.props.fck}
                        type="float"
                        onChange={this.onInputchange}
                      />
                    </label>
                  </Row>
                </Col>
                <Col>
                  <CardTitle tag="h2">Madera</CardTitle>   
                    <label>
                      Clase:   
                      <Input
                        name="ClaseMadera"
                        defaultValue={this.props.ClaseMadera}
                        type="string"
                        onChange={this.onInputchange}
                      />
                    </label>  
                </Col>
                <Col>
                  <CardTitle tag="h2">Pernos</CardTitle>
                    <Row>
                      <label>
                        fyk = 
                        <Input
                          name="fyk"
                          defaultValue={this.props.fyk}
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