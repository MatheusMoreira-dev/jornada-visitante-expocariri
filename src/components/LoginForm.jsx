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
import { Field, FieldLabel } from "@/components/ui/field";

import { CheckCircle, CircleX, LoaderCircle } from "lucide-react";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import { cadastrar } from "@/services/api";
import { useForm, Controller } from "react-hook-form";

import { upperFirstLetter } from "@/utils/str.js";
import { useState } from "react";
import { replace, useNavigate } from "react-router";

function ModalStatus({ modalContent, modalOpen, setModalOpen }) {
  const Icon = modalContent?.icon;

  return (
    <Dialog open={modalOpen} onOpenChange={setModalOpen}>
      <DialogContent className="h-48">
        {modalContent && modalContent.type != "loading" ? (
          <div className="flex flex-col justify-center items-center text-center">
            <Icon
              className={`mb-2 size-8 ${modalContent.type == "success" ? "text-primary" : "text-quaternary"}`}
            ></Icon>
            <DialogTitle className="mb-5">{modalContent.title}</DialogTitle>
            <DialogDescription>{modalContent.description}</DialogDescription>
          </div>
        ) : (
          <div className="flex flex-col justify-center items-center text-center">
            <LoaderCircle className="size-8 animate-spin text-primary"></LoaderCircle>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
}

function LoginForm() {
  const navigate = useNavigate();
  const [modalOpen, setModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState(null);

  const onSubmit = async (data) => {
    setModalOpen(true);
    setModalContent({ type: "loading" });

    try {
      await cadastrar({ data });
      setModalContent({
        icon: CheckCircle,
        title: "Cadastro concluído!",
        description: "Seus dados foram cadastrados com sucesso.",
        type: "success",
      });

      setTimeout(() => navigate("/home", { replace: true }), 1500);
    } catch (err) {
      setModalContent({
        icon: CircleX,
        title: "Erro no cadastro",
        description: err.message || "Não foi possível realizar o cadastro.",
        type: "error",
      });
    }
  };

  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    defaultValues: {
      nome: "",
      celular: "55",
      cidade: "",
      conhecerPlanos: "",
      autorizaContato: "",
    },
  });

  return (
    <div>
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
          </form>
        </CardContent>

        <CardFooter className="bg-surface">
          <Button type="submit" className="w-full" form="form-login">
            Entrar
          </Button>
        </CardFooter>
      </Card>

      <ModalStatus
        modalContent={modalContent}
        modalOpen={modalOpen}
        setModalOpen={setModalOpen}
      ></ModalStatus>
    </div>
  );
}

export default LoginForm;
