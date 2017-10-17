import { uiModules } from 'ui/modules';

import { Header, Breadcrumb } from './model/header_data';
import global from './../../global';
import texts from './../texts';

uiModules.get(global.app_path, []).controller('indexDetailController', function ($scope, $routeParams, $http, $sce, 
                                                                            $timeout, $window, HeaderService, 
                                                                            ModalService, AlertService, JSONTree) {

    /* Vars */

    $scope.pluginPath = global.plugin_path;
    $scope.texts = texts;

    $scope.index = {};
    $scope.index.indexName = $routeParams.name;

    /* Header */
    
    HeaderService.setHeader(new Header('Indices')
                    .addBreadcrumb(new Breadcrumb('Indices','#/', false))
                    .addBreadcrumb(new Breadcrumb($scope.index.indexName, null, false))
    );

    /* Init */

    $http.get(global.es_api_path + '/index_info/' + $scope.index.indexName).then((response) => {
        $scope.index.closed = response.data[0].status === 'close';
        loadIndexStatsAndSegments($scope.index.closed, 0);
    });

    $http.get(global.es_api_path + '/index_settings/' + $scope.index.indexName).then((response) => {
        $scope.index.settings = $sce.trustAsHtml(JSONTree.create(response.data[$scope.index.indexName].settings.index));
    });

    $http.get(global.es_api_path + '/index_mappings/' + $scope.index.indexName).then((response) => {
        $scope.index.mappings = $sce.trustAsHtml(JSONTree.create(response.data[$scope.index.indexName].mappings));
    });

    /* Functions */

    function loadIndexStatsAndSegments(isIndexClosed, timeout) {
        if (isIndexClosed) {
            $scope.index.stats = 'The index is closed';
            $scope.index.segments = 'The index is closed';
        } else {
            // The API doesn't respond after index in opened
            $timeout(() => {
                $http.get(global.es_api_path + '/index_stats/' + $scope.index.indexName).then((response) => {
                    $scope.index.stats = $sce.trustAsHtml(JSONTree.create(response.data.indices[$scope.index.indexName]));
                });
    
                $http.get(global.es_api_path + '/index_segments/' + $scope.index.indexName).then((response) => {
                    $scope.index.segments = $sce.trustAsHtml(JSONTree.create(response.data.indices[$scope.index.indexName].shards));
                });
            }, timeout);
        }
    }

    $scope.clearCacheIndex = () => {
        ModalService.showCofirm(
            'Clear cache of index ' + $scope.index.indexName + '?',
            () => {
                $http.post(global.es_api_path + '/index_clear_cache/' + $scope.index.indexName).then((response) => {
                    alert('Index cache cleared');
                });
            }
        );
    };

    $scope.closeIndex = () => {
        ModalService.showCofirm(
            'Close index ' + $scope.index.indexName + '?',
            () => {
                $http.post(global.es_api_path + '/index_close/' + $scope.index.indexName).then((response) => {
                    $scope.index.closed = true;
                    loadIndexStatsAndSegments($scope.index.closed, 0);
                });
            }
        );
    };


    $scope.deleteIndex = () => {
        ModalService.showCofirm(
            'Delete index ' + $scope.index.indexName + '?',
            () => {
                $http.post(global.es_api_path + '/index_delete/' + $scope.index.indexName).then((response) => {
                    $window.location.href = '#/';
                });
            }
        );
    };

    $scope.forceFlushIndex = () => {
        ModalService.showCofirm(
            'Force flush index ' + $scope.index.indexName + '?',
            () => {
                $http.post(global.es_api_path + '/index_force_flush/' + $scope.index.indexName).then((response) => {
                    alert('Index flushed');
                });
            }
        );
    };

    $scope.forceMergeIndex = () => {
        ModalService.showCofirm(
            'Force merge index ' + $scope.index.indexName + '?',
            () => {
                $http.post(global.es_api_path + '/index_force_merge/' + $scope.index.indexName).then((response) => {
                    loadIndexStatsAndSegments($scope.index.closed, 0);
                });
            }
        );
    };

    $scope.openIndex = () => {
        ModalService.showCofirm(
            'Open index ' + $scope.index.indexName + '?',
            () => {
                $http.post(global.es_api_path + '/index_open/' + $scope.index.indexName).then((response) => {
                    $scope.index.closed = false;
                    loadIndexStatsAndSegments($scope.index.closed, 1000);
                });
            }
        );
    };

    $scope.refreshIndex = () => {
        ModalService.showCofirm(
            'Refresh index ' + $scope.index.indexName + '?',
            () => {
                $http.post(global.es_api_path + '/index_refresh/' + $scope.index.indexName).then((response) => {
                    // TODO, añadir mas mensajes
                    AlertService.success('Index refreshed');
                });
            }
        );
    };

    $scope.stopClick = (event) => {
        event.preventDefault();
        event.stopPropagation();
    };
});