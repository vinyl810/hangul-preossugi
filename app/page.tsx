'use client';

import React from 'react';
import { cmuo, cmuoItalic } from '@/assets/fonts';
import { makeCmuo } from '@/utils/encoder';
import { toPng } from 'html-to-image';
import download from 'downloadjs';
import { BoldIcon, DownloadIcon, EraseIcon, ItalicIcon } from '@/assets/svgs';

const initialText = '겉표지보다 큰 몇 향수류.';

export default function Home() {
  const [text, setText] = React.useState(initialText);
  const [isBold, setIsBold] = React.useState(true);
  const [isItalic, setIsItalic] = React.useState(false);
  const [isDownloading, setIsDownloading] = React.useState(false);
  const textAreaRef = React.useRef<HTMLTextAreaElement>(null);
  const pngRef = React.useRef<HTMLDivElement>(null);
  const handleOnChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setText(event.target.value);
  };

  const handleErase = () => {
    setText('');
    if (textAreaRef.current) textAreaRef.current.value = '';
  };

  const downloadPng = async () => {
    if(!pngRef.current) return;
    setIsDownloading(true);
    const dataUrl = await toPng(pngRef.current);
    download(dataUrl, 'hangulPreossugi.png');
    setIsDownloading(false);
  };

  return (
    <main className={'flex min-h-screen flex-col items-center pt-6'}>
      <h1 className={'text-lg'}>{'한글 풀어쓰기 변환기'}</h1>
      <br />
      <div className={'w-full px-4 md:w-[42rem] md:px-1'}>
        <div className={'relative w-full'}>
          <textarea
            ref={textAreaRef}
            onChange={handleOnChange}
            value={text}
            className={'scroll h-24 w-full resize-none border border-zinc-200 p-1 text-[14px] focus:outline-1 focus:outline-zinc-300 md:text-[16px]'}
            autoCorrect={'off'}
            spellCheck={'false'}
          />
          <button
            onClick={handleErase}
            className={'absolute bottom-3 right-1 flex size-6 items-center justify-center rounded-full bg-zinc-400 opacity-75'}
            title={'지우기'}
          >
            <EraseIcon className={'size-4 fill-zinc-100'} />
          </button>
        </div>
        <div className={'my-3 flex w-full justify-between'}>
          <div className={'flex'}>
            <button
              onClick={() => {setIsBold((ib) => !ib);}}
              className={'mr-1 flex size-6 items-center justify-center rounded-sm border-2 border-zinc-200' + (isBold ? ' bg-zinc-500' : '')}
              title={'볼드체'}
            >
              <BoldIcon className={'size-4' + (isBold ? ' fill-zinc-200' : ' fill-zinc-400')} />
            </button>
            <button
              onClick={() => {setIsItalic((ii) => !ii);}}
              className={'mr-1 flex size-6 items-center justify-center rounded-sm border-2 border-zinc-200' + (isItalic ? ' bg-zinc-500' : '')}
              title={'이탤릭체'}
            >
              <ItalicIcon className={'size-4' + (isItalic ? ' fill-zinc-200' : ' fill-zinc-400')} />
            </button>
          </div>
          <button
            onClick={() => {downloadPng();}}
            className={'mr-1 flex size-6 items-center justify-center rounded-sm border-2 border-zinc-200 disabled:border-zinc-100' + (isDownloading ? ' animate-pulse bg-blue-300 border-zinc-400' : '')}
            disabled={text.length <= 0 || isDownloading}
            title={'다운로드'}
          >
            <DownloadIcon className={'size-4' + (text.length <= 0 || isDownloading ? ' fill-zinc-200' : ' fill-zinc-400')} />
          </button>
        </div>
        <div className={'my-1 h-px w-full bg-zinc-200'} />
        <div className={'scroll h-[calc(100vh_-16rem)] w-full overflow-auto'}>
          <div ref={pngRef} className={`${ (isItalic ? cmuoItalic : cmuo).className } ${ isBold ? 'font-[700]' : 'font-[500]' } text-[20px] md:text-[24px]`}>
            {makeCmuo(text).split('\n').map((h, index) => {
              return (
                <div className={'min-h-4'} key={index}>{h}</div>
              );
            })}
          </div>
        </div>
      </div>
      <div className={'absolute bottom-0 flex w-screen flex-wrap items-center justify-center bg-zinc-400 px-2 text-[12px] text-zinc-100'}>
        {'글꼴 출처'} &nbsp; <a href={'https://github.com/Tzetachi/Computer-Modern-Unicode-Oesol'}>{'https://github.com/Tzetachi/Computer-Modern-Unicode-Oesol'}</a>
      </div>
    </main>
  );
}
