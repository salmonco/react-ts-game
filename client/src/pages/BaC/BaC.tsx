import React, { useEffect, useState } from "react";
import BaCStyle from "./BaC.style";

const BoC = () => {
  const [result, setResult] = useState<number[]>([]);
  const [answer, setAnswer] = useState<number[]>([]);
  const [show, setShow] = useState<[string, number, number, number][]>([]);

  const numArr: number[] = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  const numLen: number = 3;

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
      alert(`숫자 ${numLen}개를 입력해주세요.`);
      return;
    }

    setAnswer((prev) => [...prev, num]);
  };

  const submitNum = () => {
    if (answer.length < numLen) {
      alert(`숫자 ${numLen}개를 입력해주세요.`);
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
      <BaCStyle.Container>
        <BaCStyle.Flex>
          <BaCStyle.Answer>
            {answer.map((num, i) => (
              <span key={i}>{num}</span>
            ))}
          </BaCStyle.Answer>
          <BaCStyle.Number>
            {numArr.map((num, i) => (
              <button key={i} onClick={() => clickNum(i)}>
                {num}
              </button>
            ))}
            <button onClick={submitNum}>제출</button>
            <button onClick={deleteNum}>삭제</button>
          </BaCStyle.Number>
          <BaCStyle.Table>
            <thead>
              <tr>
                <th>TH</th>
                <th>Number</th>
                <th>S</th>
                <th>B</th>
                <th>O</th>
              </tr>
            </thead>
            <tbody>
              {show.map((item, i) => (
                <tr key={i}>
                  <td>{i + 1}</td>
                  <td>{item[0]}</td>
                  <td>{item[1]}</td>
                  <td>{item[2]}</td>
                  <td>{item[3]}</td>
                </tr>
              ))}
            </tbody>
          </BaCStyle.Table>
        </BaCStyle.Flex>
      </BaCStyle.Container>
    </>
  );
};

export default BoC;
