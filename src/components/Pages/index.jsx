import React from 'react';

import Cover from '../Cover';
import Syntax from '../Syntax';

import P1 from './P1';

const Pages = () => (
  <div className="swiper-wrapper">
    <Cover>React</Cover>
    <P1 />
    <Cover>jsxがきもい</Cover>
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
