export interface WizardResponsedata {
  elixirs: {
    id: string;
    name: string;
  }[];
  id: string;
  firstName: string | null;
  lastName: string;
}

export interface MutatedWizard extends WizardResponsedata {
  spells: string[];
}
