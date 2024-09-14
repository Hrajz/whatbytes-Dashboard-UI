import Head from "next/head";
import Header from "../components/Header";
import QuickStatistics from "../components/QuickStatistics";
import SyllabusWiseAnalysis from "../components/SyllabusWiseAnalysis";
import QuestionAnalysis from "../components/QuestionAnalysis";
import Sidebar from "@/components/Sidebar";

export default function Home() {
  return (
    <div>
      <Head>
        <title>WhatBytes Dashboard</title>
      </Head>

      <Header />

      <main className=" min-h-screen flex mt-20 bg-white">
        <Sidebar />
        <div className="w-full">
          <p className="m-5 text-black">Skill Test</p>
          <div className="flex m-5 max-[1100px]:flex-col max-[1100px]:m-1">
            <div className="flex w-3/5 flex-col max-[1100px]:w-full">
              <QuickStatistics />
            </div>

            <div className="flex w-2/5 flex-col max-[1100px]:w-full">
              <SyllabusWiseAnalysis />
              <QuestionAnalysis />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
