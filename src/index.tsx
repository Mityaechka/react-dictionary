import React, { useContext } from 'react';
import ReactDOM from 'react-dom';
import { FloatButton } from './components/float-button';
import { WordCreate } from './components/word-create';
import { WordPairsList } from './components/word-pairs-list/indes';
import './index.css';
import './normalize.css';
import { rootStoreContext } from './stores/root-store-contex';
export const useStores = () => useContext(rootStoreContext);

ReactDOM.render(
  <React.StrictMode>
    <div className="container">
      <div className="header">
        <p className="logo">LOGO</p>
      </div>
      <div className="menu">
        <a className="menu-item">Ссылка 1</a>
        <a className="menu-item">Ссылка 2</a>
        <a className="menu-item">Ссылка 3</a>
      </div>
      <div className="content">
        {/* <WordPairsList /> */}
        <WordCreate />
      </div>
    </div>

    <FloatButton onClick={() => alert(1)}>
      <p>+</p>
    </FloatButton>
  </React.StrictMode>,
  document.getElementById('root')
);

