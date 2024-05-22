'use client'
import { Button } from "@/components/ui/button";
import { Label } from "@radix-ui/react-dropdown-menu";
import { ArrowLeftIcon } from "lucide-react";
import { Input } from "postcss";
import useFormStore, { FormData } from '@/store/form-store';
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";


const Step2 = () => {
  const { updateFormData, nextStep,prevStep } = useFormStore();

  const question1 = "Please describe to which AgriTech Challenge 2024 theme(s) and sub-themes your project aims to make a substantial contribution and how it plans to do so. Please also describe the problem or potential related to the theme(s) you are targeting with your project";
  const question2 = "Taking into account the problem or potential identified above (1.), please describe how your project contributes to solving the problem or realizing the potential you have identified, and how this will benefit people. In other words, what is the value of your project? Max. 150 words.";

  const [answer1, setAnswer1] = useState('');
  const [answer2, setAnswer2] = useState('');
  const [answer1Error, setAnswer1Error] = useState('');
  const [answer2Error, setAnswer2Error] = useState('');

  const handleSubmit = (e:any) => {
    e.preventDefault();

    // Reset error messages
    setAnswer1Error('');
    setAnswer2Error('');

    // Get form data
    const formData = {
      question1: answer1.trim(),
      question2: answer2.trim(),
    };

    // Validation
    if (!formData.question1) {
      setAnswer1Error('Please provide an answer.');
      return;
    }
    if (formData.question1.split(/\s+/).length > 150 ) {
      setAnswer1Error('Answer should be no more than 150 words.');
      return;
    }
    if (!formData.question2) {
      setAnswer2Error('Please provide an answer.');
      return;
    }
    if (formData.question2.split(/\s+/).length > 250) {
      setAnswer2Error('Answer should be no more than 150 words.');
      return;
    }

    // Proceed to next step if validation passes
    // Update form data and proceed to next step
    updateFormData(formData);
    nextStep();
  };

  return (
    <form onSubmit={handleSubmit} className='flex flex-col w-[500px] min-w-[320px] gap-4'>
      <div className="space-y-2">
        <Label>{question1}</Label>
        <Textarea
          className=""
          id="question3"
          placeholder="Put your answer here"
          rows={10}
          value={answer1}
          onChange={(e) => setAnswer1(e.target.value)}
        />
        <span className="text-red-500">{answer1Error}</span>
      </div>
      <div className="space-y-2">
        <Label>{question2}</Label>
        <Textarea
          className=""
          id="question2"
          placeholder="Put your answer here"
          rows={10}
          value={answer2}
          onChange={(e) => setAnswer2(e.target.value)}
        />
        <span className="text-red-500">{answer2Error}</span>
      </div>
      <div className="flex items-center justify-between">
        <Button onClick={prevStep} className="mr-4" variant="outline">
          <ArrowLeftIcon  className="w-4 h-4 mr-2" />
          Back
        </Button>
        <Button type="submit">Submit</Button>
      </div>
    </form>
  );
};
export default Step2;

  
