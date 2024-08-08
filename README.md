# React-Tyranitar

🎉这是一个简约风格的React音乐播放器组件

## Installation

```sh
$ npm install react-tyranitar
```

## Features

- 播放音乐
- 展示歌词

## Examples

这是Next App的样例，因为种种原因需要禁止SSR

如果是单纯的React App，直接`import { Tyranitar } from 'react-tyranitar';`使用即可

``` tsx
'use client'

import dynamic from 'next/dynamic';
import type { Music } from 'react-tyranitar';

const Tyranitar = dynamic(
  () => import('react-tyranitar').then((mod) => mod.Tyranitar),
  { ssr: false }
);

export default function Page() {
  const music: Music = {
    title: '晴天-周杰伦',               // (可选)title of the music
    cover: '/images/晴天-周杰伦.jpg',   // url of the cover image
    audio: '/audios/晴天-周杰伦.mp3',   // url of the audio file
    lyrics: '/lyrics/晴天-周杰伦.lrc'   // (可选)url of the lyrics file
  };

  return (
    <Tyranitar 
      music={music} size={38}
      style={{position: 'fixed', left: '25px', bottom: '25px'}}
    />
  );
}
```

> lrc文件是歌词文件，`[01:24.91]`代表第1分24.91秒开始后面这段歌词
>
> ```lrc
> [01:24.91]刮风这天我试过握着你手
> [01:30.45]但偏偏雨渐渐大到我看你不见
> [01:38.88]还要多久我才能在你身边
> [01:45.44]等到放晴的那天也许我会比较好一点
> ```
