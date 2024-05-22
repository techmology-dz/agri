'use client'
import { Button } from "@/components/ui/button";
import { Label } from "@radix-ui/react-dropdown-menu";
import { ArrowLeftIcon } from "lucide-react";
import { Input } from "postcss";
import useFormStore, { FormData } from '@/store/form-store';
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";

const Step4 = () => {

  const question6 = "Please assess the scalability of your project. Please indicate your project's target groups and realistically estimate how many people or organizations may become users or customers of the product or service developed as part of your project";
  const question7 = "Please describe your project team, including the educational and professional backgrounds of its members. Please indicate how many people are working on the project and how the skills, experience and expertise of each team member contribute to the project's success.";
  
  const { updateFormData, nextStep,prevStep } = useFormStore();

  const handleSubmit = (e:any) => {
    e.preventDefault();
    const formData: any = {
      question6: e.currentTarget.question6.value,
      question7: e.currentTarget.question7.value,

    };
    debugger
    updateFormData(formData);
    nextStep();
  };

  return (
    <form onSubmit={handleSubmit} className='flex flex-col w-[500px] min-w-[320px] gap-4'>
      
       <div className="">
            <Label >{question6}</Label>
            <Textarea
              className=""
              id="question6"
              placeholder="put your answer here"
              rows={10}
            />
          </div>
          <div className="space-y-2">
            <Label>{question7}</Label>
            <Textarea
              className=""
              id="question7"
              placeholder="put your answer here"
              rows={10}

            />
          </div>
          <div className="flex items-center justify-between">
          <Button onClick={prevStep} className="mr-4" variant="outline">
        <ArrowLeftIcon  className="w-4 h-4 mr-2" />
        Back
      </Button>
            <Button type="submit">Submit</Button>
          </div>
      {/* <button type="submit">Next</button> */}
    </form>
  );
};

export default Step4;


  
