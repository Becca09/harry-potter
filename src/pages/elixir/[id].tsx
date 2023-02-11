import React from 'react';
import useFetch from '@/hooks/useQuery';
import { ElixirResponseData } from '@/interfaces/Exilirs';
import { useRouter } from 'next/router';
import { NextPage } from 'next';
import PageHead from '@/components/common/Head';
import ElixirInformation from '@/components/modules/elixir/ElixirInformation';
import Container from '@/components/common/layouts/Container';
import Navbar from '@/components/common/layouts/Navbar';
import PageTransition from '@/components/common/layouts/PageTransition';

const ElixirDetails: NextPage = () => {
  const router = useRouter()
  const { id } = router.query
  const { data: elixir, loading, error } = useFetch<ElixirResponseData>({
    url: `https://wizard-world-api.herokuapp.com/Elixirs/${id}`, skip: !id
  })

  return (
    <>
        <PageHead title='Elixir' description='Elixir details page' />
        <Navbar />
        <div className=" p-4 primary_bg_color" style={{ minHeight: "100vh" }}>
          <Container>
            <h1 className='secondary_text_color text-center text-4xl font-bold'>{elixir?.name}</h1>
            {loading && <p className='loading loading_text'>Loading...</p>}
            {error && <p>{error}</p>}

            <div>
              <ElixirInformation title="Difficulty" content={elixir?.difficulty} />
              <ElixirInformation title="Effect" content={elixir?.effect} />
              <ElixirInformation title="Side Effects" content={elixir?.sideEffects} />
              <ElixirInformation title="Characteristics" content={elixir?.characteristics} />
              <ElixirInformation title="Time" content={elixir?.time} />
              <ElixirInformation title="Ingredients" content={elixir?.ingredients.map((item => `${item.name},   `))} />
              <ElixirInformation title="Inventors" content={elixir?.inventors.map((item => `${item.firstName} ${item.lastName},  `))} />

            </div>
          </Container>

        </div>

    </>

  );
};

export default ElixirDetails;
