const React = require("react")
const { SnipcartProvider } = require("./context")

exports.wrapRootElement = ({ element }) => {
  return <SnipcartProvider>{element}</SnipcartProvider>
}
