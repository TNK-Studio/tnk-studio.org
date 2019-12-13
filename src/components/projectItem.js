import React from "react"
import { parseImageUrl } from 'notabase/src/utils'
import { Link } from "gatsby";

export default ({ data }) => {
    const { name, github, desc } = data
    return (
        <div class="max-w-sm mx-auto flex p-6 bg-white rounded-lg shadow-xl">
            {/* <div class="flex-shrink-0">
                <img class="h-16 w-16 rounded-full" src={icon} alt={name} />
            </div> */}
            <div class="ml-6 pt-1">
                <a href={github}><h4 class="text-xl text-gray-900 leading-tight">{name}</h4></a>
                <p class="text-base text-gray-600 leading-normal">{desc}</p>
            </div>
        </div>
    )
}