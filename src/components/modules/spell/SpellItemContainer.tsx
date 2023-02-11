/* eslint-disable react/jsx-key */
import React, { FC } from "react"
import Item from "../spell/Item"
import Container from "@/components/common/layouts/Container"
import { SpellsResponseData } from "@/interfaces/Spells"

interface Props {
    data: SpellsResponseData[]
}

const SpellItemContainer: FC<Props> = ({ data }) => {
    return (
        <Container>
            <ul className='flex lg:flex-row flex-wrap mt-10 '>
                {data.map((spell) => {
                    return <Item id={spell.id} name={spell.name} />
                })}
            </ul>
        </Container>

    )
}

export default SpellItemContainer