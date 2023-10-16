'use client';

import { z } from 'zod';
import { useEffect } from 'react';

/**
 * interface Product {
  name: string;
  age: number;
  }
 */

// Schema Design
const productSchema = z.object({
  name: z.string().min(4),
  age: z.number().positive(),
});

// INFER TYPES USING zod
type Product = z.infer<typeof productSchema>;

export const getProducts = async (products: Product) => {
  console.log(products);
};

export default function Home() {
  useEffect(() => {
    fetch('/api/products')
      .then(res => res.json())
      .then((product: unknown) => {
        // 3rd party origin se koi bhi data aye toh its better to not type them just mark them as unknown

        /**
         * ZOD validate data
         * Approach 2 using modern safeParse()
         */

        // Parse 3rd party data into designed schema
        const validateProduct = productSchema.safeParse(product);

        // Check if the data structure is true
        if (!validateProduct.success) {
          console.error(validateProduct.error);
          return;
        }
        //Access the data
        console.log(validateProduct.data.name);

        /**
         * ZOD validate data
         * Approach 1 using try catch
         *  try {
          // Parse 3rd party data into designed schema
          const validateProduct = productSchema.parse(product);
          console.log(validateProduct);
        } catch (err) {
          if (err instanceof z.ZodError) {
            console.log(err);
          }
        }
         */
      });
  }, []);

  return (
    <>
      <h1>Products</h1>
    </>
  );
}
