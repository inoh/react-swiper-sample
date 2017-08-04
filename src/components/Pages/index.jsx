import React from 'react';

import Slide from '../Slide';
import Cover from '../Cover';
import Syntax from '../Syntax';
import List, { Item } from '../List';
import Image from '../Image';
import Hello from './Hello';

import trend from './images/trend.png';

const Pages = () => (
  <div className="swiper-wrapper">
    <Slide>
      <Cover>Reactで簡単<br />コンポーネント思考</Cover>
    </Slide>

    <Slide>
      <List title="ポジティブ">
        <Item>モダンでカッコイイ</Item>
        <Item>早いらしい</Item>
      </List>
      <List title="ネガティブ">
        <Item>jsxがきもい</Item>
        <Item>環境作るのが難しい</Item>
      </List>
    </Slide>

    <Slide>
      <Cover>ネガティブ</Cover>
    </Slide>

    <Slide>
      <Cover>jsxがきもい<br />（理由）</Cover>
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
        <Item>HTMLの要素としてWebの部品として定義する仕様</Item>
        <Item>js, html, css をひとまとまりの部品として管理提供</Item>
        <Item>jsのフレームワークではあたりまえの機能になってきた</Item>
      </List>
    </Slide>

    <Slide>
      <p>いろいろsample</p>
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
    onClick: function () {
      alert('hello');
    }
  },
})`}</Syntax>
    </Slide>

    <Slide>
      <p>Power of `ES6 + React`</p>
      <Syntax>{`const Hello = () => <button onClick={() => alert('hello')}>Hello World!!</button>`}</Syntax>
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
      <List title="Reactだけじゃできないこと">
        <Item>テスト</Item>
        <Item>cssやjavascriptのクロスコンパイル</Item>
        <Item>ajax</Item>
        <Item>routing</Item>
        <Item>etcetc...</Item>
      </List>
    </Slide>

    <Slide>
      <Cover>create-react-app</Cover>
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
      <List title="足りなもの">
        <Item>Fluxライブラリ(Redux)</Item>
        <Item>Ajax通信</Item>
        <Item>Router</Item>
      </List>
    </Slide>

    <Slide>
      <List title="">
      </List>
    </Slide>

    <Slide>
      <Cover>sassを追加する</Cover>
    </Slide>

    <Slide>
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
  </div>
);

export default Pages;
