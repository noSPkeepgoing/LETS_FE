"use client";

import Button from "@/app/_component/common/atom/Button";
import { useRouter } from "next/navigation";

const HomeHashtags = () => {
  const router = useRouter();
  return (
    <section className="w-full px-6 pb-4">
      <Button
        text="3초만에 내가 원하는 여행 찾기 >"
        styleClass="w-full h-[64px] pl-4 py-5 bg-pink text-white text-left tracking-widest rounded-lg"
        onClickFn={() => router.push("/search-filter")}
      />
    </section>
  );
};

export default HomeHashtags;
