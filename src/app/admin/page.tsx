"use client";

import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function AdminPage() {
  const { data: session, status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (status === "loading") return;

    if (status === "unauthenticated") {
      router.push("/admin/login");
    } else if (session) {
      router.push("/admin/dashboard");
    }
  }, [status, session, router]);

  return (
    <div className="flex min-h-screen items-center justify-center">
      <div className="text-center">
        <div className="mb-4 h-12 w-12 animate-spin rounded-full border-4 border-gray-300 border-t-primary mx-auto"></div>
        <p className="text-gray-600">Redirecting...</p>
      </div>
    </div>
  );
}
