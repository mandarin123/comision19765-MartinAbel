import React from "react";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";

function Formulario() {
    
  return (

    <Form>
      <FormGroup style={{paddingBottom:10}}>
        <Label for="NombeyApellido">Nombre y Apellido</Label>
        <Input
          type="nombreyapellido"
          name="nombreyapellido"
          id="nombreyapellido"
          placeholder="Nombre y Apellido"
        />
      </FormGroup>

      <FormGroup style={{paddingBottom:10}}>
        <Label for="Email">Email</Label>
        <Input
          type="email"
          name="email"
          id="exampleEmail"
          placeholder="ejemplo@email.com"
        />
      </FormGroup>
      
      <FormGroup style={{paddingBottom:10}}>
        <Label for="exampleSelect">Donde nos conociste</Label>
        <Input type="select" name="select" id="exampleSelect">
          <option>Instagram</option>
          <option>Facebook</option>
          <option>Internet</option>
          <option>Referencia</option>
        </Input>
      </FormGroup>

      <FormGroup style={{paddingBottom:10}}>
        <Label for="consulta">Dejanos tu consulta</Label>
        <Input type="textarea" name="consulta" id="consulta" />
      </FormGroup>
    
      
      <FormGroup check style={{paddingBottom:10}}>
        <Label check>
          <Input type="checkbox" /> Deseo recibir promos
        </Label>
      </FormGroup>

      <Button>Enviar</Button>
    </Form>
  );
}

export default Formulario;
