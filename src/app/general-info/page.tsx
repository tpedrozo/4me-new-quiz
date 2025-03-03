"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { zodResolver } from "@hookform/resolvers/zod";
import { Controller, useForm } from "react-hook-form";
import { formatInputPhone } from "@/utils/format-input-phone";
import { profileSchema } from "@/utils/profile-schema";
import { IProfile } from "@/models/profile.model";
import { useProfile } from "@/contexts/profile-context";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import ProgressBar from "@/components/progress-bar";
import { brazilianZipcode } from "@/utils/format-brazilian-zipcode";
import { useQuery } from "@tanstack/react-query";
import { getAddress } from "@/services/get-address";
import TextField from "@/components/text-field";

export default function GeneralInfo() {
  const {
    register,
    handleSubmit,
    setValue,
    control,
    watch,
    reset,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(profileSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      zipCode: "",
      address: "",
    },
    mode: "onBlur",
  });

  const watchZipCode = watch("zipCode");

  const [enableToSearch, setEnableToSearch] = useState(false);

  const { data: addressData, isSuccess } = useQuery({
    queryKey: ["address", watchZipCode],
    queryFn: () =>
      getAddress(watchZipCode.replace("-", "").trim() as unknown as string),
    staleTime: Infinity,
    enabled: enableToSearch && watchZipCode?.length >= 9,
  });

  const router = useRouter();

  const { profile, updateProfile } = useProfile();

  const getSearchAddress = () => {
    setEnableToSearch(true);
  };

  if (isSuccess && addressData.logradouro) {
    setValue(
      "address",
      `${addressData.logradouro} - ${addressData.bairro} - ${addressData.localidade}/${addressData.uf}`
    );
  }

  const onSubmit = (data: Partial<IProfile>) => {
    updateProfile({ ...profile, ...data });

    router.push("/age");
  };

  useEffect(() => {
    if (profile.name) {
      reset({
        name: profile.name,
        email: profile.email,
        phone: profile.phone,
        zipCode: String(profile.zipCode),
        address: profile.address,
      });
    }
  }, [profile.name]);

  useEffect(() => {
    if (watch("zipCode")?.length >= 9) {
      getSearchAddress();
    } else {
      setEnableToSearch(false);
    }
  }, [watch("zipCode") as string]);

  console.log("errors", errors);

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="pb-10">
      <div className="grid grid-cols-1 lg:grid-cols-2 layout grid-rows-1 relative">
        <div className="w-16 absolute top-5 right-10">
          <ProgressBar percentage={13.34} />
        </div>
        <div className="w-full relative hidden lg:flex">
          <Image
            alt="male-image"
            src={
              profile.gender === "masculino"
                ? "https://images.prismic.io/ignewstpedrozo/ZvoWnrVsGrYSwHWY_gender-male.webp?auto=format,compress"
                : "https://images.prismic.io/4mequizt/Z7_DiZ7c43Q3gSTj_female.png?auto=format,compress"
            }
            className="z-10"
            quality={100}
            fill
            objectFit="cover"
            objectPosition="center"
            priority
          />
        </div>
        <div className="p-6 lg:p-20 bg-[#F5F0EA] w-full flex flex-col justify-center items-center gap-10 py-40 overflow-y-scroll md:overflow-x-auto">
          <div className="flex flex-col gap-4 max-w-sm mx-auto">
            <h3 className="text-[#252525] text-4xl w-full">Olá 👋🏻</h3>
            <h2 className="font-hind text-6xl text-start text-regular bg-gradient-to-r from-black via-[#8F8C89] to-[#8F8C89] inline-block text-transparent bg-clip-text">
              Informe seus dados abaixo{" "}
            </h2>
          </div>
          {/* FORM */}
          <div className="grid grid-cols-1 gap-6 max-w-sm mx-auto w-full">
            <TextField
              placeholder="Nome"
              {...register("name")}
              errorMessage={errors?.name?.message as string}
            />
            <TextField
              placeholder="Email"
              {...register("email")}
              errorMessage={errors?.email?.message as string}
            />

            <Controller
              name="phone"
              control={control}
              render={({ field, formState }) => (
                <TextField
                  placeholder="Telefone"
                  {...field}
                  maxLength={15}
                  errorMessage={formState.errors.phone?.message as string}
                />
              )}
              rules={{
                onChange: (e) => {
                  const formatted = formatInputPhone(e.target.value);
                  setValue("phone", formatted, { shouldValidate: true });
                },
              }}
            />

            <Controller
              name="zipCode"
              control={control}
              render={({ field }) => (
                <TextField
                  placeholder="CEP"
                  {...field}
                  maxLength={9}
                  errorMessage={errors?.zipCode?.message as string}
                />
              )}
              rules={{
                onChange: (e) => {
                  const value = e.target.value;
                  setValue(`zipCode`, brazilianZipcode(value));
                },
              }}
            />

            <TextField placeholder="Endereço" {...register("address")} />

            <Button type="submit" className="w-full">
              Iniciar Personalização
            </Button>
          </div>
        </div>
      </div>
    </form>
  );
}
