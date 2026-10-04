import React, { useMemo, useState } from "react";
import { createRoot } from "react-dom/client";
import {
  BrowserRouter,
  Link,
  NavLink,
  Route,
  Routes,
  useLocation,
  useNavigate,
} from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowDownRight,
  ArrowRight,
  BarChart3,
  Bell,
  CalendarDays,
  Check,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  Clock3,
  Dumbbell,
  Flame,
  Instagram,
  Linkedin,
  Menu,
  MessageCircle,
  Minus,
  Phone,
  Play,
  Plus,
  Quote,
  Search,
  ShieldCheck,
  Sparkles,
  Target,
  TrendingUp,
  Users,
  X,
  Youtube,
} from "lucide-react";
import {
  Area,
  AreaChart,
  Bar,
  BarChart,
  CartesianGrid,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import "./styles.css";

const images = {
  hero: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=1800&q=85",
  lean: "https://images.unsplash.com/photo-1594737625785-a6cbdabd333c?auto=format&fit=crop&w=900&q=85",
  muscular:
    "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?auto=format&fit=crop&w=900&q=85",
  bulk: "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?auto=format&fit=crop&w=900&q=85",
  comp: "https://i0.wp.com/www.muscleandfitness.com/wp-content/uploads/2022/09/Symmetry-Round-Dobbins.jpg?quality=86&strip=all",
  functional:
    "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=900&q=85",
  recomposition:
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7OY8CX_3hCiiSSV37OkX_NTKWn9mxfDY4mYyso750Op5VKAnK3WuIjrQ&s=10",
  male: "https://images.unsplash.com/photo-1594381898411-846e7d193883?auto=format&fit=crop&w=1100&q=85",
  female:
    "https://images.unsplash.com/photo-1579758629938-03607ccdbaba?auto=format&fit=crop&w=1100&q=85",
  founder:
    "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?auto=format&fit=crop&w=1100&q=85",
  lifestyle:
    "https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?auto=format&fit=crop&w=1400&q=85",
  testimonial1:
    "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=300&q=85",
  testimonial2:
    "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=300&q=85",
  testimonial3:
    "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=300&q=85",
  instagram1:
    "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=700&q=80",
  instagram2:
    "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?auto=format&fit=crop&w=700&q=80",
  instagram3:
    "https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=700&q=80",
  instagram4:
    "https://images.unsplash.com/photo-1490645935967-10de6ba17061?auto=format&fit=crop&w=700&q=80",
  instagram5:
    "https://images.unsplash.com/photo-1549476464-37392f717541?auto=format&fit=crop&w=700&q=80",
  instagram6:
    "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=700&q=80",
};

const programs = [
  {
    name: "Lean Body",
    desc: "For fat loss, athletic conditioning and a lean aesthetic physique.",
    suitable: "Fat loss & definition",
    duration: "12–16 weeks",
    price: "₹25,000",
    image: images.lean,
  },
  {
    name: "Muscular",
    desc: "For hypertrophy, strength development and building a powerful physique.",
    suitable: "Muscle gain & strength",
    duration: "12–24 weeks",
    price: "₹30,000",
    image: images.muscular,
  },
  {
    name: "Bulk",
    desc: "For structured mass gain, muscle building and controlled calorie surplus.",
    suitable: "Mass gain & size",
    duration: "16–32 weeks",
    price: "₹32,000",
    image: images.bulk,
  },
  {
    name: "Competitive Preparation",
    desc: "For bodybuilding, stage preparation and peak conditioning.",
    suitable: "Competitions & stage",
    duration: "12–20 weeks",
    price: "₹40,000",
    image: images.comp,
  },
  {
    name: "Functional Fitness",
    desc: "Strength, mobility, endurance and everyday performance.",
    suitable: "General fitness",
    duration: "8–12 weeks",
    price: "₹20,000",
    image: images.functional,
  },
  {
    name: "Recomposition",
    desc: "Reduce body fat while increasing or maintaining muscle mass.",
    suitable: "Body recomposition",
    duration: "12–20 weeks",
    price: "₹28,000",
    image: images.recomposition,
  },
];

const transformations = [
  {
    name: "Priya",
    category: "Fat Loss",
    before: "92kg",
    after: "78kg",
    bf: "28% → 15%",
    weeks: "20 Weeks",
    image: images.male,
  },
  {
    name: "Rohan",
    category: "Recomposition",
    before: "68kg",
    after: "61kg",
    bf: "31% → 21%",
    weeks: "18 Weeks",
    image: images.female,
  },
  {
    name: "Aditya",
    category: "Muscle Gain",
    before: "66kg",
    after: "77kg",
    bf: "14% → 13%",
    weeks: "28 Weeks",
    image: images.bulk,
  },
  {
    name: "Sohail",
    category: "Strength & Conditioning",
    before: "72kg",
    after: "65kg",
    bf: "27% → 19%",
    weeks: "16 Weeks",
    image: images.recomposition,
  },
  {
    name: "Kabir",
    category: "Competition",
    before: "84kg",
    after: "74kg",
    bf: "12% → 6%",
    weeks: "14 Weeks",
    image: images.comp,
  },
  {
    name: "Jack",
    category: "Lean Athletic Transformation",
    before: "64kg",
    after: "59kg",
    bf: "26% → 18%",
    weeks: "16 Weeks",
    image: images.female,
  },
];

const testimonials = [
  {
    quote:
      "Within 16 weeks, my body changed completely, but the bigger transformation was my discipline.",
    name: "Rohan Sharma",
    role: "Founder, Mumbai",
    image: images.testimonial1,
  },
  {
    quote:
      "I had tried multiple trainers before. AURVEX was the first system that actually worked around my professional lifestyle.",
    name: "Priya Kapoor",
    role: "VP, Bengaluru",
    image: images.testimonial2,
  },
  {
    quote:
      "The programming is precise, the accountability is real, and every week has a reason behind it.",
    name: "Kabir Malhotra",
    role: "Entrepreneur, Delhi",
    image: images.testimonial3,
  },
];

const chartData = [
  {
    week: "W1",
    weight: 82.3,
    bodyFat: 20.4,
    strength: 100,
    calories: 2250,
    steps: 6900,
  },
  {
    week: "W2",
    weight: 81.5,
    bodyFat: 19.8,
    strength: 104,
    calories: 2290,
    steps: 7200,
  },
  {
    week: "W3",
    weight: 80.8,
    bodyFat: 19.2,
    strength: 108,
    calories: 2310,
    steps: 7680,
  },
  {
    week: "W4",
    weight: 80.1,
    bodyFat: 18.7,
    strength: 113,
    calories: 2350,
    steps: 8010,
  },
  {
    week: "W5",
    weight: 79.5,
    bodyFat: 18.0,
    strength: 117,
    calories: 2350,
    steps: 8240,
  },
  {
    week: "W6",
    weight: 78.9,
    bodyFat: 17.4,
    strength: 121,
    calories: 2350,
    steps: 8490,
  },
  {
    week: "W7",
    weight: 78.4,
    bodyFat: 15.8,
    strength: 126,
    calories: 2350,
    steps: 8742,
  },
];

const appointments = [
  {
    id: 1,
    name: "Rohan Sharma",
    type: "Consultation",
    time: "Today, 10:00 AM",
    image: images.testimonial1,
  },
  {
    id: 2,
    name: "Priya Mehta",
    type: "Personal Training",
    time: "Today, 12:00 PM",
    image: images.testimonial2,
  },
  {
    id: 3,
    name: "Karan Verma",
    type: "Program Review",
    time: "Today, 3:00 PM",
    image: images.testimonial3,
  },
  {
    id: 4,
    name: "Neha Kapoor",
    type: "New Client Consultation",
    time: "Tomorrow, 10:00 AM",
    image: images.testimonial2,
  },
];

function App() {
  return (
    <Routes>
      <Route path="*" element={<SiteShell />} />
    </Routes>
  );
}

function SiteShell() {
  const location = useLocation();
  const isDashboard = location.pathname.startsWith("/dashboard");
  const isAdmin = location.pathname.startsWith("/admin");
  if (isDashboard || isAdmin) return <DashboardShell admin={isAdmin} />;
  return <PublicShell />;
}

function PublicShell() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const navigate = useNavigate();
  const nav = [
    "Programs",
    "Transformations",
    "Coach",
    "Packages",
    "Dashboard",
    "FAQ",
  ];
  return (
    <div className="min-h-screen bg-aurvex-ink">
      <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-black/20 backdrop-blur-md transition-all">
        <div className="mx-auto flex h-[76px] max-w-7xl items-center justify-between px-5 lg:px-8">
          <Link
            to="/"
            className="flex items-center gap-3"
            onClick={() => setMobileOpen(false)}
          >
            <Logo />
          </Link>
          <nav className="hidden items-center gap-7 text-[12px] uppercase tracking-[.18em] text-white/75 lg:flex">
            {nav.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="hover:text-white"
              >
                {item}
              </a>
            ))}
          </nav>
          <div className="hidden lg:block">
            <button
              className="button-gold px-5"
              onClick={() => navigate("/#book")}
            >
              Book Consultation <ArrowRight size={15} />
            </button>
          </div>
          <button
            className="rounded-xl border border-white/10 p-2 lg:hidden"
            onClick={() => setMobileOpen((v) => !v)}
            aria-label="Menu"
          >
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="border-t border-white/10 bg-black/95 lg:hidden"
            >
              <div className="mx-auto flex max-w-7xl flex-col gap-2 px-5 py-5">
                {nav.map((item) => (
                  <a
                    onClick={() => setMobileOpen(false)}
                    key={item}
                    href={`#${item.toLowerCase()}`}
                    className="rounded-lg px-3 py-3 text-sm text-white/80 hover:bg-white/5"
                  >
                    {item}
                  </a>
                ))}
                <button
                  className="button-gold mt-2 w-full"
                  onClick={() => {
                    setMobileOpen(false);
                    navigate("/#book");
                  }}
                >
                  Book Private Consultation <ArrowRight size={15} />
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
      <main>
        <Home />
      </main>
      <StickyContact />
      <Footer />
    </div>
  );
}

