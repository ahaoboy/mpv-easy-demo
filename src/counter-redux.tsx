import { PropertyBool, command, observeProperty } from "@mpv-easy/tool"
import { Box, Button, render } from "@mpv-easy/ui"
import React, { useEffect } from "react"
import { Provider } from "react-redux"

import { useDispatch, useSelector } from "react-redux"

import { createStore } from "redux"

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
  useEffect(() => {
    setInterval(() => {
      dispatch({ type: "INCREMENT" })
    }, 1000)
  }, [])

  return (
    <Box font="FiraCode Nerd Font Reg" fontSize={128} id="box_0">
      <Box
        id="box_1"
        text={"-"}
        onMouseDown={() => {
          console.log("minus: ", count)
          dispatch({ type: "DECREMENT" })
        }}
      />
      <Box id="box_2" text={count.toString()} backgroundColor={"FF00FF"} />
      <Box
        id="box_3"
        onMouseDown={() => {
          console.log("plus: ", count)
          dispatch({ type: "INCREMENT" })
        }}
        text={"+"}
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
