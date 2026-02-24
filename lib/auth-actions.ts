"use server"; // Tell Next.js this runs only on the server

//2 funtions to call when user sign in and logOut
import { signIn, signOut } from "@/auth";

export const login = async () => {
  //Only through github and a redirect url(Where to if github login finalizes)
  return signIn("github", { redirectTo: "/" });
};

export const logout = async () => {
  return signOut({ redirectTo: "/" });
};
