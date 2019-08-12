import React from "react";
import { Route, Switch } from "react-router-dom";

import BankAccountIndex from "./bank_accounts/index";
import BankAccountShow from "./bank_accounts/show";
import BankAccountNew from "./bank_accounts/new";
import BankAccountEdit from "./bank_accounts/edit";
import BankAccountDestroy from "./bank_accounts/destroy";

function Routes() {
  return (
    <Switch>
      <Route exact path="/" component={BankAccountIndex} />
      <Route exact path="/new" component={BankAccountNew} />
      <Route exact path="/:id" component={BankAccountShow} />
      <Route exact path="/:id/edit" component={BankAccountEdit} />
      <Route exact path="/:id/destroy" component={BankAccountDestroy} />
    </Switch>
  );
}

export default Routes;