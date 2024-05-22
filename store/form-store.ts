import {create} from 'zustand';

export interface FormData {
  email: string;
  fullName: string;
  question1?: string;
  question2?: string;
  question3?: string;
  question4?: string;
  question5?: string;
  question6?: string;
  question7?: string;
  question8?: string;
}
interface StoreState {
  step: number;
  formData: FormData;
  nextStep: () => void;
  prevStep: () => void;
  updateFormData: (data: Partial<FormData>) => void;
}

const useFormStore = create<StoreState>((set) => ({
  step: 1,
  formData: {
    email: '',
    fullName: '',
    question1: '',
    question2: '',
    question3: '',
    question4: '',
    question5: '',
    question6: '',
    question7: '',
  },
  nextStep: () => set((state) => ({ step: state.step + 1 })),
  prevStep: () => set((state) => ({ step: state.step - 1 })),
  updateFormData: (data) =>{     
    console.log(useFormStore.getState());
    
    set((state) => ({ formData: { ...state.formData, ...data } }))}
}));

export default useFormStore;