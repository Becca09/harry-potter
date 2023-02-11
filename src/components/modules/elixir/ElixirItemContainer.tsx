/* eslint-disable react/jsx-key */
import React, { FC } from "react"
import { ElixirResponseData } from "@/interfaces/Exilirs"
import Item from "./Item"
import Container from "@/components/common/layouts/Container"

interface Props {
    data: ElixirResponseData[]
}

const ElixirItemContainer: FC<Props> = ({ data }) => {
    return (
        <Container>
            <ul className='flex lg:flex-row flex-wrap mt-10 '>
                {data.map((elixir) => {
                    return <Item id={elixir.id} name={elixir.name} />
                })}
            </ul>
        </Container>

    )
}

export default ElixirItemContainer