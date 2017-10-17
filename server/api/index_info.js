export default function (server, call, endpoint) {
    
    server.route({
        path: endpoint + '/indices_info',
        method: 'GET',
        handler(request, reply) {
            call(request, 'cat.indices', {
                format: 'json',
                v: true
            }).then((response) => reply(response));
        }
    });

    server.route({
        path: endpoint + '/index_info/{name}',
        method: 'GET',
        handler(request, reply) {
            call(request, 'cat.indices', {
                index: request.params.name,
                format: 'json',
                v: true
            }).then((response) => reply(response));
        }
    });

    server.route({
        path: endpoint + '/index_stats/{name}',
        method: 'GET',
        handler(request, reply) {
            call(request, 'indices.get', {
                feature: '_stats',
                index: request.params.name,
                human: true
            }).then((response) => reply(response));
        }
    });

    server.route({
        path: endpoint + '/index_settings/{name}',
        method: 'GET',
        handler(request, reply) {
            call(request, 'indices.getSettings', {
                index: request.params.name,
                human: true
            }).then((response) => reply(response));
        }
    });

    server.route({
        path: endpoint + '/index_mappings/{name}',
        method: 'GET',
        handler(request, reply) {
            call(request, 'indices.getMapping', {
                index: request.params.name,
                human: true
            }).then((response) => reply(response));
        }
    });

    server.route({
        path: endpoint + '/index_segments/{name}',
        method: 'GET',
        handler(request, reply) {
            call(request, 'indices.segments', {
                index: request.params.name,
                human: true,
                verbose: true
            }).then((response) => reply(response));
        }
    });
};
