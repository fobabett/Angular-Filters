'use strict';

module.exports = /*@ngInject*/
  function fooController($scope) {
    $scope.products = [
      {
        name: 'Fin',
        gender: {
          gender: 'Male ',
          id: 1
        },
        collection: {
          name: 'Adventure Time',
          id: 1
        },
        img: 'https://upload.wikimedia.org/wikipedia/en/e/e5/FinnAdventureTime.png'
      },
      {
        name: 'Bubblegum',
        gender: {
          gender: 'Female',
          id: 2
        },
        collection: {
          name: 'Adventure Time',
          id: 1
        },
        img: 'http://geekgirlpenpals.com/wp-content/uploads/2015/06/A_kiss_from_princess_bubblegum_by_sircinnamon-d4pnkcd.png'
      },
      {
        name: 'Boba Fett',
        gender: {
          gender: 'Male ',
          id: 1
        },
        collection: {
          name: 'Star Wars',
          id: 2
        },
        img: 'https://upload.wikimedia.org/wikipedia/en/3/3e/FettbobaJB.png'
      },
      {
        name: 'Jon Snow',
        gender: {
          gender: 'Male ',
          id: 1
        },
        collection: {
          name: 'Game of Thrones',
          id: 3
        },
        img: 'http://i1-news.softpedia-static.com/images/news2/Viral-of-the-Day-Jon-Snow-Knows-Nothing-but-He-Sure-Knows-How-to-Brood-446512-2.jpg'
      },
      {
        name: 'daenerys',
        gender: {
          gender: 'Female',
          id: 2
        },
        collection: {
          name: 'Game of Thrones',
          id: 3
        },
        img: 'http://images.geeknative.com.s3.amazonaws.com/wp-content/uploads/2014/06/greg-print-02.jpg'
      }
    ];

    $scope.collections = [
      {
        name: 'Adventure Time',
        id: 1
      },
      {
        name: 'Star Wars',
        id: 2
      },
      {
        name: 'Game of Thrones',
        id: 3
      }
    ];

    $scope.genders = [
      {
        gender: 'Male ',
        id: 1
      },
      {
        gender: 'Female',
        id: 2
      }
    ]

  };
