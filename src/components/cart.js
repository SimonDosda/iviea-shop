import React, { useContext } from "react"

import ShoppingBag from "../assets/icons/basket.svg"
import User from "../assets/icons/user.svg"
import styled from "styled-components"
import SnipcartContext from "../../plugins/gatsby-plugin-snipcart-custom/context"

const Button = styled.button`
  background: none;
  border: none;
  position: relative;
  fill: var(--header);
  color: var(--header);

  &:hover {
    cursor: pointer;
  }

  .icon {
    height: 24px;
    width: 24px;
  }

  .items-count {
    position: absolute;
    top: 14px;
    left: 24px;
    font-size: 12px;
    font-weight: bold;
  }
`

const Cart = () => {
  const { cart } = useContext(SnipcartContext)
  return (
    <div>
      <Button className="snipcart-customer-signin">
        <User className="icon" />
      </Button>
      <Button className="snipcart-checkout">
        <ShoppingBag className="icon" />
        <div className="items-count">{cart?.items?.count}</div>
      </Button>
    </div>
  )
}

export default Cart
