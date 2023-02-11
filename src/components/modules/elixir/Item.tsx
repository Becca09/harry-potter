import React, { FC } from "react"
import Link from "next/link"

interface Props {
    id: string
    name: string
    
}

const Item: FC<Props> = ({ id, name }) => {
    return (
        <li className="mr-7 text-left primary_text_color li_border my-3">
            <Link href={`/elixir/${id}`}>{name}</Link>
        </li>
    )
}

export default Item