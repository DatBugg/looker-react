import { sdk } from "../src/helpers/CorsSession";
import { Query, Visualization } from "@looker/visualizations";
import { DataProvider } from "@looker/components-data";
import { ComponentsProvider } from "@looker/components";


function App() {
  return (
    <>
      <h1>Get started with Looker visualization components</h1>
      <ComponentsProvider>
        <DataProvider sdk={sdk}>
          {/* Change this query slug to match your query slug */}
          <Query query="QID">
            <Visualization />
          </Query>
          <Query query="QID">
            <Visualization />
          </Query>
        </DataProvider>
      </ComponentsProvider>
    </>
  );
}

export default App;
