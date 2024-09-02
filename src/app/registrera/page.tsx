"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { z, ZodType } from "zod";
import DoneSubmission from "../components/DoneSubmission";
import LoadingIcon from "../components/LoadingIcon";

export type Inputs = {
  parcelID: string;
  name: string;
  weigth: string;
  length: string;
};

const InputsSchema: ZodType = z.object({
  parcelID: z.string().min(2, "SändningsID måste vara minst 10 tecken långt"),
  name: z.string().min(2, "Namn måste vara minst 2 tecken"),
  weigth: z.string().min(2, "Vikt måste vara minst 2 tecken"),
  length: z.string().min(2, "Vikt måste vara minst 2 tecken"),
});

export default function Registrera() {
  const [loading, setLoading] = useState(false);
  const [submission, setSubmission] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const { register, handleSubmit, formState } = useForm<Inputs>({
    resolver: zodResolver(InputsSchema),
  });
  const onSubmit: SubmitHandler<Inputs> = (data) => {
    formState.isSubmitSuccessful && console.log("SUBMITTED!");
    renderFictionalSubmission();
    setLoading(true);
    setSubmission(data);
  };

  console.log(formState.errors);

  const renderFictionalSubmission = () => {
    setTimeout(() => {
      console.log(submission);
      setSubmitted(true);
      setLoading(false);
    }, 2000);
  };

  return (
    <div className="flex flex-col gap-4">
      {loading && <LoadingIcon />}
      {!submitted ? (
        <>
          <h1 className="lg:self-center">REGISTRERA PAKET MANUELLT</h1>
          <form
            className="flex flex-col gap-4 lg:grid lg:grid-cols-2 lg:w-3/5 lg:self-center relative"
            onSubmit={handleSubmit(onSubmit)}
          >
            <div className={`inputBlock `}>
              <h3>Sändnings-ID</h3>
              <input
                type="text"
                className={`${formState.errors.parcelID && "border-2 border-red-300"}`}
                {...register("parcelID")}
              />
              {formState.errors.parcelID && (
                <div className="text-red-500">{formState.errors.parcelID.message}</div>
              )}
            </div>
            <div className="inputBlock">
              <h3>Namn på paket</h3>
              <input
                type="text"
                className={`${formState.errors.name && "border-2 border-red-300"}`}
                {...register("name")}
              />
              {formState.errors.name && (
                <div className="text-red-500">{formState.errors.name?.message}</div>
              )}
            </div>
            <div className="inputBlock">
              <h3>Vikt (gram)</h3>
              <input
                type="text"
                className={`${formState.errors.weigth && "border-2 border-red-300"}`}
                {...register("weigth")}
              />
              {formState.errors.weigth && (
                <div className="text-red-500">{formState.errors.weigth.message}</div>
              )}
            </div>
            <div className="inputBlock">
              <h3>Längd (cm)</h3>
              <input
                type="text"
                className={`${formState.errors.length && "border-2 border-red-300"}`}
                {...register("length")}
              />
              {formState.errors.length && (
                <div className="text-red-500">{formState.errors.length.message}</div>
              )}
            </div>
            <button
              className="w-full bg-[#1A9DD9] rounded-2xl px-2 py-4 text-white font-semibold lg:col-span-2"
              type="submit"
            >
              Registrera
            </button>
          </form>
        </>
      ) : (
        //@ts-ignore
        <DoneSubmission data={submission} />
      )}
    </div>
  );
}
