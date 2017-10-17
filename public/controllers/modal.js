import { uiModules } from 'ui/modules';

import global from './../../global';

uiModules.get(global.app_path, []).controller('modalController', function ($scope, ModalService) {
    $scope.modalService = ModalService;
});