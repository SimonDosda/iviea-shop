import { createGlobalStyle } from "styled-components"

export const SnipcartStyles = createGlobalStyle`
.snipcart-modal {
  background-color: white;
}

.snipcart-cart__content {
  padding-top: 16px;
  background-color: var(--background);
}
.snipcart-cart-summary--edit.snipcart-modal__container {
  min-width: 350px;
}
// header
.snipcart-cart-header, .snipcart-cart__secondary-header {
  background-color: var(--dark-background);
  min-height: 68px;
  margin-bottom: 0;
}
.snipcart-modal__close {
  color: var(--header);
}
.snipcart-cart-header__option {
  color: var(--header);
}
.snipcart-cart-header__title, .snipcart-cart__secondary-header-title {
  color: var(--header);
}
.snipcart__icon--blue-light path {
    fill: var(--header);
    stroke: var(--header);
}
.snipcart__icon--blue-dark path {
    fill: var(--header);
    stroke: var(--header);
}
.snipcart__box--badge-highlight {
    background: var(--primary);
}
.snipcart-cart-button--highlight {
    background: var(--accent);
}
.snipcart__actions--link {
    color: var(--header);
}

// line
.snipcart__item__line {
  display: flex;
  align-items: center;
  height: 120px;
  margin: 20px 10px;
  
  .snipcart__item__image {
    height: 100%;
    width: 33%;
    max-width: 200px;
    display: flex;
    align-items: center;
    justify-items: center;
    img {
      height: 100%;
      width: 100%;
      object-fit: cover;
    }
  }
  
  .snipcart__item_product {
    flex: 1;
    margin: 20px;
    display: flex;
    flex-direction: column;
    
    .snipcart__item__line__header__title {
      font-size: 1.2em;
      margin-bottom: 15px;
    }
  
    .snipcart-item-quantity {
      align-self: flex-end;
      .snipcart-item-quantity__quantity {
        width: 80px;
        height: 40px;
        margin-right: 20px;
      }
      .snipcart-item-quantity__button:focus path {
        fill: var(--accent)
      }
      .snipcart-item-quantity__label {
        display: none;
      }
    }
  }
  
}

.snipcart-cart__featured-payment-methods-container {
    display: none;
}
`
