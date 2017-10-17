import { uiModules } from 'ui/modules';

import global from './../../global';

uiModules.get(global.app_path, []).controller('headerController', function ($scope, HeaderService) {
    
    $scope.breadcrumbs = [];
    
    $scope.menuItems = [
        { name: 'Indices', url: '#/', selected: false },
        { name: 'Cluster', url: '#/cluster', selected: false },
    ];

    $scope.$watch(
        () => { return HeaderService.header; },
        (newValue, oldValue) => {
            $scope.breadcrumbs = HeaderService.header.breadcrumbs;
            selectMenu(HeaderService.header.selectedMenuItem);
        }
    );

    function selectMenu(menu) {
        $scope.menuItems.forEach((item) => {
            if (item.name === menu) {
                item.selected = true;
            }
        });
    }
});