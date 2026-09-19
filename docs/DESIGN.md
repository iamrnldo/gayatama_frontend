# ReadAble — Design System & UI Specification

> **Version:** 2.0  
> **Updated:** 19 September 2026  
> **Status:** Implemented  
> **Platform:** Responsive Web Application  
> **UI foundation:** shadcn/ui + Tailwind CSS v4  
> **Implementation:** `frontend/`

---

## 1. Ringkasan Desain

ReadAble adalah aplikasi konversi dokumen aksesibel yang mengubah PDF, DOCX, presentasi, gambar, dan teks menjadi pengalaman membaca yang nyaman dan dapat dipersonalisasi.

Desain antarmuka harus terasa:

- tenang;
- ramah dan inklusif;
- modern;
- terpercaya;
- mudah dipahami;
- rendah distraksi;
- dapat diakses dengan keyboard dan pembaca layar.

Prinsip utama:

> **Change the presentation, never the meaning.**

Antarmuka membantu pengguna memahami isi dokumen tanpa mengubah kata atau maknanya.

---

## 2. Arah Visual

Versi 2.0 menggantikan gaya warm monochrome dan sudut tajam pada spesifikasi sebelumnya.

Arah visual terbaru menggunakan:

- palet biru sebagai warna aksi dan kepercayaan;
- teal lembut sebagai aksen aksesibilitas dan keberhasilan;
- permukaan putih di atas latar biru-keabuan yang sangat ringan;
- sudut membulat sedang hingga besar;
- border halus;
- bayangan ringan untuk hierarki;
- tipografi geometris untuk heading;
- tipografi netral dan mudah dibaca untuk UI serta body copy;
- ilustrasi melalui komposisi antarmuka dan ikon, bukan dekorasi berlebihan.

Desain tidak menggunakan:

- glassmorphism yang berat;
- neon;
- animasi berlebihan;
- gradient yang mendominasi konten;
- floating AI assistant;
- efek dekoratif yang mengganggu aktivitas membaca.

---

## 3. Teknologi UI

### Foundation

```text
Next.js 16
React 19
TypeScript
Tailwind CSS v4
shadcn/ui
Base UI
Lucide Icons
class-variance-authority
```

Konfigurasi shadcn/ui berada di:

```text
frontend/components.json
```

Utility class merger berada di:

```text
frontend/lib/utils.ts
```

Komponen shadcn/ui yang tersedia:

```text
frontend/components/ui/button.tsx
frontend/components/ui/card.tsx
frontend/components/ui/badge.tsx
frontend/components/ui/progress.tsx
frontend/components/ui/separator.tsx
frontend/components/ui/tooltip.tsx
```

Komponen kompatibilitas produk berada di:

```text
frontend/components/ui.tsx
```

Komponen tersebut menyediakan API produk untuk `Button`, `LinkButton`, `Panel`, `Chip`, dan `MicroLabel` dengan fondasi visual terbaru.

---

## 4. Design Tokens

Design token utama didefinisikan di:

```text
frontend/app/globals.css
```

Warna menggunakan format OKLCH agar pencampuran warna dan kontras lebih konsisten.

### 4.1 Core colors

| Token | Fungsi |
|---|---|
| `--background` | Latar utama aplikasi |
| `--foreground` | Teks utama |
| `--card` | Permukaan kartu dan panel |
| `--card-foreground` | Teks pada kartu |
| `--primary` | Tombol utama, tautan aktif, indikator progres |
| `--primary-foreground` | Teks di atas warna primary |
| `--secondary` | Permukaan biru lembut |
| `--muted` | Permukaan dan kontrol nonaktif |
| `--muted-foreground` | Teks sekunder |
| `--accent` | Aksen teal lembut |
| `--accent-foreground` | Teks pada aksen |
| `--destructive` | Error dan tindakan destruktif |
| `--border` | Border umum |
| `--ring` | Focus ring |

### 4.2 Semantic colors

| Token | Penggunaan |
|---|---|
| `--color-success` | Status berhasil dan peningkatan skor |
| `--color-warning` | Peringatan yang memerlukan perhatian |
| `--color-error` | Error dan kegagalan |
| `--color-info` | Informasi dan status aktif |
| `--color-status-pass` | Pemeriksaan aksesibilitas lulus |
| `--color-status-fixed` | Masalah yang diperbaiki otomatis |
| `--color-status-warn` | Masalah potensial |
| `--color-status-fail` | Pemeriksaan gagal |

Warna bukan satu-satunya indikator status. Setiap status harus disertai teks, ikon, atau label.

