'use client';

import { z } from 'zod';
import { useEffect } from 'react';

interface Product {
  name: string;
  age: number;
}

// Schema Design
const productSchema = z.object({
  name: z.string().min(4),
  age: z.number().positive(),
});

export default function Home() {
  useEffect(() => {
    fetch('/api/products')
      .then(res => res.json())
      .then((product: unknown) => {
        /**
         * 3rd party origin se koi bhi data aye toh its better to not type them just mark them as unknown
         *
         */

        /**
         * ZOD validate data
         * Approach 1 using try catch
         */

        try {
          // Parse 3rd party data into designed schema
          const validateProduct = productSchema.parse(product);
          console.log(validateProduct);
        } catch (err) {
          if (err instanceof z.ZodError) {
            console.log(err);
          }
        }
      });
  }, []);

  return (
    <>
      <h1>Products</h1>
    </>
  );
}
