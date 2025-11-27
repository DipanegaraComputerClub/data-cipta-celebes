"use client";

import { useSession, signOut } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import Link from "next/link";

export default function AdminDashboard() {
  const { data: session, status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (status === "unauthenticated") {
      router.push("/admin/login");
    }
  }, [status, router]);

  if (status === "loading") {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <div className="text-center">
          <div className="mb-4 h-12 w-12 animate-spin rounded-full border-4 border-gray-300 border-t-primary"></div>
          <p className="text-gray-600">Loading...</p>
        </div>
      </div>
    );
  }

  if (!session) {
    return null;
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Header */}
      <header className="border-b border-gray-200 bg-white shadow-sm dark:border-gray-700 dark:bg-gray-800">
        <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
                Admin Dashboard
              </h1>
              <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">
                Welcome, <span className="font-semibold">{session.user?.name}</span>
              </p>
            </div>
            <div className="flex flex-col gap-2 sm:flex-row sm:gap-3">
              <Link
                href="/"
                className="inline-flex items-center justify-center gap-2 rounded-lg border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm transition-colors hover:bg-gray-50 dark:border-gray-600 dark:bg-gray-700 dark:text-gray-300 dark:hover:bg-gray-600"
              >
                ← Back Home
              </Link>
              <button
                onClick={() => signOut({ callbackUrl: "/admin/login" })}
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-red-600 px-4 py-2 text-sm font-medium text-white shadow-md transition-all hover:bg-red-700 active:scale-95"
              >
                Sign Out
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        {/* Stats Cards */}
        <div className="mb-8 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {[
            { label: "Blogs", value: "5", icon: "📝", color: "blue" },
            { label: "Projects", value: "5", icon: "🚀", color: "purple" },
            { label: "Testimonials", value: "5", icon: "⭐", color: "yellow" },
            { label: "Clients", value: "5", icon: "👥", color: "green" },
          ].map((stat) => (
            <div
              key={stat.label}
              className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm transition-all hover:shadow-md dark:border-gray-700 dark:bg-gray-800"
            >
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-xs font-medium uppercase text-gray-600 dark:text-gray-400">
                    {stat.label}
                  </p>
                  <p className="mt-2 text-2xl font-bold text-gray-900 dark:text-white">
                    {stat.value}
                  </p>
                </div>
                <div className="text-3xl">{stat.icon}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Management Sections */}
        <div>
          <h2 className="mb-6 text-xl font-bold text-gray-900 dark:text-white">
            Management Sections
          </h2>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {[
              { title: "Manage Blogs", href: "/admin/blogs", icon: "📝" },
              { title: "Manage Projects", href: "/admin/projects", icon: "🚀" },
              { title: "Manage Testimonials", href: "/admin/testimonials", icon: "⭐" },
              { title: "Manage Clients", href: "/admin/clients", icon: "👥" },
              { title: "Manage Packages", href: "/admin/packages", icon: "📦" },
              { title: "Manage Contacts", href: "/admin/contacts", icon: "📞" },
            ].map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="group block rounded-lg border border-gray-200 bg-white p-6 shadow-sm transition-all hover:border-primary hover:shadow-lg dark:border-gray-700 dark:bg-gray-800 dark:hover:border-blue-500"
              >
                <div className="mb-3 text-4xl group-hover:scale-110 transition-transform">
                  {item.icon}
                </div>
                <h3 className="text-base font-semibold text-gray-900 transition-colors group-hover:text-primary dark:text-white dark:group-hover:text-blue-400">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
                  View and manage your {item.title.toLowerCase()}
                </p>
                <div className="mt-4 flex items-center text-xs font-medium text-primary group-hover:translate-x-1 transition-transform">
                  <span>Go to →</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
