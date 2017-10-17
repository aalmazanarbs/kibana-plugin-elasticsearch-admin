const plugin_name = 'kibana_plugin_elasticsearch_admin';
const es_api_endpoint = '/api/' + plugin_name;

export default {
    plugin_name: plugin_name,
    es_api_endpoint: es_api_endpoint,
    plugin_path: 'plugins/' + plugin_name,
    app_path: 'app/' + plugin_name,
    es_api_path: '..' + es_api_endpoint
};