### 4.3 Legacy aliases

Untuk menjaga kompatibilitas dengan halaman produk yang telah ada, token berikut masih tersedia:

```text
surface
surface-muted
surface-subtle
ink
ink-secondary
ink-muted
ink-disabled
line
line-light
```

Alias tersebut sudah dipetakan ke design token versi 2.0 dan tidak menandakan visual lama.

---

## 5. Tipografi

### UI dan body

```text
Inter
```

Digunakan untuk navigasi, body copy, label, tombol, form, dan metadata.

### Heading

```text
Lexend
```

Digunakan untuk heading utama dan identitas produk. Lexend dipilih karena bentuk hurufnya jelas dan mendukung karakter ReadAble yang ramah.

### Reading fonts

Reader dapat menggunakan:

```text
Inter
Lexend
Atkinson Hyperlegible
OpenDyslexic
```

OpenDyslexic dimuat sebagai opsi membaca dan selalu memiliki fallback.

### Skala yang direkomendasikan

| Elemen | Ukuran |
|---|---:|
| Display hero | `clamp(2.65rem, 6vw, 4.7rem)` |
| Page title | 36–48px |
| Section title | 30–40px |
| Card title | 16–18px |
| Body large | 18px / 32px |
| Body | 14–16px / 24–28px |
| Caption | 12px / 1.55 |
| Micro label | 11px, uppercase |

Heading menggunakan tracking rapat, sedangkan teks panjang tidak boleh menggunakan tracking negatif.

---

## 6. Radius, Border, dan Elevation

### Radius

```text
Small controls: 8–10px
Buttons: 12px
Cards and panels: 16–22px
Large marketing containers: 28px
```

### Border

- Gunakan `1px solid` dengan token `border` untuk komponen umum.
- Dashed border hanya digunakan untuk drop zone atau konteks yang benar-benar menunjukkan area input.
- Hindari border gelap berkontras tinggi di seluruh panel.

### Elevation

- Kartu biasa memakai shadow minimal atau tanpa shadow.
- Kartu interaktif boleh memiliki shadow ringan saat hover.
- Upload card dan floating score card boleh memiliki elevation lebih kuat karena merupakan fokus landing page.
- Reading canvas harus tetap tenang dan tidak menggunakan shadow dekoratif berlebihan.

---

## 7. Grid dan Layout

### Global container

Landing page:

```text
max-width: 1240px
horizontal padding: 20px mobile / 32px desktop
```

Workflow application:

```text
max-width: 1440px
horizontal padding: 16–32px
```

### Breakpoints

```text
Mobile: < 640px
Tablet: 640–1023px
Desktop: 1024–1439px
Large desktop: >= 1440px
```

### Reader desktop

```text
Reading canvas: flexible
Context panel: 320px
Action rail: 48px
```

Pada mobile, panel tidak boleh dipaksa menjadi kolom sempit. Kontrol harus berpindah menjadi drawer, sheet, atau tampilan yang dapat dibuka sesuai kebutuhan.

---

## 8. Landing Page

Implementasi:

```text
frontend/app/page.tsx
```

Urutan konten:

1. Sticky navigation.
2. Hero dan positioning produk.
3. Primary CTA dan trust indicators.
4. Interactive upload card.
5. Accessibility score preview.
6. Accessibility feature grid.
7. Three-step workflow.
8. Final dark CTA.
9. Minimal footer.

### Hero message

```text
Every document,
easier to read.
```

### Primary CTA

```text
Transform a document
```

### Secondary CTA

```text
Preview the reader
```

Hero harus mengkomunikasikan manfaat terlebih dahulu. Penjelasan teknis ditempatkan setelah pengguna memahami nilai produk.

---

## 9. Upload Experience

Implementasi:

```text
frontend/components/upload-zone.tsx
```

Format yang ditampilkan:

```text
PDF
DOCX
PPTX
EPUB
JPG
PNG
TXT
```

State wajib:

- idle;
- drag over;
- uploading;
- success;
- error.

Perilaku:

- dapat dioperasikan dengan klik, keyboard, dan drag-and-drop;
- memiliki label aksesibel;
- menampilkan nama dan ukuran file;
- menunjukkan progres numerik;
- memungkinkan pembatalan;
- memvalidasi ekstensi;
- menyediakan sample document;
- mengarahkan pengguna ke `/processing` setelah upload berhasil.

Visual drop zone menggunakan dashed border karena pola ini memiliki makna fungsional sebagai area input.

---

## 10. Workflow Navigation

