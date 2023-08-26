import { useCallback, useEffect, useRef } from "react"

export default function useDebounce(callback, delay, dependencies) {
  const callbackRef = useRef(callback)
  const timeoutRef = useRef()

  useEffect(() => {
    callbackRef.current = callback
  }, [callback])

  const set = useCallback(() => {
    timeoutRef.current = setTimeout(() => callbackRef.current(), delay)
  }, [delay])

  const clear = useCallback(() => {
    timeoutRef.current && clearTimeout(timeoutRef.current)
  }, [])

  const reset = useCallback(() => {
    clear()
    set()
  }, [clear, set])

  useEffect(() => {
    set()
    return clear
  }, [delay, set, clear])

  useEffect(reset, [...dependencies, reset])
  useEffect(clear, [clear])

  return { reset, clear }
}
