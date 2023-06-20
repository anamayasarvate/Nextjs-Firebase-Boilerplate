"use client";
import { useForm, useWatch } from "react-hook-form";
import { useState } from "react";
import Alert from "./Alert";

type FormData = {
  fieldName: string;
};

export default function MyForm() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<FormData>();
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);

  const onSubmit = (data: FormData) => {
    setIsSubmitted(true);
  };

  const fieldName = watch("fieldName");

  return (
    <>
      <Alert fieldName={fieldName} isSubmitted={isSubmitted} />
      <form
        className="flex h-screen flex-col items-center justify-center gap-4"
        onSubmit={handleSubmit(onSubmit)}
      >
        <input
          {...register("fieldName", { required: true })}
          type="text"
          placeholder="Enter your field value"
          className="input input-bordered input-info w-full max-w-xs"
        />
        {errors.fieldName && (
          <span className="text-red-400">This field is required</span>
        )}
        <button type="submit" className="btn btn-outline btn-success">
          Submit
        </button>
      </form>
    </>
  );
}
