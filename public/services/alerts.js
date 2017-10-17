import { uiModules } from 'ui/modules';
import $ from 'jquery';

import Alert from './model/alert';

uiModules.get(global.app_path, []).factory('AlertService', function ($timeout) {
    this.maxAlerts = 3;
    this.alerts = [];
    var self = this;

    this.clearAllAlerts = () => {
        this.alerts.length = 0;
    };

    this.clearAlert = (id) => {
        $('#' + id).fadeTo(500, 0).slideUp(200, () => {
            $(this).remove();
            self.alerts = self.alerts.filter((a) => id != a.id);
        });
    };

    this.addAlert = (alert, timeout) => {
        this.alerts.unshift(alert);

        $timeout(() => {
            self.clearAlert(alert.id);
        }, timeout);

        if (this.alerts.length >= this.maxAlerts) {
            this.alerts.length = 3;
        }
    };

    this.error = (message, timeout) => {
        let alert = new Alert(message, 'error', 'alert-danger', 'fa fa-warning');
        this.addAlert(alert, timeout ? timeout : 7500);
    };

    this.info = (message, timeout) => {
        let alert = new Alert(message, 'info', 'alert-info', 'fa fa-info');
        this.addAlert(alert, timeout = timeout ? timeout : 2500);
    };

    this.success = (message, timeout) => {
        let alert = new Alert(message, 'success', 'alert-success', 'fa fa-check');
        this.addAlert(alert, timeout = timeout ? timeout : 2500);
    };

    this.warn = (message, timeout) => {
        let alert = new Alert(message, 'warn', 'alert-warning', 'fa fa-info');
        this.addAlert(alert, timeout ? timeout : 5000);
    };

    return this;
});