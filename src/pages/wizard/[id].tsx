import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { NextPage } from "next";
import { useWizardsContext } from "@/context/WizardsContext";
import { MutatedWizard } from "@/interfaces/Wizard";
import Container from "@/components/common/layouts/Container";

const WizardDetails: NextPage = () => {
  const router = useRouter();
  const { id } = router.query;
  const { wizards } = useWizardsContext();
  const [wizard, setWizard] = useState<MutatedWizard>();

  useEffect(() => {
    if (id && wizards) {
      const wizard = wizards.find((item) => item.id === id);
      setWizard(wizard);
    }
  }, [id, wizards]);

  return (
    <div
      className=" py-10 lg:px-52  px-10 primary_bg_color"
      style={{ minHeight: "100vh" }}
    >
      <Container>
        {wizard && (
          <>
            <h1 className="secondary_text_color text-center text-4xl font-bold">

              {wizard.firstName} {wizard.lastName}
            </h1>
            <ul className="flex flex-col justify-center items-center">
              {wizard.spells.map((spell, idx) => {
                return <li className="mr-7 text-left primary_text_color li_border my-3" key={idx}>{spell}</li>;
              })}
            </ul>
          </>
        )}
      </Container>

    </div>
  );
};

export default WizardDetails;
