import { uiModules } from 'ui/modules';

import global from './../../global';

uiModules.get(global.app_path, []).controller('alertController', function ($scope, AlertService) {
    $scope.alerts = [];

    $scope.$watch(
        () => { return AlertService.alerts; },
        (newValue, oldValue) => { $scope.alerts = AlertService.alerts; }
    );

    $scope.clearAlert = (id) => { AlertService.clearAlert(id); };
});