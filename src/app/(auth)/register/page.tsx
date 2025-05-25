import RegisterForm from '@/features/register';

export default function RegisterPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-black p-8 rounded shadow-md w-full max-w-lg">
        <h1 className="text-2xl font-semibold mb-6 text-center">Register</h1>
        <RegisterForm />
      </div>
    </div>
  );
}
