import Fetch from 'isomorphic-unfetch';
import Layout from '../components/Layout';

import Prices from '../components/Prices';

//The payload(pbi) from the asynchronous call to the child (<Prices />) is generated through the parent(<Index />) as props
const Index = (props) => (
  <Layout>
    <div>
      <h1>Welcome to BlitzPrice</h1>
      <p>Check current Bitcoin rate</p>
      <Prices bpi={props.bpi}/>
    </div>
  </Layout>
);

// The only life cycle state needed to trigger an asynchronous call with NextJS
Index.getInitialProps = async function() {
  const res = await fetch('https://api.coindesk.com/v1/bpi/currentprice.json');
  const data = await res.json();

  return {
    bpi: data.bpi
  };
}

export default Index;
