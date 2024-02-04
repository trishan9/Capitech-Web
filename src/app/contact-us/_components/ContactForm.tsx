"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import Particles from "@/assets/Particles.svg";
import { formSchema } from "./formSchema";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Image from "next/image";
import { useState } from "react";

const ContactForm = () => {
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    try {
      setStatus("loading");
      const res = await fetch("/api/usermessage", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: values.name,
          contact: values.email,
          message: values.message || "",
        }),
      });
      const result = await res.json();
      if (result.success) {
        setStatus("success");
        alert("Thank you for your interest. We'll contact you soon.");
        form.reset();
      } else {
        alert("Something went wrong. Please try again.");
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="relative mx-8 flex flex-col items-center justify-center gap-8 py-24 xl:mx-0 xl:py-48">
      <div className="relative">
        <Image
          src={Particles}
          width={153}
          height={153}
          alt="Particles Element"
          className="absolute -right-16 -top-20 hidden xl:block"
        />

        <Image
          src={Particles}
          width={153}
          height={153}
          alt="Particles Element"
          className="absolute -bottom-20 -left-16 hidden xl:block"
        />

        <div className="relative z-0 flex w-full flex-col items-center justify-center gap-7 rounded-2xl bg-white py-7 shadow-xl sm:w-[500px] md:w-[700px] xl:w-[950px] xl:py-14">
          <p className="border-b-2 border-secondary pb-1 text-2xl font-semibold uppercase text-primary">
            Contact Us
          </p>

          <p className="mt-4 text-xl font-medium">Leave us a message</p>

          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="w-full space-y-4 px-8"
            >
              {["name", "email", "message"].map((fieldName) => (
                <FormField
                  key={fieldName}
                  control={form.control}
                  name={fieldName as "message" | "name" | "email"}
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>
                        {fieldName === "name"
                          ? "Name"
                          : fieldName === "email"
                            ? "Contact"
                            : "Message"}
                      </FormLabel>
                      <FormControl>
                        {fieldName === "message" ? (
                          <Textarea
                            placeholder="Your message goes here..."
                            className="resize-none border-[#B4BEC8]"
                            {...field}
                          />
                        ) : (
                          <Input
                            className="w-full border-[#B4BEC8]"
                            placeholder={
                              fieldName === "email" ? "Phone or Email" : "Name"
                            }
                            {...field}
                          />
                        )}
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              ))}
              <button
                type="submit"
                disabled={status === "loading"}
                className="flex w-full items-center justify-center gap-2 rounded-lg bg-primary px-5 py-3 text-base font-bold text-white transition hover:bg-primary/90 disabled:cursor-not-allowed disabled:opacity-70"
              >
                Send
              </button>
            </form>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
