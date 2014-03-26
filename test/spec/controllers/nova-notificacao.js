'use strict';

describe('Controller: NovaNotificacaoCtrl', function () {

  // load the controller's module
  beforeEach(module('iotMobileApp'));

  var NovaNotificacaoCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    NovaNotificacaoCtrl = $controller('NovaNotificacaoCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
