// AnimatedNumber.js
import React from 'react';
import { useSpring, animated } from '@react-spring/web';

const AnimatedNumber = ({ value }) => {
  const { number } = useSpring({
    from: { number: 0 },
    number: value,
    config: { tension: 17, friction: 6 },
  });

  return (
    <animated.span>
      {number.to((n) => n.toFixed(0))}
    </animated.span>
  );
};

export default AnimatedNumber;
