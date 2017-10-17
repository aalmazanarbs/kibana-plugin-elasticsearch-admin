export default function (server, call, endpoint) {

    server.route({
        path: endpoint + '/index_clear_cache/{name}',
        method: 'POST',
        handler(request, reply) {
            call(request, 'indices.clearCache', {
                index: request.params.name
            }).then((response) => reply(response));
        }
    });

    server.route({
        path: endpoint + '/index_close/{name}',
        method: 'POST',
        handler(request, reply) {
            call(request, 'indices.close', {
                index: request.params.name
            }).then((response) => reply(response));
        }
    });

    server.route({
        path: endpoint + '/index_delete/{name}',
        method: 'POST',
        handler(request, reply) {
            call(request, 'indices.delete', {
                index: request.params.name
            }).then((response) => reply(response));
        }
    });

    server.route({
        path: endpoint + '/index_force_flush/{name}',
        method: 'POST',
        handler(request, reply) {
            call(request, 'indices.flush', {
                index: request.params.name,
                force: true
            }).then((response) => reply(response));
        }
    });

    server.route({
        path: endpoint + '/index_force_merge/{name}',
        method: 'POST',
        handler(request, reply) {
            call(request, 'indices.forcemerge', {
                index: request.params.name
            }).then((response) => reply(response));
        }
    });

    server.route({
        path: endpoint + '/index_open/{name}',
        method: 'POST',
        handler(request, reply) {
            call(request, 'indices.open', {
                index: request.params.name
            }).then((response) => reply(response));
        }
    });

    server.route({
        path: endpoint + '/index_refresh/{name}',
        method: 'POST',
        handler(request, reply) {
            call(request, 'indices.refresh', {
                index: request.params.name
            }).then((response) => reply(response));
        }
    });
}