"use client";
import Image from "next/image";
import Link from "next/link";
import { useSession, signIn, signOut, getProviders } from "next-auth/react";
import { useEffect, useState } from "react";

const Nav = () => {
  const [providers, setProviders] = useState(null);
  const [openMenu, setopenMenu] = useState(false);
  const { data: session } = useSession();

  useEffect(() => {
    const setUpProviders = async () => {
      const res = await getProviders();
      setProviders(res);
    };
    setUpProviders();
  }, []);

  const open = () => {
    setopenMenu(!openMenu);
  };

  return (
    <nav className="flex-between px-6 sticky top-0">
      <Link href={"/"} className="flex gap-2 flex-center py-2   ">
        <Image
          src={"/assets/pic.png"}
          width={40}
          height={40}
          alt="App"
          className="object-contain rounded-full"
        />
        <div className="logo_text">menu</div>
      </Link>
      <div className="sm:flex hidden">
        {session?.user ? (
          <div className="flex gap-3 md:gap-5">
            <Link href={"/create-prompt"} className="black_btn">
              Create post
            </Link>
            <button onClick={signOut} className="outline_btn">
              Sign out
            </button>
            <Link href={"profile"}>
              <Image
                src={session?.user?.image}
                width={40}
                height={40}
                alt="user"
                className="rounded-full"
              />
            </Link>
          </div>
        ) : (
          <div>
            {providers &&
              Object.values(providers).map((provider) => (
                <button
                  key={provider.name}
                  onClick={() => signIn(provider.id)}
                  className="black_btn"
                >
                  Sign In
                </button>
              ))}
          </div>
        )}
      </div>

      <div className="sm:hidden flex relative">
        {session?.user ? (
          <>
            <Link href={"profile"} onMouseEnter={() => setopenMenu(true)}>
              <Image
                src={session?.user?.image}
                width={40}
                height={40}
                alt="user"
                className="rounded-full"
              />
            </Link>
            <div
              onMouseLeave={() => setopenMenu(false)}
              className={`${
                openMenu ? "flex" : "hidden"
              } flex-col justify-center items-center gap-3 absolute right-0 w-[200px] bg-white py-2 top-12`}
            >
              <Link href={"/create-prompt"} className="black_btn">
                Create post
              </Link>
              <button onClick={signOut} className="outline_btn">
                Sign out
              </button>
            </div>
          </>
        ) : (
          <>
            {providers &&
              Object.values(providers).map((provider) => (
                <button
                  key={provider.name}
                  onClick={() => signIn(provider.id)}
                  className="black_btn"
                >
                  Sign In
                </button>
              ))}
          </>
        )}
      </div>
    </nav>
  );
};

export default Nav;
