import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';

class withdrawal extends Component {
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
                            label="Ingrese el monto a retirar"
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
                            label="Numero de cuenta"
                            style={{ width: 390 }}
                            placeholder="2300000001"
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

export default withdrawal;