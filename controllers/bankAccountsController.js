const BankAccount = require('../models/bankAccount');

exports.index = (req, res) => {
  BankAccount.find()
    .then(bankAccounts => res.status(200).json(bankAccounts))
    .catch(err => res.status(404).send(err));
};


exports.show = (req, res) => {
  BankAccount.findOne({
    _id: req.params.id
  })
    .then(bankAccount => res.status(200).json(bankAccount))
    .catch(err => res.status(404).json(err));
};


exports.create = async (req, res) => {
  BankAccount.create(req.body)
    .then(() => res.status(200).json({ success: "New Bank Account created" }))
    .catch(err => res.status(404).json(err));
};


exports.update = (req, res) => {
  BankAccount.updateOne({
    _id: req.body.id
  }, req.body, {
      runValidators: true
    })
    .then(() => res.status(200).json({ success: "Bank Account updated" }))
    .catch(err => res.status(404).json(err));
};


exports.destroy = (req, res) => {
  BankAccount.deleteOne({
    _id: req.body.id
  })
    .then(() => res.status(200).json({ success: "Bank Account deleted" }))
    .catch(err => res.status(404).json(err));
};