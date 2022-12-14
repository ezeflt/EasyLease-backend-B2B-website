const mongoose = require('mongoose');

const clientSchema = mongoose.Schema({
  
  name: String,
  address: String,
  EmployedSince: Number,
  ClientBirth: Number,
  chiffre: Number,
  interlocutors: [{ type: mongoose.Schema.Types.ObjectId, ref: 'interlocutors' }],
  scenary: { type: mongoose.Schema.Types.ObjectId, ref: 'scenary' },
  contrat:{ type: mongoose.Schema.Types.ObjectId, ref: 'contrats' },

});

const Client = mongoose.model('clients', clientSchema);

module.exports = Client;
