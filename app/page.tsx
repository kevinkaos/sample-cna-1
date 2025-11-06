"use client";

import { useNextJSApollo } from "@apollo/sdk";

export default function Home() {
  const { locale: sdkLocale } = useNextJSApollo();

  const locale = sdkLocale?.language ?? "zh-tw";

  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans bg-white">
      <h1 className="text-2xl text-red-500 flex flex-col items-center justify-center">
        <div className="text-center">
          {locale === "zh-tw"
            ? "大家好，我是大前台1號"
            : "Hello, I am the front desk 1"}
        </div>
        <div className="text-center font-bold">
          {locale === "zh-tw" ? "首頁" : "Home"}
        </div>
      </h1>
    </div>
  );
}
