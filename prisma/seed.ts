import { PrismaClient } from "@prisma/client";
import bcrypt from "bcryptjs";

const prisma = new PrismaClient();

async function main() {
  console.log("🌱 Starting database seeding...");

  // Clear existing data
  await prisma.carouselImage.deleteMany();
  await prisma.contactInfo.deleteMany();
  await prisma.client.deleteMany();
  await prisma.testimonial.deleteMany();
  await prisma.customPackage.deleteMany();
  await prisma.project.deleteMany();
  await prisma.blog.deleteMany();
  await prisma.user.deleteMany();

  // =====================
  // 1. Create Admin User
  // =====================
  const hashedPassword = await bcrypt.hash("Admin@123456", 10);
  const admin = await prisma.user.create({
    data: {
      email: "admin@dataCiptaCelebes.com",
      password: hashedPassword,
      name: "Admin Data Cipta",
      role: "admin",
    },
  });
  console.log("✅ Admin user created:", admin.email);

  // =====================
  // 2. Create Blog Posts
  // =====================
  const blogs = await Promise.all([
    prisma.blog.create({
      data: {
        title: "Memulai Transformasi Digital Bisnis Anda",
        slug: "memulai-transformasi-digital",
        description: "Panduan lengkap untuk memulai perjalanan transformasi digital bisnis Anda dengan strategi yang tepat.",
        content: `<h2>Pendahuluan</h2>
<p>Transformasi digital bukan lagi pilihan, tetapi keharusan bagi setiap bisnis yang ingin tetap kompetitif di era modern ini.</p>
<h2>Langkah-Langkah Transformasi Digital</h2>
<p>1. Analisis kebutuhan bisnis Anda<br/>2. Pilih teknologi yang sesuai<br/>3. Implementasi bertahap<br/>4. Monitoring dan evaluasi</p>`,
        image: "https://images.unsplash.com/photo-1516387938699-a93023171e18?w=800",
        author: "Data Cipta Celebes",
        category: "Digital Transformation",
        tags: JSON.stringify(["digital", "transformasi", "bisnis"]),
      },
    }),
    prisma.blog.create({
      data: {
        title: "5 Teknologi Terkini untuk Bisnis 2024",
        slug: "5-teknologi-terkini-2024",
        description: "Pelajari 5 teknologi terkini yang akan mengubah cara bisnis beroperasi di tahun 2024.",
        content: `<h2>Teknologi Terdepan</h2>
<p>Artificial Intelligence, Cloud Computing, IoT, Blockchain, dan Machine Learning menjadi kunci transformasi digital.</p>`,
        image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800",
        author: "Data Cipta Celebes",
        category: "Technology",
        tags: JSON.stringify(["teknologi", "AI", "cloud"]),
      },
    }),
    prisma.blog.create({
      data: {
        title: "Custom Development vs Template: Mana yang Lebih Baik?",
        slug: "custom-development-vs-template",
        description: "Analisis mendalam tentang perbedaan antara custom development dan menggunakan template aplikasi.",
        content: `<h2>Custom Development</h2>
<p>Custom development memberikan fleksibilitas penuh dan disesuaikan dengan kebutuhan spesifik bisnis Anda.</p>
<h2>Template</h2>
<p>Template lebih cepat dan ekonomis, tetapi dengan keterbatasan fitur.</p>`,
        image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800",
        author: "Data Cipta Celebes",
        category: "Development",
        tags: JSON.stringify(["development", "custom", "template"]),
      },
    }),
    prisma.blog.create({
      data: {
        title: "Keamanan Data: Prioritas Utama Dalam Era Digital",
        slug: "keamanan-data-digital",
        description: "Cara melindungi data bisnis Anda dari ancaman cyber di era digital.",
        content: `<h2>Ancaman Keamanan</h2>
<p>Phishing, malware, ransomware adalah ancaman umum yang harus diwaspadai.</p>
<h2>Solusi Keamanan</h2>
<p>Gunakan enkripsi, autentikasi berlapis, dan backup rutin untuk melindungi data.</p>`,
        image: "https://images.unsplash.com/photo-1633356150985-cac35b3e4aa6?w=800",
        author: "Data Cipta Celebes",
        category: "Security",
        tags: JSON.stringify(["security", "data", "protection"]),
      },
    }),
    prisma.blog.create({
      data: {
        title: "ROI Custom Application Development untuk Bisnis Anda",
        slug: "roi-custom-app-development",
        description: "Bagaimana custom application dapat meningkatkan ROI bisnis Anda secara signifikan.",
        content: `<h2>Investasi Jangka Panjang</h2>
<p>Custom application adalah investasi jangka panjang yang memberikan nilai berkelanjutan.</p>
<h2>Peningkatan Efisiensi</h2>
<p>Otomasi proses bisnis, pengurangan biaya operasional, dan peningkatan produktivitas.</p>`,
        image: "https://images.unsplash.com/photo-1550355291-bbee04a92027?w=800",
        author: "Data Cipta Celebes",
        category: "Business",
        tags: JSON.stringify(["ROI", "business", "development"]),
      },
    }),
  ]);
  console.log(`✅ Created ${blogs.length} blog posts`);

  // =====================
  // 3. Create Projects
  // =====================
  const projects = await Promise.all([
    prisma.project.create({
      data: {
        title: "E-Commerce Platform",
        slug: "ecommerce-platform",
        description: "Platform e-commerce lengkap dengan inventory management dan payment gateway integration.",
        image: "https://images.unsplash.com/photo-1556742212-5b321f3c261d?w=800",
        category: "E-Commerce",
        features: JSON.stringify(["Product Management", "Shopping Cart", "Payment Gateway", "Inventory"]),
        technologies: JSON.stringify(["Next.js", "React", "Node.js", "PostgreSQL", "Stripe"]),
        link: "#",
        github: "https://github.com",
      },
    }),
    prisma.project.create({
      data: {
        title: "Mobile Banking Application",
        slug: "mobile-banking-app",
        description: "Aplikasi mobile banking dengan fitur transfer, pembayaran tagihan, dan investment.",
        image: "https://images.unsplash.com/photo-1512941691920-25bd94c141f8?w=800",
        category: "Finance",
        features: JSON.stringify(["Mobile Transfer", "Bill Payment", "Investment", "Security"]),
        technologies: JSON.stringify(["React Native", "Node.js", "MongoDB", "Firebase"]),
        link: "#",
        github: "https://github.com",
      },
    }),
    prisma.project.create({
      data: {
        title: "Dashboard Analytics",
        slug: "dashboard-analytics",
        description: "Dashboard analytics real-time untuk monitoring KPI dan business intelligence.",
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800",
        category: "Analytics",
        features: JSON.stringify(["Real-time Dashboard", "Data Visualization", "Export Reports", "Custom Filters"]),
        technologies: JSON.stringify(["React", "Chart.js", "Node.js", "MySQL", "Socket.io"]),
        link: "#",
        github: "https://github.com",
      },
    }),
    prisma.project.create({
      data: {
        title: "CRM System",
        slug: "crm-system",
        description: "Customer Relationship Management system untuk mengelola customer interactions dan sales.",
        image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800",
        category: "Business",
        features: JSON.stringify(["Contact Management", "Sales Pipeline", "Task Management", "Email Integration"]),
        technologies: JSON.stringify(["Next.js", "TypeScript", "PostgreSQL", "Redis"]),
        link: "#",
        github: "https://github.com",
      },
    }),
    prisma.project.create({
      data: {
        title: "Learning Management System",
        slug: "learning-management-system",
        description: "Platform e-learning dengan fitur course management, quiz, dan student tracking.",
        image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800",
        category: "Education",
        features: JSON.stringify(["Course Management", "Quiz System", "Progress Tracking", "Certificate"]),
        technologies: JSON.stringify(["Next.js", "Node.js", "PostgreSQL", "Stripe"]),
        link: "#",
        github: "https://github.com",
      },
    }),
  ]);
  console.log(`✅ Created ${projects.length} projects`);

  // =====================
  // 4. Create Custom Packages
  // =====================
  const packages = await Promise.all([
    prisma.customPackage.create({
      data: {
        title: "Paket Starter",
        description: "Paket ideal untuk startup dan bisnis kecil yang baru memulai transformasi digital.",
        price: "Rp 2.000.000",
        duration: "1 bulan",
        features: JSON.stringify([
          "Konsultasi gratis",
          "Design UI/UX basic",
          "Development backend",
          "1 deployment",
        ]),
        recommended: false,
      },
    }),
    prisma.customPackage.create({
      data: {
        title: "Paket Professional",
        description: "Paket lengkap untuk bisnis menengah yang membutuhkan aplikasi berkualitas tinggi.",
        price: "Rp 5.000.000",
        duration: "2-3 bulan",
        features: JSON.stringify([
          "Konsultasi mendalam",
          "Design UI/UX premium",
          "Full-stack development",
          "Testing & QA",
          "Multiple deployments",
          "1 tahun support",
        ]),
        recommended: true,
      },
    }),
    prisma.customPackage.create({
      data: {
        title: "Paket Enterprise",
        description: "Solusi enterprise lengkap dengan dukungan penuh dan skalabilitas tinggi.",
        price: "Harga Khusus",
        duration: "Custom timeline",
        features: JSON.stringify([
          "Dedicated team",
          "Custom architecture",
          "AI/ML integration",
          "Advanced security",
          "24/7 support",
          "Performance optimization",
          "Ongoing maintenance",
        ]),
        recommended: false,
      },
    }),
  ]);
  console.log(`✅ Created ${packages.length} custom packages`);

  // =====================
  // 5. Create Testimonials
  // =====================
  const testimonials = await Promise.all([
    prisma.testimonial.create({
      data: {
        name: "Budi Santoso",
        company: "PT Maju Jaya Indonesia",
        position: "CEO",
        content: "Tim Data Cipta Celebes sangat profesional. Mereka berhasil mengubah bisnis kami menjadi lebih efisien dengan aplikasi custom yang mereka buat. Highly recommended!",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400",
        rating: 5,
      },
    }),
    prisma.testimonial.create({
      data: {
        name: "Siti Nurhaliza",
        company: "E-Commerce Busana Kami",
        position: "Business Owner",
        content: "Aplikasi yang dibuat untuk toko online kami meningkatkan penjualan hingga 300%. Prosesnya transparan dan tim mereka sangat responsif.",
        image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400",
        rating: 5,
      },
    }),
    prisma.testimonial.create({
      data: {
        name: "Ahmad Wijaya",
        company: "PT Digital Solutions",
        position: "Operations Manager",
        content: "Kualitas kode dan dokumentasi dari Data Cipta Celebes sangat excellent. Kami merasa percaya diri dengan maintenance aplikasi mereka.",
        image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400",
        rating: 5,
      },
    }),
    prisma.testimonial.create({
      data: {
        name: "Rini Handayani",
        company: "Klinik Kesehatan Modern",
        position: "Manager IT",
        content: "Sistem booking online yang mereka buat sangat user-friendly. Pasien kami lebih puas dan appointment management jadi lebih mudah.",
        image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400",
        rating: 5,
      },
    }),
    prisma.testimonial.create({
      data: {
        name: "Hari Hermawan",
        company: "Startup Tech Indonesia",
        position: "Founder",
        content: "Dari konsep hingga launch, tim Data Cipta memberikan support yang luar biasa. Mereka tidak hanya developer, tapi juga strategic partner.",
        image: "https://images.unsplash.com/photo-1507917591920-48416b8016df?w=400",
        rating: 5,
      },
    }),
  ]);
  console.log(`✅ Created ${testimonials.length} testimonials`);

  // =====================
  // 6. Create Clients
  // =====================
  const clients = await Promise.all([
    prisma.client.create({
      data: {
        name: "PT Maju Jaya Indonesia",
        logo: "https://via.placeholder.com/200x100?text=Maju+Jaya",
        industry: "Manufacturing",
      },
    }),
    prisma.client.create({
      data: {
        name: "Busana Indonesia",
        logo: "https://via.placeholder.com/200x100?text=Busana",
        industry: "Fashion & Retail",
      },
    }),
    prisma.client.create({
      data: {
        name: "Klinik Kesehatan Modern",
        logo: "https://via.placeholder.com/200x100?text=Klinik",
        industry: "Healthcare",
      },
    }),
    prisma.client.create({
      data: {
        name: "PT Digital Solutions",
        logo: "https://via.placeholder.com/200x100?text=Digital",
        industry: "Technology",
      },
    }),
    prisma.client.create({
      data: {
        name: "Startup Tech Indonesia",
        logo: "https://via.placeholder.com/200x100?text=StartupTech",
        industry: "Software Development",
      },
    }),
  ]);
  console.log(`✅ Created ${clients.length} clients`);

  // =====================
  // 7. Create Contact Info
  // =====================
  const contacts = await Promise.all([
    prisma.contactInfo.create({
      data: {
        type: "phone",
        value: "+62 821 9785 5715",
        label: "WhatsApp Business",
      },
    }),
    prisma.contactInfo.create({
      data: {
        type: "email",
        value: "info@dataCiptaCelebes.com",
        label: "Email",
      },
    }),
    prisma.contactInfo.create({
      data: {
        type: "address",
        value: "Makassar, Sulawesi Selatan, Indonesia",
        label: "Office Address",
      },
    }),
    prisma.contactInfo.create({
      data: {
        type: "social",
        value: "https://instagram.com/dataciptacelebes",
        label: "Instagram",
      },
    }),
    prisma.contactInfo.create({
      data: {
        type: "social",
        value: "https://linkedin.com/company/dataciptacelebes",
        label: "LinkedIn",
      },
    }),
  ]);
  console.log(`✅ Created ${contacts.length} contact info entries`);

  // =====================
  // 8. Create Carousel Images
  // =====================
  const carouselImages = await Promise.all([
    prisma.carouselImage.create({
      data: {
        title: "Web Development",
        image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=1200",
        order: 1,
        active: true,
      },
    }),
    prisma.carouselImage.create({
      data: {
        title: "Mobile App Development",
        image: "https://images.unsplash.com/photo-1512941691920-25bd94c141f8?w=1200",
        order: 2,
        active: true,
      },
    }),
    prisma.carouselImage.create({
      data: {
        title: "Cloud Solutions",
        image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=1200",
        order: 3,
        active: true,
      },
    }),
  ]);
  console.log(`✅ Created ${carouselImages.length} carousel images`);

  console.log("🎉 Database seeding completed successfully!");
}

main()
  .catch((e) => {
    console.error("❌ Error during seeding:", e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
