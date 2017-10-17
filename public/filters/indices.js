import { uiModules } from 'ui/modules';

uiModules.get(global.app_path, []).filter('indicesFilter', function () {
    return (indices, filter) => {
        if (!indices) {
            return;
        }

        if (filter.name) {
            indices = indices.filter((idx) => idx.index.indexOf(filter.name) !== -1);
        }

        if (filter.closed) {
            indices = indices.filter((idx) => idx.status === 'close');
        }

        if (filter.special) {
            indices = indices.filter((idx) => idx.index.startsWith('.'));
        }

        return indices;
    };
});