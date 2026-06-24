"use client";
import { authClient } from "@/lib/auth-client";
import { Check, Eye, EyeSlash } from "@gravity-ui/icons";
import {
  Button,
  Card,
  FieldError,
  Form,
  Input,
  InputGroup,
  Label,
  TextField,
} from "@heroui/react";
import Link from "next/link";
import { useState } from "react";
import { GrGoogle } from "react-icons/gr";
import { toast } from "react-toastify";

export default function LogInPage() {
  const [isVisible, setIsVisible] = useState(false);
  const onSubmit = async (e) => {
    e.preventDefault();

    const email = e.target.email.value;
    const password = e.target.password.value;

    const { data, error } = await authClient.signIn.email({
      email,
      password,
      callbackURL: "/",
    });
    if (error) {
      toast.error(error.message);
      return;
    }
    toast.success("Login Successful!");
  };

  const handleGoogleSingIn = async () => {
    await authClient.signIn.social({
      provider: "google",
    });
  };

  return (
    <Card className="border mx-auto max-w-md py-10 my-5">
      <h1 className="text-center text-2xl font-bold">LogIn</h1>
      <Form className="flex  mx-auto flex-col gap-4" onSubmit={onSubmit}>
        <TextField
          isRequired
          name="email"
          type="email"
          validate={(value) => {
            if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
              return "Please enter a valid email address";
            }

            return null;
          }}
        >
          <Label>Email</Label>
          <Input placeholder="Enter Your Email" />
          <FieldError />
        </TextField>

        <TextField className="w-full max-w-[280px]" name="password">
          <Label>Password</Label>
          <InputGroup>
            <InputGroup.Input
              className="w-full max-w-[280px]"
              type={isVisible ? "text" : "password"}
              name="password"
            />
            <InputGroup.Suffix className="pr-0">
              <Button
                isIconOnly
                aria-label={isVisible ? "Hide password" : "Show password"}
                size="sm"
                variant="ghost"
                onPress={() => setIsVisible(!isVisible)}
              >
                {isVisible ? (
                  <Eye className="size-4" />
                ) : (
                  <EyeSlash className="size-4" />
                )}
              </Button>
            </InputGroup.Suffix>
          </InputGroup>
        </TextField>

        <div className="flex gap-2">
          <Button type="submit">
            <Check />
            Submit
          </Button>
          <Button type="reset" variant="secondary">
            Reset
          </Button>
        </div>
      </Form>
      <p className="text-center mt-4">
        Don't have an account?{" "}
        <Link
          href="/register"
          className="text-orange-500 font-medium hover:underline"
        >
          Register
        </Link>
      </p>
      <p className="text-center mx-auto">Or</p>
      <Button onClick={handleGoogleSingIn} variant="outline" className="w-full">
        <GrGoogle /> Sign In With Google
      </Button>
    </Card>
  );
}