Implementasi:

```text
frontend/components/workflow-header.tsx
```

Tahapan:

```text
Upload → Process → Profile → Read → Score → Export
```

State langkah:

- **Completed:** ikon check dan accent surface.
- **Current:** primary badge dan background secondary.
- **Upcoming:** muted color.

Desktop menampilkan seluruh step. Mobile menampilkan nomor step dan nama step aktif agar header tidak terlalu padat.

---

## 11. Product Screens

| Route | Fungsi |
|---|---|
| `/` | Landing dan upload |
| `/processing` | Parsing, struktur, analisis, dan reflow |
| `/profile` | Pemilihan profil membaca |
| `/reader` | Lingkungan membaca yang dapat dikustomisasi |
| `/score` | Analisis aksesibilitas sebelum dan sesudah transformasi |
| `/export` | Pilihan format ekspor |

Semua halaman workflow menggunakan design token yang sama dan `WorkflowHeader` versi 2.0.

---

## 12. Reader

Reader adalah bagian utama produk. Ketika pengguna mulai membaca, UI harus terasa semakin tidak terlihat.

### Prioritas

1. Isi dokumen.
2. Kenyamanan membaca.
3. Kontrol yang dapat ditemukan.
4. Navigasi struktur.
5. Text-to-speech.

### Kontrol membaca

- font family;
- text size;
- line height;
- letter spacing;
- word spacing;
- paragraph spacing;
- reading width;
- alignment;
- background;
- reading ruler;
- focus mode;
- paragraph highlight;
- footnote visibility.

Perubahan manual mengubah profil aktif menjadi `Custom`.

### Reading backgrounds

Pilihan warna latar dokumen harus tetap lembut dan memiliki kontras teks yang memadai. Reading canvas boleh memiliki pengaturan visual yang berbeda dari shell aplikasi.

---

## 13. Komponen

### Button

Variants produk:

```text
primary
secondary
ghost
```

Ketentuan:

- tinggi default 40px;
- radius 12px;
- label jelas dan singkat;
- ikon opsional;
- disabled state terlihat;
- focus ring tidak boleh dihapus.

### Card / Panel

Digunakan untuk mengelompokkan informasi yang terkait. Jangan membungkus setiap elemen kecil dalam card.

### Badge / Chip

Digunakan untuk format file, status, kategori, atau metadata singkat. Badge tidak digunakan sebagai tombol kecuali perilakunya dijelaskan secara semantik.

### Progress

Digunakan untuk upload, processing, dan accessibility score. Progress harus memiliki konteks teks atau nilai yang dapat dibaca.

### Tooltip

Hanya untuk menjelaskan kontrol berbasis ikon. Informasi penting tidak boleh hanya tersedia melalui tooltip.

---

## 14. Icons

Library:

```text
Lucide React
```

Ketentuan:

- ukuran umum 16–20px;
- stroke konsisten;
- ikon dekoratif menggunakan `aria-hidden`;
- tombol icon-only wajib memiliki `aria-label`;
- ikon tidak menggantikan label pada aksi penting.

---

## 15. Motion

Motion harus singkat dan membantu pemahaman.

Diperbolehkan:

- hover color transition;
- card lift maksimal beberapa pixel;
- upload progress;
- loading spinner;
- panel transition yang singkat.

Hindari:

- parallax;
- autoplay animation;
- looping decorative animation;
- layout shift besar;
- efek yang memperlambat tugas utama.

`prefers-reduced-motion` harus dihormati secara global.

---

## 16. Accessibility Requirements

### Keyboard

- Semua elemen interaktif dapat dicapai dengan Tab.
- Urutan fokus mengikuti urutan visual dan semantik.
- Enter dan Space mendukung upload zone.
- Tidak ada keyboard trap.

### Focus

Focus ring menggunakan token `ring`, memiliki offset, dan tetap terlihat pada permukaan terang maupun gelap.

### Contrast

Target minimum:

```text
Normal text: WCAG AA 4.5:1
Large text: WCAG AA 3:1
UI boundaries and states: 3:1 bila diperlukan
```

### Semantics

- Gunakan heading secara berurutan.
- Navigation memiliki `aria-label`.
- Workflow step aktif menggunakan `aria-current="step"`.
- Toggle menggunakan `role="switch"` dan `aria-checked`.
- Status upload diumumkan melalui live region.
- Tombol icon-only memiliki nama aksesibel.

### Touch target

Target utama sebaiknya minimal 40×40px. Untuk kontrol yang lebih kecil, jarak antar-target harus cukup untuk mencegah salah tekan.

