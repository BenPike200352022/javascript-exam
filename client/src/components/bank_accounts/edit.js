import React, { useState, useEffect } from "react";
import {Redirect} from "react-router-dom";
import Axios from "axios";

function Edit (props) {
    const [inputs, setInputs] = useState({});
    const [redirect, setRedirect] = useState(false);

    useEffect(() => {
        Axios.get(`/api/bankaccounts/${props.match.params.id}`)
        .then(result => setInputs(result.data))
        .catch(err => console.error(err));
    }, [props]);

    function handleSubmit(event) {
        event.preventDefault();

        Axios.post("/api/bankaccounts/update", {
            id: props.match.params.id, inputs
        })
        .then(() => setRedirect(true))
        .catch(err => console.error(err));
    }

    function handleInputChange(event) {
        event.preventDefault();
        const {name, value} = event.target;
    
        setInputs(inputs => {
          inputs[name] = value;
          return inputs;
        });
      }

    if (redirect) return <Redirect to="/" />

    return (
      <div className="container">
            <header>
                <h1>Edit Bank account</h1>
            </header>
      <div>
        <form action="/bankaccounts" method="POST" onSubmit={handleSubmit}>
            <div className="form-group">
                        <label>Client Name</label>
                        <input className="form-control" name="clientName" required onChange={handleInputChange} defaultValue={inputs.clientName} />
                    </div>

                    <div className="form-group">
                        <label>Account Name</label>
                        <input className="form-control" name="accountName" required onChange={handleInputChange} defaultValue={inputs.accountName} />
                    </div>

                    <div className="form-group">
                        <label>Description</label>
                        <input className="form-control" name="description" required onChange={handleInputChange} defaultValue={inputs.description} />
                    </div>

                    <div className="form-group">
                        <label>Balance</label>
                        <input className="form-control" name="balance" required onChange={handleInputChange} defaultValue={inputs.balance}/>
                    </div>

                    <div className="form-group">
                        <label>Account Type</label>
                        <select className="form-control" name="accountType" required onChange={handleInputChange} defaultValue={inputs.accountType}>
                            <option value="SAVINGS">SAVINGS</option>
                            <option value="CHEQUING">CHEQUING</option>
                            <option value="TFSA">TFSA</option>
                        </select>
                    </div>
  
                  <div className="form-group">
                    <button className="btn btn-dark" type="submit">Submit</button>
                  </div>
          </form>
        </div>
      </div>
    );
}

export default Edit;