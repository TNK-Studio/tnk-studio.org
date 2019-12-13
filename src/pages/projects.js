import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import ProjectItem from "../components/projectItem"

const Projects = ({ data }) => (
    <Layout>
        <SEO title="项目" />
        <div class="flex flex-wrap">
            {
                data.allProjects.nodes.map(node => <ProjectItem data={node} />)
            } 
        </div>
    </Layout>
)

export default Projects
export const query = graphql`
  query {
    allProjects(filter: {name: {ne: null}}) {
      nodes {
        name
        github
        desc
      }
    }
  }
`
