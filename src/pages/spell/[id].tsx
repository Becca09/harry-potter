import useFetch from "@/hooks/useQuery";
import { SpellsResponseData } from "@/interfaces/Spells";
import { useRouter } from "next/router";
import React, { useState } from "react";
import PageHead from "@/components/common/Head";
import Container from "@/components/common/layouts/Container";
import { NextPage } from "next";
import SpellInformation from "@/components/modules/spell/SpellInformation";
import { wizardOptions } from "@/utils/constants";
import Dropdown from "@/components/ui/Dropdown";
import { useWizardsContext } from "@/context/WizardsContext";
import Navbar from "@/components/common/layouts/Navbar";

const SpellDetails: NextPage = () => {
  const router = useRouter();
  const { id } = router.query;
  const {
    data: spell,
    loading,
    error,
  } = useFetch<SpellsResponseData>({
    url: `https://wizard-world-api.herokuapp.com/Spells/${id}`,
    skip: !id,
  });
  const { wizards, setWizards } = useWizardsContext();

  const [selectedWizardId, setSelectedWizardId] = useState("");

  const handleSelectWizard = (value: string) => {
    setSelectedWizardId(value);
  };

  const handleAssignSpellToWizard = () => {
    const mutatedWizardsArr = wizards.map((wizard) => {
      if (wizard.id === selectedWizardId && spell){
        if(wizard.spells.includes(spell.name)){
          alert("Spell has already been assigned to wizard")
        }
        alert("Spell assigned to wizard")
        return { ...wizard, spells: [...wizard.spells, spell.name] };
      }
      return wizard;
    });

    setWizards(mutatedWizardsArr);
  };

  return (
    <>
      <PageHead title="Spell" description="Spell details page" />
      <div className=" p-4 primary_bg_color" style={{ minHeight: "100vh" }}>
        <Container>
          <Navbar/>
          <h1 className="secondary_text_color text-center text-4xl font-bold">
            {spell?.name}
          </h1>
          {loading && <p className="loading loading_text">Loading...</p>}
          {error && <p>{error}</p>}

          <div>
            <Dropdown
              options={[
                ...wizards?.map((wizard) => {
                  return {
                    value: wizard.id,
                    label: `${wizard.firstName} ${wizard.lastName}`,
                  };
                }),
              ]}
              onchange={handleSelectWizard}
              defaultOption={"Assign to a wizrd"}
              styling={"lg:mt-0 mt-10 p-5  w-72 rounded"}
            />
            <button
              onClick={handleAssignSpellToWizard}
              disabled={!selectedWizardId}
            >
              Assign Spell
            </button>
          </div>

          <div>
            <SpellInformation title="Effect" content={spell?.effect} />
            <SpellInformation
              title="Incantation"
              content={spell?.incantation}
            />
            <SpellInformation title="Canverbal" content={spell?.canBeVerbal} />
            <SpellInformation title="Creator" content={spell?.creator} />
            <SpellInformation title="Type" content={spell?.type} />
            <SpellInformation title="Light" content={spell?.light} />
          </div>
        </Container>
      </div>
    </>
  );
};

export default SpellDetails;
