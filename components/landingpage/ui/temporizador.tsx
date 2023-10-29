import React, { FC } from 'react'
import { useTimer } from 'react-timer-hook';

type Props = {
    expiryTimestamp: Date;
};
export const Temporizador:FC<Props> = ({expiryTimestamp}) => {

    const {
        totalSeconds,
        seconds,
        minutes,
        hours,
        days,
        isRunning,
        start,
        pause,
        resume,
        restart,
    } = useTimer({ expiryTimestamp, onExpire: () => console.warn('onExpire called') });

  return (
    <div style={{textAlign: 'center'}} className=' mt-20'>
      <h1 className=' text-2xl font-semibold mb-4'>! ESTA ES TU OPORTUNIDAD ! </h1>
      <p className=' text-xl'>DISFRUTA LOS BENEFICIOS DE NUESTRA PROMOCIÓN DE LANZAMIENTO</p>
      <div className=' text-5xl font-bold sm:text-6xl'>
        <span >{days}D</span>:<span>{hours}H</span>:<span>{minutes}M</span> <span>{seconds}S</span>
      </div>
      {/* <p>{isRunning ? 'Running' : 'Not running'}</p> */}
      {/* <button onClick={start}>Start</button>
      <button onClick={pause}>Pause</button>
      <button onClick={resume}>Resume</button>
      <button onClick={() => {
        // Restarts to 5 minutes timer
        const time = new Date();
        time.setSeconds(time.getSeconds() + 300);
        restart(time)
      }}>Restart</button> */}
      <p className=' text-xl'>SI DESEAS MAS INFORMACIÓN PARA ACCEDER A NUESTRA PROMOCIÓN </p>
      <p className=' text-xl'>!TE INVITO A CONTACTARNOS!</p>
    </div>
  )
}
