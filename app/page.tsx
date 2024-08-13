"use client";
import { useRouter } from "next/navigation";

export default function Home() {
  const exams = [
    {
      name: "GCP Associate Cloud Engineer Exam",
      link: "/gcp-ace",
    },
    {
      name: "GCP Associate Cloud Engineer Exam",
      link: "/gcp-ace",
    },
    {
      name: "GCP Associate Cloud Engineer Exam",
      link: "/gcp-ace",
    },
    {
      name: "GCP Associate Cloud Engineer Exam",
      link: "/gcp-ace",
    },
  ];

  const router = useRouter();
  return (
    <div className=" min-h-screen w-full flex items-center justify-center">
      <div className=" flex w-full justify-center gap-10">
        {exams.map((exam: any, i: any) => (
          <div
            onClick={() => router.push(exam.link)}
            className=" p-4 border-[1px] hover:border-2 border-gray-400 shadow-md rounded-md hover:shadow-2xl cursor-pointer font-semibold hover:font-bold"
            key={i}
          >
            {exam.name}
          </div>
        ))}
      </div>
    </div>
  );
}
