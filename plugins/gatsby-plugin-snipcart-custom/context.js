import React, { useEffect, useState } from "react"

// Create a order context
const SnipcartContext = React.createContext()

export function SnipcartProvider({ children }) {
  // We need to stick state in here
  const [state, setState] = useState({})
  useEffect(() => {
    const { Snipcart } = window
    const unsubscribe = Snipcart.store.subscribe(() => {
      setState(Snipcart.store.getState())
      return () => unsubscribe()
    })
  })
  return (
    <SnipcartContext.Provider value={state}>
      {children}
    </SnipcartContext.Provider>
  )
}

export default SnipcartContext
