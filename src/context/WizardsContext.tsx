import * as React from "react";
import useFetch from "@/hooks/useQuery";
import { WizardResponsedata, MutatedWizard } from "@/interfaces/Wizard";

interface contextOptions {
    wizards: MutatedWizard[]
    setWizards: React.Dispatch<React.SetStateAction<MutatedWizard[]>>;
}

const WizardContext = React.createContext<contextOptions | null>(null)

const WizardProvider: React.FC<React.PropsWithChildren> = ({ children }) => {
    const [wizards, setWizards] = React.useState<MutatedWizard[]>([]);
    const { data } = useFetch<WizardResponsedata[]>({url:"https://wizard-world-api.herokuapp.com/Wizards"})
    
    React.useEffect(()=>{
      if(data){
        const mutatedWizard = data.map((item)=>{
            return {...item, spells: []}
        })
        setWizards(mutatedWizard)
      }
    },[data])

    return (
        <WizardContext.Provider value= {{ wizards, setWizards }} >
        { children }
       </WizardContext.Provider >
    );
}

export default WizardProvider

export const useWizardsContext: ()=>contextOptions = () =>{
    const context = React.useContext(WizardContext)
    if(!context) throw new Error ("wizards context can only be used within the wizards provider")
    return context

}