import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import ToolItem from "../components/toolItem"

const Tools = ({ data }) => (
    <Layout>
        <SEO title="推荐工具&服务" />
        <div class="flex flex-wrap max-w-4xl justify-between">
            {
                data.allTools.nodes.map(node => <ToolItem data={node} />)
            }
        </div>
    </Layout>
)

export default Tools
export const query = graphql`
  query {
    allTools(filter: {name: {ne: null}}) {
      nodes {
        name
        link
        stars
        desc
        comment
      }
    }
  }
`
