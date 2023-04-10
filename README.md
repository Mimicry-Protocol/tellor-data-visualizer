# tellor-data-visualizer

Currently this is a very dumb but helpful data visualizer for Tellor.

## How to Use
1. Visit Tellor's subgraph, for example [their subgraph for Matic](https://api.thegraph.com/subgraphs/name/tellor-io/tellorflexoraclematichgraph/graphql?query=query+%7B%0A++newReportEntities%28%0A++++orderBy%3A+_time%0A++++orderDirection%3A+desc%0A++++first%3A+1000%0A++++where%3A%7B%0A++++++_queryId%3A+%220x9026839f0ed5b30c73fd0a6046e3ade4e04c94c5e8c982089205109de74b0553%22%0A++++%7D%0A++%29+%7B%0A++++_value%0A++++_time%0A++%7D%0A%7D)
2. Modify the _queryId to match your use case.
3. Run the query and copy the results into `./src/data.json`
4. Install all packages with `npm install`
5. Run the parcel server using `npm run dev`
6. Visit http://localhost:1234 in your browser.


## To Do
- Get the subgraph data via an API
- Deploy a hosted version
