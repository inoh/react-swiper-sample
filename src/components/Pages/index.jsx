import React from 'react';

import Slide from '../Slide';
import Cover from '../Cover';
import Syntax from '../Syntax';
import List, { Item } from '../List';

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
      <Cover>jsxがきもい</Cover>
    </Slide>

    <Slide>
      <p>javascript with html</p>
      <Syntax>{`class Hello extends Component {
      onClick = () => {
          alert('hello');
      }

      render() {
           return <div onClick={this.onClick}>Hello World!!</div>
      }
  }`}</Syntax>
    </Slide>

    <Slide>
      <Cover>Web Components</Cover>
    </Slide>

    <Slide>
      <Cover>環境作るのが難しい</Cover>
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
