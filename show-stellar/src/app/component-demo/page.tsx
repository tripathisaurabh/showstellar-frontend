// app/counter/page.tsx (or a component used within a client component)
"use client";
import { Button } from "@/components/ui/button";
import { useCounterStore } from "@/components/zustand_store/simple_useCase";
import { useEffect, useState } from "react";
import { getCookie, setCookie } from "cookies-next";
import { useRouter } from "next/navigation";
import Container from "@/components/reusable_components/Container";

const DemoComponent = () => {
  const count = useCounterStore((state) => state.count);
  const increment = useCounterStore((state) => state.increment);
  const decrement = useCounterStore((state) => state.decrement);
  const [cookieValue, setCookieValue] = useState<string | undefined>();
  const router = useRouter();

  useEffect(() => {
    const fetchCookie = async () => {
      const value = await getCookie("stellar");
      setCookieValue(value as string | undefined);
    };
    fetchCookie();
  }, []);

  const value = "ShowStellar";

  return (
    <Container className="flex flex-col min-h-screen items-start pl-8 pt-5 justify-start bg-zinc-50 font-sans dark:bg-black">
      <div>
        <h2 className="text-2xl font-bold">
          Zustand Usage (look for file simple_useCase.ts)
        </h2>
        <p>Count: {count}</p>
        <div className="flex flex-row gap-4 pt-2">
          <Button onClick={increment}>Increment</Button>
          <Button onClick={decrement}>Decrement</Button>
        </div>
      </div>

      <div className="pt-5">
        <h2 className="text-2xl font-bold">Cookie Usage</h2>
        <Button
          onClick={() => {
            setCookie("stellar", value, { maxAge: 60 * 60 * 24 });
            window.location.reload();
          }}>
          setCookie
        </Button>
        <p>Cookie Value: {cookieValue}</p>
      </div>
    </Container>
  );
};

export default DemoComponent;