function Logo({ compact = false }) {
  return (
    <div className="flex items-center gap-3">
      <div className="font-display text-[28px] leading-none text-aurvex-gold">
        A<span className="text-white/70">M</span>
      </div>
      <div className={compact ? "hidden sm:block" : ""}>
        <div className="text-[15px] font-semibold tracking-[.28em]">AURVEX</div>
        <div className="mt-0.5 text-[8px] tracking-[.48em] text-white/50">
          PERFORMANCE
        </div>
      </div>
    </div>
  );
}

function Home() {
  return (
    <>
      <Hero />
      <TrustBar />
      <Programs />
      <Unisex />
      <Lifestyle />
      <Transformations />
      <Founder />
      <Packages />
      <LeadQualification />
      <Booking />
      <Availability />
      <ClientDashboardPreview />
      <Testimonials />
      <InstagramGrid />
      <Calculator />
      <FAQ />
    </>
  );
}

function SectionHeading({ eyebrow, title, copy, align = "left" }) {
  return (
    <div
      className={
        align === "center" ? "mx-auto max-w-2xl text-center" : "max-w-2xl"
      }
    >
      {eyebrow && <div className="section-kicker">{eyebrow}</div>}
      <h2 className="mt-3 font-display text-4xl leading-[1.04] tracking-[-.03em] text-white sm:text-5xl lg:text-6xl">
        {title}
      </h2>
      {copy && (
        <p className="mt-5 max-w-xl text-sm leading-7 text-white/55 sm:text-base">
          {copy}
        </p>
      )}
    </div>
  );
}

