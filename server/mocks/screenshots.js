module.exports = function(app) {
  var express = require('express');
  var screenshotsRouter = express.Router();
  var SHOTS = [
 		{ 
		  id: '1',
		  imgloc: 'assets/img/dee-1.png',
		  desc: 'dusk-teaser-page',
		  project: 1
		},
		{ 
          id: '2',
          imgloc: 'assets/img/dee-2.png',
          desc: 'dusk-news-page',
          project: 1
		},
				{ 
          id: '3',
          imgloc: 'assets/img/dee-3.png',
          desc: 'dusk-slider-intro',
          project: 1
		},
				{ 
          id: '4',
          imgloc: 'assets/img/dl-gov.png',
          desc: 'dl-project-start-page',
          project: 2
		},
				{ 
          id: '5',
          imgloc: 'assets/img/dl-b2b.png',
          desc: 'dl-project-b2b-lp',
          project: 2
		},
				{ 
          id: '6',
          imgloc: 'assets/img/dl-calc.png',
          desc: 'dl-project-landingpage-service',
          project: 2
		},
				{ 
          id: '7',
          imgloc: 'assets/img/nbs-1.png',
          desc: 'nbs-group-website',
          project: 3
		},
				{ 
          id: '8',
          imgloc: 'assets/img/asta-1.png',
          desc: 'students-committee-website',
          project: 4
		}
		];

  screenshotsRouter.get('/', function(req, res) {
      res.send({'screenshots': SHOTS});
  });



  screenshotsRouter.get('/:id', function(req, res) {
		var id = req.params.id -1;
		res.send({'screenshots': SHOTS[id]});
  });


  app.use('/api/screenshots', screenshotsRouter);
};
