import { Box, Button } from "@mpv-easy/ui"
import React from "react"
import { Provider } from "react-redux"

import { useDispatch, useSelector } from "react-redux"

import { createStore } from "redux"

const White = "FFFFFF"
const Gray = "cccccc"
const Black = "000000"
const Yellow = "00FFFF"

const boxSize = 200
const padding = 10

// Actions
const INCREMENT = "INCREMENT"
const DECREMENT = "DECREMENT"

interface IncrementAction {
  type: typeof INCREMENT
}

interface DecrementAction {
  type: typeof DECREMENT
}

type CounterActionTypes = IncrementAction | DecrementAction

type State = {
  count: number
}

const counterReducer = (
  state: State = { count: 0 },
  action: CounterActionTypes,
): State => {
  switch (action.type) {
    case INCREMENT:
      return { count: state.count + 1 }
    case DECREMENT:
      return { count: state.count - 1 }
    default:
      return state
  }
}
const store = createStore(counterReducer)

function Counter() {
  const count = useSelector((state: State) => state.count)
  const dispatch = useDispatch()
  console.log("============count: ", count)
  return (
    <Box
      id="counter-main"
      font="FiraCode Nerd Font Mono Reg"
      fontSize={boxSize / 4}
      display="flex"
      flexDirection="column"
      justifyContent="start"
      alignItems="start"
    >
      <Button
        id="counter-minus"
        text={"-"}
        onMouseDown={() => {
          console.log("minus: ", count)
          dispatch({ type: DECREMENT })
        }}
        height={boxSize}
        width={boxSize}
        backgroundColor={Gray}
        backgroundColorHover={White}
        color={Black}
        colorHover={Yellow}
        display="flex"
        justifyContent="center"
        alignItems="center"
      />
      <Box
        id="counter-text"
        text={count.toString()}
        backgroundColor={Gray}
        color={Black}
        height={boxSize}
        width={boxSize}
        display="flex"
        justifyContent="center"
        alignItems="center"
      />
      <Button
        id="counter-plus"
        backgroundColor={Gray}
        backgroundColorHover={White}
        color={Black}
        colorHover={Yellow}
        onMouseDown={() => {
          console.log("plus: ", count)
          dispatch({ type: INCREMENT })
        }}
        text={"+"}
        height={boxSize}
        width={boxSize}
        display="flex"
        justifyContent="center"
        alignItems="center"
      />
    </Box>
  )
}
export default function () {
  return (
    <Provider store={store}>
      <Counter />
    </Provider>
  )
}
