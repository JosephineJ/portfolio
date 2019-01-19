import { computed } from '@ember/object';
import Controller from '@ember/controller';

export default Controller.extend({
  notIndexRoute: computed('currentRouteName', function(){
    let currentRoute =  this.get('currentRouteName');
    return currentRoute !== 'index';
  })
});
