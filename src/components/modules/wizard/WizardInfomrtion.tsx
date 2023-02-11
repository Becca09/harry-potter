import React, { FC } from 'react'


interface Props{
    title:string;
    content:any;
}

const WizardInformation: FC<Props>  = ({title, content}) => {
 return (
    <div className="flex flex-col mt-4">
      <p className='secondary_text_color  text-2xl'>tittle{title}:</p>
      <p className='primary_text_color font-medium '>content{content ? content : 'NA'}</p>
    </div>
  )
}

export default WizardInformation