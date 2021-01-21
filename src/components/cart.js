import React, { useContext } from "react"
import { SnipcartContext } from "gatsby-plugin-snipcart-advanced/context"

const Cart = () => {
  const { state } = useContext(SnipcartContext)
  const { userStatus, cartQuantity, cartTotal } = state
  return (
    <div>
      {userStatus === "SignedOut" ? (
        <button className="snipcart-customer-signin">
          <span>Se connecter</span>
        </button>
      ) : (
        <button className="snipcart-customer-signin">
          <span>Mon compte</span>
        </button>
      )}
      <button className="snipcart-checkout">
        <span>{cartTotal}$</span> (<span>{cartQuantity}</span>)
      </button>
    </div>
  )
}

export default Cart
