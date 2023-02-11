import PageHead from "@/components/common/Head";
import Intro from "@/components/common/Intro";
import Container from "@/components/common/layouts/Container";
import Input from "@/components/ui/Input";
import { useWizardsContext } from "@/context/WizardsContext";
import { NextPage } from "next";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { MutatedWizard } from "@/interfaces/Wizard";

const Wizard: NextPage = () => {
  const [inputValue, setInputValue] = useState("");
  const [filteredWizards, setFilteredWizards] = useState<MutatedWizard[]>();

  const handleInputChange = (value: string) => {
    setInputValue(value);
  };
  const router = useRouter();

  const { wizards } = useWizardsContext();

  useEffect(() => {
    if (inputValue && wizards) {
      setFilteredWizards(
        wizards.filter((wizard) => {
          if (
            `${wizard.firstName} ${wizard.lastName}`
              .toLocaleLowerCase()
              .includes(inputValue.toLocaleLowerCase())
          )
            return wizard;
        })
      );
    }
  }, [inputValue, wizards]);

  return (
    <>
      <PageHead title="Spells" description="Spells page" />

      <div
        className=" py-10 lg:px-52  px-10 primary_bg_color"
        style={{ minHeight: "100vh" }}
      >
        <Container>
          <div>
            <Intro
              name="Wizards"
              definition=" A wizard is a kind of magician. A wise man who can perform magic spells in a fairy tale or fantasy novel is often described as a wizard. "
            />

            <Input
              placeholder="Search by name"
              onChange={handleInputChange}
              styling={"p-5 rounded mt-10"}
            />

            <ul>
              {inputValue.length
                ? filteredWizards?.map((wizard) => {
                    return (
                      <li
                        key={wizard.id}
                        className="text-white"
                        onClick={() => router.push(`/wizard/${wizard.id}`)}
                      >
                        {`${wizard.lastName} ${wizard.firstName}`}
                      </li>
                    );
                  })
                : wizards.map((wizard) => {
                    return (
                      <li
                        key={wizard.id}
                        className="text-white"
                        onClick={() => router.push(`/wizard/${wizard.id}`)}
                      >
                        {`${wizard.lastName} ${wizard.firstName}`}
                      </li>
                    );
                  })}
            </ul> 
          </div>
        </Container>
      </div>
    </>
  );
};

export default Wizard;
