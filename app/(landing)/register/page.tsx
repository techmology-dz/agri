// Form.jsx
'use client'
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import useFormStore, { FormData } from '@/store/form-store';
import { Label } from '@radix-ui/react-dropdown-menu';
import { ArrowLeftIcon } from 'lucide-react';
import React from 'react';
import Step1 from './_steps/step1';
import Step2 from './_steps/step2';
import Step3 from './_steps/step3';
import Step4 from './_steps/step4';
import Answers from './_steps/answers';



// Import other step components

const Form = () => {
  const { step } = useFormStore();

  const renderStep = () => {
    switch (step) {
      case 1:
        return <Step1 />;
      case 2:
        return <Step2 />;
      case 3:
        return <Step3 />;
      case 4:
        return <Step4 />;


      // Add more cases for additional steps
      default:
        return <Answers />;
    }
  };

  return <div className='mx-auto my-10 p-6 bg-white rounded-lg shadow-md dark:bg-gray-800'>{renderStep()}</div>;
};

export default Form;



