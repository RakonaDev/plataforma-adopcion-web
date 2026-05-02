import { useEffect, useState } from "react";

export const useDevice = () => {
  const [device, setDevice] = useState<DeviceType>('desktop');
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const onResize = () => {
      setWidth(window.innerWidth);
      if (window.innerWidth < 768) {
        setDevice('mobile');
      } else if (window.innerWidth < 1024) {
        setDevice('tablet');
      } else {
        setDevice('desktop');
      }
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  return {
    device,
    width
  }
}

export type DeviceType = 'desktop' | 'tablet' | 'mobile';