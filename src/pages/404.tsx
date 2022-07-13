import * as React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"

const NotFoundPage: React.FC = () => (
  <Layout>
    <Seo title="404: Not found" />
    <h1>404: Page Not Found</h1>
    <h3 className="outline" style={{textAlign: "center"}}>May I suggest next time you try looking harder...<br /> <i>for content that does exist</i></h3>
  </Layout>
)

export default NotFoundPage
