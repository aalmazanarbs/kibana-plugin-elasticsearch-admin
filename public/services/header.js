import { uiModules } from 'ui/modules';

uiModules.get(global.app_path, []).factory('HeaderService', function () {

    this.header;
    
    this.setHeader = (header) => { this.header = header; };

    return this;
});