import React from "react"
import { graphql } from "gatsby"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import webuildimg from '../images/clip-programming.png'
import whowearaimg from '../images/clip-1.png'
import shareimg from '../images/clip.png'


const Card = (props) => {
  const { title, desc, link, img, color } = props
  return (
    <Link to={link} class="max-w-sm mx-auto  p-6 bg-gray rounded-lg  margin-bt-20 mt-4 hover:bg-gray-600 hover:text-white cursor-pointer">
      <div >
        <div class="h-32 w-48 rounded-full bg-cover" style={{ backgroundImage: `url(${img})` }} />
        <h3 class={`text-xl text-${color}-700 leading-tight text-center `}>
          {title}
        </h3>
        <p class={`text-base text-${color}-700 leading-normal text-center`}>{desc}</p>
      </div>
    </Link>
  )
}
const IndexPage = (props) => {
  return (
    <Layout>
      <div class="mx-auto">
        <h1 class="text-6xl text-white text-center">
          TNK Studio
        </h1>
        <h3 class="text-4xl text-gray-600 text-center">
          技术连接生活🔗
        </h3>
      </div>
      <div class="max-w-6xl mx-auto flex flex-wrap p-6 bg-white rounded-lg shadow-xl margin-bt-20 mt-4">
        <Card
          title="成员"
          desc="我们是谁"
          link="members"
          img={whowearaimg}
          color="red"
        />
        <Card
          title="项目"
          desc="我们用爱造的轮子"
          link="projects"
          img={webuildimg}
          color="teal"
        />
        <Card
          title="推荐"
          desc="我们觉得好用的玩意儿"
          link="tools"
          color="indigo"
          img={shareimg}
        />
      </div>
    </Layout >
  )
}
export default IndexPage
