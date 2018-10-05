const sendgrid = require('sendgrid');
const helper = sendgrid.mail;
const keys = require('../config/keys');

class Mailer extends helper.Mail {
  constructor({ subject, recipients }, content) {
    super();

    this.sgApi = sendgrid(keys.sendGridKey);
    this.from_email = new helper.Email('no-reply@emaily.com');
    this.subject = subject;
    this.body = new helper.Content('text/html', content);
    this.recipients = this.formatAddresses(recipients);

    this.addContent(this.body);
    this.addClickTracking();
    this.addRecipients();
  }

  addRecipients() {
    const personalize = new helper.Personalization();
    this.recipients.forEach(recipient => {
      personalize.addTo(recipient);
    });
    this.addPersonalization(personalize);
  }

  addClickTracking() {
    // instantiate Mail.trackingSettings object with this.click_tracking = undefined;
    const trackingSettings = new helper.TrackingSettings();
    // create clickTracking object with enable=true, enable_text=true
    const clickTracking = new helper.ClickTracking(true, true);
    // set click tracking on our trackingSettings
    trackingSettings.setClickTracking(clickTracking);
    // add tracking settings to our Mail object
    this.addTrackingSettings(trackingSettings);
  }

  formatAddresses(recipients) {
    return recipients.map(({ email }) => {
      return new helper.Email(email);
    });
  }

  async send() {
    const request = this.sgApi.emptyRequest({
      method: 'POST',
      path: '/v3/mail/send',
      body: this.toJSON()
    });
    const response = await this.sgApi.API(request);
    return response;
  }
}

module.exports = Mailer;
