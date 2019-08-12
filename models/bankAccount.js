// We will need our mongoose library
const mongoose = require(`mongoose`);

// Our schema
const BankAccountSchema = new mongoose.Schema({
  clientName: {
    type: String,
    required: true
  },
  accountName: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: false
  },
  balance: {
    type: Number,
    required: true
  },
  accountType: {
    type: String,
    enum: ['CHEQUING', 'SAVINGS', 'TFSA'],
    default: 'SAVINGS'
  }
}, {
    timestamps: true
  });

// Exporting our BankAccount model
module.exports = mongoose.model('BankAccount', BankAccountSchema);