import { CircleUserRound } from 'lucide-react';
import { Link } from 'react-router';

import { LoginForm } from './components/form/LoginForm';

function LoginPage() {
  return (
    <main className="mt-5">
      <div className="mx-auto w-full max-w-md space-y-4 overflow-hidden p-4">
        <div className="mx-auto w-fit">
          <CircleUserRound className="text-primary" size={65} />
        </div>

        <h3 className="text-center">Welcome to Chat app!</h3>

        <LoginForm />

        <p className="text-center">
          New User ?{' '}
          <Link to="/register" className="font-semibold hover:text-primary">
            Register
          </Link>
        </p>
      </div>
    </main>
  );
}

export { LoginPage };
