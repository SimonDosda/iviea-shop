const React = require("react")
const { SnipcartProvider } = require("./context")

/**
 * insert script, style and tag in body on ssr render
 */
exports.onRenderBody = (
  { setHeadComponents, setPostBodyComponents },
  {
    version = "3.0.28",
    templates = "",
    openCartStyle = "side",
    apiKey = null,
    currency = "usd",
  }
) => {
  if (!apiKey) {
    throw new Error(
      'Snipcart public API Key is not defined. Insert in plugin options the "apiKey" parameter'
    )
    return null
  }

  const url = `https://cdn.snipcart.com/themes/v${version}/default/snipcart`

  setHeadComponents([
    <link rel="preconnect" href="https://app.snipcart.com" />,
    <link rel="preconnect" href="https://cdn.snipcart.com" />,
    <link rel="stylesheet" href={`${url}.css`} />,
  ])

  setPostBodyComponents([
    <script async src={`${url}.js`}></script>,
    <div
      hidden
      id="snipcart"
      data-currency={currency}
      data-config-modal-style={openCartStyle}
      data-api-key={apiKey}
      dangerouslySetInnerHTML={{ __html: templates }}
    ></div>,
  ])
}

exports.wrapRootElement = ({ element }) => {
  return <SnipcartProvider>{element}</SnipcartProvider>
}
