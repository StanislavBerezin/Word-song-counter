import React, { Component } from "react";
import Modal from "react-responsive-modal";
import Nav from "../../components/nav/Nav";
//import {auth} from '../../redux/actions/authActions';
import "./Main.css";

class Main extends Component {
  state = {
    openLogin: false,
    openRegister: false
  };

  toogleModals = (whichModal, boolean) => {
    switch (whichModal) {
      case "Login":
        this.setState({ openLogin: boolean });
        break;

      case "Register":
        this.setState({ openRegister: boolean });
        break;

      default:
        break;
    }
  };
  onOpenModal = whichModal => {
    this.toogleModals(whichModal, true);
  };
  onCloseModal = whichModal => {
    this.toogleModals(whichModal, false);
  };

  render() {
    return (
      <React.Fragment>
        <Nav
          modalStateLogin={this.state.openLogin}
          modalOpenLogin={() => this.onOpenModal("Login", true)}
          modalStateRegister={this.state.openRegister}
          modalOpenRegister={() => this.onOpenModal("Register", true)}
        />

        <Modal
          open={this.state.openLogin}
          onClose={() => this.onCloseModal("Login", false)}
          center
        >
          <form className="form_login">
            <label>
              <h3>Email:</h3>
              <input type="text" />
            </label>
            <label>
              <h3>Password:</h3>
              <input type="password" />
            </label>
            <input type="button" value="Login" />
          </form>
        </Modal>

        <Modal
          open={this.state.openRegister}
          onClose={() => this.onCloseModal("Register", false)}
          center
        >
         <form className="form_login">
            <label>
              <h3>Email:</h3>
              <input type="text" />
            </label>
            <label>
              <h3>Username:</h3>
              <input type="text" />
            </label>
            <label>
              <h3>Password:</h3>
              <input type="password" />
            </label>
            <label>
              <h3>Confirm password:</h3>
              <input type="password" />
            </label>
            <input type="button" value="Login" />
          </form>
        </Modal>
      </React.Fragment>
    );
  }
}


export default Main;
