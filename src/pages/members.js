import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import MemberItem from "../components/memberItem"

const Members = ({ data }) => (
  <Layout>
    <SEO title="成员" />
    <div class="flex flex-wrap ">
      {
        data.allMembers.nodes.map(node => <MemberItem data={node} />)
      }
    </div>
  </Layout>
)

export default Members
export const query = graphql`
  query {
    allMembers(filter: {name: {ne: null}}) {
      nodes {
        name
        github
        blog
        icon
      }
    }
  }
`
