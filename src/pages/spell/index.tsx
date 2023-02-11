import PageHead from "@/components/common/Head";
import Intro from "@/components/common/Intro";
import Container from "@/components/common/layouts/Container";
import SpellItemContainer from "@/components/modules/spell/SpellItemContainer";
import Dropdown from "@/components/ui/Dropdown";
import Input from "@/components/ui/Input";
import useFetch from "@/hooks/useQuery";
import { SpellsResponseData } from "@/interfaces/Spells";
import { NextPage } from "next";
import React, { useEffect, useState } from "react";
import { spellOptions } from "@/utils/constants";
import Navbar from "@/components/common/layouts/Navbar";

const Spell: NextPage = () => {
  const [inputValue, setInputValue] = useState("");
  const [selectedValue, setSelectedValue] = useState("");
  const [searchFilteredData, setFilteredData] =
    useState<SpellsResponseData[]>([]);

  const handleInputChange = (value: string) => {
    setInputValue(value);
  };

  const handleSelectFilter = (value: string) => {
    setSelectedValue(value);
  };

  const { data, loading, error, reFetch } = useFetch<SpellsResponseData[]>({
    url: `https://wizard-world-api.herokuapp.com/Spells?Type=${selectedValue}`,
  });

  useEffect(() => {
    if (selectedValue) {
      reFetch();
    }
  }, [selectedValue]);

  useEffect(() => {
    if (inputValue && data) {
      setFilteredData(
        data?.filter((item) => {
          return item.name
            .toLocaleLowerCase()
            .includes(inputValue.toLocaleLowerCase());
        })
      );
    }
  }, [inputValue, data]);

  return (
    <>
      <PageHead title="Spells" description="Spells page" />
      <div
        className=" py-10 lg:px-52  px-10 primary_bg_color"
        style={{ minHeight: "100vh" }}
      >
        <Container>
          <div>
            <Navbar/>
            <Intro
              name="Spells"
              definition=" A Spell is a piece of magic that someone does, or the special words or ceremonies used in doing it"
            />
            <div className="flex lg:flex-row  flex-col justify-between mt-10">
              <Input
                placeholder="Search by name"
                onChange={handleInputChange}
                styling={"p-5 rounded"}
              />
              <Dropdown
                options={spellOptions}
                onchange={handleSelectFilter}
                defaultOption={"Select a dificuty"}
                styling={"lg:mt-0 mt-10 p-5  w-72 rounded"}
              />
            </div>
            {loading && <p className="loading loading_text">Loading...</p>}
            {error && <p>{error}</p>}

            {!inputValue.length ? (
              <div>
                {data && !loading && <SpellItemContainer data={data} />}
              </div>
            ) : (
              <SpellItemContainer data={searchFilteredData} />
            )}
          </div>
        </Container>
      </div>
    </>
  );
};

export default Spell;
