import { renderHook, act } from '@testing-library/react';
import useCounter from '../hooks/features/homepage/useCounter';

describe('useCounter', () => {
  it('should initialize with count 0 and val 1', () => {
    const { result } = renderHook(() => useCounter());

    expect(result.current.count).toBe(0);
    expect(result.current.val).toBe(1);
  });

  it('should increment count by val when increment is called.', () => {
    const { result } = renderHook(() => useCounter());

    act(() => {
      result.current.increment();
    });

    expect(result.current.count).toBe(1);
  });

  it('should increment count by custom val when setVal is used', () => {
    const { result } = renderHook(() => useCounter());

    act(() => {
      result.current.setVal(5);
    });

    expect(result.current.val).toBe(5);

    act(() => {
      result.current.increment();
    });

    expect(result.current.count).toBe(5);
  });

  it('should increment multiple times correctly', () => {
    const { result } = renderHook(() => useCounter());

    act(() => {
      result.current.setVal(3);
    });

    act(() => {
      result.current.increment();
      result.current.increment();
    });

    expect(result.current.count).toBe(6);
  });

  it('should handle negative values', () => {
    const { result } = renderHook(() => useCounter());

    act(() => {
      result.current.setVal(-2);
    });

    act(() => {
      result.current.increment();
    });

    expect(result.current.count).toBe(-2);
  });

  it('should handle zero increment value', () => {
    const { result } = renderHook(() => useCounter());

    act(() => {
      result.current.setVal(0);
    });

    act(() => {
      result.current.increment();
    });

    expect(result.current.count).toBe(0);
  });
});