import React, { useRef, useEffect } from 'react';
import { Seal as BaseSeal, Options } from '@pansy/seal';

export const Seal: React.FC<Options> = (props) => {
  const container = useRef<HTMLDivElement>(null);
  const sealRef = useRef<BaseSeal>();

  useEffect(() => {
    if (container.current) {
      if (!sealRef.current) {
        sealRef.current = new BaseSeal(container.current, props);
      }

      sealRef.current.update(props);
    }

    return () => {
      sealRef.current?.destroy();
    }
  }, [container, props]);

  return (
    <div ref={container} />
  )
}

export default Seal;
