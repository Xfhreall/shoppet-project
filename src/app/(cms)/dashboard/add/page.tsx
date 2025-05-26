'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

import { Button } from '@/shared/components/ui/button';
import { Card, CardContent } from '@/shared/components/ui/card';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/shared/components/ui/form';
import { Input } from '@/shared/components/ui/input';
import { RadioGroup, RadioGroupItem } from '@/shared/components/ui/radio-group';
import { Textarea } from '@/shared/components/ui/textarea';
import { useCreateProduct } from '@/shared/hooks/use-create-product';
import { toast } from 'sonner';

const formSchema = z.object({
  title: z.string().min(1, 'Title is required'),
  description: z.string(),
  price: z.string().min(1, 'Price is required'),
  image_url: z.string().url('Image URL must be valid'),
  category: z.string().min(1),
});

type ProductFormValues = z.infer<typeof formSchema>;

export default function ProductForm() {
  const { mutate, isPending } = useCreateProduct();
  const [imagePreview, setImagePreview] = useState('');
  const form = useForm<ProductFormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: '',
      description: '',
      price: '',
      image_url: '',
      category: '',
    },
  });

  const watchImageUrl = form.watch('image_url');

  useEffect(() => {
    if (watchImageUrl?.startsWith('http')) {
      setImagePreview(watchImageUrl);
    }
  }, [watchImageUrl]);

  const onSubmit = (data: ProductFormValues) => {
    mutate(data, {
      onSuccess: () => {
        toast.success('Product created successfully!');
        form.reset();
        setImagePreview('');
      },
      onError: (error: any) => {
        toast.error(error?.response?.data?.error || '❌ Failed to create product');
      },
    });
  };

  return (
    <Card className="max-w-2xl mx-auto mt-10 shadow-lg rounded-xl border">
      <CardContent className="p-8">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <h2 className="text-2xl font-bold text-center">Add New Product</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <FormField
                  control={form.control}
                  name="title"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Title</FormLabel>
                      <FormControl>
                        <Input placeholder="Product title" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="description"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Description</FormLabel>
                      <FormControl>
                        <Textarea placeholder="Product description" rows={4} {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="price"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Price (IDR)</FormLabel>
                      <FormControl>
                        <Input
                          type="text"
                          placeholder="20000"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="image_url"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Image URL</FormLabel>
                      <FormControl>
                        <Input placeholder="https://..." {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="category"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Category</FormLabel>
                      <FormControl>
                        <RadioGroup
                          onValueChange={field.onChange}
                          defaultValue={field.value}
                          className="grid grid-cols-2 gap-2"
                        >
                          {['Cat', 'Dog', 'Fish', 'Reptile', 'Bird'].map((cat) => (
                            <FormItem key={cat} className="flex items-center space-x-2">
                              <FormControl>
                                <RadioGroupItem value={cat} />
                              </FormControl>
                              <FormLabel className="font-normal">{cat}</FormLabel>
                            </FormItem>
                          ))}
                        </RadioGroup>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <div className="flex items-center justify-center bg-muted rounded-md p-4">
                {imagePreview ? (
                  <img
                    src={imagePreview}
                    alt="Preview"
                    className="w-full h-64 object-contain rounded-md border"
                  />
                ) : (
                  <span className="text-sm text-muted-foreground">Image preview will appear here</span>
                )}
              </div>
            </div>

            <Button type="submit" className="w-full mt-4" disabled={isPending}>
              {isPending ? 'Submitting...' : 'Submit Product'}
            </Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
}
