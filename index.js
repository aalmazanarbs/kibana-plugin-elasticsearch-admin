import api from './server/api';
import global from './global';

export default function (kibana) {
    return new kibana.Plugin({
        require: ['elasticsearch'],

        uiExports: {
            app: {
                title: 'ES Admin',
                description: 'Kibana plugin to manage Elasticsearch indices and cluster',
                main: global.plugin_path + '/app',
                icon: global.plugin_path + '/icon.svg'
            },

            hacks: [
                global.plugin_path + '/hack'
            ]
        },

        config(Joi) {
            return Joi.object({
                enabled: Joi.boolean().default(true),
            }).default();
        },

        init(server, options) {
            // Add server routes and initalize the plugin here
            api(server, global.es_api_endpoint);
        }
    });
};
