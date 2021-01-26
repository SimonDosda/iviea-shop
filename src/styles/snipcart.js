import { createGlobalStyle } from "styled-components"

export const SnipcartStyles = createGlobalStyle`
.snipcart-modal, .snipcart-cart--edit .snipcart-cart__content {
    background-color: var(--background);
}

// header
.snipcart-cart-header, .snipcart-cart__secondary-header {
    background-color: var(--dark-background);
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



.snipcart-featured-payment-methods__title {
    display: none;
}
`
