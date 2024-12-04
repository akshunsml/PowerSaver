import { useState } from 'react';
import AuthForm from '../components/auth/AuthForm';
import { Zap } from 'lucide-react';

export default function Auth() {
  const [authType, setAuthType] = useState<'login' | 'register'>('login');

  const handleSubmit = async (data: any) => {
    console.log('Auth data:', data);
    // TODO: Implement actual authentication
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div className="text-center">
          <Zap className="mx-auto h-12 w-12 text-blue-600" />
          <h2 className="mt-6 text-3xl font-extrabold text-gray-900">
            {authType === 'login' ? 'Sign in to your account' : 'Create your account'}
          </h2>
          <p className="mt-2 text-sm text-gray-600">
            {authType === 'login' ? (
              <>
                Or{' '}
                <button
                  onClick={() => setAuthType('register')}
                  className="font-medium text-blue-600 hover:text-blue-500"
                >
                  create a new account
                </button>
              </>
            ) : (
              <>
                Already have an account?{' '}
                <button
                  onClick={() => setAuthType('login')}
                  className="font-medium text-blue-600 hover:text-blue-500"
                >
                  Sign in
                </button>
              </>
            )}
          </p>
        </div>

        <div className="mt-8">
          <AuthForm type={authType} onSubmit={handleSubmit} />
        </div>
      </div>
    </div>
  );
}