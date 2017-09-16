import Ember from 'ember';

const { computed } = Ember;

export default Ember.Controller.extend({
  talkItems: computed('model.[]', function() {
    const model = this.get('model');
    return model.map((talk) => {
      if (talk.status === "upcoming") {
        talk.isUpcoming = true;
      }
      if (talk.type === "conference") {
        talk.isConference = true;
      }
      return talk;
    });
  }),
  talkSort: ['location:desc'],
  talks: computed.sort('talkItems', 'talkSort'),
});
