import Image from "next/image";
import AuthForm from "./components/AuthFom";

export default function Home() {
  return (
    <div className="flex min-h-full flex-col justify-center py-12 sm:px-6 lg:px-8 bg-gray-100">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <Image
          alt="logo"
          height={48}
          width={48}
          className="mx-auto w-auto"
          src="/images/logo.png"
        />
        <h2 className="mt-2 text-center text-gray-900 tracking-tight font-bold text-3xl ">
          Sign In to your account
        </h2>
      </div>
      {/* Auth Form */}
      <AuthForm />
    </div>
  );
}
