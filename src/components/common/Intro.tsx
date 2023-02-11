import React, {FC} from 'react'

interface Props{
    name: string;
    definition:string
}
const Intro: FC<Props> = ({name, definition}) => {
    return (
        <div>
            <h1 className="text-3xl font-bold mb-4 secondary_text_color text-center">{name}</h1>
            <p className=' primary_text_color text-left text-2xl  '> {definition}</p>

        </div>
    )
}

export default Intro