import { Button } from "@/components/ui/button";
import { Label } from "@radix-ui/react-dropdown-menu";
import { ArrowLeftIcon } from "lucide-react";
import { Input } from "postcss";
import useFormStore, { FormData } from '@/store/form-store';
import { Textarea } from "@/components/ui/textarea";

const Step3 = () => {

    const question4 = "Please describe what makes your project innovative. Please indicate whether, in your opinion, there are similar projects in Algeria, North Africa or worldwide, and what distinguishes your value proposition from theirs.";
    const question5 = "Please assess the technological and commercial feasibility of your project. Please specify the stage of your project and whether a prototype exists. If so, please describe its functionality. Please also estimate the additional steps that would be required to make your project market-ready, especially if this requires significant technological development or investment.";

    const { updateFormData, nextStep,prevStep } = useFormStore();
  
    const handleSubmit = (e:any) => {
      e.preventDefault();
      const formData: any = {
        question4: e.currentTarget.question4.value,
        question5: e.currentTarget.question5.value,
  
      };
      debugger
      updateFormData(formData);
      nextStep();
    };
  
    return (
      <form onSubmit={handleSubmit} className='flex flex-col w-[500px] min-w-[320px] gap-4'>
        
         <div className="">
              <Label >{question4}</Label>
              <Textarea
                className=""
                id="question4"
                placeholder="put your answer here"
                rows={10}
              />
            </div>
            <div className="space-y-2">
              <Label>{question5}</Label>
              <Textarea
                className=""
                id="question5"
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
export default Step3;

  
