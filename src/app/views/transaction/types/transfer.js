import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

class transfer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            sender: "",
            receiver: "",
            date: "",
            type: "",
            description: ""
        };
    }

    addTransaction() {
        fetch('/api/transaction', {
            method: 'POST',
            body: JSON.stringify(this.state),
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        })
            .then(res => console.log(res))
            .catch(err => console.log(err));
    }

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
                            label="Ingrese el monto a transferir"
                            style={{ width: 390 }}
                            placeholder="$ 0.00"
                            InputLabelProps={{
                                shrink: true,
                            }}
                            InputProps={{
                                style: {
                                    fontSize: 50,
                                    height: 90,
                                    paddingLeft: 120,
                                    paddingRight: 90,
                                }
                            }}
                        />
                    </Grid>

                    <Grid item>
                        <TextField
                            label="Cuenta del despositante"
                            style={{ width: 390 }}
                            placeholder="2300000001"
                            InputLabelProps={{
                                shrink: true,
                            }}
                        />
                    </Grid>

                    <Grid item>
                        <TextField
                            label="Cuenta del beneficiario"
                            style={{ width: 390 }}
                            placeholder="2300000002"
                            InputLabelProps={{
                                shrink: true,
                            }}
                        />
                    </Grid>

                    <Grid item>
                        <Button variant="outlined" color="primary">
                            Continuar
                        </Button>
                    </Grid>
                </Grid>
            </div >
        );
    }
}

export default transfer;