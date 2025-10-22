import { useState, useEffect } from 'react';

export const useFloatingLabel = (initialValue: string) => {
  const [isFocused, setIsFocused] = useState(false);
  const [hasValue, setHasValue] = useState(!!initialValue);

  const handleFocus = () => setIsFocused(true);
  const handleBlur = (e: React.FocusEvent<HTMLInputElement | HTMLSelectElement>) => {
    setIsFocused(false);
    setHasValue(!!e.target.value);
  };

  useEffect(() => {
    setHasValue(!!initialValue);
  }, [initialValue]);

  const isFloating = isFocused || hasValue;

  return { isFloating, handleFocus, handleBlur };
};
