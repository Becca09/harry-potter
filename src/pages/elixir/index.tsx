/* eslint-disable react/no-unescaped-entities */


import React, { useEffect, useState } from 'react'
import useFetch from '@/hooks/useQuery'
import { ElixirResponseData } from '@/interfaces/Exilirs'
import { NextPage } from 'next';
import PageHead from '@/components/common/Head';
import Input from '@/components/ui/Input';
import Dropdown from '@/components/ui/Dropdown';
import ElixirItemContainer from '@/components/modules/elixir/ElixirItemContainer';
import Container from '@/components/common/layouts/Container';
import Intro from '@/components/common/Intro';
import Navbar from '@/components/common/layouts/Navbar';

const Elixir: NextPage = () => {

  const options = [
    { value: 'Beginner', label: 'Beginner' },
    { value: 'Moderate', label: 'Moderate' },
    { value: 'Advanced', label: 'Advanced' },
    { value: 'Unknown', label: 'Unknown' },
    { value: 'OneOfAKind', label: 'OneOfAKind ' },
    { value: 'OrdinaryWizardingLevel', label: 'OrdinaryWizardingLevel' },
  ]


  const [inputValue, setInputValue] = useState('');
  const [selectedValue, setSelectedValue] = useState('');

  const handleInputChange = (value: string) => {
    setInputValue(value);
  };

  const handleSelectFilter = (value: string) => {
    setSelectedValue(value);
  }


  const { data, loading, error, reFetch } = useFetch<ElixirResponseData[]>({
    url: `https://wizard-world-api.herokuapp.com/Elixirs?Name=${inputValue}&Difficulty=${selectedValue}`,
  });

  console.log(data)

  useEffect(() => {
    if (inputValue !== '' || selectedValue !== '') {
      reFetch();
    }
  }, [inputValue, selectedValue]);



  return (
    <>
      <PageHead title='Elixir' description='Elixirs page' />

      <div className=" py-10 lg:px-52  px-10 primary_bg_color" style={{ minHeight: "100vh" }}>
        <Container>
          <div>
            <Navbar />
            <Intro name='Elixirs' definition=' An Elixir is a substance, usually a liquid, with a magical power to cure, improve, or preserve something. Find  your new portion below:' />
            <div className='flex lg:flex-row  flex-col justify-between mt-10'>
              <Input placeholder="Search by name" onChange={handleInputChange} styling={'p-5 rounded'} />
              <Dropdown options={options} onchange={handleSelectFilter} defaultOption={'Select a spell type'} styling={'lg:mt-0 mt-10 p-5  w-72 rounded'} />
            </div>
            {loading && <p className='loading loading_text'>Loading...</p>}
            {error && <p>{error}</p>}



            <div>
              {data && !loading && <ElixirItemContainer data={data} />}
            </div>
          </div>
        </Container>


      </div>
    </>
  )
}

export default Elixir
