(function() {
  'use strict'

  angular
    .module('MaterialHeaderFooter')
    .controller('MaterialHeaderFooterController', MaterialHeaderFooterController)

  MaterialHeaderFooterController.$inject = [
    '$log'
  ]

  function MaterialHeaderFooterController($log) {
    $log.debug('MaterialHeaderFooterController up and running...')

    this.cards = [
      {
        title : 'Mi título',
        text  : 'Mi texto de contenido'
      },
      {
        title : 'Mi título',
        text  : 'Mi texto de contenido'
      },
      {
        title : 'Mi título',
        text  : 'Mi texto de contenido'
      },
      {
        title : 'Mi título',
        text  : 'Mi texto de contenido'
      },
      {
        title : 'Mi título',
        text  : 'Mi texto de contenido'
      },
      {
        title : 'Mi título',
        text  : 'Mi texto de contenido'
      },
      {
        title : 'Mi título',
        text  : 'Mi texto de contenido'
      },
      {
        title : 'Mi título',
        text  : 'Mi texto de contenido'
      },
      {
        title : 'Mi título',
        text  : 'Mi texto de contenido'
      },
      {
        title : 'Mi título',
        text  : 'Mi texto de contenido'
      },
      {
        title : 'Mi título',
        text  : 'Mi texto de contenido'
      },
      {
        title : 'Mi título',
        text  : 'Mi texto de contenido'
      },
      {
        title : 'Mi título',
        text  : 'Mi texto de contenido'
      },
      {
        title : 'Mi título',
        text  : 'Mi texto de contenido'
      },
      {
        title : 'Mi título',
        text  : 'Mi texto de contenido'
      },
      {
        title : 'Mi título',
        text  : 'Mi texto de contenido'
      },
      {
        title : 'Mi título',
        text  : 'Mi texto de contenido'
      }
    ]
  }
})()

