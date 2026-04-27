import { Link } from 'react-router';

import { Form } from './components/form/Form';

function RegisterPage() {
  return (
    <main className="mt-5">
      <div className="mx-auto w-full max-w-md space-y-4 overflow-hidden p-4">
        <h3 className="text-center">Welcome to Chat app!</h3>

        <Form />

        <p className="text-center">
          Already have account ?
          <Link to="/email" className="font-semibold hover:text-primary">
            Login
          </Link>
        </p>
      </div>
    </main>
  );
}

export { RegisterPage };