---

## 17. Responsive Rules

### Mobile

- Hero menjadi satu kolom.
- Upload card berada setelah copy dan CTA.
- Floating score preview dapat disembunyikan.
- Feature grid menjadi satu atau dua kolom.
- Workflow steps tersusun vertikal.
- Header menyederhanakan navigation.
- Reader memprioritaskan canvas.

### Tablet

- Konten memakai dua kolom jika ruang mencukupi.
- Navigation sekunder dapat disembunyikan.
- Cards tidak boleh menjadi terlalu sempit.

### Desktop

- Hero menggunakan pembagian sekitar 50/50.
- Feature grid menggunakan empat kolom.
- Workflow menggunakan tiga step cards.
- Reader dapat menampilkan context panel dan action rail.

---

## 18. Content Guidelines

Tone of voice:

- jelas;
- suportif;
- tidak menghakimi;
- tidak terlalu teknis;
- tidak menyatakan diagnosis;
- fokus pada kendali pengguna.

Gunakan:

```text
Make it easier to read
Choose what feels comfortable
Your document, your settings
```

Hindari:

```text
Fix your dyslexia
Correct the user
AI understands your disability
Perfect accessibility
```

ReadAble adalah alat bantu presentasi dan transformasi dokumen, bukan alat diagnosis.

---

## 19. Implementation Map

```text
frontend/
├── app/
│   ├── globals.css          # tokens dan global styles
│   ├── layout.tsx           # fonts, metadata, provider
│   ├── page.tsx             # landing page
│   ├── processing/page.tsx
│   ├── profile/page.tsx
│   ├── reader/page.tsx
│   ├── score/page.tsx
│   └── export/page.tsx
├── components/
│   ├── site-header.tsx
│   ├── workflow-header.tsx
│   ├── upload-zone.tsx
│   ├── ui.tsx               # product UI compatibility layer
│   └── ui/                  # shadcn/ui components
├── lib/
│   └── utils.ts
└── components.json          # shadcn/ui configuration
```

---

## 20. Design QA Checklist

### Visual

- [ ] Menggunakan token, bukan hard-coded color tanpa alasan.
- [ ] Radius dan shadow sesuai hierarki.
- [ ] Heading menggunakan skala yang konsisten.
- [ ] Card tidak digunakan secara berlebihan.
- [ ] Primary action langsung terlihat.
- [ ] Tidak ada horizontal overflow.

### Accessibility

- [ ] Navigasi keyboard berfungsi.
- [ ] Focus indicator terlihat.
- [ ] Kontras memenuhi target WCAG AA.
- [ ] Icon-only control memiliki accessible name.
- [ ] Status tidak hanya ditunjukkan dengan warna.
- [ ] Reduced motion dihormati.
- [ ] Zoom hingga 200% tetap dapat digunakan.

### UX

- [ ] Loading state tersedia.
- [ ] Empty state tersedia bila diperlukan.
- [ ] Error state menjelaskan tindakan berikutnya.
- [ ] Success state terlihat dan diumumkan.
- [ ] Mobile layout diuji.
- [ ] CTA menggunakan kata kerja yang jelas.

### Engineering

- [ ] `npm run build` berhasil.
- [ ] `npx tsc --noEmit` berhasil.
- [ ] Komponen baru menggunakan shadcn/ui bila sesuai.
- [ ] Komponen produk tetap memiliki semantic HTML.
- [ ] Tidak menduplikasi design token.

---

## 21. Acceptance Criteria

Implementasi dianggap sesuai dengan design system versi 2.0 jika:

1. Landing page mengikuti struktur dan arah visual pada dokumen ini.
2. shadcn/ui menjadi fondasi komponen umum.
3. Warna menggunakan token dari `globals.css`.
4. UI tetap dapat digunakan dengan keyboard.
5. Reader mempertahankan isi dokumen sebagai prioritas visual.
6. Workflow tetap mengikuti Upload → Process → Profile → Read → Score → Export.
7. Layout beradaptasi dengan mobile, tablet, dan desktop.
8. Tidak ada perubahan terhadap makna dokumen pengguna.
9. State loading, error, success, dan empty ditangani.
10. Build dan pemeriksaan TypeScript berhasil.

---

## 22. Final Design Principle

> **The interface should become quiet when the user starts reading.**

ReadAble tidak dibuat untuk memamerkan kompleksitas antarmuka. Desain harus membuat dokumen terasa lebih sederhana, jelas, tenang, dan berada di bawah kendali pengguna.
