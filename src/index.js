const plugin = {
  install(Vue) {
    Vue.$_delay = (ms) => {
      return new Promise(resolve => setTimeout(resolve, ms))
    }
  }
}

export default plugin
