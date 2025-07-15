import React, { useState, useEffect } from 'react';
// useEffect는 컴포넌트가 렌더링되거나, 상태가 변할 때 어떤 동작으로 하게 해주는 Hook! 따라서 타이머 만들 때 필요

function Timer() {
  const [seconds, setSeconds] = useState(0);
  const [isRunning, setIsRunning] = useState(false); // 타이머 작동 여부) 초기에는 false로 설정

  useEffect(() => { 
    // 이 코드는 컴포넌트가 렌더링 되거나, [isRenning, seconds] 값이 변할 때 실행된다. 타이머 로직은 이 안에 작성됨!
    
    let interval = null; // 반복 타이머를 만들기 위한 변수 선언. 아래에서 clearInterval()로 꺼주게 됨.

    if (isRunning && seconds < 10) { // 타이머가 실행중이고 아직 10초가 안지났으면
      interval = setInterval(() => {
        setSeconds(prev => prev + 1); // 1초마다 setSeconds()로 1씩 증가시킴
      }, 1000);
    } else if (seconds >= 10) { //10초 지났으면
      clearInterval(interval); // 더 이상 시간이 증가하지 않도록 interval 제거.
      setIsRunning(false); // 타이머 멈춤
    }

    return () => clearInterval(interval); // 타이머 새로 켜기 전, 기존 타이머는 꺼주기. 이게 없으면 중복 타이머가 생기는 문제 발생,, (메모리 누수)
  }, [isRunning, seconds]);

  const handleStart = () => {
    if (!isRunning) {
      setSeconds(0);
      setIsRunning(true);
    }
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h2>과제1. 타이머 만들기</h2>
      <button onClick={handleStart} disabled={isRunning}>
        타이머 시작
      </button>

      <hr style={{ margin: '30px 0' }} />

      <h1>Time: {seconds} seconds</h1>
      <h2>남은 시간 : {10 - seconds}</h2>

      <p>
        타이머 시작 버튼을 누르면 10초 타이머가 작동합니다<br />
      </p>
    </div>
  );
}

export default Timer;
