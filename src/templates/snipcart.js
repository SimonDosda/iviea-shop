export const itemLine = `
  <item-line>
    <li class="snipcart__item__line">
    <div class="snipcart__item__image">
      <item-image :alt="item.name"/>
    </div>

    <div class="snipcart__item_product">
      <h2 class="snipcart__item__line__header__title">
        {{ item.name }}
      </h2>

      <item-quantity
        class="snipcart__item__line__quantity"
        v-if="!adding"
      ></item-quantity>
      </div>
    </li>
  </item-line>
`
