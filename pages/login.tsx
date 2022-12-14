import Head from "next/head";
import Image from "next/image";
import logo from "../assets/logo.svg";
import LandingBG from "../assets/landing-bg.webp";

const Login = () => {
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

      <form>
        <h1>Sign In</h1>
        <div>
          <label>
            <input type="email" placeholder="Email" />
          </label>
          <label></label>
        </div>
      </form>
    </div>
  );
};

export default Login;
