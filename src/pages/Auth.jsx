import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import RegistrationForm from "@/components/RegistrationForm";
import LoginForm from "@/components/LoginForm";

function Auth() {
  return (
    <Tabs className="w-full max-w-sm mx-auto py-5">
      <TabsList className="sticky top-2">
        <TabsTrigger value="cadastro">Cadastrar</TabsTrigger>
        <TabsTrigger value="login" disabled>
          Entrar
        </TabsTrigger>
      </TabsList>

      <TabsContent value="cadastro">
        <RegistrationForm></RegistrationForm>
      </TabsContent>

      <TabsContent value="login">
        <LoginForm></LoginForm>
      </TabsContent>
    </Tabs>
  );
}

export default Auth;
