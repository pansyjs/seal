import React, { useRef, useEffect } from 'react';
import { Seal } from '@pansy/seal';

export default () => {
  const sealContainer = useRef<HTMLDivElement>(null);

  useEffect(
    () => {
      if (sealContainer.current) {
        const seal = new Seal(sealContainer.current);

      }
    },
    [sealContainer.current]
  );

  return (
    <div>
      <div ref={sealContainer} style={{ width: 500, height: 500 }} />
    </div>
  )
}
