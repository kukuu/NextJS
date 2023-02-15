import React from 'react';
import { Suspense } from 'react';

export const AwesomePerson = ({
  name,address,email,phone,id
}) => {
  return (
    <Suspense fallback={<h1>Loading persons...</h1>}>
       <div key={id} className="shadow  max-w-md  rounded">
      
      <div className="p-5 flex flex-col space-y-2">
      <p className="text-lg font-medium">{name}</p>
      <p className="text-sm font-medium">{phone}</p>
        <p className="text-sm text-blue-500">{email}</p>
        
        <p className="text-sm text-gray-600">{address}</p>
    
      </div>
    </div>
      </Suspense>
   
  );
};
