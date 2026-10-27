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

import { upperFirstLetter } from "@/utils/str.js";

function RegistrationForm() {
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    defaultValues: {
      nome: "",
      celular: "55",
      cidade: "",
      perguntaConhecerPlanos: "",
      perguntaAutorizarContato: "",
    },
  });

  const onSubmit = (data) => {
    console.log(data);
    addParticipante(data);
  };

  return (
    <Card>
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
          <Controller
            name="nome"
            control={control}
            rules={{
              required: "Campo obrigatório!",
              validate: "Digite um nome válido!",
            }}
            render={({ field, fieldState }) => (
              <div>
                <Field>
                  <FieldLabel>Nome</FieldLabel>
                  <Input
                    {...field}
                    onChange={(e) =>
                      field.onChange(upperFirstLetter(e.target.value))
                    }
                    type="text"
                  ></Input>
                </Field>

                <p className="text-xs text-destructive mt-1">
                  {fieldState.error?.message}
                </p>
              </div>
            )}
          ></Controller>

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
            rules={{
              required: "Campo obrigatório!",
              validate: "Digite um nome de cidade válido!",
            }}
            render={({ field, fieldState }) => (
              <div>
                <Field>
                  <FieldLabel>Cidade</FieldLabel>
                  <Input
                    {...field}
                    onChange={(e) =>
                      field.onChange(upperFirstLetter(e.target.value))
                    }
                  ></Input>
                </Field>

                <p className="text-xs text-destructive mt-1">
                  {fieldState.error?.message}
                </p>
              </div>
            )}
          ></Controller>

          <Controller
            name="perguntaConhecerPlanos"
            control={control}
            rules={{
              required: "Campos obrigatório!",
              validate: "Selecione um campo válido!",
            }}
            render={({ field, fieldState }) => (
              <div>
                <Field>
                  <FieldLabel>
                    Você teria interesse em receber informações sobre os planos
                    de saúde da Unimed Cariri?
                  </FieldLabel>

                  <RadioGroup
                    value={field.value}
                    onValueChange={field.onChange}
                    className="grid grid-cols-2"
                  >
                    <FieldLabel>
                      <Field orientation="horizontal">
                        <FieldContent>
                          <FieldTitle>Sim, tenho interesse.</FieldTitle>
                        </FieldContent>
                        <RadioGroupItem
                          value={"tem interesse"}
                        ></RadioGroupItem>
                      </Field>
                    </FieldLabel>

                    <FieldLabel>
                      <Field orientation="horizontal">
                        <FieldContent>
                          <FieldTitle>Não tenho interesse.</FieldTitle>
                        </FieldContent>
                        <RadioGroupItem
                          value={"não tem interesse"}
                        ></RadioGroupItem>
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

                <p className="text-xs text-destructive mt-1">
                  {fieldState.error?.message}
                </p>
              </div>
            )}
          ></Controller>

          <Controller
            name="perguntaAutorizarContato"
            control={control}
            rules={{
              required: "Campos obrigatório!",
              validate: "Selecione um campo válido!",
            }}
            render={({ field, fieldState }) => (
              <div>
                <Field>
                  <FieldLabel>
                    Você autoriza a equipe da Unimed Cariri a entrar em contato
                    para apresentar informações sobre planos de saúde e
                    possíveis propostas comerciais?
                  </FieldLabel>

                  <RadioGroup
                    value={field.value}
                    onValueChange={field.onChange}
                    className="grid grid-cols-2"
                  >
                    <FieldLabel>
                      <Field orientation="horizontal">
                        <FieldContent>
                          <FieldTitle>Sim</FieldTitle>
                        </FieldContent>
                        <RadioGroupItem value={"sim"}></RadioGroupItem>
                      </Field>
                    </FieldLabel>

                    <FieldLabel>
                      <Field orientation="horizontal">
                        <FieldContent>
                          <FieldTitle>Não</FieldTitle>
                        </FieldContent>
                        <RadioGroupItem value={"não"}></RadioGroupItem>
                      </Field>
                    </FieldLabel>
                  </RadioGroup>
                </Field>

                <p className="text-xs text-destructive mt-1">
                  {fieldState.error?.message}
                </p>
              </div>
            )}
          ></Controller>
        </form>
      </CardContent>

      <CardFooter className="bg-surface">
        <Button type="submit" className="w-full" form="form-login">
          Cadastrar
        </Button>
      </CardFooter>
    </Card>
  );
}

export default RegistrationForm;
