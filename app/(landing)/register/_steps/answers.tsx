'use client'
import { Button } from '@/components/ui/button';
import useFormStore, { FormData } from '@/store/form-store';
import { ArrowLeftIcon } from 'lucide-react';
import React from 'react'

import { toast, useToast } from "@/components/ui/use-toast"
const Answers = () => {
  const { toast } = useToast()
    const formData = useFormStore((state) => state.formData);
    const handleSubmit = () => {
      // Assuming you have a function to send form data to a route
      sendDataToRoute(formData);
    };
  


    const sendDataToRoute = (data: FormData) => {

      
        // Implement your logic to send data to the desired route
        fetch('/api/users', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData),
        })
          .then(response => {
            if (!response.ok) {
              toast({
                description: "Network response was not ok.",
              })
              throw new Error('Network response was not ok');
            }
            toast({
              description: "Your are retested successfully.",
            })
          })
          .catch(error => {
            toast({
              description: "There was an error sending the data.",
            })
            console.error('There was an error sending the data:', error);
          });
      };
  return (
    <div className='flex flex-col w-[500px] min-w-[320px] gap-4'>
        
        <div>
      <h2>your answer</h2>
      <ul>
        {Object.entries(formData).map(([key, value]) => (
          <li key={key}>
            <strong>{key}:</strong>
            <p>
            {value}
            </p>
          </li>
        ))}
      </ul>
    </div>
    <div className="flex items-center justify-between">
              <Button className="mr-4" disabled variant="outline">
                  <ArrowLeftIcon className="w-4 h-4 mr-2" />
                  Back
              </Button>
              <Button onClick={handleSubmit}>Submit</Button>
          </div>

    </div>
  )
}

export default Answers