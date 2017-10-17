# Kibana plugin Elasticsearch admin

> Kibana plugin to admin Elasticsearch indices and cluster

---

## development

See the [kibana contributing guide](https://github.com/elastic/kibana/blob/5.6/CONTRIBUTING.md) for instructions setting up your development environment. Once you have completed that, use the following npm tasks.

  - `npm start`

    Start kibana and have it include this plugin. If an instance of Elasticsearch is not running you can get one running `npm run elasticsearch` from kibana project

  - `npm start -- --config kibana.yml`

    You can pass any argument that you would normally send to `bin/kibana` by putting them after `--` when running `npm start`

  - `npm run build` and `bin/kibana-plugin install file:build/kibana_plugin_elasticsearch_admin-1.0.0.zip`

    Build a distributable archive

  - `npm run test:browser`

    Run the browser tests in a real web browser

  - `npm run test:server`

    Run the server tests using mocha

For more information about any of these commands run `npm run ${task} -- --help`.
