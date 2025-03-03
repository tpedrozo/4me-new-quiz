"use client";
import { useProfile } from "@/contexts/profile-context";
import Logo from "@/components/logo";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { BsStars } from "react-icons/bs";
import Link from "next/link";
import { useMutation } from "@tanstack/react-query";
import { postProfile } from "@/services/post-profile";
import { IProfile } from "@/models/profile.model";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import Loading from "../loading";

export default function Review() {
  const { profile, resumeData, setIsFinished } = useProfile();
  const router = useRouter();

  const { mutateAsync, isPending } = useMutation({
    mutationFn: (data: IProfile) => postProfile(data),
  });
  const handleConfirm = async () => {
    const profileData = {
      ...profile,
      authKey: "11c8f3ba-7e05-11ef-9070-26b5f992b1cd",
    } as IProfile;
    await mutateAsync(profileData, {
      onSuccess: () => {
        router.push("/success");
      },
      onError: () => {
        router.push("/success");
      },
    });
  };

  useEffect(() => {
    setIsFinished(true);
  }, []);

  return (
    <div className="bg-[F5F0EA] px-4">
      <div className="flex flex-col max-w-4xl mx-auto py-10 pb-20">
        <div className="flex justify-center">
          <Logo />
        </div>
        <h1 className="mt-10 text-center text-5xl font-bold bg-gradient-to-r from-black via-[#8F8C89] to-[#8F8C89] inline-block text-transparent bg-clip-text">
          Olá {profile?.name?.split(" ")[0]}, confira seu resumo...
        </h1>
        <div className="flex justify-center mt-3">
          <p className="text-[#252525]">
            Para editar qualquer resposta, basta clicar na resposta que você
            deseja alterar.
          </p>
        </div>

        <div className="flex justify-center mt-8">
          <Button className="flex gap-" onClick={handleConfirm}>
            Confirmar Respostas <BsStars />
          </Button>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-3 gap-10 mt-14">
          {resumeData?.map((item, index) => (
            <div key={index} className={`flex flex-col gap-2`}>
              <Image
                src={item?.imagePath}
                width={310}
                height={310}
                alt="Picture of the author"
                className="rounded-lg"
              />
              <p className="">{item?.question}</p>
              <Link
                href={item?.mainRoute}
                className="bg-[#252525] rounded-md p-3 text-white text-sm flex gap-2"
              >
                <div className="flex items-center">
                  <div className="border w-auto p-1 border-gray-500 rounded-full flex justify-center items-center">
                    <div className="w-2 h-2  bg-white rounded-full"></div>
                  </div>
                </div>
                <p>
                  {Array.isArray(item?.answer)
                    ? item?.answer.join(", ")
                    : item?.answer}
                </p>
              </Link>
            </div>
          ))}
        </div>
      </div>
      {isPending && <Loading />}
    </div>
  );
}
