import * as React from 'react';
import { useState, useEffect } from 'react';
import NumBar from './NumBar';

export default function BubbleSort() {
  const [nums, setNums] = useState([]);
  const [curr, setCurr] = useState(0);
  const [arrayList, setArrayList] = useState([[...nums]]);
  const [inter, setInter] = useState(null);
  const [playing, setPlaying] = useState(false);

  useEffect(() => {
    if (curr < arrayList.length - 1 && playing) {
      if (inter) {
        clearInterval(inter);
      }

      let interval = setInterval(() => {
        setCurr(curr + 1);
      }, 500);

      setInter(interval);
    } else {
      setPlaying(false);
    }
  }, [playing, curr]);

  useEffect(() => {
    setNums(arrayList[curr]);
  }, [curr, arrayList]);

  const handleNumsChange = (event) => {
    let inputNums = event.target.value
      ?.trim()
      ?.split(',')
      .filter((element) => element);
    setNums(inputNums);
  };

  const sortNums = () => {
    let tempNums = [[...nums]];

    for (let i = 0; i < nums.length; i++) {
      for (let j = 0; j < nums.length - i - 1; j++) {
        if (nums[j] > nums[j + 1]) {
          const temp = nums[j];
          nums[j] = nums[j + 1];
          nums[j + 1] = temp;
          tempNums.push([...nums]);
        }
      }
    }

    setArrayList(tempNums);
    setPlaying(true);
  };

  return (
    <div className="container">
      <div>
        <input type="text" onChange={handleNumsChange} />
        <button onClick={sortNums}>Sort </button>
      </div>
      <div className="bars">
        {nums.length === 0
          ? ''
          : nums.map((num, index) => (
              <div key={index} className="bar">
                <NumBar val={num} />
              </div>
            ))}
      </div>
    </div>
  );
}
