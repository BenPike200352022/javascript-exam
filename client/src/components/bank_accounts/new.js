import React, { useState } from "react";
import {Redirect} from "react-router-dom";
import Axios from "axios";

function New () {
    const [inputs, setInputs] = useState({});
    const [redirect, setRedirect] = useState(false);

    function handleInputChange (event) {
        event.persist();
        const { name,value } = event.target;

        setInputs(inputs => {
            return {
                ...inputs, 
                [name]: value
            };
        });
    }

    function handleSubmit(event) {
        event.preventDefault();

        Axios.post("/api/bankaccounts", inputs)
        .then(() => setRedirect(true))
        .catch(err => console.log(err));
    }

    if (redirect) return <Redirect to="/" />;

    return (
        <div>
        <div className="container">
            <header>
                <h1> New Bank Account </h1>
            </header>

            <div>
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label>Client Name</label>
                        <input className="form-control" name="clientName" onChange={handleInputChange} />
                    </div>

                    <div className="form-group">
                        <label>Account Name</label>
                        <input className="form-control" name="accountName" onChange={handleInputChange} />
                    </div>

                    <div className="form-group">
                        <label>Description</label>
                        <input className="form-control" name="description" onChange={handleInputChange} />
                    </div>

                    <div className="form-group">
                        <label>Balance</label>
                        <input className="form-control" name="balance" onChange={handleInputChange} />
                    </div>

                    <div className="form-group">
                        <label>Account Type</label>
                        <select className="form-control" name="accountType" onChange={handleInputChange}>
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
        </div>
    );
}

export default New;