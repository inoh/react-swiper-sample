import React from 'react';

import Slide from '../Slide';
import Cover from '../Cover';
import Syntax from '../Syntax';
import List, { Item } from '../List';
import Image from '../Image';
import { H1, H2 } from '../Caption';

import Hello from './Hello';

import trend from './images/trend.png';
import helloWorld from './images/hello-world.png';

const Pages = () => (
  <div className="swiper-wrapper">
    <Slide>
      <Cover>Reactで簡単<br />コンポーネント思考</Cover>
    </Slide>

    <Slide>
      <H2>Reactのイメージ</H2>
      <p>少しググってみた...</p>
      <List title="ポジティブ">
        <Item>モダンでカッコイイ</Item>
        <Item>早いらしい</Item>
      </List>
      <List title="ネガティブ">
        <Item>jsxが気持ち悪い</Item>
        <Item>環境作るのが難しい</Item>
      </List>
    </Slide>

    <Slide>
      <Cover>ネガティブ</Cover>
    </Slide>

    <Slide>
      <Cover>jsxが気持ち悪い<br />（理由）</Cover>
    </Slide>

    <Slide>
      <p>React</p>
      <Syntax>{`class Hello extends Component {
      onClick = () => {
          alert('hello');
      }

      render() {
           return <button onClick={this.onClick}>Hello World!!</button>
      }
  }`}</Syntax>
      <p>javascript with html</p>
    </Slide>

    <Slide>
      <List title="Web Components">
        <Item>Webの部品として要素を定義する共通仕様</Item>
        <Item>js, html, css をひとまとまりの部品として管理提供</Item>
        <Item>jsのフレームワークではあたりまえの機能になってきた</Item>
      </List>
    </Slide>

    <Slide>
      <p>いろんな hello world!</p>
      <p>公式サイトから部分的に拝借</p>
      <Hello />
    </Slide>

    <Slide>
      <p>Riot.js</p>
      <Syntax lang="html">{`<hello>
  <button onClick={ onClick }>Hello World!!</button>

  <script>
    onClick() { alert('hello'); }
  </script>
</hello>`}</Syntax>
    </Slide>

    <Slide>
      <p>Vue.js</p>
      <Syntax lang="html">{`Vue.component('hello', {
  template: '<button @click="onClick">Hello World!!</button>',
  methods: {
    onClick: function () { alert('hello'); }
  },
})`}</Syntax>
    </Slide>

    <Slide>
      <p>Vue.js(Vueify)</p>
      <Syntax>{`<template>
  <button @click="onClick">Hello World!!</button>
</template>

<script>
export default {
  methods: {
    onClick() { alert('hello'); },
  },
}
</script>`}</Syntax>
    </Slide>

    <Slide>
      <p>Power of `ES6 + React`</p>
      <Syntax>{`const Hello = () => (
  <button onClick={() => alert('hello')}>Hello World!!</button>
);`}</Syntax>
    </Slide>

    <Slide>
      <Cover>みんな同じ<br />js + html</Cover>
    </Slide>

    <Slide>
      <Image src={trend}></Image>
    </Slide>

    <Slide>
      <Cover>環境作るのが難しい<br />（理由）</Cover>
    </Slide>

    <Slide>
      <Cover>
        <span style={{ textDecorationLine: 'line-through' }}>環境作るのが難しい</span>
        <br />お友達が難しい
      </Cover>
    </Slide>

    <Slide>
      <List title="Reactができること">
        <Item>ViewをRenderする</Item>
        <Item>コンポーネントを管理（制御）する</Item>
      </List>
      <List title="Reactだけじゃできないこと">
        <Item>cssやjavascriptのクロスコンパイル</Item>
        <Item>テスト</Item>
        <Item>ajax</Item>
        <Item>routing</Item>
        <Item>etcetc...</Item>
      </List>
    </Slide>

    <Slide>
      <Cover>create-react-app</Cover>
    </Slide>

    <Slide>
      <H2>create-react-app</H2>
      <div>
        設定なしで最新のビルドセットアップを提供。<br />
        単一ページのReactアプリケーションを作成するために公式にサポートされている。
      </div>
      <p>※公式サイトの文言を直訳</p>
    </Slide>

    <Slide>
      <List title="create-react-app">
        <Item>webpack with webpack-dev-server, html-webpack-plugin and style-loader</Item>
        <Item>Babel with ES6 and extensions used by Facebook (JSX, object spread, class properties)</Item>
        <Item>Autoprefixer</Item>
        <Item>ESLint</Item>
        <Item>Jest</Item>
        <Item>and others.</Item>
      </List>
    </Slide>

    <Slide>
      <H2>ここからは動かしながら確認</H2>
      <p>動かす内容はスライドを確認</p>
      <p>http://ino-h.com/react-swiper-sample/</p>
    </Slide>

    <Slide>
      <H2>インストール</H2>
      <Syntax>{`npm install -g create-react-app # gem install rails

create-react-app my-app # rails new my-app
cd my-app/
npm start # rails s`}</Syntax>
    </Slide>

    <Slide>
      <Image src={helloWorld}></Image>
    </Slide>

    <Slide>
      <H2>`src/App.jsx` を修正する</H2>
      <Syntax>{`import React, { Component } from 'react';

class App extends Component {
  render() {
    return <button onClick={() => alert('hello')}>Hello World!!</button>
  }
}

export default App;
`}</Syntax>
    </Slide>

    <Slide>
      <H2>Componentを作る</H2>
      <Syntax>{`import React from 'react';

const Hello = () => (
  <button onClick={() => alert('hello')}>Hello World!!</button>
);

export default Hello;
`}</Syntax>
    </Slide>

    <Slide>
      <H2>Componentを組み込む</H2>
      <Syntax>{`import React, { Component } from 'react';
import Hello from './Hello';

class App extends Component {
  render() {
    ~~return <button onClick={() => alert('hello')}>Hello World!!</button>~~
    return <Hello />
  }
}

export default App;`}</Syntax>
    </Slide>


    <Slide>
      <H2>Componentにプロパティを追加する</H2>
      <Syntax>{`import React, { PropTypes } from 'react';

const Hello = ({ value, children }) => (
  <button onClick={() => alert(value)}>{children}</button>
);

Hello.propTypes = {
  value: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default Hello;
`}</Syntax>
    </Slide>

    <Slide>
      <H2>Componentのプロパティを適用する</H2>
      <Syntax>{`import React, { Component } from 'react';
import Hello from './Hello';

class App extends Component {
  render() {
    ~~return <Hello />~~
    return <Hello value="hello">Hello world!!!</Hello>
  }
}

export default App;`}</Syntax>
    </Slide>

    <Slide>
      <List title="create-react-appに足りなもの">
        <Item>Ajax通信 # => FetchAPI, axios, superagent, jQuery ...</Item>
        <Item>Router # => react-router</Item>
        <Item>Fluxライブラリ(Redux) # => Redux, Flux</Item>
        <Item>CSS周り # => CSSModules, sass, stylus</Item>
      </List>
    </Slide>

    <Slide>
      <Cover>CSS周り</Cover>
    </Slide>

    <Slide>
      <List title="sassを追加する">
        <Item>create-react-appの公式サイトを見るとsassの追加の仕方が書いてある</Item>
        <Item>CSSModulesは未対応らしい（現状ejectが必要？）</Item>
      </List>
    </Slide>

    <Slide>
      <H2>必要なパッケージを追加する</H2>
      <Syntax>{`# ファイルを監視してsassをコンパイル
npm install --save node-sass-chokidar
# npmのコマンドでsassのコンパイルを追加するために必要
npm install --save npm-run-all`}</Syntax>
    </Slide>

    <Slide>
      <H2>sassファイルを追加する</H2>
      <Syntax>{`.hello {
  &__button {
    background-color: red;
  }
}`}</Syntax>
    </Slide>

    <Slide>
      <H2>sassをコンパイルするスクリプトを追加する</H2>
      <Syntax>{`  "scripts": {
  +    "build-css": "node-sass-chokidar src/ -o src/",
  +    "watch-css": "npm run build-css && node-sass-chokidar src/ -o src/ --watch --recursive",
  -    "start": "react-scripts start",
  -    "build": "react-scripts build",
  +    "start-js": "react-scripts start",
  +    "start": "npm-run-all -p watch-css start-js",
  +    "build": "npm run build-css && react-scripts build",
      "test": "react-scripts test --env=jsdom",
      "eject": "react-scripts eject"
    }`}</Syntax>
    </Slide>

    <Slide>
      <H2>定義したcssをhtmlに追加する</H2>
      <Syntax>{` ~~ 略 ~~
import './index.css';

const Hello = ({ value, children }) => (
  <button
    className="hello__button"
    onClick={() => alert(value)}
  >
    {children}
  </button>
);
 ~~ 略 ~~`}</Syntax>
    </Slide>
  </div>
);

export default Pages;
