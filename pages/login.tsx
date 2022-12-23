import Head from "next/head";
import Image from "next/image";
import logo from "../assets/logo.svg";
import LandingBG from "../assets/landing-bg.webp";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { SubmitHandler } from "react-hook-form/dist/types";
import useAuth from "../hooks/useAuth";

interface Inputs {
  email: string;
  password: string;
}

const Login = () => {
  const [login, setLogin] = useState(false);
  const { signIn, signUp } = useAuth();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = async ({ email, password }) => {
    if (login) {
      await signIn(email, password);
    } else {
      await signUp(email, password);
    }
  };

  return (
    <div className="relative flex h-screen flex-col bg-black md:items-center md:justify-center md:bg-transparent">
      <Head>
        <title>Netflix</title>
        <link rel="stylesheet" href="/favicon.ico" />
      </Head>
      <Image
        className="-z-10 !hidden opacity-60 sm:!inline"
        src={LandingBG}
        fill
        alt="login-landing-bg"
      />
      <Image
        width={150}
        height={150}
        className="absolute left-4 top-4 cursor-pointer object-contain md:left-10 md:top-6"
        src={logo}
        alt="logo"
      />

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="relative mt-24 space-y-8 rounded bg-black/75 py-10 px-6 md:mt-0 md:max-w-md md:px-14"
      >
        <h1 className="text-4xl font-semibold">Sign In</h1>
        <div className="space-y-4">
          <label className="inline-block w-full">
            <input
              className="input"
              type="email"
              placeholder="Email"
              {...register("email", { required: true })}
            />
            {errors.email && (
              <p className="p-1 text-[13px] font-light text-orange-500">
                Please enter a valid email.{" "}
              </p>
            )}
          </label>
          <label className="inline-block w-full">
            <input
              className="input"
              type="password"
              placeholder="Password"
              {...register("password", { required: true })}
            />
            {errors.password && (
              <p className="p-1 text-[13px] font-light text-orange-500">
                Please enter a valid password.
              </p>
            )}
          </label>
        </div>
        <button
          onClick={() => setLogin(true)}
          className="w-full rounded bg-[#e50914] py-3 font-semibold"
        >
          Sign In
        </button>
        <div className="text-[gray]">
          <span>New to Netflix?</span>
          <button
            onClick={() => setLogin(false)}
            type="submit"
            className="text-white hover:underline"
          >
            Sign up now
          </button>
        </div>
      </form>
    </div>
  );
};

export default Login;