function Hero() {
  return (
    <section className="relative flex min-h-screen items-end overflow-hidden pt-24">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${images.hero})` }}
      />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(217,179,108,.13),transparent_35%),linear-gradient(90deg,#0b0b09_0%,rgba(11,11,9,.82)_38%,rgba(11,11,9,.2)_72%,rgba(11,11,9,.55)_100%)]" />
      <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-aurvex-ink to-transparent" />
      <div className="relative mx-auto w-full max-w-7xl px-5 pb-16 lg:px-8 lg:pb-20">
        <div className="grid items-end gap-12 lg:grid-cols-[1.05fr_.95fr]">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <div className="section-kicker">
              Elite Personal Training & Transformation Coaching
            </div>
            <h1 className="mt-5 max-w-3xl font-display text-5xl leading-[.97] tracking-[-.045em] text-white sm:text-7xl lg:text-[86px]">
              Build The Body.
              <br />
              Build The Discipline.
              <br />
              <span className="text-aurvex-gold">Build The Standard.</span>
            </h1>
            <p className="mt-6 max-w-xl text-base leading-7 text-white/65 sm:text-lg">
              Private performance coaching for individuals who expect measurable
              results, intelligent programming and uncompromising personal
              attention.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a href="#book" className="button-gold">
                Book Private Consultation <ArrowRight size={16} />
              </a>
              <a href="#programs" className="button-ghost">
                Explore Programs <Play size={14} fill="currentColor" />
              </a>
            </div>
            <div className="mt-10 grid max-w-2xl grid-cols-2 border-y border-white/10 py-5 sm:grid-cols-4">
              {[
                ["500+", "Transformations"],
                ["12+", "Years Experience"],
                ["98%", "Client Retention"],
                ["4.9/5", "Client Rating"],
              ].map(([value, label]) => (
                <div
                  key={label}
                  className="border-r border-white/10 px-3 first:pl-0 last:border-0"
                >
                  <div className="font-display text-2xl text-white sm:text-3xl">
                    {value}
                  </div>
                  <div className="mt-1 text-[10px] uppercase tracking-[.18em] text-white/45">
                    {label}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
          <div className="hidden justify-end lg:flex">
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.25, duration: 0.8 }}
              className="glass-panel w-[330px] p-5"
            >
              <div className="flex items-start justify-between">
                <div>
                  <div className="text-[10px] uppercase tracking-[.2em] text-aurvex-gold">
                    Arjun Mehra
                  </div>
                  <div className="mt-1 text-sm text-white">
                    Founder & Performance Coach
                  </div>
                </div>
                <ShieldCheck className="text-aurvex-gold" size={22} />
              </div>
              <div className="mt-5 border-t border-white/10 pt-5">
                <div className="text-[10px] uppercase tracking-[.18em] text-white/40">
                  Private coaching availability
                </div>
                <div className="mt-2 flex items-end justify-between">
                  <div className="font-display text-4xl text-white">03</div>
                  <div className="pb-1 text-right text-xs text-white/50">
                    slots available
                    <br />
                    this month
                  </div>
                </div>
                <div className="mt-4 h-1.5 rounded-full bg-white/10">
                  <div className="h-full w-[68%] rounded-full bg-aurvex-gold" />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

function TrustBar() {
  return (
    <section className="border-y border-white/10 bg-black/20">
      <div className="mx-auto grid max-w-7xl grid-cols-2 lg:grid-cols-4">
        {[
          "500+ Transformations",
          "12+ Years Experience",
          "4.9/5 Client Rating",
          "India + Worldwide Coaching",
        ].map((x, i) => (
          <div
            key={x}
            className="border-r border-white/10 px-5 py-5 text-center text-[10px] uppercase tracking-[.22em] text-white/45 last:border-0"
          >
            {i === 0 && (
              <Sparkles size={14} className="mx-auto mb-2 text-aurvex-gold" />
            )}
            {x}
          </div>
        ))}
      </div>
    </section>
  );
}

function Programs() {
  return (
    <section id="programs" className="section-shell">
      <SectionHeading
        align="center"
        eyebrow="Programs"
        title={
          <>
            Choose Your <span className="text-aurvex-gold">Transformation</span>
          </>
        }
        copy="Personalized programs designed for real people, real goals and measurable results."
      />
      <div className="mt-12 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {programs.map((p, idx) => (
          <motion.article
            key={p.name}
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ delay: idx * 0.04 }}
            className="group overflow-hidden rounded-2xl border border-white/10 bg-white/[.02]"
          >
            <div className="relative h-72 overflow-hidden">
              <img
                src={p.image}
                alt={p.name}
                className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4">
                <div className="text-[10px] uppercase tracking-[.24em] text-aurvex-gold">
                  {String(idx + 1).padStart(2, "0")}
                </div>
                <h3 className="mt-1 font-display text-3xl text-white">
                  {p.name}
                </h3>
              </div>
            </div>
            <div className="p-5">
              <p className="min-h-[76px] text-sm leading-6 text-white/50">
                {p.desc}
              </p>
              <div className="mt-4 grid grid-cols-2 gap-2 text-[11px]">
                <div className="rounded-xl border border-white/10 bg-white/[.025] p-3">
                  <div className="uppercase tracking-[.16em] text-white/35">
                    Suitable for
                  </div>
                  <div className="mt-1 text-white/80">{p.suitable}</div>
                </div>
                <div className="rounded-xl border border-white/10 bg-white/[.025] p-3">
                  <div className="uppercase tracking-[.16em] text-white/35">
                    Duration
                  </div>
                  <div className="mt-1 text-white/80">{p.duration}</div>
                </div>
              </div>
              <div className="mt-5 flex items-center justify-between border-t border-white/10 pt-4">
                <div>
                  <div className="text-[10px] uppercase tracking-[.16em] text-white/35">
                    Starting from
                  </div>
                  <div className="mt-1 font-display text-xl text-white">
                    {p.price}
                  </div>
                </div>
                <button className="button-mini">
                  View Program <ArrowRight size={14} />
                </button>
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}

function Unisex() {
  return (
    <section
      className="section-shell border-y border-white/10 bg-[#0f0f0d]"
      id="coach"
    >
      <div className="grid gap-10 lg:grid-cols-[1fr_1.1fr] lg:items-center">
        <div className="relative h-[500px] overflow-hidden rounded-2xl">
          <img
            src={images.female}
            alt="Indian female athlete"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-transparent to-transparent" />
          <div className="absolute bottom-5 left-5 rounded-xl border border-white/10 bg-black/30 px-4 py-3 backdrop-blur">
            <div className="text-[10px] uppercase tracking-[.2em] text-aurvex-gold">
              100% Unisex
            </div>
            <div className="mt-1 text-sm text-white">
              Personalized coaching for every body.
            </div>
          </div>
        </div>
        <div>
          <SectionHeading
            eyebrow="Unisex Experience"
            title={
              <>
                Fitness Has No Gender.{" "}
                <span className="text-aurvex-gold">
                  Performance Has No Limit.
                </span>
              </>
            }
            copy="One high-standard coaching system, adapted to your body, context, schedule and ambition. From beginners to professionals, every plan is built around the individual."
          />
          <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-5">
            {["Men", "Women", "Beginners", "Professionals", "Athletes"].map(
              (x, i) => (
                <div
                  key={x}
                  className="rounded-xl border border-white/10 bg-white/[.02] p-4 text-center"
                >
                  <div className="font-display text-lg text-white">
                    0{i + 1}
                  </div>
                  <div className="mt-1 text-[10px] uppercase tracking-[.15em] text-white/40">
                    {x}
                  </div>
                </div>
              ),
            )}
          </div>
          <div className="mt-8 flex items-center gap-3 text-sm text-white/55">
            <Check className="text-aurvex-gold" size={17} /> Online, In-person
            and Hybrid coaching
          </div>
          <div className="mt-4 flex items-center gap-3 text-sm text-white/55">
            <Check className="text-aurvex-gold" size={17} /> Indian nutrition
            planning available
          </div>
        </div>
      </div>
    </section>
  );
}

function Lifestyle() {
  return (
    <section className="section-shell" id="about">
      <div className="grid gap-8 lg:grid-cols-[.8fr_1.2fr]">
        <div>
          <SectionHeading
            eyebrow="Indian Lifestyle"
            title={
              <>
                Indian Strength.{" "}
                <span className="text-aurvex-gold">Modern Performance.</span>
              </>
            }
            copy="Fitness that respects the way you actually live — from Indian food and family events to boardrooms, travel, weddings and long-term health."
          />
          <a href="#book" className="button-ghost mt-8 inline-flex">
            Build Your Personalized Plan <ArrowRight size={15} />
          </a>
        </div>
        <div className="relative min-h-[560px] overflow-hidden rounded-2xl">
          <img
            src={images.lifestyle}
            alt="Indian luxury lifestyle editorial"
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(11,11,9,.3),transparent_55%,rgba(11,11,9,.15)),linear-gradient(0deg,rgba(11,11,9,.7),transparent_55%)]" />
          <div className="absolute bottom-6 left-6 right-6 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <div className="text-[10px] uppercase tracking-[.22em] text-aurvex-gold">
                AURVEX × INDIA
              </div>
              <div className="mt-1 max-w-lg font-display text-3xl text-white">
                Traditional context. Modern execution.
              </div>
            </div>
            <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
              {["Nutrition", "Discipline", "Work", "Travel"].map((x) => (
                <div
                  key={x}
                  className="rounded-lg border border-white/10 bg-black/30 px-3 py-2 text-[9px] uppercase tracking-[.15em] text-white/60 backdrop-blur"
                >
                  {x}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Transformations() {
  const [filter, setFilter] = useState("All");
  const list =
    filter === "All"
      ? transformations
      : transformations.filter((x) =>
          x.category.toLowerCase().includes(filter.toLowerCase()),
        );
  return (
    <section id="transformations" className="section-shell bg-[#0f0f0d]">
      <SectionHeading
        eyebrow="Transformation Portfolio"
        title={
          <>
            Results Speak <span className="text-aurvex-gold">Louder.</span>
          </>
        }
        copy="Fictional demonstration cases for this portfolio project. Production sites should use verified, consented client outcomes."
      />
      <div className="mt-7 flex flex-wrap gap-2">
        {["All", "Fat Loss", "Muscle Gain", "Recomposition", "Competition"].map(
          (x) => (
            <button
              key={x}
              onClick={() => setFilter(x)}
              className={`pill ${filter === x ? "pill-active" : ""}`}
            >
              {x}
            </button>
          ),
        )}
      </div>
      <div className="mt-7 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {list.map((t, idx) => (
          <motion.article
            layout
            key={t.name}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="overflow-hidden rounded-2xl border border-white/10 bg-black/20"
          >
            <div className="relative h-80">
              <img
                src={t.image}
                alt={t.name}
                className="h-full w-full object-cover grayscale-[15%]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/15 to-transparent" />
              <div className="absolute left-4 top-4 rounded-full border border-white/10 bg-black/35 px-3 py-1 text-[9px] uppercase tracking-[.15em] text-white/65 backdrop-blur">
                {t.category}
              </div>
              <div className="absolute bottom-4 left-4 right-4">
                <div className="flex items-end justify-between">
                  <div>
                    <div className="text-[10px] uppercase tracking-[.16em] text-white/45">
                      Client
                    </div>
                    <div className="mt-1 font-display text-2xl text-white">
                      {t.name}
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-[10px] uppercase tracking-[.16em] text-white/45">
                      Duration
                    </div>
                    <div className="mt-1 text-sm text-white">{t.weeks}</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-3 divide-x divide-white/10 border-t border-white/10">
              <Metric label="Weight" val={`${t.before} → ${t.after}`} />
              <Metric label="Body Fat" val={t.bf} />
              <Metric label="Timeline" val={t.weeks} />
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}

function Metric({ label, val }) {
  return (
    <div className="p-4">
      <div className="text-[9px] uppercase tracking-[.16em] text-white/30">
        {label}
      </div>
      <div className="mt-1 text-xs text-white/80">{val}</div>
    </div>
  );
}

function Founder() {
  return (
    <section className="section-shell" id="founder">
      <div className="grid gap-12 lg:grid-cols-[.82fr_1.18fr] lg:items-center">
        <div className="relative h-[600px] overflow-hidden rounded-2xl">
          <img
            src={images.founder}
            alt="Arjun Mehra"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent" />
          <div className="absolute bottom-6 left-6">
            <div className="text-[10px] uppercase tracking-[.2em] text-aurvex-gold">
              Arjun Mehra
            </div>
            <div className="mt-1 text-white/70">
              Founder & Performance Coach
            </div>
          </div>
        </div>
        <div>
          <div className="section-kicker">Founder Profile</div>
          <h2 className="mt-3 font-display text-5xl leading-[1.03] text-white sm:text-6xl">
            I don't sell workouts.{" "}
            <span className="text-aurvex-gold">I build systems.</span>
          </h2>
          <p className="mt-6 max-w-xl text-sm leading-7 text-white/55 sm:text-base">
            “I don't sell workouts. I build systems that change how people
            perform, look and live.”
          </p>
          <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-4">
            {["12+ yrs", "500+ wins", "Certified", "S&C Specialist"].map(
              (x) => (
                <div
                  key={x}
                  className="rounded-xl border border-white/10 p-4 text-center text-xs text-white/70"
                >
                  {x}
                </div>
              ),
            )}
          </div>
          <div className="mt-10 border-t border-white/10 pt-8">
            <div className="text-[10px] uppercase tracking-[.2em] text-white/35">
              Credentials
            </div>
            <div className="mt-4 grid gap-3 sm:grid-cols-2">
              {[
                "Certified Personal Trainer",
                "Strength & Conditioning Certification",
                "Sports Nutrition Certification",
                "Bodybuilding Preparation Specialist",
              ].map((x) => (
                <div
                  key={x}
                  className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/[.02] p-4 text-sm text-white/75"
                >
                  <ShieldCheck size={17} className="text-aurvex-gold" />
                  {x}
                </div>
              ))}
            </div>
          </div>
          <a href="#book" className="button-gold mt-8 inline-flex">
            Work Directly With Arjun <ArrowRight size={15} />
          </a>
        </div>
      </div>
    </section>
  );
}

function Packages() {
  const items = [
    {
      name: "FOUNDATION",
      price: "₹7,500",
      features: [
        "Customized workout plan",
        "Nutrition guidelines",
        "Weekly progress review",
        "WhatsApp support",
      ],
    },
    {
      name: "ELITE",
      price: "₹15,000",
      popular: true,
      features: [
        "Fully personalized training",
        "Personalized nutrition",
        "Weekly 1-on-1 consultation",
        "Progress tracking",
        "WhatsApp priority support",
        "Monthly body composition review",
      ],
    },
    {
      name: "PRIVATE PERFORMANCE",
      price: "₹30,000",
      features: [
        "1-on-1 personal training",
        "Customized nutrition",
        "Advanced progress tracking",
        "Priority appointment scheduling",
        "Direct coach access",
        "Lifestyle optimization",
        "Competition/event preparation",
      ],
    },
  ];
  return (
    <section className="section-shell bg-[#0f0f0d]" id="packages">
      <SectionHeading
        align="center"
        eyebrow="Coaching Packages"
        title={
          <>
            Choose Your <span className="text-aurvex-gold">Standard</span>
          </>
        }
        copy="Premium coaching designed around attention, accountability and measurable progress."
      />
      <div className="mt-12 grid gap-4 lg:grid-cols-3">
        {items.map((p, idx) => (
          <div
            key={p.name}
            className={`relative rounded-2xl border p-7 ${p.popular ? "border-aurvex-gold/50 bg-aurvex-gold/[.07] shadow-gold" : "border-white/10 bg-black/15"}`}
          >
            {p.popular && (
              <div className="absolute right-5 top-5 rounded-full bg-aurvex-gold px-3 py-1 text-[9px] font-semibold uppercase tracking-[.15em] text-black">
                Most Popular
              </div>
            )}
            <div className="text-[10px] uppercase tracking-[.2em] text-white/40">
              {p.name}
            </div>
            <div className="mt-3 font-display text-5xl text-white">
              {p.price}
              <span className="text-sm text-white/40">/month</span>
            </div>
            <div className="mt-6 space-y-3 border-t border-white/10 pt-6">
              {p.features.map((f) => (
                <div key={f} className="flex gap-3 text-sm text-white/65">
                  <Check
                    size={16}
                    className="mt-0.5 shrink-0 text-aurvex-gold"
                  />
                  {f}
                </div>
              ))}
            </div>
            <a
              href="#book"
              className={`mt-8 w-full ${p.popular ? "button-gold" : "button-ghost"}`}
            >
              {idx === 0
                ? "Start Foundation"
                : idx === 1
                  ? "Choose Elite"
                  : "Apply For Private Coaching"}{" "}
              <ArrowRight size={15} />
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}

function LeadQualification() {
  return (
    <section className="section-shell">
      <div className="rounded-2xl border border-aurvex-gold/20 bg-[radial-gradient(circle_at_85%_10%,rgba(217,179,108,.11),transparent_35%),rgba(255,255,255,.02)] p-7 sm:p-10">
        <div className="grid gap-8 lg:grid-cols-[1.3fr_.7fr] lg:items-center">
          <div>
            <div className="section-kicker">Lead Qualification</div>
            <h3 className="mt-3 font-display text-4xl text-white sm:text-5xl">
              Serious goals deserve the{" "}
              <span className="text-aurvex-gold">right level of coaching.</span>
            </h3>
            <p className="mt-4 max-w-2xl text-sm leading-7 text-white/55">
              Before your consultation, tell us what you want to change and the
              level of coaching you expect. This keeps recommendations focused
              and helps protect the premium 1-on-1 experience.
            </p>
          </div>
          <div className="grid gap-3">
            <div className="rounded-xl border border-white/10 bg-black/20 p-4">
              <div className="text-[9px] uppercase tracking-[.18em] text-white/35">
                Primary question
              </div>
              <div className="mt-2 text-sm text-white">
                What is your primary transformation goal?
              </div>
            </div>
            <div className="rounded-xl border border-white/10 bg-black/20 p-4">
              <div className="text-[9px] uppercase tracking-[.18em] text-white/35">
                Second question
              </div>
              <div className="mt-2 text-sm text-white">
                What level of coaching are you looking for?
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Booking() {
  const [submitted, setSubmitted] = useState(false);
  const [data, setData] = useState({});
  const set = (key, val) => setData((s) => ({ ...s, [key]: val }));
  if (submitted)
    return (
      <section id="book" className="section-shell">
        <div className="mx-auto max-w-3xl rounded-3xl border border-aurvex-gold/30 bg-aurvex-gold/[.06] p-10 text-center sm:p-16">
          <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-aurvex-gold text-black">
            <Check />
          </div>
          <div className="mt-6 section-kicker">Request Received</div>
          <h2 className="mt-3 font-display text-5xl text-white">
            Your consultation request has been received.
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-white/55">
            We’ll review your goals and preferred times. For a faster response,
            use WhatsApp or call the coach directly.
          </p>
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <a
              className="button-gold"
              href="https://wa.me/919876543210"
              target="_blank"
              rel="noreferrer"
            >
              <MessageCircle size={16} />
              Chat on WhatsApp
            </a>
            <a className="button-ghost" href="tel:+919876543210">
              <Phone size={16} />
              Call Coach
            </a>
          </div>
        </div>
      </section>
    );
  return (
    <section id="book" className="section-shell bg-[#0f0f0d]">
      <div className="grid gap-12 lg:grid-cols-[.7fr_1.3fr]">
        <div>
          <SectionHeading
            eyebrow="Private Consultation"
            title={
              <>
                Your Transformation Starts With{" "}
                <span className="text-aurvex-gold">One Conversation.</span>
              </>
            }
            copy="Share enough context for us to understand your goal, schedule and coaching preference. No commitment is made by submitting this form."
          />
          <div className="mt-8 rounded-2xl border border-white/10 bg-black/15 p-5">
            <div className="text-[10px] uppercase tracking-[.2em] text-white/35">
              Availability
            </div>
            <div className="mt-2 font-display text-4xl text-white">
              03{" "}
              <span className="text-base text-white/40">
                private coaching slots available this month
              </span>
            </div>
            <div className="mt-5 h-1.5 rounded-full bg-white/10">
              <div className="h-full w-[62%] rounded-full bg-aurvex-gold" />
            </div>
          </div>
        </div>
        <form
          className="grid gap-3 sm:grid-cols-2"
          onSubmit={(e) => {
            e.preventDefault();
            setSubmitted(true);
          }}
        >
          {[
            "Full Name",
            "Phone Number",
            "WhatsApp Number",
            "Email",
            "Age",
            "Current Weight",
            "Height",
          ].map((field) => (
            <Input
              key={field}
              label={field}
              value={data[field] || ""}
              onChange={(v) => set(field, v)}
              required={["Full Name", "Phone Number", "Email"].includes(field)}
            />
          ))}
          <Select
            label="Gender"
            options={["Men", "Women", "Prefer not to say"]}
            onChange={(v) => set("gender", v)}
          />
          <Select
            label="Current Fitness Level"
            options={["Beginner", "Intermediate", "Advanced", "Athlete"]}
            onChange={(v) => set("level", v)}
          />
          <Select
            label="Primary Goal"
            options={[
              "Fat Loss",
              "Lean Body",
              "Muscle Gain",
              "Bulk",
              "Strength",
              "Body Recomposition",
              "Competitive Preparation",
              "General Fitness",
            ]}
            onChange={(v) => set("goal", v)}
          />
          <Select
            label="Preferred Program"
            options={programs.map((p) => p.name)}
            onChange={(v) => set("program", v)}
          />
          <Input
            label="Preferred Date"
            type="date"
            onChange={(v) => set("date", v)}
          />
          <Select
            label="Preferred Time"
            options={[
              "9:00 AM",
              "10:00 AM",
              "11:00 AM",
              "12:00 PM",
              "1:00 PM",
              "3:00 PM",
              "4:00 PM",
              "5:00 PM",
              "6:00 PM",
              "7:00 PM",
            ]}
            onChange={(v) => set("time", v)}
          />
          <Select
            label="Training Preference"
            options={["Online", "In-Person", "Hybrid"]}
            onChange={(v) => set("pref", v)}
          />
          <div className="sm:col-span-2">
            <label className="field-label">Additional Message</label>
            <textarea
              className="field"
              rows="4"
              placeholder="Tell us what you want to change..."
              onChange={(e) => set("message", e.target.value)}
            />
          </div>
          <label className="sm:col-span-2 flex gap-3 text-xs text-white/45">
            <input
              required
              type="checkbox"
              className="mt-0.5 accent-[#D9B36C]"
            />{" "}
            I agree that AURVEX may contact me about my consultation request.
          </label>
          <button
            className="button-gold sm:col-span-2 sm:justify-self-start"
            type="submit"
          >
            Request Private Consultation <ArrowRight size={16} />
          </button>
        </form>
      </div>
    </section>
  );
}

function Input({ label, type = "text", value, onChange, required = false }) {
  return (
    <div>
      <label className="field-label">{label}</label>
      <input
        required={required}
        className="field"
        type={type}
        value={value || ""}
        onChange={(e) => onChange?.(e.target.value)}
      />
    </div>
  );
}
function Select({ label, options, onChange }) {
  return (
    <div>
      <label className="field-label">{label}</label>
      <select
        className="field"
        defaultValue=""
        onChange={(e) => onChange(e.target.value)}
      >
        <option value="" disabled>
          Select
        </option>
        {options.map((x) => (
          <option key={x} value={x}>
            {x}
          </option>
        ))}
      </select>
    </div>
  );
}

function Availability() {
  const [selected, setSelected] = useState({
    day: "Monday",
    time: "10:00 AM",
    type: "Video Consultation",
  });
  const slots = {
    Monday: ["10:00 AM", "12:00 PM", "5:00 PM"],
    Tuesday: ["9:00 AM", "1:00 PM", "6:00 PM"],
    Wednesday: ["11:00 AM", "4:00 PM", "7:00 PM"],
  };
  return (
    <section className="section-shell" id="availability">
      <SectionHeading
        eyebrow="Appointment Calendar"
        title={
          <>
            Available Consultation{" "}
            <span className="text-aurvex-gold">Slots</span>
          </>
        }
        copy="Choose a day, time and consultation format. The demo uses static availability; production can connect this to Calendly/Google Calendar."
      />
      <div className="mt-10 grid gap-4 lg:grid-cols-[1.3fr_.7fr]">
        <div className="rounded-2xl border border-white/10 bg-white/[.02] p-5">
          <div className="flex items-center justify-between">
            <div className="text-sm font-medium text-white">October 2026</div>
            <div className="flex gap-2">
              <button className="icon-btn">
                <ChevronLeft size={16} />
              </button>
              <button className="icon-btn">
                <ChevronRight size={16} />
              </button>
            </div>
          </div>
          <div className="mt-5 grid gap-3 md:grid-cols-3">
            {Object.entries(slots).map(([day, times]) => (
              <div
                key={day}
                className={`rounded-xl border p-4 ${selected.day === day ? "border-aurvex-gold/40 bg-aurvex-gold/[.06]" : "border-white/10"}`}
              >
                <div className="text-[10px] uppercase tracking-[.18em] text-white/40">
                  {day}
                </div>
                <div className="mt-3 space-y-2">
                  {times.map((time) => (
                    <button
                      key={time}
                      onClick={() => setSelected((s) => ({ ...s, day, time }))}
                      className={`slot ${selected.day === day && selected.time === time ? "slot-active" : ""}`}
                    >
                      {time}
                    </button>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="rounded-2xl border border-white/10 bg-[#12120f] p-6">
          <div className="section-kicker">Selected Appointment</div>
          <div className="mt-5 space-y-4">
            <SummaryRow label="Day" value={selected.day} />
            <SummaryRow label="Time" value={selected.time} />
            <div>
              <div className="field-label">Consultation type</div>
              <div className="grid grid-cols-3 gap-2">
                {["Video Consultation", "In-Person", "Phone"].map((x) => (
                  <button
                    key={x}
                    onClick={() => setSelected((s) => ({ ...s, type: x }))}
                    className={`rounded-xl border px-3 py-3 text-xs ${selected.type === x ? "border-aurvex-gold/50 bg-aurvex-gold/10 text-white" : "border-white/10 text-white/45"}`}
                  >
                    {x}
                  </button>
                ))}
              </div>
            </div>
          </div>
          <button
            onClick={() =>
              document
                .getElementById("book")
                ?.scrollIntoView({ behavior: "smooth" })
            }
            className="button-gold mt-7 w-full"
          >
            Confirm Consultation <ArrowRight size={15} />
          </button>
        </div>
      </div>
    </section>
  );
}
function SummaryRow({ label, value }) {
  return (
    <div className="flex items-center justify-between border-b border-white/10 pb-4">
      <div className="text-[10px] uppercase tracking-[.18em] text-white/35">
        {label}
      </div>
      <div className="text-sm text-white">{value}</div>
    </div>
  );
}

function ClientDashboardPreview() {
  return (
    <section className="section-shell bg-[#0f0f0d]" id="dashboard">
      <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
        <SectionHeading
          eyebrow="Client Dashboard"
          title={
            <>
              Know your numbers.{" "}
              <span className="text-aurvex-gold">Change your trajectory.</span>
            </>
          }
          copy="A high-touch client portal for progress, workouts and nutrition — shown here as a polished product preview."
        />
        <Link to="/dashboard" className="button-ghost">
          Open Dashboard <ArrowRight size={15} />
        </Link>
      </div>
      <div className="mt-10 overflow-hidden rounded-3xl border border-white/10 bg-[#10100e] shadow-gold">
        <ClientDashboard embedded />
      </div>
    </section>
  );
}

function ClientDashboard({ embedded = false }) {
  const [metric, setMetric] = useState("weight");
  const current = chartData[chartData.length - 1];
  return (
    <div className="flex min-h-[600px] bg-[#0c0c0a]">
      <aside className="hidden w-52 border-r border-white/10 p-5 md:block">
        <Logo compact />
        <div className="mt-8 space-y-1">
          {[
            ["Overview", BarChart3],
            ["Workouts", Dumbbell],
            ["Nutrition", Flame],
            ["Progress", TrendingUp],
            ["Messages", MessageCircle],
          ].map(([label, Icon]) => (
            <button key={label} className="dash-nav">
              <Icon size={15} />
              {label}
            </button>
          ))}
        </div>
      </aside>
      <div className="min-w-0 flex-1 p-5 sm:p-7">
        <div className="flex items-center justify-between">
          <div>
            <div className="text-[10px] uppercase tracking-[.2em] text-aurvex-gold">
              Client Dashboard
            </div>
            <h3 className="mt-2 font-display text-3xl text-white">
              Welcome back, Rahul.
            </h3>
          </div>
          <div className="hidden items-center gap-3 sm:flex">
            <div className="icon-btn">
              <Bell size={16} />
            </div>
            <div className="h-9 w-9 overflow-hidden rounded-full">
              <img
                src={images.testimonial1}
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
        <div className="mt-6 grid gap-3 sm:grid-cols-2 xl:grid-cols-5">
          {[
            ["Weight", `${current.weight} kg`],
            ["Body Fat", `${current.bodyFat}%`],
            ["Muscle Mass", "34.2 kg"],
            ["Calories", "2,350 kcal"],
            ["Daily Steps", "8,742"],
          ].map(([k, v]) => (
            <div key={k} className="stat-box">
              <div className="text-[9px] uppercase tracking-[.16em] text-white/35">
                {k}
              </div>
              <div className="mt-2 font-display text-2xl text-white">{v}</div>
              <div className="mt-1 text-[10px] text-emerald-400">
                +{k === "Daily Steps" ? "8.2" : "2.4"}% vs last week
              </div>
            </div>
          ))}
        </div>
        <div className="mt-4 grid gap-4 lg:grid-cols-[1.3fr_.7fr]">
          <div className="panel">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <div>
                <div className="text-xs uppercase tracking-[.17em] text-white/35">
                  Weekly Progress
                </div>
                <div className="mt-1 text-lg text-white">
                  {metric === "weight"
                    ? "Weight"
                    : metric === "bodyFat"
                      ? "Body Fat"
                      : "Strength"}{" "}
                  trend
                </div>
              </div>
              <div className="flex gap-1 rounded-xl border border-white/10 p-1">
                {[
                  ["weight", "Weight"],
                  ["bodyFat", "Body Fat"],
                  ["strength", "Strength"],
                ].map(([key, label]) => (
                  <button
                    key={key}
                    onClick={() => setMetric(key)}
                    className={`rounded-lg px-3 py-1.5 text-[10px] ${metric === key ? "bg-white/10 text-white" : "text-white/35"}`}
                  >
                    {label}
                  </button>
                ))}
              </div>
            </div>
            <div className="mt-4 h-56">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={chartData}>
                  <defs>
                    <linearGradient id="goldFade" x1="0" x2="0" y1="0" y2="1">
                      <stop offset="0%" stopColor="#D9B36C" stopOpacity=".24" />
                      <stop offset="100%" stopColor="#D9B36C" stopOpacity="0" />
                    </linearGradient>
                  </defs>
                  <CartesianGrid
                    stroke="rgba(255,255,255,.06)"
                    vertical={false}
                  />
                  <XAxis
                    dataKey="week"
                    stroke="rgba(255,255,255,.3)"
                    fontSize={10}
                  />
                  <YAxis
                    stroke="rgba(255,255,255,.3)"
                    fontSize={10}
                    width={28}
                  />
                  <Tooltip
                    contentStyle={{
                      background: "#151512",
                      border: "1px solid rgba(255,255,255,.12)",
                      borderRadius: 12,
                    }}
                  />
                  <Area
                    type="monotone"
                    dataKey={metric}
                    stroke="#D9B36C"
                    fill="url(#goldFade)"
                    strokeWidth={2.2}
                  />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </div>
          <div className="panel">
            <div className="text-xs uppercase tracking-[.17em] text-white/35">
              Today's Workout
            </div>
            <div className="mt-2 flex items-center justify-between">
              <div className="text-lg text-white">Upper Body Strength</div>
              <div className="text-[10px] text-aurvex-gold">55 min</div>
            </div>
            <div className="mt-4 space-y-2">
              {[
                "Bench Press — 4 × 8",
                "Lat Pulldown — 4 × 10",
                "Shoulder Press — 3 × 10",
                "Bicep Curl — 3 × 12",
              ].map((x) => (
                <div
                  className="flex items-center justify-between rounded-lg border border-white/10 px-3 py-2.5 text-xs text-white/65"
                  key={x}
                >
                  <span>{x}</span>
                  <Check size={14} className="text-emerald-400" />
                </div>
              ))}
            </div>
            <button className="button-gold mt-4 w-full">
              Start Workout <ArrowRight size={14} />
            </button>
          </div>
        </div>
        <div className="mt-4 grid gap-4 md:grid-cols-3">
          <NutritionCard title="Calories" value="1,820 / 2,350" pct="77%" />
          <NutritionCard title="Protein" value="145g / 170g" pct="85%" />
          <NutritionCard title="Steps" value="8,742 / 10,000" pct="87%" />
        </div>
      </div>
    </div>
  );
}
function NutritionCard({ title, value, pct }) {
  return (
    <div className="panel">
      <div className="flex items-center justify-between">
        <div className="text-xs uppercase tracking-[.16em] text-white/35">
          {title}
        </div>
        <div className="text-xs text-white/55">{pct}</div>
      </div>
      <div className="mt-3 text-lg text-white">{value}</div>
      <div className="mt-3 h-1.5 rounded-full bg-white/10">
        <div
          className="h-full rounded-full bg-aurvex-gold"
          style={{ width: pct }}
        />
      </div>
    </div>
  );
}

function Testimonials() {
  return (
    <section className="section-shell" id="testimonials">
      <SectionHeading
        align="center"
        eyebrow="Social Proof"
        title={
          <>
            Quiet confidence.{" "}
            <span className="text-aurvex-gold">Visible results.</span>
          </>
        }
      />
      <div className="mt-10 grid gap-4 lg:grid-cols-3">
        {testimonials.map((t) => (
          <figure
            key={t.name}
            className="rounded-2xl border border-white/10 bg-white/[.02] p-7"
          >
            <Quote size={28} className="text-aurvex-gold" />
            <blockquote className="mt-6 font-display text-2xl leading-snug text-white">
              “{t.quote}”
            </blockquote>
            <figcaption className="mt-8 flex items-center gap-3 border-t border-white/10 pt-5">
              <img
                src={t.image}
                className="h-10 w-10 rounded-full object-cover"
              />
              <div>
                <div className="text-sm text-white">{t.name}</div>
                <div className="text-xs text-white/40">{t.role}</div>
              </div>
              <div className="ml-auto text-aurvex-gold">★★★★★</div>
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}

function InstagramGrid() {
  return (
    <section className="section-shell bg-[#0f0f0d]" id="instagram">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <SectionHeading
          eyebrow="Social Media"
          title={
            <>
              Follow The <span className="text-aurvex-gold">Standard</span>
            </>
          }
          copy="A visual feed built around training, lifestyle, nutrition and the coach's personal brand."
        />
        <a className="button-ghost" href="#">
          @aurvexperformance <Instagram size={15} />
        </a>
      </div>
      <div className="mt-10 grid grid-cols-2 gap-2 sm:grid-cols-3">
        {[
          images.instagram1,
          images.instagram2,
          images.instagram3,
          images.instagram4,
          images.instagram5,
          images.instagram6,
        ].map((img, i) => (
          <div
            key={img}
            className="group aspect-square overflow-hidden rounded-xl"
          >
            <img
              src={img}
              alt="AURVEX editorial"
              className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
            />
            <div className="absolute" />
          </div>
        ))}
      </div>
    </section>
  );
}

function Calculator() {
  const [height, setHeight] = useState(175),
    [weight, setWeight] = useState(78),
    [age, setAge] = useState(29),
    [activity, setActivity] = useState("Moderate"),
    [gender, setGender] = useState("Male");
  const bmi = (Number(weight) / (Number(height) / 100) ** 2).toFixed(1);
  const factor = { Sedentary: 1.2, Light: 1.375, Moderate: 1.55, High: 1.725 }[
    activity
  ];
  const bmr =
    gender === "Male"
      ? 10 * weight + 6.25 * height - 5 * age + 5
      : 10 * weight + 6.25 * height - 5 * age - 161;
  const calories = Math.round(bmr * factor);
  return (
    <section className="section-shell" id="calculator">
      <div className="grid gap-8 lg:grid-cols-[.85fr_1.15fr] lg:items-center">
        <div>
          <SectionHeading
            eyebrow="Lead Generation Tool"
            title={
              <>
                Know your baseline.{" "}
                <span className="text-aurvex-gold">Then personalize it.</span>
              </>
            }
            copy="A simple BMI and daily calorie estimate to start the conversation. It is not medical advice and does not replace individualized assessment."
          />
          <a href="#book" className="button-gold mt-8 inline-flex">
            Get Your Personalized Plan <ArrowRight size={15} />
          </a>
        </div>
        <div className="rounded-2xl border border-white/10 bg-white/[.02] p-6 sm:p-8">
          <div className="grid gap-4 sm:grid-cols-2">
            {[
              ["Height (cm)", height, setHeight, 100, 220],
              ["Weight (kg)", weight, setWeight, 35, 160],
              ["Age", age, setAge, 15, 80],
            ].map(([label, val, set, min, max]) => (
              <div key={label}>
                <label className="field-label">{label}</label>
                <input
                  className="field"
                  type="number"
                  min={min}
                  max={max}
                  value={val}
                  onChange={(e) => set(Number(e.target.value))}
                />
              </div>
            ))}
            <div>
              <label className="field-label">Gender</label>
              <select
                className="field"
                value={gender}
                onChange={(e) => setGender(e.target.value)}
              >
                <option>Male</option>
                <option>Female</option>
              </select>
            </div>
            <div className="sm:col-span-2">
              <label className="field-label">Activity Level</label>
              <select
                className="field"
                value={activity}
                onChange={(e) => setActivity(e.target.value)}
              >
                {Object.keys(factor).map((x) => (
                  <option key={x}>{x}</option>
                ))}
              </select>
            </div>
          </div>
          <div className="mt-6 grid gap-3 sm:grid-cols-2">
            <div className="rounded-2xl border border-white/10 bg-black/20 p-5">
              <div className="text-[9px] uppercase tracking-[.17em] text-white/35">
                BMI
              </div>
              <div className="mt-2 font-display text-4xl text-white">{bmi}</div>
            </div>
            <div className="rounded-2xl border border-aurvex-gold/20 bg-aurvex-gold/[.05] p-5">
              <div className="text-[9px] uppercase tracking-[.17em] text-white/35">
                Estimated Daily Calories
              </div>
              <div className="mt-2 font-display text-4xl text-aurvex-gold">
                {calories.toLocaleString("en-IN")}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function FAQ() {
  const questions = [
    "Is the program suitable for beginners?",
    "Do you train both men and women?",
    "Is online coaching available?",
    "Do you provide Indian diet plans?",
    "Can you help with competition preparation?",
    "How long does it take to see results?",
    "Do you provide personalized workouts?",
    "Is there a minimum coaching commitment?",
    "How does the consultation work?",
    "Can I book a private 1-on-1 session?",
  ];
  const [open, setOpen] = useState(null);
  return (
    <section className="section-shell" id="faq">
      <SectionHeading
        eyebrow="FAQ"
        title={
          <>
            Questions before you{" "}
            <span className="text-aurvex-gold">start.</span>
          </>
        }
      />
      <div className="mx-auto mt-10 max-w-4xl divide-y divide-white/10 border-y border-white/10">
        {questions.map((q, i) => (
          <div key={q}>
            <button
              className="flex w-full items-center justify-between gap-5 py-5 text-left"
              onClick={() => setOpen(open === i ? null : i)}
            >
              <span className="text-sm text-white/75 sm:text-base">{q}</span>
              {open === i ? (
                <Minus size={16} className="text-aurvex-gold" />
              ) : (
                <Plus size={16} className="text-white/35" />
              )}
            </button>
            <AnimatePresence>
              {open === i && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  className="overflow-hidden"
                >
                  <p className="pb-5 pr-8 text-sm leading-7 text-white/45">
                    Yes. AURVEX adapts the coaching model to your starting
                    point, schedule and target. The consultation determines
                    whether online, in-person or hybrid coaching is appropriate.
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </section>
  );
}

function StickyContact() {
  return (
    <div className="fixed bottom-5 right-5 z-40 flex flex-col gap-2">
      <a
        href="https://wa.me/919876543210"
        target="_blank"
        rel="noreferrer"
        className="floating floating-wa"
      >
        <MessageCircle size={18} />
        <span>Chat on WhatsApp</span>
      </a>
      <a href="tel:+919876543210" className="floating floating-call">
        <Phone size={18} />
        <span>Call Now</span>
      </a>
      <div className="mr-1 self-end rounded-full border border-white/10 bg-black/70 px-3 py-1.5 text-[9px] uppercase tracking-[.15em] text-white/55 backdrop-blur">
        Need help choosing a program?
      </div>
    </div>
  );
}

function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black/30">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-14 lg:grid-cols-[1.3fr_1fr_1fr] lg:px-8">
        <div>
          <Logo />
          <p className="mt-5 max-w-sm text-sm leading-6 text-white/45">
            Train With Purpose. Perform Beyond Limits.
          </p>
        </div>
        <div>
          <div className="text-[10px] uppercase tracking-[.2em] text-white/30">
            Navigation
          </div>
          <div className="mt-4 grid grid-cols-2 gap-3 text-sm text-white/55">
            {[
              "Programs",
              "Transformations",
              "About",
              "Testimonials",
              "Book Consultation",
              "Contact",
            ].map((x) => (
              <a
                key={x}
                href={
                  x === "Book Consultation" ? "#book" : `#${x.toLowerCase()}`
                }
              >
                {x}
              </a>
            ))}
          </div>
        </div>
        <div>
          <div className="text-[10px] uppercase tracking-[.2em] text-white/30">
            Contact
          </div>
          <div className="mt-4 space-y-2 text-sm text-white/55">
            <div>+91 98765 43210</div>
            <div>coach@aurvexperformance.com</div>
            <div>Mumbai, India</div>
          </div>
          <div className="mt-5 flex gap-2">
            <div className="icon-btn">
              <Instagram size={15} />
            </div>
            <div className="icon-btn">
              <Youtube size={15} />
            </div>
            <div className="icon-btn">
              <Linkedin size={15} />
            </div>
          </div>
        </div>
      </div>
      <div className="border-t border-white/10 py-4 text-center text-[10px] uppercase tracking-[.16em] text-white/30">
        © 2026 AURVEX Performance · Portfolio demo
      </div>
    </footer>
  );
}

