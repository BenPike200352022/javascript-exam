// Our router module
const router = require('express').Router();

// Our controller
const BankAccountsController = require('../controllers/bankAccountsController');

// Our routes
router.get(`/`, BankAccountsController.index);
router.get(`/:id`, BankAccountsController.show);
router.post(`/`, BankAccountsController.create);
router.post(`/update`, BankAccountsController.update);
router.post(`/destroy`, BankAccountsController.destroy);

// We have to export our changes
module.exports = router;