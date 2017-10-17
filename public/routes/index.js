import uiRoutes from 'ui/routes';

import indexListTemplate from '../templates/index_list.html';
import indexDetailTemplate from '../templates/index_detail.html';
import clusterTemplate from '../templates/cluster.html';

uiRoutes.enable();
uiRoutes
    .when('/', {
        template: indexListTemplate
    })

    .when('/index_detail/:name', {
        template: indexDetailTemplate
    })

    .when('/cluster', {
        template: clusterTemplate
    });
