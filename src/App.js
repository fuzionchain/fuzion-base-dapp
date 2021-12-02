import './App.css';

import { Helmet } from 'react-helmet'

function App() {
  return (
    <div className="App">
      <Helmet>
        <meta charSet="UTF-8"/>
        <meta property="og:site_name" content="Fuzion Base Dapp" />
        <meta property="og:title" content="Fuzion Chain" />
        <meta
          property="og:description"
          content="Fuzion Chain - Here to revolutionize the industry."
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:image"
          content="https://www.fuzion.team/assets/img/fuzion-txt-logo.svg"
        />
        <meta property="og:url" content="https://fuzion.team" />
      </Helmet>
    Hello world
    </div>
  )
}

export default App;
