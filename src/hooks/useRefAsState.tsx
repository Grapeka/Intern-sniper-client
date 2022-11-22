import { useRef } from "react";

function useRefAsState(): [React.MutableRefObject<string>, (input: string) => void] {

  const value = useRef('')

  const setValue = (input: string) => {
    value.current = input
  }

  return [
    value,
    setValue
  ]
}

export default useRefAsState;