import { uiModules } from 'ui/modules';

import { Header, Breadcrumb } from './model/header_data';

uiModules.get(global.app_path, []).controller('clusterController', function (HeaderService) {

    HeaderService.setHeader(new Header('Cluster').addBreadcrumb(new Breadcrumb('Cluster','#/cluster', true)));
});
