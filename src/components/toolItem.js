import React from "react"
import { parseImageUrl } from 'notabase/src/utils'
import { Link } from "gatsby";

export default ({ data }) => {
    const { name, link, desc, comment, stars } = data
    return (
        <div class="max-w-sm mx-auto flex p-6 bg-white rounded-lg shadow-xl flex-grow  ml-2 mr-2 m-2">
            <div class="pt-1">
                <a href={link}><h4 class="text-xl text-gray-900 leading-tight">{name}</h4></a>
                <p class="text-base text-gray-600 leading-normal">{desc} </p>
                <p class="text-base text-gray-600 leading-normal">{comment} </p>
            </div>
        </div>
    )
}