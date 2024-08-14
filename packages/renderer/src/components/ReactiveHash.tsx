import {sha256sum} from '#preload';
import {useEffect, useState} from 'react';

function ReactiveHash() {
  const [rawString, setRawString] = useState<string>('Hello world!');
  const [hexString, setHexString] = useState<string>();

  useEffect(() => {
    const hash = sha256sum(rawString);
    setHexString(hash);
  }, [rawString]);

  return (
    <>
      <h1>Reactive Hash</h1>
      <input
        value={rawString}
        onChange={v => setRawString(v.target.value)}
      />
      <p></p>
      <label>{hexString}</label>
    </>
  );
}

export default ReactiveHash;
