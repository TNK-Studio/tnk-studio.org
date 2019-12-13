import React from "react"
import { Link } from "gatsby"

import img404 from '../images/clip-page-not-found.png'

const NotFoundPage = () => (
  <div class="flex justify-center items-center bg-cover h-screen flex-col" style={{ backgroundImage: `url(${img404})` }}>
    <p class="text-lg text-gray-500">Rua~ 你来到了啥都没有的神秘空间</p>
    <p><Link to="/" class="text-indigo-500">go back</Link></p>
  </div>
)

export default NotFoundPage
