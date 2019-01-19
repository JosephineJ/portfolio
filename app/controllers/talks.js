import { sort } from '@ember/object/computed';
import Controller from '@ember/controller';
import { computed } from '@ember/object';

export default Controller.extend({
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
  talks: sort('talkItems', 'talkSort'),
});
