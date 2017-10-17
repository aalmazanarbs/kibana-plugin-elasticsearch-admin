import { uiModules } from 'ui/modules';

uiModules.get(global.app_path, []).factory('ModalService', function ($sce, JSONTree) {

    var confirmCallback;
    this.show = false;

    this.showCofirm = (body, callback) => {
        this.text = body;
        this.info = undefined;
        confirmCallback = callback;
        this.show = true;
    };

    this.showInfo = (info) => {
        this.text = undefined;
        this.info = $sce.trustAsHtml(JSONTree.create(info));
        this.show = true;
    };

    this.close = () => {
        this.clean();
    };

    this.confirm = () => {
        if (confirmCallback) {
            confirmCallback();
        }
        this.clean();
    };

    this.needsConfirmation = () => {
        return confirmCallback ? true : false;
    };

    this.clean = () => {
        this.text = undefined;
        this.info = undefined;
        confirmCallback = undefined;
        this.show = false;    
    };

    return this;
});