function DashboardShell({ admin = false }) {
  return (
    <div className="min-h-screen bg-[#0b0b09] text-white">
      {" "}
      <DashboardNav admin={admin} />
      <main className="mx-auto max-w-[1600px] p-4 sm:p-6 lg:p-8">
        {admin ? <AdminDashboard /> : <ClientDashboard />}
      </main>
    </div>
  );
}
function DashboardNav({ admin }) {
  return (
    <header className="sticky top-0 z-40 border-b border-white/10 bg-[#0b0b09]/85 backdrop-blur">
      <div className="mx-auto flex max-w-[1600px] items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <Logo />
        <div className="flex items-center gap-2">
          <Link to="/" className="button-ghost hidden sm:inline-flex">
            Back to Site
          </Link>
          <Link to={admin ? "/dashboard" : "/admin"} className="button-mini">
            {admin ? "Client View" : "Admin View"}
          </Link>
          <div className="h-9 w-9 overflow-hidden rounded-full">
            <img
              src={images.testimonial1}
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </div>
    </header>
  );
}

function AdminDashboard() {
  return (
    <div>
      <div className="flex flex-col gap-3 lg:flex-row lg:items-end lg:justify-between">
        <div>
          <div className="section-kicker">Admin / Business Dashboard</div>
          <h1 className="mt-2 font-display text-5xl text-white">
            Good evening, Arjun.
          </h1>
          <p className="mt-2 text-sm text-white/45">
            Here's what is happening across your coaching business.
          </p>
        </div>
        <div className="flex gap-2">
          <button className="button-mini">
            <CalendarDays size={14} /> Oct 1 – Oct 31, 2026
          </button>
          <button className="button-mini">
            <Bell size={14} />
          </button>
        </div>
      </div>
      <div className="mt-6 grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
        {[
          ["128", "Active Clients", Users],
          ["₹8.4L", "Monthly Revenue", TrendingUp],
          ["42", "New Leads", MessageCircle],
          ["31%", "Consultation Conversion", BarChart3],
        ].map(([v, l, I]) => (
          <div key={l} className="stat-box">
            <div className="flex items-center justify-between">
              <div className="text-[9px] uppercase tracking-[.17em] text-white/35">
                {l}
              </div>
              <I size={16} className="text-aurvex-gold" />
            </div>
            <div className="mt-2 font-display text-3xl text-white">{v}</div>
            <div className="mt-2 text-xs text-emerald-400">
              +12.8% vs last month
            </div>
          </div>
        ))}
      </div>
      <div className="mt-4 grid gap-4 xl:grid-cols-[1.1fr_.9fr]">
        {" "}
        <div className="panel">
          <PanelHeader title="Revenue Overview" />
          <div className="mt-3 h-72">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart
                data={[
                  { m: "Apr", v: 2.1 },
                  { m: "May", v: 3.8 },
                  { m: "Jun", v: 4.2 },
                  { m: "Jul", v: 6.3 },
                  { m: "Aug", v: 7.5 },
                  { m: "Sep", v: 7.1 },
                  { m: "Oct", v: 8.4 },
                ]}
              >
                <CartesianGrid
                  stroke="rgba(255,255,255,.06)"
                  vertical={false}
                />
                <XAxis
                  dataKey="m"
                  stroke="rgba(255,255,255,.3)"
                  fontSize={10}
                />
                <YAxis
                  stroke="rgba(255,255,255,.3)"
                  fontSize={10}
                  tickFormatter={(v) => `₹${v}L`}
                />
                <Tooltip
                  contentStyle={{
                    background: "#151512",
                    border: "1px solid rgba(255,255,255,.12)",
                    borderRadius: 12,
                  }}
                  formatter={(v) => [`₹${v}L`, "Revenue"]}
                />
                <Bar dataKey="v" fill="#D9B36C" radius={[5, 5, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
        <div className="panel">
          <PanelHeader title="Upcoming Appointments" action="View All" />
          <div className="mt-4 space-y-2">
            {appointments.map((a) => (
              <div
                key={a.id}
                className="flex items-center gap-3 rounded-xl border border-white/10 p-3"
              >
                <img
                  src={a.image}
                  className="h-9 w-9 rounded-full object-cover"
                />
                <div className="min-w-0 flex-1">
                  <div className="truncate text-sm text-white">{a.name}</div>
                  <div className="truncate text-[11px] text-white/35">
                    {a.type} · {a.time}
                  </div>
                </div>
                <div className="rounded-full border border-aurvex-gold/20 bg-aurvex-gold/5 px-2 py-1 text-[9px] text-aurvex-gold">
                  Open
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="mt-4 grid gap-4 lg:grid-cols-3">
        <div className="panel">
          <PanelHeader title="Recent Clients" action="View All" />
          <div className="mt-3 space-y-3">
            {["Aditi Singh", "Rahul Malhotra", "Sneha Patel", "Vikram Rao"].map(
              (n, i) => (
                <div key={n} className="flex items-center gap-3">
                  <img
                    src={
                      [
                        images.testimonial2,
                        images.testimonial1,
                        images.testimonial2,
                        images.testimonial3,
                      ][i]
                    }
                    className="h-9 w-9 rounded-full object-cover"
                  />
                  <div className="flex-1">
                    <div className="text-sm text-white">{n}</div>
                    <div className="text-[10px] text-white/35">
                      {
                        [
                          "Lean Body",
                          "Muscular",
                          "Recomposition",
                          "Functional",
                        ][i]
                      }{" "}
                      · Active
                    </div>
                  </div>
                  <span className="text-[10px] text-emerald-400">Active</span>
                </div>
              ),
            )}
          </div>
        </div>
        <div className="panel">
          <PanelHeader title="Quick Actions" />
          <div className="mt-3 grid grid-cols-2 gap-2">
            {[
              ["Add New Client", Users],
              ["Book Appointment", CalendarDays],
              ["Create Program", Dumbbell],
              ["Send Message", MessageCircle],
            ].map(([x, I]) => (
              <button
                key={x}
                className="rounded-xl border border-white/10 bg-white/[.02] p-4 text-left hover:bg-white/[.04]"
              >
                <I size={17} className="text-aurvex-gold" />
                <div className="mt-3 text-xs text-white/65">{x}</div>
              </button>
            ))}
          </div>
        </div>
        <div className="panel">
          <PanelHeader title="Lead Funnel" />
          <div className="mt-4 space-y-4">
            {[
              ["42", "New Leads", 100],
              ["26", "Qualified", 62],
              ["17", "Consultations", 40],
              ["13", "Closed", 31],
            ].map(([n, l, p]) => (
              <div key={l}>
                <div className="flex justify-between text-xs">
                  <span className="text-white/55">{l}</span>
                  <span className="text-white">{n}</span>
                </div>
                <div className="mt-2 h-2 rounded-full bg-white/10">
                  <div
                    className="h-full rounded-full bg-aurvex-gold"
                    style={{ width: `${p}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
function PanelHeader({ title, action }) {
  return (
    <div className="flex items-center justify-between">
      <div className="text-xs uppercase tracking-[.17em] text-white/35">
        {title}
      </div>
      {action && (
        <button className="text-[10px] text-aurvex-gold">{action}</button>
      )}
    </div>
  );
}

function NotFound() {
  return <div />;
}

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
);
