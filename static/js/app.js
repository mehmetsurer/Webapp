// Namespace
var APP = APP || {};

(function () {
	'use strict';
	// Data objecten
	APP.game = {
		title:'Pool A - Score: Boomsquad vs. Burning Snow',
		description:'Game',
		items: [
			{ score: "1", team1: "Boomsquad", team1Score: "1", team2: "Burning Snow", team2Score: "0"},
			{ score: "2", team1: "Boomsquad", team1Score: "2", team2: "Burning Snow", team2Score: "0"},
			{ score: "3", team1: "Boomsquad", team1Score: "2", team2: "Burning Snow", team2Score: "1"},
			{ score: "4", team1: "Boomsquad", team1Score: "2", team2: "Burning Snow", team2Score: "2"},
			{ score: "5", team1: "Boomsquad", team1Score: "3", team2: "Burning Snow", team2Score: "2"},
			{ score: "6", team1: "Boomsquad", team1Score: "4", team2: "Burning Snow", team2Score: "2"},
			{ score: "7", team1: "Boomsquad", team1Score: "5", team2: "Burning Snow", team2Score: "2"},
			{ score: "8", team1: "Boomsquad", team1Score: "5", team2: "Burning Snow", team2Score: "3"},
			{ score: "9", team1: "Boomsquad", team1Score: "6", team2: "Burning Snow", team2Score: "3"},
			{ score: "10", team1: "Boomsquad", team1Score: "7", team2: "Burning Snow", team2Score: "3"},
			{ score: "11", team1: "Boomsquad", team1Score: "7", team2: "Burning Snow", team2Score: "4"},
			{ score: "12", team1: "Boomsquad", team1Score: "8", team2: "Burning Snow", team2Score: "4"},
			{ score: "13", team1: "Boomsquad", team1Score: "8", team2: "Burning Snow", team2Score: "5"},
			{ score: "14", team1: "Boomsquad", team1Score: "8", team2: "Burning Snow", team2Score: "6"},
			{ score: "15", team1: "Boomsquad", team1Score: "9", team2: "Burning Snow", team2Score: "6"},
			{ score: "16", team1: "Boomsquad", team1Score: "9", team2: "Burning Snow", team2Score: "7"},
			{ score: "17", team1: "Boomsquad", team1Score: "10", team2: "Burning Snow", team2Score: "7"},
			{ score: "18", team1: "Boomsquad", team1Score: "11", team2: "Burning Snow", team2Score: "7"},
			{ score: "19", team1: "Boomsquad", team1Score: "12", team2: "Burning Snow", team2Score: "7"},
			{ score: "20", team1: "Boomsquad", team1Score: "13", team2: "Burning Snow", team2Score: "7"},
			{ score: "21", team1: "Boomsquad", team1Score: "14", team2: "Burning Snow", team2Score: "7"},
			{ score: "22", team1: "Boomsquad", team1Score: "14", team2: "Burning Snow", team2Score: "8"},
			{ score: "23", team1: "Boomsquad", team1Score: "15", team2: "Burning Snow", team2Score: "8"}
		],
		winner: [
			{ team1: "Boomsquad", team1Score: "15", team2: "Burning Snow", team2Score: "8"}
		]
	};

	APP.ranking = {
		title:'Pool A - Ranking',
		description:'Ranking',
		items: [
			{ team: "Chasing", win: "2", lost: "2", Sw: "7", Sl: "9", pw: "35", pl: "39", ratio: "-4"},
		    { team: "Boomsquad", win: "2", lost: "2", Sw: "9", Sl: "8", pw: "36", pl: "34", ratio: "+2"},
		    { team: "Burning Snow", win: "3", lost: "1", Sw: "11", Sl: "4", pw: "36", pl: "23", ratio: "+13"},
		    { team: "Beast Amsterdam", win: "2", lost: "2", Sw: "6", Sl: "8", pw: "30", pl: "34", ratio: "-4"},
		    { team: "Amsterdam Money Gang", win: "1", lost: "3", Sw: "6", Sl: "10", pw: "30", pl: "37", ratio: "-7"}
		]
	};


	APP.schedule = {
		title:'Pool A - Schedule',
		description:'Schedule',
		items: [
			{ date: "Monday, 9:00am", team1: "Chasing", team1Score: "13", team2: "Amsterdam Money Gang", team2Score: "9"},
			{ date: "Monday, 9:00am", team1: "Boomsquad", team1Score: "15", team2: "Beast Amsterdam", team2Score: "11"},
			{ date: "Monday, 10:00am", team1: "Beast Amsterdam", team1Score: "14", team2: "Amsterdam Money Gang", team2Score: "12"},
			{ date: "Monday, 10:00am", team1: "Chasing", team1Score: "5", team2: "Burning Snow", team2Score: "15"},
			{ date: "Monday, 11:00am", team1: "Boomsquad", team1Score: "11", team2: "Amsterdam Money Gang", team2Score: "15"},    
			{ date: "Monday, 11:00am", team1: "Burning Snow", team1Score: "15", team2: "Beast Amsterdam", team2Score: "6"},
			{ date: "Monday, 12:00pm", team1: "Chasing", team1Score: "8", team2: "Beast Amsterdam", team2Score: "15"},
			{ date: "Monday, 12:00pm", team1: "Boomsquad", team1Score: "15", team2: "Burning Snow", team2Score: "8"},
			{ date: "Monday, 1:00pm", team1: "Chasing", team1Score: "15", team2: "Boomsquad", team2Score: "14"},
			{ date: "Monday, 1:00pm", team1: "Burning Snow", team1Score: "15", team2: "Amsterdam Money Gang", team2Score: "11"}
		]
	};
	
	// Controller Init wat je als eerst wilt uitvoeren
	APP.controller = {
		init: function () {
			// Initialize router
			APP.router.init();
		}
	};

	// Router maakt pagina's aan
	APP.router = {
		init: function () {
	  		routie({
			    '/game': function() {
			    	APP.page.render('game');
				},
			    '/ranking': function() {
			    	APP.page.render('ranking');
			    },

			    '/schedule': function() {
			    	APP.page.render('schedule');
			    },
			    // Defaultpage
			    '*': function() {
			    	APP.page.render('game');
			    }
			});
		},
		// Wanneer je op een link klink krijg je active class mee
		change: function () {
		// Maakt een array van je sections aan
            var route = window.location.hash.slice(2),
                sections = qwery('section'),
               	section = qwery('[data-route=' + route + ']')[0];

            // Show active section, hide all other
            if (section) {
            	for (var i=0; i < sections.length; i++){
            		sections[i].classList.remove('active');
            	}
	           	section.classList.add('active');
            }
            // Default route
            if (!route) {
            	sections[0].classList.add('active');
            }
		}
	};

	// Pages koppelt pagina's aan een section element
	APP.page = {
		render: function (route) {
			var data = eval('APP.'+route);
			
			Transparency.render(qwery('[data-route='+route+']')[0], data);
			APP.router.change();
		}
	}
	// DOM ready wanneer Dom geladen is voert controller.init uit
	domready(function () {
		// Kickstart application
		APP.controller.init();
	});
	
})();