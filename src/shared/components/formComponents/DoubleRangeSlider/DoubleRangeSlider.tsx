'use client';

import React, { useRef, useState, useEffect, useCallback } from 'react';
import { useTranslations } from 'next-intl';

type DragTarget = 'min' | 'max' | null;

interface CustomDoubleSliderProps {
  min?: number;
  max?: number;
  maxSuffix?: string;
  from?: number;
  to?: number;
  onChange?: (from: number, to: number) => void;
}

const CustomDoubleSlider: React.FC<CustomDoubleSliderProps> = ({
  min = 0,
  max = 100,
  maxSuffix = '',
  from = min,
  to = max,
  onChange,
}) => {
  const t = useTranslations('catalogPage.filter');

  const trackRef = useRef<HTMLDivElement | null>(null);
  const minThumbRef = useRef<HTMLDivElement | null>(null);
  const maxThumbRef = useRef<HTMLDivElement | null>(null);

  const [minVal, setMinVal] = useState<number>(from);
  const [maxVal, setMaxVal] = useState<number>(to);
  const [dragging, setDragging] = useState<DragTarget>(null);
  const [minThumbWidth, setMinThumbWidth] = useState(0);
  const [maxThumbWidth, setmMaxThumbWidth] = useState(0);

  useEffect(() => {
    if (maxVal === max && maxThumbRef.current) {
      const width = maxThumbRef.current.offsetWidth;
      setmMaxThumbWidth(width);
    }

    if (minVal === min && minThumbRef.current) {
      const width = minThumbRef.current.offsetWidth;
      setMinThumbWidth(width);
    }
  }, [maxVal, max, minVal, min]);

  // Синхронізація локального стану з пропсами from/to
  useEffect(() => {
    setMinVal(from);
  }, [from]);

  useEffect(() => {
    setMaxVal(to);
  }, [to]);

  const getPercent = useCallback(
    (val: number): number => ((val - min) / (max - min)) * 100,
    [min, max]
  );

  const getValueFromPercent = useCallback(
    (percent: number): number => Math.round(min + percent * (max - min)),
    [min, max]
  );

  const handleMouseDown = (target: DragTarget) => () => setDragging(target);

  const handleMouseUp = useCallback(() => {
    setDragging(null);
  }, []);

  const handleMouseMove = useCallback(
    (e: MouseEvent): void => {
      if (!dragging || !trackRef.current) return;

      const trackRect = trackRef.current.getBoundingClientRect();
      let relativeX = e.clientX - trackRect.left;
      relativeX = Math.max(0, Math.min(relativeX, trackRect.width));

      const percent = relativeX / trackRect.width;
      let value = getValueFromPercent(percent);

      if (dragging === 'min') {
        value = Math.min(value, maxVal);
        value = Math.max(value, min);
        setMinVal(value);
        onChange?.(value, maxVal);
      } else if (dragging === 'max') {
        value = Math.max(value, minVal);
        value = Math.min(value, max);
        setMaxVal(value);
        onChange?.(minVal, value);
      }
    },
    [dragging, min, max, minVal, maxVal, getValueFromPercent, onChange]
  );

  useEffect(() => {
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseup', handleMouseUp);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
    };
  }, [handleMouseMove, handleMouseUp]);

  return (
    <div className="w-full relative select-none">
      {/* Метки */}
      <div className="w-full mb-8 flex justify-between text-[14px] font-semibold text-dark px-1">
        <div>{t('from')}</div>
        <div>{t('to')}</div>
      </div>

      {/* Трек */}
      <div
        ref={trackRef}
        style={{
          marginLeft: minThumbWidth / 2,
          marginRight: maxThumbWidth / 2,
        }}
        className="relative h-[2px] bg-dark rounded mt-[5px]"
      >
        {/* Активний діапазон */}
        <div
          className="absolute h-[2px] bg-dark rounded"
          style={{
            left: `${getPercent(minVal)}%`,
            width: `${getPercent(maxVal) - getPercent(minVal)}%`,
          }}
        ></div>

        {/* Мінімальний повзунок + цифра */}
        <div
          ref={minThumbRef}
          className="absolute top-1/2 -translate-y-1/2"
          style={{
            left: `${getPercent(minVal)}%`,
            transform: 'translateX(-50%)',
          }}
          onMouseDown={handleMouseDown('min')}
        >
          <div className="px-2 py-1 text-[12px] text-white flex items-center justify-center bg-orange rounded-[4px] shadow cursor-pointer select-none">
            {minVal}
          </div>
        </div>

        {/* Максимальний повзунок + цифра */}
        <div
          ref={maxThumbRef}
          className="absolute top-1/2 -translate-y-1/2"
          style={{
            left: `${getPercent(maxVal)}%`,
            transform: 'translateX(-50%)',
          }}
          onMouseDown={handleMouseDown('max')}
        >
          <div className="text-[12px] px-2 py-1 text-white flex items-center justify-center bg-orange rounded-[4px] shadow cursor-pointer select-none">
            {maxVal}
          </div>
        </div>
      </div>

      {/* Мінімальне та максимальне значення під треком з суфіксом для max */}
      <div className="w-full mt-6 flex justify-between text-[14px] font-semibold text-black px-1">
        <p className="text-[16px] font-normal">{min}</p>
        <p className="text-[16px] font-normal">
          {max}
          {maxSuffix}
        </p>
      </div>
    </div>
  );
};

export default CustomDoubleSlider;
