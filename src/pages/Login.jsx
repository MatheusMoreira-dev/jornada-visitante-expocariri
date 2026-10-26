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
import {
  Field,
  FieldLabel,
  FieldContent,
  FieldTitle,
} from "@/components/ui/field";

import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

import { addParticipante } from "@/services/api";
import { useForm, Controller } from "react-hook-form";

function Login() {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({ defaultValues: { nome: "", celular: "" } });

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <Card className="bg-surface w-full max-w-sm absolute top-1/2 left-1/2 -translate-1/2">
      <CardHeader>
        <CardTitle className="text-primary-text font-bold">
          Participe do nosso Sorteio!
        </CardTitle>
        <CardDescription>
          Entre em nosso site e aproveite benefícios exclusivos!
        </CardDescription>
      </CardHeader>

      <CardContent className="py-3">
        <form
          id="form-login"
          onSubmit={handleSubmit(onSubmit)}
          className="grid gap-4"
        >
          <Field>
            <FieldLabel>Nome</FieldLabel>
            <Input
              type="text"
              {...register("nome", { required: "Digite o seu nome completo!" })}
            ></Input>
          </Field>

          <Controller
            name="celular"
            control={control}
            rules={{
              required: "Digite o seu núm. de celular!",
              validate: (value) =>
                /^\d{13}$/.test(value) || "Digite um celular válido com DDD.",
            }}
            render={({ field, fieldState }) => (
              <div>
                <Field>
                  <FieldLabel>Whatsapp</FieldLabel>
                  <PhoneInput
                    {...field}
                    placeholder="+xx (xx) xxxxx-xxxx"
                  ></PhoneInput>
                </Field>

                <p className="text-xs text-destructive mt-1">
                  {fieldState.error?.message}
                </p>
              </div>
            )}
          ></Controller>

          <Controller
            name="cidade"
            control={control}
            rules={{ required: "Campo obrigatório!" }}
            render={({ field }) => (
              <Field>
                <FieldLabel>Cidade</FieldLabel>
                <Input {...field}></Input>
              </Field>
            )}
          ></Controller>

          <Field>
            <FieldLabel>
              Você teria interesse em conhecer as opções de planos de saúde da
              Unimed Cariri?
            </FieldLabel>

            <RadioGroup className="grid grid-cols-2">
              <FieldLabel>
                <Field orientation="horizontal">
                  <FieldContent>
                    <FieldTitle>Sim, tenho interesse.</FieldTitle>
                  </FieldContent>
                  <RadioGroupItem value={"tem interesse"}></RadioGroupItem>
                </Field>
              </FieldLabel>

              <FieldLabel>
                <Field orientation="horizontal">
                  <FieldContent>
                    <FieldTitle>Não tenho interesse.</FieldTitle>
                  </FieldContent>
                  <RadioGroupItem value={"não tem interesse"}></RadioGroupItem>
                </Field>
              </FieldLabel>

              <FieldLabel className="col-span-2 justify-self-center">
                <Field orientation="horizontal">
                  <FieldContent>
                    <FieldTitle>Já possuo plano de saúde.</FieldTitle>
                  </FieldContent>
                  <RadioGroupItem value={"já possue"}></RadioGroupItem>
                </Field>
              </FieldLabel>
            </RadioGroup>
          </Field>

          <Field>
            <FieldLabel>
              Você aceita receber informações sobre planos de saúde e propostas
              comerciais?
            </FieldLabel>

            <RadioGroup className="flex">
              <FieldLabel>
                <Field orientation="horizontal">
                  <FieldContent>
                    <FieldTitle>Sim, autorizo.</FieldTitle>
                  </FieldContent>
                  <RadioGroupItem value={true}></RadioGroupItem>
                </Field>
              </FieldLabel>

              <FieldLabel>
                <Field orientation="horizontal">
                  <FieldContent>
                    <FieldTitle>Não autorizo.</FieldTitle>
                  </FieldContent>
                  <RadioGroupItem value={false}></RadioGroupItem>
                </Field>
              </FieldLabel>
            </RadioGroup>
          </Field>
        </form>
      </CardContent>

      <CardFooter className="bg-surface">
        <Button type="submit" className="w-full" form="form-login">
          Entrar
        </Button>
      </CardFooter>
    </Card>
  );
}

export default Login;
