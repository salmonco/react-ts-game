import React, { useEffect, useState } from "react";

const BoC = () => {
  const [result, setResult] = useState<number[]>([]);
  const [answer, setAnswer] = useState<number[]>([]);
  const [show, setShow] = useState<[string, number, number, number][]>([]);

  const numArr: number[] = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  const numLen: number = 4;

  useEffect(() => {
    let random: number[] = [];

    while (random.length < numLen) {
      let num = Math.floor(Math.random() * 10);

      if (random.includes(num)) {
        continue;
      }

      random.push(num);
    }

    setResult(random);
  }, []);

  const clickNum = (num: number) => {
    console.log(result);
    if (answer.length >= numLen) {
      alert("숫자 4개를 입력해주세요.");
      return;
    }

    setAnswer((prev) => [...prev, num]);
  };

  const submitNum = () => {
    if (answer.length < numLen) {
      alert("숫자 4개를 입력해주세요.");
      return;
    }

    let sCnt = 0;
    let bCnt = 0;

    for (let i = 0; i < numLen; i++) {
      if (result[i] === answer[i]) {
        sCnt++;
      } else if (result.includes(answer[i])) {
        bCnt++;
      }
    }

    let oCnt = !sCnt && !bCnt ? 1 : 0;

    setShow((prev) => [...prev, [answer.join(","), sCnt, bCnt, oCnt]]);
    setAnswer([]);

    if (sCnt === numLen) {
      alert("Home Run!");
    }
  };

  const deleteNum = () => {
    setAnswer((prev) => prev.slice(0, -1));
  };

  return (
    <>
      {numArr.map((num, i) => (
        <button key={i} onClick={() => clickNum(i)}>
          {num}
        </button>
      ))}
      {answer.map((num, i) => (
        <span key={i}>{num}</span>
      ))}
      <button onClick={submitNum}>제출</button>
      <button onClick={deleteNum}>삭제</button>
      {show.map((item, i) => (
        <p key={i}>
          {i + 1}TH / {item[0]} / {item[1]}S / {item[2]}B / {item[3]}O
        </p>
      ))}
    </>
  );
};

export default BoC;
