import {
  Card,
  CardHeader,
  CardTitle,
  CardFooter,
  CardContent,
  CardDescription,
} from "@/components/ui/card";

import PhoneInput from "@/components/ui/PhoneInput";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

function Login() {
  return (
    <Card className="bg-surface w-full max-w-sm absolute top-1/2 left-1/2 -translate-1/2">
      <CardHeader>
        <CardTitle className="text-primary-text font-bold">Cadastrar</CardTitle>
        <CardDescription>
          Entre em nosso site e aproveite benefícios exclusivos!
        </CardDescription>
      </CardHeader>

      <CardContent className="py-3">
        <form className="grid gap-4">
          <Input type="text" placeholder="Nome Completo"></Input>
          <PhoneInput placeholder="(xx) xxxxx-xxxx"></PhoneInput>
        </form>
      </CardContent>

      <CardFooter className="bg-surface">
        <Button type="submit" className="w-full">
          Entrar
        </Button>
      </CardFooter>
    </Card>
  );
}

export default Login;
