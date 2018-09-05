const mongoose = require('mongoose');

const recipientSchema = require('./Recipient');

const surveySchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  body: {
    type: String,
    required: true
  },
  subject: {
    type: String,
    required: true
  },
  recipients: {
    type: [recipientSchema],
    required: true
  },
  yes: { type: Number, default: 0 },
  no: { type: Number, default: 0 }
});

export default mongoose.model('Survey', surveySchema);
