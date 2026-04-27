import { Button } from '@/components/button';
import { FieldGroup, FieldLabel } from '@/components/field';
import { Input } from '@/components/form';

function Form() {
  return (
    <form className="space-y-4" autoComplete="off">
      <FieldGroup>
        <FieldLabel htmlFor="name">Name :</FieldLabel>
        <Input type="text" id="name" name="name" placeholder="enter your name" />
      </FieldGroup>

      <FieldGroup>
        <FieldLabel htmlFor="email">Email :</FieldLabel>
        <Input type="email" id="email" name="email" placeholder="enter your email" />
      </FieldGroup>

      <FieldGroup>
        <FieldLabel htmlFor="password">Password :</FieldLabel>
        <Input type="password" id="password" name="password" placeholder="enter your password" />
      </FieldGroup>

      <Button disabled={false} type="submit" className="w-full">
        Register
      </Button>
    </form>
  );
}

export { Form };
