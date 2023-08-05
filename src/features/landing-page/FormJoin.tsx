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
import { CircleNotch } from "@phosphor-icons/react";
import { useEffect } from "react";

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

  const { mutate, data, isLoading } = useMutation(
    (data: z.infer<typeof FormSchema>) =>
      axios.post(import.meta.env.VITE_JOIN_URL, data),
  );

  function onSubmit(data: z.infer<typeof FormSchema>) {
    mutate(data);
  }

  useEffect(() => {
    if (data?.data.code === 401)
      form.setError("email", {
        type: "validate",
        message: "This email has been used before",
      });
  }, [data, form]);

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex w-4/6 flex-col gap-4"
      >
        <div className="grid grid-cols-2 gap-4">
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
