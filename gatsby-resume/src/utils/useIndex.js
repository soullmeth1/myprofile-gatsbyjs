import { useState } from 'react';

function useIndex(data, trans) {
  const [index, setIndex] = useState(0);

  function next() {
    if (index >= data.length - 1) {
      setIndex(() => {
        translate(0);
        return 0;
      });
    } else {
      setIndex((i) => {
        i++;
        translate(i);
        // console.log(i);
        return i;
      });
    }
  }

  function prev() {
    if (index <= 0) {
      setIndex(() => {
        translate(data.length - 1);
        return data.length - 1;
      });
    } else {
      setIndex((i) => {
        i--;
        // console.log(i);
        translate(i);
        return i;
      });
    }
  }

  const translate = (i) => {
    trans.current.style.transform = `translateX(-${i * 100}%)`;
  };

  return {
    index,
    prev,
    next,
    translate,
  };
}

export default useIndex;
