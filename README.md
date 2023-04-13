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

### Notes

#### Re: Query ID: 0x9026839f0ed5b30c73fd0a6046e3ade4e04c94c5e8c982089205109de74b0553
##### What's Included:
- 0xBC4CA0EdA7647A8aB7C2061c2E118A18a936f13D   // BAYC
- 0xba30E5F9Bb24caa003E9f2f0497Ad287FDF95623   // BAKC
- 0x60E4d786628Fea6478F785A6d7e704777c86a7c6   // MAYC
- 0x22c36BfdCef207F9c0CC941936eff94D4246d14A   // BACC
- 0xb47e3cd837dDF8e4c57F05d70Ab865de6e193BBB   // PUNKS
- 0x7Bd29408f11D2bFC23c34f18275bBf23bB716Bc7   // MEEBITS
- 0x0Cfb5d82BE2b949e8fa73A656dF91821E2aD99FD   // 10KTF
- 0x764AeebcF425d56800eF2c84F2578689415a2DAa   // SEWER
- 0x4b15a9c28034dC83db40CD810001427d3BD7163D   // HV-MTL
- 0x34d85c9CDeB23FA97cb08333b511ac86E1C4E258   // OTHERDEED LAND
- 0x5b1085136a811e55b2Bb2CA1eA456bA82126A376   // OTHERDEED VESSEL
- 0x790B2cF29Ed4F310bf7641f013C65D4560d28371   // OTHERDEED EXPANDED
- 0xE012Baf811CF9c05c408e879C399960D1f305903   // OTHERDEED KODA
- 0x4d224452801ACEd8B2F0aebE155379bb5D594381   // APE token

#### Re: Query ID: 0x486e2149f25d46bb39a27f5e0c81be9b6f193abf46c0d49314b8d1dd104cd53b
##### What's Included:
- Top 50 most valuable collections on NFTGo