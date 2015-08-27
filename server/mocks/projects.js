module.exports = function(app) {
  var express = require('express');
  var projectsRouter = express.Router();
  var PROJECTS = [
 		{ 
		  id: '1',
		  name: 'Web Comic "Dusk"',
		  employer: 'Personal Project',
		  description: 'Ember Application for publishing a free web comic online. Built based on ember v1.8, still under reconstruction for app upgrade to ember v1.13: http://www.dusk-comic.com',
		  technologies: ['EMBER.JS, HTML5,  CSS3, JAVASCRIPT, JQUERY, BOOTSTRAP, SASS'],
		  screenshots: [1,2,3]		
		},
		{ id: '2',
		  name: 'Website Portal "Drivelog"',
		  employer: 'Mobility Media GmbH',
		  description: 'Engagement in the front-end & webcontent management team of a multi-featured website and application. Part of the team of several front-end developers based in Berlin and remote. Conversion optimization of the website by planning, setting up and evaluating split- and multi-page A/B tests. Implementation of dozens of landing and brand pages according to design and SEO guidelines. Maintenance of the Website by portal configuration and webcontent management.',
		  technologies: ['LIFERAY, HTML5, CSS3, JQUERY, JAVASCRIPT, BOOTSTRAP'],
		  screenshots: [4,5,6]	
		},
		{ 
		  id: '3',
		  name: 'Working Group NBS Website',
		  employer: 'University Bielefeld',
		  description: 'Website Administration and Website Maintenance of the group \'Neuromorphic Behaving Systems\' at University Bielefeld. In collaboration with the working group \'Cognitronics and Sensorics\' I enabled the setup of the working groups very first website and was responsible for updating and rearranging it for almost 2 years. Besides front-end adaptations in HTML & CSS and providing an automated setup for updating the publication list on the group\'s website using a custom literature API, I designed and created logos and background-images for a more distinct and vivid look and feel of the webpage',
		  technologies: ['TYPO3, HTML, CSS, PHP, XML'],
		  screenshots: [7]
		},
		{  id: '4',
		   name: 'Student\'s Committee Website',
		   employer: 'University Bielefeld',
		   description: 'Website Administration. System Administration maintaining several Ubuntu and Windows Desktop PCs.',
		   technologies: ['TYPO3, PHP, HTML, CSS, LINUX'],
		   screenshots: [8]
			
		}
		];

  projectsRouter.get('/', function(req, res) {

		res.send({'projects': PROJECTS});
  });

  projectsRouter.get('/:id',function(req,res){
		var id = req.params.id -1;
		res.send({'projects': PROJECTS[id]});
  });
 
  app.use('/api/projects', projectsRouter);
};
