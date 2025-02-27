"use client";

import React, { createContext, useEffect, useState } from "react";
import { IActionData } from "@/models/action-data.model";
import { IResume } from "@/models/resume.model";
import { IProfile } from "@/models/profile.model";

type ProfileContextType = {
  profile: Partial<IProfile>;
  actionData: IActionData;
  resumeData: IResume[];
  isFinished: boolean;
  updateProfile: (newProfile: Partial<IProfile>) => void;
  setActionData: (actionData: IActionData) => void;
  setResumeData: (resumeData: IResume[]) => void;
  setIsFinished: (isFinished: boolean) => void;
};

const ProfileContext = createContext<ProfileContextType>({
  profile: {},
  actionData: {
    imagePath: "",
    nextStep: "",
    previousStep: "",
    title: "",
    questionTitle: "",
    description: "",
  },
  resumeData: [],
  isFinished: false,
  updateProfile: () => {},
  setActionData: () => {},
  setResumeData: () => {},
  setIsFinished: () => {},
});

export const ProfileProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [profile, setProfileState] = useState<Partial<IProfile>>(() => {
    const storedProfile =
      typeof window !== "undefined" && localStorage.getItem("profile");
    return storedProfile ? JSON.parse(storedProfile) : {};
  });

  const [actionData, setActionDataState] = useState<IActionData>(() => {
    const storedActionData =
      typeof window !== "undefined" && localStorage.getItem("actionData");
    return storedActionData
      ? JSON.parse(storedActionData)
      : {
          imagePath: "",
          nextStep: "",
          previousStep: "",
          title: "",
          questionTitle: "",
          description: "",
        };
  });

  const [resumeData, setResumeData] = useState<IResume[]>([]);
  const [isFinished, setIsFinished] = useState(false);

  const updateProfile = (newProfile: Partial<IProfile>) => {
    setProfileState(newProfile);
    localStorage.setItem("profile", JSON.stringify(newProfile));
  };

  const setActionData = (newActionData: IActionData) => {
    setActionDataState(newActionData);
    localStorage.setItem("actionData", JSON.stringify(newActionData));
  };

  // Sync local state with localStorage
  useEffect(() => {
    const storedProfile =
      typeof window !== "undefined" && localStorage.getItem("profile");
    if (storedProfile) {
      setProfileState(JSON.parse(storedProfile));
    }

    const storedActionData =
      typeof window !== "undefined" && localStorage.getItem("actionData");
    if (storedActionData) {
      setActionDataState(JSON.parse(storedActionData));
    }
  }, []);

  return (
    <ProfileContext.Provider
      value={{
        profile,
        resumeData,
        updateProfile,
        actionData,
        isFinished,
        setActionData,
        setResumeData,
        setIsFinished,
      }}
    >
      {children}
    </ProfileContext.Provider>
  );
};

export const useProfile = () => React.useContext(ProfileContext);
