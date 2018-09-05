const mongoose = require('mongoose');

const recipientSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true
  },
  responded: {
    type: Boolean,
    default: false
  }
});

export default recipientSchema;
