"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import Image from "next/image";
import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { ZodType, z } from "zod";

type ContactInputs = {
  email: string;
  name: string;
  message: string;
};

const ContactInputsSchema: ZodType = z.object({
  email: z.string().email("Vänligen fyll i en korrekt e-postadress"),
  name: z.string().min(2, "Namn måste vara minst 2 tecken"),
  message: z.string().min(2, "Meddelande kan inte vara så kort...."),
});

export default function Kontakt() {
  const [submitted, setSubmitted] = useState(false);
  const [submittedData, setSubmittedData] = useState("");
  const { register, handleSubmit, formState } = useForm<ContactInputs>({
    resolver: zodResolver(ContactInputsSchema),
  });
  const onSubmit: SubmitHandler<ContactInputs> = (data) => {
    console.log("SUBMITTED!", data);
    setSubmittedData(data.name);
    setSubmitted(!submitted);
  };

  return (
    <>
      {submitted ? (
        <div>
          <h1>Tack!</h1> För att du kontaktar oss{" "}
          <span className="inline-block font-semibold text-2xl">{submittedData}</span>
          <div>
            <h2>CTA</h2>
          </div>
        </div>
      ) : (
        <div className="flex flex-col gap-4 lg:w-3/5 lg:mx-auto">
          <h1 className="lg:self-center">KONTAKT</h1>
          <div className="flex w-full gap-4">
            <section className="lg:w-2/4">
              På <p className="inline-block font-bold">PAK</p> älskar vi våra användare så mycket
              att vi gömt supporten bakom en FAQ som knappast löser ditt problem. Om du trots allt
              vill kontakta oss, fyll i ett formulär som vi kanske läser – någon gång. Våra
              supporttider? Självklart 9-17, för problem uppstår ju aldrig utanför kontorstid, eller
              hur?
            </section>
            <Image
              src={"/prarie.jpg"}
              width={200}
              height={200}
              className="w-2/4 hidden lg:block"
              alt="Image of prarie dog sitting by computer"
            />
          </div>
          <form className="flex flex-col gap-4" onSubmit={handleSubmit(onSubmit)}>
            <div className="inputBlock">
              <p>E-postadress</p>
              <input
                type="text"
                {...register("email")}
                className={`${formState.errors.email && "border-2 border-red-300"}`}
              />
              <div className="text-red-500">{formState.errors.email?.message}</div>
            </div>
            <div className="inputBlock">
              <p>Namn</p>
              <input
                type="text"
                {...register("name")}
                className={`${formState.errors.name && "border-2 border-red-300"}`}
              />
              <div className="text-red-500">{formState.errors.name?.message}</div>
            </div>
            <div className="inputBlock">
              <p>Meddelande</p>
              <textarea
                rows={5}
                {...register("message")}
                className={`${formState.errors.message && "border-2 border-red-300"}`}
              />
              <div className="text-red-500">{formState.errors.message?.message}</div>
            </div>
            <button className="pakButton" type="submit">
              Skicka
            </button>
          </form>
        </div>
      )}
    </>
  );
}
