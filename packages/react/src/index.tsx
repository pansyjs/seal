import React, { useRef, useEffect, useImperativeHandle } from 'react';
import { Seal as BaseSeal, Options } from '@pansy/seal';

export const Seal =  React.forwardRef<{ toBase64: BaseSeal['toBase64']}, Options>((props, ref) => {
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

  useImperativeHandle(
    ref,
    () => {
      return {
        toBase64: (download: boolean) => {
          return sealRef.current?.toBase64(download);
        }
      }
    },
    [sealRef.current]
  )

  return (
    <div ref={container} />
  )
})

export default Seal;
