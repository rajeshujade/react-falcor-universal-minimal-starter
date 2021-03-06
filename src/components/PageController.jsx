import React from "react"
import Page from "components/Page"
import FalcorController from "lib/falcor/FalcorController"

export default class PageController extends FalcorController {
  static getFalcorPath(params) {
    return ['pages', parseInt(params.id), ["title", "body"]]
  }

  render() {
    console.log("RENDERING PAGE CONTROLLER")
    if (this.state.ready) {
      const articleData = this.state.data.pages[parseInt(this.props.params.id)]
      return (
        <div>
          <h2>Controller for page: {this.props.params.id}</h2>
          <div>Ready?: {this.state.ready ? "true" : "false"}</div>
          <Page title={articleData.title} body={articleData.body} />
        </div>
      )
    } else {
      return (
        <div>
          <h1>Loading</h1>
        </div>
      )
    }
  }
}
