'use client';

import { registerSchema } from '@/shared/schemas/registerSchema';
import { zodResolver } from '@hookform/resolvers/zod';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import type { z } from 'zod';

type FormData = z.infer<typeof registerSchema>;

export default function RegisterForm() {
  const [serverError, setServerError] = useState<{ [key: string]: string[] }>(
    {},
  );

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormData>({
    resolver: zodResolver(registerSchema),
  });

  const onSubmit = async (data: FormData) => {
    setServerError({});
    const formData = new FormData();
    formData.append('email', data.email);
    formData.append('password', data.password);
    formData.append('confirmPassword', data.confirmPassword);

    const res = await fetch('/api/auth/register', {
      method: 'POST',
      body: formData,
    });

    const result = await res.json();

    if (result.error) {
      setServerError(result.error);
    } else {
      alert('Registration successful!');
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="space-y-4 max-w-md mx-auto"
    >
      <div>
        <label htmlFor="email">Email</label>
        <input {...register('email')} className="border p-2 w-full" />
        {errors.email && <p className="text-red-500">{errors.email.message}</p>}
        {serverError.email && (
          <p className="text-red-500">{serverError.email.join(', ')}</p>
        )}
      </div>

      <div>
        <label htmlFor="password">Password</label>
        <input
          type="password"
          {...register('password')}
          className="border p-2 w-full"
        />
        {errors.password && (
          <p className="text-red-500">{errors.password.message}</p>
        )}
      </div>

      <div>
        <label htmlFor="password">Confirm Password</label>
        <input
          type="password"
          {...register('confirmPassword')}
          className="border p-2 w-full"
        />
        {errors.confirmPassword && (
          <p className="text-red-500">{errors.confirmPassword.message}</p>
        )}
        {serverError.confirmPassword && (
          <p className="text-red-500">
            {serverError.confirmPassword.join(', ')}
          </p>
        )}
      </div>

      <button
        disabled={isSubmitting}
        className="bg-blue-600 text-white py-2 px-4 rounded"
      >
        {isSubmitting ? 'Registering...' : 'Register'}
      </button>
    </form>
  );
}
