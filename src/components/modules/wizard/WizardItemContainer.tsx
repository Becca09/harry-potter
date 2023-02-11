/* eslint-disable react/jsx-key */
import React, { FC } from "react"
import Item from "../wizard/Item"
import Container from "@/components/common/layouts/Container"
import { MutatedWizard } from "@/interfaces/Wizard"

interface Props {
    data: MutatedWizard[]
}

const WizardItemContainer: FC<Props> = ({ data }) => {
    return (
        <Container>
            <ul className='flex lg:flex-row flex-wrap mt-10 '>
                {data.map((wizard) => {
                    return wizard.firstName !== null 
                        ? <Item id={wizard.id} name={wizard.firstName} />
                        : null;
                })}
            </ul>
        </Container>

    )
}


export default WizardItemContainer