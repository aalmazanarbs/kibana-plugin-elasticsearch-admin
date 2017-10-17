import { uiModules } from 'ui/modules';

import global from './../../global';
import { Header, Breadcrumb } from './model/header_data';

uiModules.get(global.app_path, []).controller('indexListController', function ($scope, $http, HeaderService) {

    HeaderService.setHeader(new Header('Indices').addBreadcrumb(new Breadcrumb('Indices','#/', true)));

    $scope.indices_filters = { name: '', closed: false, special: false };

    $http.get(global.es_api_path + '/indices_info').then((response) => {
        $scope.indices = response.data;
    });
});
