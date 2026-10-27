import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import RegistrationForm from "@/components/RegistrationForm";

function Auth() {
  return (
    <Tabs className="w-full max-w-sm absolute top-1/2 left-1/2 -translate-1/2">
      <TabsList>
        <TabsTrigger value="cadastro">Cadastrar</TabsTrigger>
        <TabsTrigger value="login">Entrar</TabsTrigger>
      </TabsList>

      <TabsContent value="cadastro">
        <RegistrationForm></RegistrationForm>
      </TabsContent>
    </Tabs>
  );
}

export default Auth;
