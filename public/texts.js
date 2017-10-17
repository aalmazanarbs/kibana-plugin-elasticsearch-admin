export default {
    clear_cache_index_description: 'Clear all index caches (query, fieldata, request and recycler).',
    open_close_index_description: 'A closed index has almost no overhead on the cluster (except for maintaining its metadata), and is blocked for read/write operations. A closed index can be opened which will then go through the normal recovery process.',
    delete_index_description: 'Allows to delete an existing index.',
    flush_index_description: 'The flush process of an index basically frees memory from the index by flushing data to the index storage and clearing the internal transaction log.',
    force_merge_index_description: 'The merge relates to the number of segments a Lucene index holds within each shard. The force merge operation allows to reduce the number of segments by merging them.',
    refresh_index_description: 'Make all operations performed since the last refresh available for search.'
};