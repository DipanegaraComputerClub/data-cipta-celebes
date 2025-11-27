"use client";

import { useSession, signOut } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import Link from "next/link";

interface Stats {
  blogs: number;
  projects: number;
  packages: number;
  testimonials: number;
  clients: number;
  contacts: number;
}

export default function AdminDashboard() {
  const { data: session, status } = useSession();
  const router = useRouter();
  const [stats, setStats] = useState<Stats>({
    blogs: 0,
    projects: 0,
    packages: 0,
    testimonials: 0,
    clients: 0,
    contacts: 0,
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (status === "unauthenticated") {
      router.push("/admin/login");
    }
  }, [status, router]);

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const [blogsRes, projectsRes, packagesRes, testimonialsRes, clientsRes, contactsRes] = await Promise.all([
          fetch("/api/blogs"),
          fetch("/api/projects"),
          fetch("/api/packages"),
          fetch("/api/testimonials"),
          fetch("/api/clients"),
          fetch("/api/contacts"),
        ]);

        const blogs = await blogsRes.json();
        const projects = await projectsRes.json();
        const packages = await packagesRes.json();
        const testimonials = await testimonialsRes.json();
        const clients = await clientsRes.json();
        const contacts = await contactsRes.json();

        setStats({
          blogs: Array.isArray(blogs) ? blogs.length : 0,
          projects: Array.isArray(projects) ? projects.length : 0,
          packages: Array.isArray(packages) ? packages.length : 0,
          testimonials: Array.isArray(testimonials) ? testimonials.length : 0,
          clients: Array.isArray(clients) ? clients.length : 0,
          contacts: Array.isArray(contacts) ? contacts.length : 0,
        });
      } catch (error) {
        console.error("Error fetching stats:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchStats();
  }, []);

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

  const statCards = [
    { label: "Blog Posts", count: stats.blogs, icon: "📝", href: "/admin/blogs", color: "from-blue-500 to-blue-600" },
    { label: "Projects", count: stats.projects, icon: "💻", href: "/admin/projects", color: "from-purple-500 to-purple-600" },
    { label: "Packages", count: stats.packages, icon: "💰", href: "/admin/packages", color: "from-green-500 to-green-600" },
    { label: "Testimonials", count: stats.testimonials, icon: "⭐", href: "/admin/testimonials", color: "from-yellow-500 to-yellow-600" },
    { label: "Clients", count: stats.clients, icon: "🤝", href: "/admin/clients", color: "from-pink-500 to-pink-600" },
    { label: "Contacts", count: stats.contacts, icon: "📞", href: "/admin/contacts", color: "from-indigo-500 to-indigo-600" },
  ];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Welcome Banner */}
      <div className="mb-8 rounded-xl bg-gradient-to-r from-primary to-blue-600 p-8 text-white shadow-lg">
        <h1 className="text-3xl font-bold mb-2">Welcome back, {session.user?.name}! 👋</h1>
        <p className="text-blue-100">Here's what's happening with your content today</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 mb-8">
        {statCards.map((card) => (
          <Link key={card.href} href={card.href}>
            <div className={`rounded-lg bg-gradient-to-br ${card.color} p-6 text-white shadow-lg transition-all duration-300 hover:shadow-xl hover:scale-105 cursor-pointer`}>
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold">{card.label}</h3>
                <span className="text-4xl">{card.icon}</span>
              </div>
              <div className="text-4xl font-bold">{loading ? "-" : card.count}</div>
              <p className="text-sm text-white/80 mt-2">Click to manage</p>
            </div>
          </Link>
        ))}
      </div>

      {/* Quick Actions */}
      <div className="rounded-lg bg-white p-8 shadow-lg dark:bg-gray-800">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Quick Actions</h2>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          <Link
            href="/admin/blogs"
            className="flex items-center gap-4 rounded-lg border-2 border-gray-200 p-4 transition-all duration-300 hover:border-primary hover:bg-primary/5 dark:border-gray-700 dark:hover:bg-primary/10"
          >
            <span className="text-3xl">📝</span>
            <div>
              <h3 className="font-semibold text-gray-900 dark:text-white">Manage Blogs</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">Create and edit blog posts</p>
            </div>
          </Link>

          <Link
            href="/admin/projects"
            className="flex items-center gap-4 rounded-lg border-2 border-gray-200 p-4 transition-all duration-300 hover:border-primary hover:bg-primary/5 dark:border-gray-700 dark:hover:bg-primary/10"
          >
            <span className="text-3xl">💻</span>
            <div>
              <h3 className="font-semibold text-gray-900 dark:text-white">Manage Projects</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">Showcase your portfolio</p>
            </div>
          </Link>

          <Link
            href="/admin/packages"
            className="flex items-center gap-4 rounded-lg border-2 border-gray-200 p-4 transition-all duration-300 hover:border-primary hover:bg-primary/5 dark:border-gray-700 dark:hover:bg-primary/10"
          >
            <span className="text-3xl">💰</span>
            <div>
              <h3 className="font-semibold text-gray-900 dark:text-white">Manage Packages</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">Set pricing and plans</p>
            </div>
          </Link>

          <Link
            href="/admin/testimonials"
            className="flex items-center gap-4 rounded-lg border-2 border-gray-200 p-4 transition-all duration-300 hover:border-primary hover:bg-primary/5 dark:border-gray-700 dark:hover:bg-primary/10"
          >
            <span className="text-3xl">⭐</span>
            <div>
              <h3 className="font-semibold text-gray-900 dark:text-white">Manage Testimonials</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">Show client reviews</p>
            </div>
          </Link>

          <Link
            href="/admin/clients"
            className="flex items-center gap-4 rounded-lg border-2 border-gray-200 p-4 transition-all duration-300 hover:border-primary hover:bg-primary/5 dark:border-gray-700 dark:hover:bg-primary/10"
          >
            <span className="text-3xl">🤝</span>
            <div>
              <h3 className="font-semibold text-gray-900 dark:text-white">Manage Clients</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">List your partners</p>
            </div>
          </Link>

          <Link
            href="/admin/contacts"
            className="flex items-center gap-4 rounded-lg border-2 border-gray-200 p-4 transition-all duration-300 hover:border-primary hover:bg-primary/5 dark:border-gray-700 dark:hover:bg-primary/10"
          >
            <span className="text-3xl">📞</span>
            <div>
              <h3 className="font-semibold text-gray-900 dark:text-white">Manage Contact Info</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">Update contact details</p>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
