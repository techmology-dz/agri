'use client'
import { Button } from "@/components/ui/button";
import { Label } from "@radix-ui/react-dropdown-menu";
import { ArrowLeftIcon } from "lucide-react";

import useFormStore, { FormData } from '@/store/form-store';
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { z } from "zod";

const Step1 = () => {
  const { updateFormData, nextStep } = useFormStore();
  const question1 = "Name of your project";

  // State variables for error messages
  const [emailError, setEmailError] = useState("");
  const [fullNameError, setFullNameError] = useState("");
  const [answer1Error, setAnswer1Error] = useState("");

  const handleSubmit = (e:any) => {
      e.preventDefault();

      // Basic validation
      const email = e.currentTarget.email.value;
      const fullName = e.currentTarget.fullName.value;
      const answer1 = e.currentTarget.question1.value;

      let isValid = true;

      // Validation for email
      if (!email) {
          setEmailError("Please enter your email.");
          isValid = false;
      } else {
          setEmailError("");
      }
      if (!z.string().email().parse(email) ) {
          setEmailError('email invalid');
          debugger
          isValid = false;
       } else  {
          setEmailError("")
       }
        
      

      // Validation for full name
      if (!fullName) {
          setFullNameError("Please enter your full name.");
          isValid = false;
      } else {
          setFullNameError("");
      }

      // Validation for answer 1
      if (!answer1) {
          setAnswer1Error("Please answer the question.");
          isValid = false;
      } else {
          setAnswer1Error("");
      }

      if (isValid) {
          const formData = {
              email,
              fullName,
              question1: answer1,
          };

          debugger;
          updateFormData(formData);
          nextStep();
      }
  };

  return (
      <form
          onSubmit={handleSubmit}
          className="flex flex-col w-[500px] min-w-[320px] gap-4"
      >
          <div className="">
              <Label>Email</Label>
              <Input className="" type="email" id="email" placeholder="Your email..." ></Input>
              <span className="text-red-500">{emailError}</span>
          </div>
          <div className="space-y-2">
              <Label>Full Name</Label>
              <Textarea
                  className=""
                  id="fullName"
                  placeholder="Your full name"
              />
              <span className="text-red-500">{fullNameError}</span>
          </div>
          <div className="space-y-2">
              <Label>{question1}</Label>
              <Textarea
                  className=""
                  id="question1"
                  placeholder="Put your answer here"
                  rows={10}
              />
              <span className="text-red-500">{answer1Error}</span>
          </div>
          <div className="flex items-center justify-between">
              <Button className="mr-4" disabled variant="outline">
                  <ArrowLeftIcon className="w-4 h-4 mr-2" />
                  Back
              </Button>
              <Button type="submit">Submit</Button>
          </div>
      </form>
  );
};
export default Step1;

  
