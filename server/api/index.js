import indexInfo from './index_info';
import indexActions from './index_actions';

export default function (server, ESApiEndpoint) {

    const call = server.plugins.elasticsearch.getCluster('data').callWithRequest;

    indexInfo(server, call, ESApiEndpoint);
    indexActions(server, call, ESApiEndpoint);
}