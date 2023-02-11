import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { NextPage } from "next";
import { useWizardsContext } from "@/context/WizardsContext";
import { MutatedWizard } from "@/interfaces/Wizard";

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
    <div>
      {wizard && (
        <>
          <p>
            {wizard.firstName} {wizard.lastName}
          </p>
          <ul>
            {wizard.spells.map((spell, idx) => {
              return <li key={idx}>{spell}</li>;
            })}
          </ul>
        </>
      )}
    </div>
  );
};

export default WizardDetails;
