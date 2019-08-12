import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Axios from "axios";

function Index () {
    const [bankaccounts, setBankaccounts] = useState([]);

    useEffect(() => {
        Axios.get("/api/bankaccounts")
            .then(result => setBankaccounts(result.data))
            .catch(err => console.error(err));
    }, []);

    return (
        <div className="container">
            <header>
                <h1>All Accounts</h1>
            </header>

            <div>
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th>Client Name</th>
                            <th>Account Name</th>
                            <th>Balance</th>
                            <th>Account Type</th>
                            <th>Actions</th>
                        </tr>
                    </thead>

                    <tbody>
                        {bankaccounts.map(bankaccount => (
                            <tr key={bankaccount._id}>
                                <td>
                                    <Link to={`/${bankaccount._id}`}>{bankaccount.clientName}</Link>
                                </td>
                                <td>
                                    {bankaccount.accountName}
                                </td>
                                <td>
                                    {bankaccount.balance}
                                </td>
                                <td>
                                    {bankaccount.accountType}
                                </td>
                                <td>
                                    <Link to={`/${bankaccount._id}/edit`}>Edit</Link>
                                    |
                                    <Link to={`/${bankaccount._id}/destroy`}>Delete</Link>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Index;