import React from 'react';

import Slide from '../Slide';
import Cover from '../Cover';
import Syntax from '../Syntax';
import List, { Item } from '../List';

const Pages = () => (
  <div className="swiper-wrapper">
    <Cover>React</Cover>
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
    <Cover>jsxがきもい</Cover>
    <Cover>Web Components</Cover>
    <Cover>環境作るのが難しい</Cover>
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
  </div>
);

export default Pages;
