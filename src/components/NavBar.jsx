import {
  Nav,
  NavItem,
  Dropdown,
  DropdownItem,
  DropdownToggle,
  DropdownMenu,
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Container,
  Row,
  Col,
} from "reactstrap";
import React, { useState } from "react";
import { Link } from "react-router-dom";import Formulario from "./Formulario";
import CartWidget from "./CartWidget";
import "../App.css";

const NavBar = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggle = () => setDropdownOpen(!dropdownOpen);

  const [modal, setModal] = useState(false);

  const toggleModal = () => setModal(!modal);

  const [modal2, setModal2] = useState(false);

  const toggleModal2 = () => setModal2(!modal2);

  return (
    <Container body outline >
      <Row className="navBarMenu">
        <Nav pills>
          
          <Col xs="auto">
            <Link to="/" style={{ textDecoration: "none" }}>
              <NavItem className="navBarLinks">Home</NavItem>
            </Link>
          </Col>

          <Col xs="auto">
            <Dropdown nav isOpen={dropdownOpen} toggle={toggle}>
              <DropdownToggle nav caret className="navBarLinks">
                Productos
              </DropdownToggle>
              <DropdownMenu>

                <Link to="/categoria/torta" style={{ textDecoration: "none" }}>
                  <DropdownItem className="navBarLinks">Tortas</DropdownItem>
                </Link>

                <Link to="" style={{ textDecoration: "none" }}>
                  <DropdownItem className="navBarLinks">Desayunos</DropdownItem>
                </Link>

                <Link to="" style={{ textDecoration: "none" }}>
                <DropdownItem className="navBarLinks">Tartas</DropdownItem>
                </Link>

                <Link to="" style={{ textDecoration: "none" }}>
                <DropdownItem className="navBarLinks">Pasteleia</DropdownItem>
                </Link>

                <Link to="" style={{ textDecoration: "none" }}>
                <DropdownItem className="navBarLinks">Eventos Especiales</DropdownItem>
                </Link>

                <DropdownItem divider className="navBarLinks" />
                
                <Link to="/productos" style={{ textDecoration: "none" }}>
                <DropdownItem className="navBarLinks">Todos los productos</DropdownItem>
                </Link>
              </DropdownMenu>
            </Dropdown>
          </Col>

          <Col xs="auto">
            <NavItem>
              <div>
                <Button
                  color="link"
                  onClick={toggleModal2}
                  className="navBarLinks"
                  style={{ textDecoration: "none" }}
                >
                  Sobre Nostros
                </Button>
                <Modal isOpen={modal2} toggle={toggleModal2} className="modals">
                  <ModalHeader toggle={toggleModal2}>Las Alba</ModalHeader>
                  <ModalBody>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non proident, sunt in culpa qui officia
                    deserunt mollit anim id est laborum.
                  </ModalBody>
                  <ModalFooter>
                    <Button color="secondary">Daniela</Button>
                    <Button color="secondary">Susana</Button>
                  </ModalFooter>
                </Modal>
              </div>
            </NavItem>
          </Col>

          <Col xs="auto">
            <NavItem>
              <div>
                <Button
                  color="link"
                  onClick={toggleModal}
                  className="navBarLinks"
                  style={{ textDecoration: "none" }}
                >
                  Contacto
                </Button>
                <Modal isOpen={modal} toggle={toggleModal} className="modals">
                  <ModalHeader toggle={toggleModal}>
                    Para comunicarte con nosotros
                  </ModalHeader>
                  <ModalBody>
                    <Formulario />
                  </ModalBody>
                  <ModalFooter>
                    <Button color="secondary">Whatsapp</Button>
                    <Button color="secondary">Instragram</Button>
                  </ModalFooter>
                </Modal>
              </div>
            </NavItem>
          </Col>

          <Col style={{ float: "right" }}>
            <NavItem>
              <Link to="/cart">
                <CartWidget />
              </Link>
            </NavItem>
          </Col>

        </Nav>
      </Row>
    </Container>
  );
};

export default NavBar;
