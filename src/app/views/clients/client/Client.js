import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Axios from 'axios';

import ModalClient from '../../../components/modalClient';

class Client extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: 0,
      name: "",
      surname: "",
      province: "",
      address: "",
      email: "",
      phone: "",
      phoneAux: "",
      birthdate: "",
      show: false,
      clientIdValidate: "",
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event, op) {
    switch (op) {
      case 0:
        this.setState({
          id: event.target.value,
        });
        setTimeout(() => {
          this.validateDocIde();
        }, 500);

        setTimeout(() => {
          this.searchClient(this.state.id);
        }, 1000);
        break;
      case 1:
        this.setState({
          name: event.target.value,
        });
        break;
      case 2:
        this.setState({
          surname: event.target.value,
        });
        break;
      case 3:
        this.setState({
          province: event.target.value,
        });
        break;
      case 4:
        this.setState({
          address: event.target.value,
        });
        break;
      case 5:
        this.setState({
          email: event.target.value,
        });
        break;
      case 6:
        this.setState({
          phone: event.target.value,
        });
        break;
      case 7:
        this.setState({
          phoneAux: event.target.value,
        });
        break;
      case 8:
        this.setState({
          birthdate: event.target.value,
        });
        break;
    }
  };

  validateDocIde() {
    var cad = this.state.id;
    var total = 0;
    var longitud = cad.length;
    var longcheck = longitud - 1;
    if (cad.length > 13) {
      this.setState({ clientIdValidate: "Cédula no válida " });
    } else {
      if (cad.length == 13) {
        cad = cad.substring(0, 10);
      }
      if (cad !== "" && longitud === 10) {
        for (var i = 0; i < longcheck; i++) {
          if (i % 2 === 0) {
            var aux = cad.charAt(i) * 2;
            if (aux > 9) aux -= 9;
            total += aux;
          } else {
            total += parseInt(cad.charAt(i)); // parseInt o concatenará en lugar de sumar
          }
        }
        total = total % 10 ? 10 - total % 10 : 0;
        if (cad.charAt(longitud - 1) == total) {
          this.setState({ clientIdValidate: "" });
        } else {
          this.setState({ clientIdValidate: "Cédula no válida " });
        }
      }
    }
  };

  searchClient() {
    Axios.post('http://localhost:3000/client/searchId', {
      docIdeClient: this.state.id,
    })
      .then((response) => {
        if (response.data === "") {
          this.setState({ clientIdValidate: this.state.clientIdValidate + "" });
        } else {
          this.setState({ clientIdValidate: this.state.clientIdValidate + " - El cliente ya existe" });
        }
      })
      .catch(err => console.log(err));
  };

  render() {
    return (
      <div>
        <Grid
          container
          direction="column"
          justify="flex-start"
          alignItems="center"
          spacing={5}
        >
          <Grid item>
            <TextField
              label="Ingrese el número del documento de identificación"
              type="number"
              style={{ width: 390 }}
              placeholder="1234567890"
              InputLabelProps={{
                shrink: true,
              }}
              onChange={(event) => this.handleClick(event, 0)}
            />
          </Grid>

          <Grid item>
            <TextField
              label="Ingrese los nombres"
              style={{ width: 390 }}
              placeholder="Daniel Ariel"
              InputLabelProps={{
                shrink: true,
              }}
              onChange={(event) => this.handleClick(event, 1)}
            />
          </Grid>

          <Grid item>
            <TextField
              label="Ingrese los apellidos"
              style={{ width: 390 }}
              placeholder="Altamirano Avila"
              InputLabelProps={{
                shrink: true,
              }}
              onChange={(event) => this.handleClick(event, 2)}
            />
          </Grid>

          <Grid item>
            <TextField
              label="Ingrese la provincia de residencia"
              style={{ width: 390 }}
              placeholder="Quito"
              InputLabelProps={{
                shrink: true,
              }}
              onChange={(event) => this.handleClick(event, 3)}
            />
          </Grid>

          <Grid item>
            <TextField
              label="Ingrese la dirección de residencia"
              style={{ width: 390 }}
              placeholder="Sangolquí"
              InputLabelProps={{
                shrink: true,
              }}
              onChange={(event) => this.handleClick(event, 4)}
            />
          </Grid>

          <Grid item>
            <TextField
              label="Ingrese el correo electronico"
              type="email"
              style={{ width: 390 }}
              placeholder="juanperez@espe.edu.ec"
              InputLabelProps={{
                shrink: true,
              }}
              onChange={(event) => this.handleClick(event, 5)}
            />
          </Grid>

          <Grid item>
            <TextField
              label="Ingrese el numero telefonico"
              type="number"
              style={{ width: 390 }}
              placeholder="0999568470"
              InputLabelProps={{
                shrink: true,
              }}
              onChange={(event) => this.handleClick(event, 6)}
            />
          </Grid>

          <Grid item>
            <TextField
              label="Ingrese el numero telefonico auxiliar"
              type="number"
              style={{ width: 390 }}
              placeholder="0999256437"
              InputLabelProps={{
                shrink: true,
              }}
              onChange={(event) => this.handleClick(event, 7)}
            />
          </Grid>

          <Grid item>
            <TextField
              label="Fecha de Nacimiento"
              type="date"
              defaultValue="2003-03-01"
              style={{ width: 390 }}
              InputLabelProps={{
                shrink: true,
              }}
              onChange={(event) => this.handleClick(event, 8)}
            />
          </Grid>

          <Grid item>
            <Button variant="outlined" color="primary" onClick={() => this.setState({ show: true })}>
              Continuar
            </Button>
          </Grid>
        </Grid>
        <ModalClient
          id={this.state.id}
          name={this.state.name}
          surname={this.state.surname}
          province={this.state.province}
          address={this.state.address}
          email={this.state.email}
          phone={this.state.phone}
          phoneAux={this.state.phoneAux}
          birthdate={this.state.birthdate}
          clientIdValidate={this.state.clientIdValidate}
          show={this.state.show}
          onHide={() => this.setState({ show: false })}
        />
      </div>
    );
  }
}
export default Client;