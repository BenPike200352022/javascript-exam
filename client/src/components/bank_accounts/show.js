import React, { useState, useEffect } from "react";
import Axios from "axios";

function Show(props) {
    const [bankaccounts, setBankAccounts] = useState({});

    useEffect(() => {
        Axios.get(`/api/bankaccounts/${props.match.params.id}`)
        .then(result => setBankAccounts(result.data))
        .catch(err => console.error(err));
    }, [props]);

    return (
        <div>
        <div className="container">
            <header>
                <h1>{bankaccounts.clientName}</h1>
            </header>
            <div>
                <div>{bankaccounts.clientName}</div>
                <div>{bankaccounts.accountName}</div>
                <div>{bankaccounts.description}</div>
                <div>{bankaccounts.balance}</div>
                <div>{bankaccounts.accountType}</div>
            </div>
        </div>
        </div>
    );
}

export default Show;