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
import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import Formulario from "./Formulario";
import "../App.css";
import ItemListContainer from "./ItemListContainer";
import ShoppingCart from "@mui/icons-material/ShoppingCart";
import { CartContext } from "../context/CartContext";

const NavBar = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggle = () => setDropdownOpen(!dropdownOpen);

  const [modal, setModal] = useState(false);

  const toggleModal = () => setModal(!modal);

  const [modal2, setModal2] = useState(false);

  const toggleModal2 = () => setModal2(!modal2);

  const { totalCart } = useContext(CartContext);

  return (
    <Container body outline>
      <Row className="navBarMenu">
        <Nav pills>
          <Col xs="auto">
            <div>
              <Link to="/">
                <Button
                  color="link"
                  className="navBarLinks"
                  style={{ textDecoration: "none" }}
                >
                  Home
                </Button>
              </Link>
            </div>
            {/* 
              <NavItem className="navBarLinks">Home</NavItem>
            */}
          </Col>

          <Col xs="auto">
            <Dropdown nav isOpen={dropdownOpen} toggle={toggle}>
              <DropdownToggle nav caret className="navBarLinks">
                Productos
              </DropdownToggle>
              <DropdownMenu>
                <Link
                  to="/categoria/torta"
                  element={<ItemListContainer />}
                  style={{ textDecoration: "none" }}
                >
                  <DropdownItem className="navBarLinks">Tortas</DropdownItem>
                </Link>

                <Link
                  to="/categoria/desayuno"
                  element={<ItemListContainer />}
                  style={{ textDecoration: "none" }}
                >
                  <DropdownItem className="navBarLinks">Desayunos</DropdownItem>
                </Link>

                <Link
                  to="/categoria/tartas"
                  element={<ItemListContainer />}
                  style={{ textDecoration: "none" }}
                >
                  <DropdownItem className="navBarLinks">Tartas</DropdownItem>
                </Link>

                <Link
                  to="/categoria/pasteleria"
                  element={<ItemListContainer />}
                  style={{ textDecoration: "none" }}
                >
                  <DropdownItem className="navBarLinks">Pasteleria</DropdownItem>
                </Link>

                <Link
                  to="/categoria/eventosEsp"
                  element={<ItemListContainer />}
                  style={{ textDecoration: "none" }}
                >
                  <DropdownItem className="navBarLinks">
                    Eventos Especiales
                  </DropdownItem>
                </Link>

                <DropdownItem divider className="navBarLinks" />

                <Link
                  to="/productos"
                  element={<ItemListContainer />}
                  style={{ textDecoration: "none" }}
                >
                  <DropdownItem className="navBarLinks">
                    Todos los productos
                  </DropdownItem>
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

          <Col>
          {
            totalCart === 0
              ?
                <>
                </>
              : 
                <NavItem style={{ float: "right" }}>
                  <Link to="/cart">
                    <Button color="link" className="navBarLinks">
                      <ShoppingCart color="action"  style={{
                        display: "flex",
                        justifyContent: "inherit",
                        alignItems: "center",
                      }}/>
                    </Button>
                  </Link>
                  <div className="navBarLinks">
                    {totalCart}
                  </div>
                </NavItem>
          }
          </Col>
        </Nav>
      </Row>
    </Container>
  );
};

export default NavBar;
