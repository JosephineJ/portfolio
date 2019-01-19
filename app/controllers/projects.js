import { computed } from '@ember/object';
import Controller from '@ember/controller';

export default Controller.extend({
  queryParams: ['tech'],
  tech: null,

  activeFilter: null,

  filteredProjects: computed('tech', 'model', function(){
    var tech = this.get('tech');
    var projects = this.get('model');
    var res = [];

    if (tech){
      
      var filter = projects.filter(function(el,index){
          var filterTech = el.tech.filterBy('name', tech);
          return filterTech.length > 0;
      });

      return filter;
 
    }
    else {

      return projects;
    }
  }),

  uniqueTechs: computed('model', function(){
    let projects = this.get('model');
    let techStack = projects.mapBy('tech');
    let techList = [].concat.apply([], techStack);
    return techList.uniqBy('name');

    //console.log("tech: " + JSON.stringify(techList));
  }),

  actions: {
    changeFilter(el){

      this.set('activeFilter', el);
    },
   setFilter() {
     console.log("set filter in controller");
   }
  }
});
