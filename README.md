# Dokumentasi Setup Project - Startup NextJS Template

## 📋 Daftar Isi
1. [Informasi Project](#informasi-project)
2. [Persyaratan Sistem](#persyaratan-sistem)
3. [Instalasi](#instalasi)
4. [Konfigurasi](#konfigurasi)
5. [Menjalankan Project](#menjalankan-project)
6. [Struktur Folder](#struktur-folder)
7. [Development Environment](#development-environment)
8. [Build & Production](#build--production)

---

## 📌 Informasi Project

**Project Name:** startup-nextjs-template  
**Version:** 2.2.0  
**Framework:** Next.js 15.3.0  
**Runtime:** Node.js  
**Package Manager:** npm atau yarn  
**Language:** TypeScript

### Tech Stack:
- **Frontend Framework:** Next.js 15.3.0
- **UI Library:** React 19.1.0
- **Styling:** Tailwind CSS 4.1.3
- **CSS Processing:** PostCSS 8.5.3
- **Theme Management:** next-themes 0.2.1
- **Code Quality:** ESLint 9.24.0, Prettier 3.2.5
- **Type Checking:** TypeScript 5.3.3

---

## 🖥️ Persyaratan Sistem

### Minimum Requirements:
- **Node.js:** v18.0 atau lebih tinggi
- **npm:** v9.0 atau lebih tinggi (atau yarn/pnpm sebagai alternatif)
- **Disk Space:** Minimal 500MB untuk project + dependencies
- **RAM:** Minimal 2GB

### Recommended Requirements:
- **Node.js:** v20.0 LTS atau lebih tinggi
- **npm:** v10.0 atau lebih tinggi
- **Disk Space:** 1GB+
- **RAM:** 4GB+

### Sistem Operasi:
- Windows 10/11
- macOS 11+
- Linux (Ubuntu 20.04+, Debian 10+, atau distro serupa)

---

## 📦 Instalasi

### 1. Clone Repository (jika belum)
```bash
git clone https://github.com/DipanegaraComputerClub/data-cipta-celebes.git
cd startup-nextjs-main
```

### 2. Install Dependencies

**Menggunakan npm:**
```bash
npm install
```

**Menggunakan yarn:**
```bash
yarn install
```

**Menggunakan pnpm:**
```bash
pnpm install
```

**Menggunakan Bun (Rekomendasi):**
```bash
bun install
```

> **Catatan:** Pastikan Node.js dan npm sudah terinstal dengan benar. Cek versi dengan menjalankan `node -v` dan `npm -v`.

### 3. Verifikasi Instalasi
```bash
npm list next react tailwindcss
```

Anda seharusnya melihat output dengan versi package yang terinstal.

---

## ⚙️ Konfigurasi

### 1. Konfigurasi Next.js
File: `next.config.js`

Default configuration sudah mendukung:
- **Remote Image Optimization:** Dari CDN Sanity.io
- **Image Remotepatterns:** Untuk external image loading

### 2. Konfigurasi TypeScript
File: `tsconfig.json`

Fitur yang enabled:
- **Path Alias:** `@/*` → `./src/*` (untuk import yang lebih clean)
- **Strict Mode:** Disabled (dapat diaktifkan sesuai kebutuhan)
- **Module Resolution:** Node.js

### 3. Konfigurasi Tailwind CSS
File: `tailwind.config.js` (jika ada) dan `postcss.config.js`

Tailwind CSS sudah siap untuk styling dengan version 4.1.3.

### 4. Konfigurasi ESLint
File: `.eslintrc.json` atau konfigurasi di `package.json`

ESLint sudah configured untuk Next.js standards.

### 5. Environment Variables (Jika Diperlukan)
Buat file `.env.local` di root project:
```env
# Example environment variables
NEXT_PUBLIC_API_URL=http://localhost:3000
```

> **Catatan:** File `.env.local` tidak boleh di-commit ke git. File ini sudah ada di `.gitignore`.

---

## 🚀 Menjalankan Project

### Development Mode
Untuk menjalankan project dalam mode development dengan hot-reload:

```bash
npm run dev
```

Atau dengan yarn:
```bash
yarn dev
```

Project akan tersedia di: **http://localhost:3000**

### Production Mode
Untuk build dan menjalankan project di production:

```bash
npm run build
npm start
```

Atau dengan yarn:
```bash
yarn build
yarn start
```

### Linting
Untuk check code quality dan style:

```bash
npm run lint
```

---

## 📁 Struktur Folder

```
startup-nextjs-main/
├── src/
│   ├── app/                      # Next.js App Router pages
│   │   ├── layout.tsx            # Root layout
│   │   ├── page.tsx              # Home page
│   │   ├── providers.tsx         # Global providers
│   │   ├── about/
│   │   ├── blog/
│   │   ├── blog-details/
│   │   ├── blog-sidebar/
│   │   ├── contact/
│   │   ├── error/
│   │   ├── signin/
│   │   └── signup/
│   │
│   ├── components/               # Reusable React components
│   │   ├── About/               # About section components
│   │   ├── Blog/                # Blog components
│   │   ├── Brands/              # Brands section components
│   │   ├── Common/              # Common/shared components
│   │   ├── Contact/             # Contact section components
│   │   ├── Features/            # Features section components
│   │   ├── Footer/              # Footer component
│   │   ├── Header/              # Header/Navigation component
│   │   ├── Hero/                # Hero section component
│   │   ├── Pricing/             # Pricing section components
│   │   ├── ScrollToTop/         # Scroll to top component
│   │   ├── Testimonials/        # Testimonials components
│   │   ├── Video/               # Video component
│   │   └── video-modal.tsx      # Video modal component
│   │
│   ├── styles/                  # Global styles
│   │   └── index.css            # Global CSS
│   │
│   └── types/                   # TypeScript type definitions
│       ├── blog.ts
│       ├── brand.ts
│       ├── feature.ts
│       ├── menu.ts
│       └── testimonial.ts
│
├── public/                       # Static assets
│   └── images/
│       ├── about/
│       ├── blog/
│       ├── brands/
│       ├── hero/
│       ├── logo/
│       ├── testimonials/
│       └── video/
│
├── package.json                 # Dependencies & scripts
├── tsconfig.json                # TypeScript configuration
├── next.config.js               # Next.js configuration
├── postcss.config.js            # PostCSS configuration
├── tailwind.config.js           # Tailwind CSS configuration
├── jsconfig.json                # JavaScript configuration
├── .eslintrc.json              # ESLint configuration
└── README.md                    # Project README
```

### Penjelasan Folder Utama:

- **`src/app/`** - Pages dan routing menggunakan Next.js App Router
- **`src/components/`** - Komponen React yang dapat digunakan kembali
- **`src/styles/`** - Global styles dan CSS configuration
- **`src/types/`** - TypeScript interfaces dan types
- **`public/`** - Static files (images, fonts, dll) yang dapat diakses langsung

---

## 🛠️ Development Environment

### Text Editor / IDE Recommendations:
- **Visual Studio Code** (recommended)
- **WebStorm**
- **Cursor**
- **Sublime Text**

### Recommended VS Code Extensions:
```
- ES7+ React/Redux/React-Native snippets
- Prettier - Code formatter
- ESLint
- Tailwind CSS IntelliSense
- TypeScript Vue Plugin (Volar)
```

### VS Code Settings (`.vscode/settings.json`):
```json
{
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "editor.formatOnSave": true,
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
  },
  "tailwindCSS.experimental.classRegex": [
    ["clsx\\(([^)]*)\\)", "(?:'|\"|`|\"|')([^']*)(?:'|\"|`|\"|')"]
  ]
}
```

---

## 📦 Build & Production

### Build Process:
```bash
npm run build
```

Output akan di-generate di folder `.next/`

### Production Deployment:
```bash
npm run build
npm start
```

Project akan tersedia di **http://localhost:3000** (atau port yang dikonfigurasi).

### Optimization Tips:
1. **Image Optimization:** Gunakan `next/image` component
2. **Code Splitting:** Next.js secara otomatis split code per page
3. **CSS Optimization:** Tailwind CSS akan di-purge (unused CSS dihapus)
4. **Static Generation:** Gunakan `generateStaticParams` untuk static routes

---

## 🐛 Troubleshooting

### Issue: Port 3000 sudah digunakan
```bash
# Windows
netstat -ano | findstr :3000

# macOS/Linux
lsof -i :3000
```

Jalankan di port berbeda:
```bash
npm run dev -- -p 3001
```

### Issue: Dependencies conflict
```bash
# Clear npm cache
npm cache clean --force

# Remove node_modules dan package-lock.json
rm -r node_modules package-lock.json

# Reinstall
npm install
```

### Issue: TypeScript errors
```bash
# Rebuild TypeScript
npx tsc --noEmit
```

### Issue: Tailwind CSS tidak bekerja
Pastikan `postcss.config.js` dan `tailwind.config.js` sudah konfigurasi dengan benar.

---

## 📚 Resource & Dokumentasi

- [Next.js Documentation](https://nextjs.org/docs)
- [React Documentation](https://react.dev)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [TypeScript Documentation](https://www.typescriptlang.org/docs)
- [ESLint Documentation](https://eslint.org/docs)