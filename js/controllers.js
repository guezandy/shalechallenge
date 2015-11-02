var myApp = angular.module('Shale', []);


  //We already have a limitTo filter built-in to angular,
  //let's make a startFrom filter
  myApp.filter('startFrom', function() {
      return function(input, start) {
          start = +start; //parse to int
          return input.slice(start);
  
      }
  });

  myApp.filter('reverse', function() {
  return function(items) {
    return items.slice().reverse();
  };
});

myApp.controller('MyController', function MyController($scope, $log) {
  $scope.articles = [
  {
    "_id" : 0,
    "author":"Constance Olivia Smith",
    "image":"23",
    "title":"Fullerton-Brighton-Norwell Award",
    "description":"Constance received the Fullerton-Brighton-Norwell Award for Modern Art for her mixed-media image of a tree of life, with jewel-adorned branches depicting the arms of humanity, and precious gemstone-decorated leaves representing the spouting buds of togetherness. The daughter of a New York jeweler, Constance has been salvaging the discarded remnants of her father's jewelry-making since she was five years old, and won the New York State Fair grand prize at the age of 8 years old for a gem-adorned painting of the Manhattan Bridge."
  },
  {
    "_id" : 1,
    "author":"Barot Bellingham",
    "image":"55",
    "title":"Royal Academy of Painting and Sculpture",
    "description":"Barot has just finished his final year at The Royal Academy of Painting and Sculpture, where he excelled in glass etching paintings and portraiture. Hailed as one of the most diverse artists of his generation, Barot is equally as skilled with watercolors as he is with oils, and is just as well-balanced in different subject areas. Barot's collection entitled \"The Un-Collection\" will adorn the walls of Gilbert Hall, depicting his range of skills and sensibilities - all of them, uniquely Barot, yet undeniably different"
  },
  {
      "_id" : 2,
    "author":"Jonathan G. Ferrar II",
    "image":"99",
    "title":"Artist to Watch in 2012",
    "description":"The Artist to Watch in 2012 by the London Review, Johnathan has already sold one of the highest priced-commissions paid to an art student, ever on record. The piece, entitled Gratitude Resort, a work in oil and mixed media, was sold for $750,000 and Jonathan donated all the proceeds to Art for Peace, an organization that provides college art scholarships for creative children in developing nations"
  },
  {
      "_id" : 3,
    "author":"Hillary Hewitt Goldwynn-Post",
    "image":"23",
    "title":"New York University",
    "description":"Hillary is a sophomore art sculpture student at New York University, and has already won all the major international prizes for new sculptors, including the Divinity Circle, the International Sculptor's Medal, and the Academy of Paris Award. Hillary's CAC exhibit features 25 abstract watercolor paintings that contain only water images including waves, deep sea, and river."
  },
  {
      "_id" : 4,
    "author":"Hassum Harrod",
    "image":"76",
    "title":"Art College in New Dehli",
    "description":"The Art College in New Dehli has sponsored Hassum on scholarship for his entire undergraduate career at the university, seeing great promise in his contemporary paintings of landscapes - that use equal parts muted and vibrant tones, and are almost a contradiction in art. Hassum will be speaking on \"The use and absence of color in modern art\" during Thursday's agenda."
  },
  {
      "_id" : 5,
    "author":"Jennifer Jerome",
    "image":"77",
    "title":"New Orleans, LA",
    "description":"A native of New Orleans, much of Jennifer's work has centered around abstract images that depict flooding and rebuilding, having grown up as a teenager in the post-flood years. Despite the sadness of devastation and lives lost, Jennifer's work also depicts the hope and togetherness of a community that has persevered. Jennifer's exhibit will be discussed during Tuesday's Water in Art theme."
  },
  {
      "_id" : 6,
    "author":"LaVonne L. LaRue",
    "image":"78",
    "title":"Chicago, IL",
    "description":"LaVonne's giant-sized paintings all around Chicago tell the story of love, nature, and conservation - themes that are central to her heart. LaVonne will share her love and skill of graffiti art on Monday's schedule, as she starts the painting of a 20-foot high wall in the Rousseau Room of Hotel Contempo in front of a standing-room only audience in Art in Unexpected Places."
  },
  {
    "_id" : 7,
    "author":"Constance Olivia Smith",
    "image":"12",
    "title":"Fullerton-Brighton-Norwell Award",
    "description":"Constance received the Fullerton-Brighton-Norwell Award for Modern Art for her mixed-media image of a tree of life, with jewel-adorned branches depicting the arms of humanity, and precious gemstone-decorated leaves representing the spouting buds of togetherness. The daughter of a New York jeweler, Constance has been salvaging the discarded remnants of her father's jewelry-making since she was five years old, and won the New York State Fair grand prize at the age of 8 years old for a gem-adorned painting of the Manhattan Bridge."
  },
  {
      "_id" : 8,
    "author":"Riley Rudolph Rewington",
    "image":"52",
    "title":"Roux Academy of Art, Media, and Design",
    "description":"A first-year student at the Roux Academy of Art, Media, and Design, Riley is already changing the face of modern art at the university. Riley's exquisite abstract pieces have no intention of ever being understood, but instead beg the viewer to dream, create, pretend, and envision with their mind's eye. Riley will be speaking on the \"Art of Abstract\" during Thursday's schedule"
  },
  {
      "_id" : 9,
    "author":"Xhou Ta",
    "image":"38",
    "title":"China International Art University",
    "description":"A senior at the China International Art University, Xhou has become well-known for his miniature sculptures, often the size of a rice granule, that are displayed by rear projection of microscope images on canvas. Xhou will discuss the art and science behind his incredibly detailed works of art."
  },
  {
      "_id" : 10,
    "author":"Barot Bellingham",
    "image":"30",
    "title":"Royal Academy of Painting and Sculpture",
    "description":"Barot has just finished his final year at The Royal Academy of Painting and Sculpture, where he excelled in glass etching paintings and portraiture. Hailed as one of the most diverse artists of his generation, Barot is equally as skilled with watercolors as he is with oils, and is just as well-balanced in different subject areas. Barot's collection entitled \"The Un-Collection\" will adorn the walls of Gilbert Hall, depicting his range of skills and sensibilities - all of them, uniquely Barot, yet undeniably different"
  },
  {
      "_id" : 11,
    "author":"Jonathan G. Ferrar II",
    "image":"39",
    "title":"Artist to Watch in 2012",
    "description":"The Artist to Watch in 2012 by the London Review, Johnathan has already sold one of the highest priced-commissions paid to an art student, ever on record. The piece, entitled Gratitude Resort, a work in oil and mixed media, was sold for $750,000 and Jonathan donated all the proceeds to Art for Peace, an organization that provides college art scholarships for creative children in developing nations"
  },
  {
      "_id" : 12,
    "author":"Hillary Hewitt Goldwynn-Post",
    "image":"40",
    "title":"New York University",
    "description":"Hillary is a sophomore art sculpture student at New York University, and has already won all the major international prizes for new sculptors, including the Divinity Circle, the International Sculptor's Medal, and the Academy of Paris Award. Hillary's CAC exhibit features 25 abstract watercolor paintings that contain only water images including waves, deep sea, and river."
  },
  {
      "_id" : 13,
    "author":"Hassum Harrod",
    "image":"45",
    "title":"Art College in New Dehli",
    "description":"The Art College in New Dehli has sponsored Hassum on scholarship for his entire undergraduate career at the university, seeing great promise in his contemporary paintings of landscapes - that use equal parts muted and vibrant tones, and are almost a contradiction in art. Hassum will be speaking on \"The use and absence of color in modern art\" during Thursday's agenda."
  },
  {
      "_id" : 14,
    "author":"Jennifer Jerome",
    "image":"15",
    "title":"New Orleans, LA",
    "description":"A native of New Orleans, much of Jennifer's work has centered around abstract images that depict flooding and rebuilding, having grown up as a teenager in the post-flood years. Despite the sadness of devastation and lives lost, Jennifer's work also depicts the hope and togetherness of a community that has persevered. Jennifer's exhibit will be discussed during Tuesday's Water in Art theme."
  },
  {
      "_id" : 15,
    "author":"LaVonne L. LaRue",
    "image":"73",
    "title":"Chicago, IL",
    "description":"LaVonne's giant-sized paintings all around Chicago tell the story of love, nature, and conservation - themes that are central to her heart. LaVonne will share her love and skill of graffiti art on Monday's schedule, as she starts the painting of a 20-foot high wall in the Rousseau Room of Hotel Contempo in front of a standing-room only audience in Art in Unexpected Places."
  },
  {
      "_id" : 16,
    "author":"Constance Olivia Smith",
    "image":"70",
    "title":"Fullerton-Brighton-Norwell Award",
    "description":"Constance received the Fullerton-Brighton-Norwell Award for Modern Art for her mixed-media image of a tree of life, with jewel-adorned branches depicting the arms of humanity, and precious gemstone-decorated leaves representing the spouting buds of togetherness. The daughter of a New York jeweler, Constance has been salvaging the discarded remnants of her father's jewelry-making since she was five years old, and won the New York State Fair grand prize at the age of 8 years old for a gem-adorned painting of the Manhattan Bridge."
  },
  {
      "_id" : 17,
    "author":"Riley Rudolph Rewington",
    "image":"88",
    "title":"Roux Academy of Art, Media, and Design",
    "description":"A first-year student at the Roux Academy of Art, Media, and Design, Riley is already changing the face of modern art at the university. Riley's exquisite abstract pieces have no intention of ever being understood, but instead beg the viewer to dream, create, pretend, and envision with their mind's eye. Riley will be speaking on the \"Art of Abstract\" during Thursday's schedule"
  },
  {
      "_id" : 18,
    "author":"Xhou Ta",
    "image":"101",
    "title":"China International Art University",
    "description":"A senior at the China International Art University, Xhou has become well-known for his miniature sculptures, often the size of a rice granule, that are displayed by rear projection of microscope images on canvas. Xhou will discuss the art and science behind his incredibly detailed works of art."
  },
    {
        "_id" : 19,
    "author":"Barot Bellingham",
    "image":"102",
    "title":"Royal Academy of Painting and Sculpture",
    "description":"Barot has just finished his final year at The Royal Academy of Painting and Sculpture, where he excelled in glass etching paintings and portraiture. Hailed as one of the most diverse artists of his generation, Barot is equally as skilled with watercolors as he is with oils, and is just as well-balanced in different subject areas. Barot's collection entitled \"The Un-Collection\" will adorn the walls of Gilbert Hall, depicting his range of skills and sensibilities - all of them, uniquely Barot, yet undeniably different"
  },
  {
      "_id" : 20,
    "author":"Jonathan G. Ferrar II",
    "image":"145",
    "title":"Artist to Watch in 2012",
    "description":"The Artist to Watch in 2012 by the London Review, Johnathan has already sold one of the highest priced-commissions paid to an art student, ever on record. The piece, entitled Gratitude Resort, a work in oil and mixed media, was sold for $750,000 and Jonathan donated all the proceeds to Art for Peace, an organization that provides college art scholarships for creative children in developing nations"
  },
  {
      "_id" : 21,
    "author":"Hillary Hewitt Goldwynn-Post",
    "image":"123",
    "title":"New York University",
    "description":"Hillary is a sophomore art sculpture student at New York University, and has already won all the major international prizes for new sculptors, including the Divinity Circle, the International Sculptor's Medal, and the Academy of Paris Award. Hillary's CAC exhibit features 25 abstract watercolor paintings that contain only water images including waves, deep sea, and river."
  },
  {
      "_id" : 22,
    "author":"Hassum Harrod",
    "image":"121",
    "title":"Art College in New Dehli",
    "description":"The Art College in New Dehli has sponsored Hassum on scholarship for his entire undergraduate career at the university, seeing great promise in his contemporary paintings of landscapes - that use equal parts muted and vibrant tones, and are almost a contradiction in art. Hassum will be speaking on \"The use and absence of color in modern art\" during Thursday's agenda."
  },
  {
      "_id" : 23,
    "author":"Jennifer Jerome",
    "image":"41",
    "title":"New Orleans, LA",
    "description":"A native of New Orleans, much of Jennifer's work has centered around abstract images that depict flooding and rebuilding, having grown up as a teenager in the post-flood years. Despite the sadness of devastation and lives lost, Jennifer's work also depicts the hope and togetherness of a community that has persevered. Jennifer's exhibit will be discussed during Tuesday's Water in Art theme."
  },
  {
      "_id" : 24,
    "author":"LaVonne L. LaRue",
    "image":"99",
    "title":"Chicago, IL",
    "description":"LaVonne's giant-sized paintings all around Chicago tell the story of love, nature, and conservation - themes that are central to her heart. LaVonne will share her love and skill of graffiti art on Monday's schedule, as she starts the painting of a 20-foot high wall in the Rousseau Room of Hotel Contempo in front of a standing-room only audience in Art in Unexpected Places."
  },
  {
      "_id" : 25,
    "author":"Constance Olivia Smith",
    "image":"100",
    "title":"Fullerton-Brighton-Norwell Award",
    "description":"Constance received the Fullerton-Brighton-Norwell Award for Modern Art for her mixed-media image of a tree of life, with jewel-adorned branches depicting the arms of humanity, and precious gemstone-decorated leaves representing the spouting buds of togetherness. The daughter of a New York jeweler, Constance has been salvaging the discarded remnants of her father's jewelry-making since she was five years old, and won the New York State Fair grand prize at the age of 8 years old for a gem-adorned painting of the Manhattan Bridge."
  },
  {
      "_id" : 26,
    "author":"Riley Rudolph Rewington",
    "image":"104",
    "title":"Roux Academy of Art, Media, and Design",
    "description":"A first-year student at the Roux Academy of Art, Media, and Design, Riley is already changing the face of modern art at the university. Riley's exquisite abstract pieces have no intention of ever being understood, but instead beg the viewer to dream, create, pretend, and envision with their mind's eye. Riley will be speaking on the \"Art of Abstract\" during Thursday's schedule"
  },
  {
      "_id" : 27,
    "author":"Xhou Ta",
    "image":"172",
    "title":"China International Art University",
    "description":"A senior at the China International Art University, Xhou has become well-known for his miniature sculptures, often the size of a rice granule, that are displayed by rear projection of microscope images on canvas. Xhou will discuss the art and science behind his incredibly detailed works of art."
  },
    {
        "_id" : 28,
    "author":"Barot Bellingham",
    "image":"122",
    "title":"Royal Academy of Painting and Sculpture",
    "description":"Barot has just finished his final year at The Royal Academy of Painting and Sculpture, where he excelled in glass etching paintings and portraiture. Hailed as one of the most diverse artists of his generation, Barot is equally as skilled with watercolors as he is with oils, and is just as well-balanced in different subject areas. Barot's collection entitled \"The Un-Collection\" will adorn the walls of Gilbert Hall, depicting his range of skills and sensibilities - all of them, uniquely Barot, yet undeniably different"
  },
  {
      "_id" : 29,
    "author":"Jonathan G. Ferrar II",
    "image":"142",
    "title":"Artist to Watch in 2012",
    "description":"The Artist to Watch in 2012 by the London Review, Johnathan has already sold one of the highest priced-commissions paid to an art student, ever on record. The piece, entitled Gratitude Resort, a work in oil and mixed media, was sold for $750,000 and Jonathan donated all the proceeds to Art for Peace, an organization that provides college art scholarships for creative children in developing nations"
  },
  {
      "_id" : 30,
    "author":"Hillary Hewitt Goldwynn-Post",
    "image":"167",
    "title":"New York University",
    "description":"Hillary is a sophomore art sculpture student at New York University, and has already won all the major international prizes for new sculptors, including the Divinity Circle, the International Sculptor's Medal, and the Academy of Paris Award. Hillary's CAC exhibit features 25 abstract watercolor paintings that contain only water images including waves, deep sea, and river."
  },
  {
      "_id" : 31,
    "author":"Hassum Harrod",
    "image":"52",
    "title":"Art College in New Dehli",
    "description":"The Art College in New Dehli has sponsored Hassum on scholarship for his entire undergraduate career at the university, seeing great promise in his contemporary paintings of landscapes - that use equal parts muted and vibrant tones, and are almost a contradiction in art. Hassum will be speaking on \"The use and absence of color in modern art\" during Thursday's agenda."
  },
  {
      "_id" : 32,
    "author":"Jennifer Jerome",
    "image":"91",
    "title":"New Orleans, LA",
    "description":"A native of New Orleans, much of Jennifer's work has centered around abstract images that depict flooding and rebuilding, having grown up as a teenager in the post-flood years. Despite the sadness of devastation and lives lost, Jennifer's work also depicts the hope and togetherness of a community that has persevered. Jennifer's exhibit will be discussed during Tuesday's Water in Art theme."
  },
  {
      "_id" : 33,
    "author":"LaVonne L. LaRue",
    "image":"78",
    "title":"Chicago, IL",
    "description":"LaVonne's giant-sized paintings all around Chicago tell the story of love, nature, and conservation - themes that are central to her heart. LaVonne will share her love and skill of graffiti art on Monday's schedule, as she starts the painting of a 20-foot high wall in the Rousseau Room of Hotel Contempo in front of a standing-room only audience in Art in Unexpected Places."
  },
  {
      "_id" : 34,
    "author":"Constance Olivia Smith",
    "image":"70",
    "title":"Fullerton-Brighton-Norwell Award",
    "description":"Constance received the Fullerton-Brighton-Norwell Award for Modern Art for her mixed-media image of a tree of life, with jewel-adorned branches depicting the arms of humanity, and precious gemstone-decorated leaves representing the spouting buds of togetherness. The daughter of a New York jeweler, Constance has been salvaging the discarded remnants of her father's jewelry-making since she was five years old, and won the New York State Fair grand prize at the age of 8 years old for a gem-adorned painting of the Manhattan Bridge."
  },
  {
      "_id" : 35,
    "author":"Riley Rudolph Rewington",
    "image":"12",
    "title":"Roux Academy of Art, Media, and Design",
    "description":"A first-year student at the Roux Academy of Art, Media, and Design, Riley is already changing the face of modern art at the university. Riley's exquisite abstract pieces have no intention of ever being understood, but instead beg the viewer to dream, create, pretend, and envision with their mind's eye. Riley will be speaking on the \"Art of Abstract\" during Thursday's schedule"
  },
  {
      "_id" : 36,
    "author":"Xhou Ta",
    "image":"19",
    "title":"China International Art University",
    "description":"A senior at the China International Art University, Xhou has become well-known for his miniature sculptures, often the size of a rice granule, that are displayed by rear projection of microscope images on canvas. Xhou will discuss the art and science behind his incredibly detailed works of art."
  },
    {
        "_id" : 37,
    "author":"Barot Bellingham",
    "image":"42",
    "title":"Royal Academy of Painting and Sculpture",
    "description":"Barot has just finished his final year at The Royal Academy of Painting and Sculpture, where he excelled in glass etching paintings and portraiture. Hailed as one of the most diverse artists of his generation, Barot is equally as skilled with watercolors as he is with oils, and is just as well-balanced in different subject areas. Barot's collection entitled \"The Un-Collection\" will adorn the walls of Gilbert Hall, depicting his range of skills and sensibilities - all of them, uniquely Barot, yet undeniably different"
  },
  {
      "_id" : 38,
    "author":"Jonathan G. Ferrar II",
    "image":"95",
    "title":"Artist to Watch in 2012",
    "description":"The Artist to Watch in 2012 by the London Review, Johnathan has already sold one of the highest priced-commissions paid to an art student, ever on record. The piece, entitled Gratitude Resort, a work in oil and mixed media, was sold for $750,000 and Jonathan donated all the proceeds to Art for Peace, an organization that provides college art scholarships for creative children in developing nations"
  },
  {
      "_id" : 39,
    "author":"Hillary Hewitt Goldwynn-Post",
    "image":"29",
    "title":"New York University",
    "description":"Hillary is a sophomore art sculpture student at New York University, and has already won all the major international prizes for new sculptors, including the Divinity Circle, the International Sculptor's Medal, and the Academy of Paris Award. Hillary's CAC exhibit features 25 abstract watercolor paintings that contain only water images including waves, deep sea, and river."
  },
  {
      "_id" : 40,
    "author":"Hassum Harrod",
    "image":"41",
    "title":"Art College in New Dehli",
    "description":"The Art College in New Dehli has sponsored Hassum on scholarship for his entire undergraduate career at the university, seeing great promise in his contemporary paintings of landscapes - that use equal parts muted and vibrant tones, and are almost a contradiction in art. Hassum will be speaking on \"The use and absence of color in modern art\" during Thursday's agenda."
  },
  {
      "_id" : 41,
    "author":"Jennifer Jerome",
    "image":"52",
    "title":"New Orleans, LA",
    "description":"A native of New Orleans, much of Jennifer's work has centered around abstract images that depict flooding and rebuilding, having grown up as a teenager in the post-flood years. Despite the sadness of devastation and lives lost, Jennifer's work also depicts the hope and togetherness of a community that has persevered. Jennifer's exhibit will be discussed during Tuesday's Water in Art theme."
  },
  {
      "_id" : 42,
    "author":"LaVonne L. LaRue",
    "image":"60",
    "title":"Chicago, IL",
    "description":"LaVonne's giant-sized paintings all around Chicago tell the story of love, nature, and conservation - themes that are central to her heart. LaVonne will share her love and skill of graffiti art on Monday's schedule, as she starts the painting of a 20-foot high wall in the Rousseau Room of Hotel Contempo in front of a standing-room only audience in Art in Unexpected Places."
  },
  {
      "_id" : 43,
    "author":"Constance Olivia Smith",
    "image":"77",
    "title":"Fullerton-Brighton-Norwell Award",
    "description":"Constance received the Fullerton-Brighton-Norwell Award for Modern Art for her mixed-media image of a tree of life, with jewel-adorned branches depicting the arms of humanity, and precious gemstone-decorated leaves representing the spouting buds of togetherness. The daughter of a New York jeweler, Constance has been salvaging the discarded remnants of her father's jewelry-making since she was five years old, and won the New York State Fair grand prize at the age of 8 years old for a gem-adorned painting of the Manhattan Bridge."
  },
  {
      "_id" : 44,
    "author":"Riley Rudolph Rewington",
    "image":"88",
    "title":"Roux Academy of Art, Media, and Design",
    "description":"A first-year student at the Roux Academy of Art, Media, and Design, Riley is already changing the face of modern art at the university. Riley's exquisite abstract pieces have no intention of ever being understood, but instead beg the viewer to dream, create, pretend, and envision with their mind's eye. Riley will be speaking on the \"Art of Abstract\" during Thursday's schedule"
  },
  {
      "_id" : 45,
    "author":"Xhou Ta",
    "image":"99",
    "title":"China International Art University",
    "description":"A senior at the China International Art University, Xhou has become well-known for his miniature sculptures, often the size of a rice granule, that are displayed by rear projection of microscope images on canvas. Xhou will discuss the art and science behind his incredibly detailed works of art."
  }
]


  $scope.totalItems = $scope.articles.length;
  $scope.pageSize = 4;
  $scope.totalPages = Math.ceil($scope.totalItems/$scope.pageSize)
  $scope.currentPage = 0;
  $scope.viewHistoryPerPage = 3;

  $scope.setPage = function (pageNo) {
    $scope.currentPage = pageNo;
  };

  $scope.pageChanged = function() {
    $log.log('Page changed to: ' + $scope.currentPage);
  };

  $scope.nextPage = function() {
    $scope.currentPage = $scope.currentPage +1;
  }

  $scope.prevPage = function() {
    $scope.currentPage = $scope.currentPage - 1;
  }

  $scope.lastViewedList = [];

  $scope.addLastViewedList = function(id) {
    //lastViewedList[0] = id;
    $scope.lastViewedList.push(id);
    console.log($scope.lastViewedList);
  }

  $scope.lastViewed = 0;

  $scope.recent = function(id) {
    $scope.lastViewed = id;
  }
});

