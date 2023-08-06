"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import axios from "axios";

import { Button } from "../../ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../../ui/form";
import { Input } from "../../ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../../ui/select";
import { useMutation } from "react-query";
import { CheckCircle, CircleNotch } from "@phosphor-icons/react";
import { useEffect, useState } from "react";

const FormSchema = z.object({
  firstName: z.string().min(2, {
    message: "first name must be at least 2 characters.",
  }),
  lastName: z.string().min(2, {
    message: "last name must be at least 2 characters.",
  }),
  email: z.string().email("provide valid email"),
  role: z.string({
    required_error: "Please select an type.",
  }),
});

export default function FormJoin() {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
  });

  const [showMessage, setShowMessage] = useState(false);

  const { mutate, data, isLoading } = useMutation(
    (data: z.infer<typeof FormSchema>) =>
      axios.post(`${import.meta.env.VITE_JOIN_URL}/api/join`, data),
  );

  function onSubmit(data: z.infer<typeof FormSchema>) {
    mutate(data);
  }

  useEffect(() => {
    if (data?.data.code === 200) setShowMessage(true);
    if (data?.data.code === 401)
      form.setError("email", {
        type: "validate",
        message: "This email has been used before",
      });
  }, [data, form]);

  return showMessage ? (
    <div className="flex flex-col items-center rounded-xl bg-tertiary-7 p-8 pb-12">
      <div className="mb-6 text-7xl text-primary">
        <CheckCircle weight="fill" />
      </div>
      <h3 className="mb-4 text-center text-xl font-bold text-tertiary-1">
        Thank you for joining the SellSource community! 🎉
      </h3>
      <p className="w-10/12 text-center text-sm leading-relaxed text-tertiary-2">
        We're excited to have you on board. Expect exclusive software offers,
        exciting updates, and valuable insights straight to your inbox. Your
        software journey starts now - welcome to the SellSource family!
      </p>
    </div>
  ) : (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex flex-col gap-4 max-md:gap-2"
      >
        <div className="grid grid-cols-2 gap-4 max-md:gap-2">
          <FormField
            control={form.control}
            name="firstName"
            render={({ field }) => (
              <FormItem>
                <FormLabel className=" text-tertiary-3">First name</FormLabel>
                <FormControl>
                  <Input placeholder="Michael" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="lastName"
            render={({ field }) => (
              <FormItem>
                <FormLabel className=" text-tertiary-3">Last name</FormLabel>
                <FormControl>
                  <Input placeholder="Sutu" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel className=" text-tertiary-3">Email</FormLabel>
              <FormControl>
                <Input placeholder="Michael" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="role"
          render={({ field }) => (
            <FormItem>
              <FormLabel className=" text-tertiary-3">
                How would you describe yourself?
              </FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Select a type" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value="buyer">Buyer</SelectItem>
                  <SelectItem value="developer">Seller</SelectItem>
                  <SelectItem value="both">both</SelectItem>
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button
          size={"lg"}
          type="submit"
          className="mt-6 flex w-full items-center gap-2"
          disabled={isLoading}
        >
          {isLoading ? (
            <>
              <div className=" animate-spin">
                <CircleNotch />
              </div>{" "}
              loading
            </>
          ) : (
            "Join for free"
          )}
        </Button>
      </form>
    </Form>
  );
}
