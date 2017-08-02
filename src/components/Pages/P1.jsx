import React from 'react';

import Slide from '../Slide';
import { H2 } from '../Caption';

const P1 = () => (
  <Slide>
    <div>
      <H2>ポジティブ</H2>
      <ul>
        <li>モダンでカッコイイ</li>
        <li>早いらしい</li>
      </ul>
    </div>

    <div>
      <H2>ネガティブ</H2>
      <ul>
        <li>jsxがきもい</li>
        <li>環境作るのが難しい</li>
      </ul>
    </div>
  </Slide>
);

export default P1;
