import React, { useState, useEffect, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  ArrowRight, 
  Search, 
  ClipboardList, 
  UserPlus, 
  FileText, 
  ChevronLeft, 
  ChevronRight, 
  School, 
  BookOpen, 
  Settings, 
  LayoutDashboard,
  Brain,
  Code,
  Cpu,
  Users,
  Globe,
  PenTool,
  Award,
  Bot,
  Check,
  Eye,
  EyeOff,
  Library,
  LogOut,
  User,
  Phone,
  Mail,
  MessageSquare,
  Clock,
  X
} from "lucide-react";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

// --- Utility: cn ---
function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// --- Types ---
interface Contact {
  id: string;
  name: string;
  phone: string;
  email: string;
  message: string;
  timestamp: string;
}

// --- Components ---

const Navbar = ({ onLoginClick }: { onLoginClick: () => void }) => (
  <nav className="fixed top-0 w-full z-50 px-8 py-4 bg-white/70 backdrop-blur-xl shadow-sm no-line">
    <div className="flex justify-between items-center max-w-7xl mx-auto">
      <div className="font-headline italic text-2xl font-bold text-primary">
        Thầy Sinh AI
      </div>
      <div className="hidden md:flex space-x-12">
        <a className="font-headline text-lg tracking-tight text-primary border-b-2 border-secondary pb-1 hover:text-primary-container transition-colors duration-300" href="#">Trang chủ</a>
        <a className="font-headline text-lg tracking-tight text-on-surface-variant hover:text-primary transition-colors duration-300" href="#achievements">Thành tựu</a>
        <a className="font-headline text-lg tracking-tight text-on-surface-variant hover:text-primary transition-colors duration-300" href="#skills">Kỹ năng</a>
        <a className="font-headline text-lg tracking-tight text-on-surface-variant hover:text-primary transition-colors duration-300" href="#contact">Liên hệ</a>
      </div>
      <button 
        onClick={onLoginClick}
        className="bg-primary-container text-white px-6 py-2 rounded-full font-body text-sm tracking-widest uppercase hover:scale-95 transition-transform duration-400 ease-out"
      >
        Đăng Nhập
      </button>
    </div>
  </nav>
);

const Hero = () => (
  <section className="relative max-w-7xl mx-auto px-8 min-h-[90vh] flex items-center pt-24 pb-32">
    {/* Background decorative elements */}
    <div className="absolute top-1/4 -right-1/4 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[120px] -z-10 pointer-events-none" />
    <div className="absolute bottom-0 -left-1/4 w-[600px] h-[600px] bg-secondary/5 rounded-full blur-[100px] -z-10 pointer-events-none" />
    
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-8 items-center w-full">
      <motion.div 
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        className="lg:col-span-7 space-y-10 order-2 lg:order-1"
      >
        <div className="space-y-4">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-surface-container border border-slate-200/50"
          >
            <span className="w-2 h-2 rounded-full bg-secondary animate-pulse" />
            <span className="text-xs font-medium tracking-widest uppercase text-on-surface-variant">Giáo viên Tin học | Chuyên gia STEM & Robotics</span>
          </motion.div>
          <h1 className="font-headline text-6xl sm:text-7xl lg:text-[5.5rem] leading-[1.1] text-primary tracking-tight">
            Người truyền lửa <br/>
            <span className="italic font-light text-on-surface-variant">đam mê</span> <br/>
            STEM & Robotics.
          </h1>
        </div>
        
        <p className="text-on-surface-variant/80 max-w-xl leading-relaxed text-xl font-light">
          Với trọn vẹn tâm huyết dành cho sự nghiệp giáo dục, tôi luôn nỗ lực mang đến những bài học công nghệ sinh động, giúp học sinh phát triển tư duy logic và tự tin làm chủ tương lai số.
        </p>
        
        <div className="flex flex-wrap items-center gap-6 pt-4">
          <button className="group relative inline-flex items-center justify-center gap-3 bg-primary text-white px-8 py-4 rounded-full font-medium tracking-wide overflow-hidden transition-transform hover:scale-[1.02] active:scale-[0.98]">
            <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-primary-container to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <span className="relative">Hành trình Giáo dục</span>
            <ArrowRight className="relative w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
          <a href="#contact" className="inline-flex items-center gap-2 text-primary font-medium hover:text-secondary transition-colors">
            <span>Liên hệ hợp tác</span>
          </a>
        </div>
      </motion.div>

      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
        className="lg:col-span-5 relative order-1 lg:order-2"
      >
        <div className="relative w-full aspect-[4/5] rounded-2xl overflow-hidden group">
          <div className="absolute inset-0 bg-primary/10 mix-blend-multiply group-hover:opacity-0 transition-opacity duration-700 z-10" />
          <img 
            className="w-full h-full object-cover scale-105 group-hover:scale-100 transition-transform duration-1000 ease-out" 
            src="https://i.postimg.cc/4xt6KXF6/unwatermarked-Gemini-Generated-Image-8wfyaa8wfyaa8wfy.png" 
            alt="Nguyễn Trường Sinh"
          />
          {/* Decorative badge */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="absolute bottom-8 left-[-2rem] bg-white p-6 rounded-2xl shadow-2xl z-20 hidden md:block"
          >
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center">
                <Award className="w-6 h-6 text-secondary" />
              </div>
              <div>
                <p className="text-2xl font-bold text-primary">15+</p>
                <p className="text-xs font-medium uppercase tracking-wider text-slate-500">Năm kinh nghiệm</p>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  </section>
);

const Achievements = () => (
  <section id="achievements" className="py-32 relative">
    <div className="absolute inset-0 bg-surface-container/50 skew-y-[-2deg] origin-top-left -z-10" />
    <div className="max-w-7xl mx-auto px-8">
      <div className="mb-24 flex flex-col md:flex-row justify-between items-end gap-8">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="max-w-2xl"
        >
          <div className="flex items-center gap-4 mb-6">
            <div className="h-px w-12 bg-secondary" />
            <span className="font-body text-secondary font-medium tracking-[0.2em] uppercase text-sm">Dấu ấn nổi bật</span>
          </div>
          <h2 className="font-headline text-5xl md:text-6xl text-primary tracking-tight">Thành tựu & Cột mốc</h2>
        </motion.div>
        <motion.p 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="font-body text-on-surface-variant/80 text-lg md:text-xl font-light max-w-md leading-relaxed"
        >
          Hành trình mang trí tuệ Việt vươn tầm quốc tế thông qua các đấu trường công nghệ đỉnh cao.
        </motion.p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="md:col-span-7 group relative bg-white p-10 md:p-14 rounded-3xl flex flex-col justify-between min-h-[480px] shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_40px_rgb(0,0,0,0.08)] transition-all duration-500 border border-slate-100 overflow-hidden"
        >
          <div className="absolute top-0 right-0 p-10 opacity-20 group-hover:opacity-40 group-hover:scale-110 transition-all duration-700">
            <Bot className="w-32 h-32 text-secondary" />
          </div>
          <div className="relative z-10">
            <span className="font-headline text-8xl font-black text-slate-100 group-hover:text-secondary/10 transition-colors duration-500">01</span>
            <h3 className="font-headline text-4xl md:text-5xl mt-6 mb-4 text-primary tracking-tight">Robotics VEX World</h3>
            <p className="text-on-surface-variant/80 text-lg max-w-md leading-relaxed">Dẫn dắt đội tuyển tham dự giải vô địch thế giới tại Dallas, USA, khẳng định vị thế công nghệ Việt.</p>
          </div>
          <div className="flex flex-wrap items-center gap-4 mt-12 relative z-10">
            <div className="px-6 py-2.5 rounded-full border border-slate-200 text-slate-600 font-medium text-sm bg-white/50 backdrop-blur-sm">Dallas, USA</div>
            <div className="px-6 py-2.5 rounded-full bg-secondary/10 text-secondary font-semibold text-sm">Top Global Excellence</div>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="md:col-span-5 group bg-primary p-10 md:p-14 rounded-3xl flex flex-col justify-between min-h-[480px] text-white relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-primary-container to-primary opacity-50" />
          <div className="relative z-10 flex justify-between items-start">
            <Award className="w-14 h-14 text-secondary-container" />
          </div>
          <div className="relative z-10 mt-auto">
            <span className="font-headline text-6xl font-black text-white/10 italic">#02</span>
            <h3 className="font-headline text-3xl md:text-4xl mt-4 tracking-tight">Samsung Innovation</h3>
            <p className="text-white/80 mt-4 text-lg leading-relaxed font-light">Hợp tác chiến lược phát triển tài năng trẻ trong lĩnh vực tự động hóa.</p>
          </div>
          <div className="mt-10 relative z-10">
            <div className="inline-block px-6 py-2.5 rounded-full bg-white/10 backdrop-blur-md text-white font-medium text-sm tracking-wide">National Top 3</div>
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);

const Skills = () => {
  const skills = [
    { name: "AI & ML", icon: Brain, level: "85%", desc: "Machine Learning & Deep Learning" },
    { name: "Robotics", icon: Code, level: "90%", desc: "VEX, Arduino & Automation" },
    { name: "S.T.E.M", icon: Cpu, level: "90%", desc: "Tích hợp Khoa học & Kỹ thuật" },
    { name: "Truyền cảm hứng", icon: Users, level: "88%", desc: "Đồng hành & khơi dậy tiềm năng" },
    { name: "Leadership", icon: Globe, level: "82%", desc: "Dẫn dắt các dự án giáo dục" },
    { name: "Curriculum", icon: PenTool, level: "85%", desc: "Thiết kế bài giảng STEM sinh động" },
  ];

  return (
    <section id="skills" className="max-w-7xl mx-auto px-8 py-32">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="lg:col-span-3 mb-12"
        >
          <div className="flex items-center gap-4 mb-6">
            <div className="h-px w-12 bg-secondary" />
            <span className="font-body text-secondary font-medium tracking-[0.2em] uppercase text-sm">Năng lực cốt lõi</span>
          </div>
          <h2 className="font-headline text-5xl md:text-6xl text-primary tracking-tight max-w-2xl">Chuyên môn <br/><span className="italic font-light text-on-surface-variant">& Kỹ năng</span></h2>
        </motion.div>
        
        {skills.map((skill, index) => (
          <motion.div 
            key={skill.name}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ delay: index * 0.1, duration: 0.6 }}
            className="p-8 bg-white rounded-3xl border border-slate-100 hover:border-secondary/30 hover:shadow-[0_8px_30px_rgb(120,90,2,0.08)] transition-all duration-500 group"
          >
            <div className="w-14 h-14 rounded-2xl bg-surface-container flex items-center justify-center mb-6 group-hover:bg-secondary group-hover:text-white transition-colors duration-500">
              <skill.icon className="w-7 h-7 text-primary group-hover:text-white transition-colors duration-500" />
            </div>
            <h4 className="font-bold text-2xl text-primary mb-2 tracking-tight">{skill.name}</h4>
            <p className="text-slate-500 text-sm mb-8 font-light">{skill.desc}</p>
            
            <div className="space-y-2">
              <div className="flex justify-between text-xs font-medium text-slate-400 uppercase tracking-wider">
                <span>Thành thạo</span>
                <span className="text-secondary">{skill.level}</span>
              </div>
              <div className="w-full bg-slate-100 h-1.5 rounded-full overflow-hidden">
                <motion.div 
                  initial={{ width: 0 }}
                  whileInView={{ width: skill.level }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
                  className="bg-gradient-to-r from-secondary/80 to-secondary h-full rounded-full"
                />
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

const ContactForm = () => {
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", message: "" });
  const [status, setStatus] = useState<{ type: "success" | "error" | "loading" | null, message: string }>({ type: null, message: "" });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus({ type: "loading", message: "Đang gửi..." });

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const data = await res.json();

      if (res.ok) {
        setStatus({ type: "success", message: data.message });
        setFormData({ name: "", email: "", phone: "", message: "" });
      } else {
        setStatus({ type: "error", message: data.error });
      }
    } catch (error) {
      setStatus({ type: "error", message: "Lỗi kết nối server." });
    }
  };

  return (
    <section id="contact" className="py-32 bg-surface">
      <div className="max-w-6xl mx-auto px-8">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-16">
          <motion.div 
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-2 space-y-8"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="h-px w-12 bg-secondary" />
              <span className="font-body text-secondary font-medium tracking-[0.2em] uppercase text-sm">Liên hệ</span>
            </div>
            <h2 className="font-headline text-5xl md:text-6xl text-primary tracking-tight">Bắt đầu <br/><span className="italic font-light text-on-surface-variant">kết nối.</span></h2>
            <p className="text-on-surface-variant/80 text-lg font-light leading-relaxed">
              Sẵn sàng thảo luận về các dự án giáo dục, hợp tác chuyên môn hoặc chia sẻ định hướng phát triển công nghệ.
            </p>
            
            <div className="space-y-6 pt-8">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-white shadow-sm flex items-center justify-center text-primary">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-sm font-medium text-slate-500">Email</p>
                  <p className="text-primary font-medium">sinhnt.vexclub@gmail.com</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-white shadow-sm flex items-center justify-center text-primary">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-sm font-medium text-slate-500">Điện thoại</p>
                  <p className="text-primary font-medium">0968 194 228</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-3 bg-white rounded-3xl p-10 md:p-14 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-slate-100"
          >
            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-2">
                  <label className="text-xs font-medium uppercase tracking-wider text-slate-500 ml-1" htmlFor="name">Họ và tên</label>
                  <input 
                    className="w-full bg-surface-container/50 border border-slate-200 rounded-xl px-4 py-3.5 focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all outline-none" 
                    id="name" 
                    type="text" 
                    placeholder="Nguyễn Văn A"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-medium uppercase tracking-wider text-slate-500 ml-1" htmlFor="email">Email</label>
                  <input 
                    className="w-full bg-surface-container/50 border border-slate-200 rounded-xl px-4 py-3.5 focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all outline-none" 
                    id="email" 
                    type="email" 
                    placeholder="email@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-xs font-medium uppercase tracking-wider text-slate-500 ml-1" htmlFor="phone">Số điện thoại</label>
                <input 
                  className="w-full bg-surface-container/50 border border-slate-200 rounded-xl px-4 py-3.5 focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all outline-none" 
                  id="phone" 
                  type="text" 
                  placeholder="0987654321"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  required
                />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-medium uppercase tracking-wider text-slate-500 ml-1" htmlFor="message">Lời nhắn</label>
                <textarea 
                  className="w-full bg-surface-container/50 border border-slate-200 rounded-xl px-4 py-3.5 focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all outline-none resize-none" 
                  id="message" 
                  placeholder="Nội dung cần trao đổi..."
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  required
                />
              </div>
              
              {status.type && (
                <motion.p 
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={cn(
                    "text-sm font-medium px-4 py-3 rounded-xl",
                    status.type === "success" ? "bg-green-50 text-green-700" : 
                    status.type === "error" ? "bg-red-50 text-red-700" : 
                    "bg-slate-50 text-slate-600"
                  )}
                >
                  {status.message}
                </motion.p>
              )}
              
              <div className="pt-4">
                <button 
                  type="submit" 
                  disabled={status.type === "loading"}
                  className="w-full md:w-auto inline-flex items-center justify-center gap-3 bg-primary text-white px-8 py-4 rounded-xl font-medium tracking-wide transition-all hover:bg-primary-container active:scale-[0.98] disabled:opacity-70 disabled:pointer-events-none"
                >
                  <span>Gửi tin nhắn</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const LoginPage = ({ onLoginSuccess, onBack }: { onLoginSuccess: (token: string) => void, onBack: () => void }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const res = await fetch("/api/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password }),
      });
      const data = await res.json();

      if (res.ok) {
        onLoginSuccess(data.token);
      } else {
        setError(data.error);
      }
    } catch (err) {
      setError("Lỗi kết nối server.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-6 bg-surface relative overflow-hidden">
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] rounded-full bg-primary/5 blur-[120px]"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-secondary/10 blur-[100px]"></div>
      </div>

      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="w-full max-w-lg bg-white/60 backdrop-blur-3xl rounded-xl shadow-2xl border border-white/40 p-12 md:p-16 relative z-10"
      >
        <button onClick={onBack} className="absolute top-6 left-6 text-slate-400 hover:text-primary transition-colors">
          <ChevronLeft className="w-6 h-6" />
        </button>
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-primary rounded-2xl mb-6 shadow-lg shadow-primary/20">
            <Library className="text-white w-8 h-8" />
          </div>
          <h1 className="font-headline text-4xl md:text-5xl font-bold text-primary mb-3 tracking-tight">Đăng Nhập Hệ Thống</h1>
          <p className="font-headline italic text-lg text-on-surface-variant">Xác thực danh tính</p>
        </div>

        <form onSubmit={handleLogin} className="space-y-8">
          <div className="space-y-6">
            <div className="relative group">
              <label className="block text-xs font-medium uppercase tracking-[0.1em] text-on-surface-variant mb-2 ml-1">Thông tin tài khoản</label>
              <div className="relative">
                <input 
                  className="w-full bg-transparent border-b-2 border-slate-200 py-3 px-1 text-lg font-medium focus:outline-none focus:border-primary transition-all duration-300" 
                  type="text" 
                  placeholder="username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  required
                />
                <User className="absolute right-0 bottom-3 w-5 h-5 text-slate-300 group-focus-within:text-primary transition-colors" />
              </div>
            </div>
            <div className="relative group">
              <label className="block text-xs font-medium uppercase tracking-[0.1em] text-on-surface-variant mb-2 ml-1">Mật khẩu</label>
              <div className="relative">
                <input 
                  className="w-full bg-transparent border-b-2 border-slate-200 py-3 px-1 text-lg font-medium focus:outline-none focus:border-primary transition-all duration-300" 
                  type="password" 
                  placeholder="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
                <EyeOff className="absolute right-0 bottom-3 w-5 h-5 text-slate-300 group-focus-within:text-primary transition-colors" />
              </div>
            </div>
          </div>

          {error && <p className="text-red-600 text-sm font-medium">{error}</p>}

          <button 
            type="submit" 
            disabled={loading}
            className="w-full bg-primary-container text-white py-5 rounded-full text-sm font-bold uppercase tracking-[0.15em] shadow-xl hover:shadow-2xl hover:scale-[1.02] active:scale-[0.98] transition-all duration-400 flex items-center justify-center space-x-2 disabled:opacity-50"
          >
            <span>{loading ? "Đang xử lý..." : "Đăng Nhập"}</span>
            <ArrowRight className="w-5 h-5" />
          </button>
        </form>
      </motion.div>
    </div>
  );
};

const Dashboard = ({ onLogout }: { onLogout: () => void }) => {
  const [contacts, setContacts] = useState<Contact[]>([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);
  const [selectedContact, setSelectedContact] = useState<Contact | null>(null);

  useEffect(() => {
    fetchContacts();
  }, []);

  const fetchContacts = async () => {
    try {
      const res = await fetch("/api/contacts");
      const data = await res.json();
      setContacts(data);
    } catch (err) {
      console.error("Failed to fetch contacts");
    } finally {
      setLoading(false);
    }
  };

  const handleExportCSV = () => {
    if (contacts.length === 0) return;
    
    const headers = ["Tên", "Email", "Số điện thoại", "Nội dung", "Thời gian"];
    const csvContent = [
      headers.join(","),
      ...contacts.map(c => [
        `"${c.name.replace(/"/g, '""')}"`,
        `"${c.email.replace(/"/g, '""')}"`,
        `"${c.phone.replace(/"/g, '""')}"`,
        `"${c.message.replace(/"/g, '""')}"`,
        `"${new Date(c.timestamp).toLocaleString("vi-VN")}"`
      ].join(","))
    ].join("\n");

    const blob = new Blob(["\uFEFF" + csvContent], { type: "text/csv;charset=utf-8;" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.setAttribute("href", url);
    link.setAttribute("download", `lien-he-${new Date().toISOString().slice(0,10)}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const filteredContacts = useMemo(() => {
    return contacts.filter(c => 
      c.name.toLowerCase().includes(search.toLowerCase()) || 
      c.email.toLowerCase().includes(search.toLowerCase())
    );
  }, [contacts, search]);

  return (
    <div className="flex h-screen w-full bg-surface">
      {/* Sidebar */}
      <aside className="h-screen w-64 bg-white border-r border-slate-100 flex flex-col py-10 px-6 space-y-8 flex-shrink-0">
        <div className="flex flex-col space-y-2">
          <span className="font-headline text-xl font-bold text-primary">Thầy Sinh AI</span>
          <div className="flex items-center space-x-3 pt-4">
            <div className="w-10 h-10 rounded-full bg-primary-container flex items-center justify-center text-white font-bold">A</div>
            <div>
              <p className="text-sm font-medium text-primary">Admin</p>
              <p className="text-xs text-slate-500">Quản trị viên</p>
            </div>
          </div>
        </div>
        <nav className="flex-1 space-y-2">
          <a className="flex items-center space-x-3 text-primary font-bold border-l-4 border-secondary pl-4 py-2" href="#">
            <LayoutDashboard className="w-5 h-5" />
            <span className="text-sm">Tổng quan</span>
          </a>
          <a className="flex items-center space-x-3 text-slate-500 pl-4 py-2 hover:bg-slate-50 rounded-xl transition-all" href="#">
            <School className="w-5 h-5" />
            <span className="text-sm">Khóa học</span>
          </a>
          <a className="flex items-center space-x-3 text-slate-500 pl-4 py-2 hover:bg-slate-50 rounded-xl transition-all" href="#">
            <BookOpen className="w-5 h-5" />
            <span className="text-sm">Tài liệu</span>
          </a>
          <a className="flex items-center space-x-3 text-slate-500 pl-4 py-2 hover:bg-slate-50 rounded-xl transition-all" href="#">
            <Settings className="w-5 h-5" />
            <span className="text-sm">Cài đặt</span>
          </a>
        </nav>
        <button 
          onClick={onLogout}
          className="flex items-center space-x-3 text-red-600 pl-4 py-2 hover:bg-red-50 rounded-xl transition-all"
        >
          <LogOut className="w-5 h-5" />
          <span className="text-sm font-bold">Đăng xuất</span>
        </button>
      </aside>

      {/* Main Content */}
      <main className="flex-1 overflow-y-auto p-12">
        <header className="flex justify-between items-end mb-16">
          <div>
            <h1 className="text-5xl font-headline font-bold text-on-surface tracking-tight">Quản lý Thông tin Kết nối</h1>
            <p className="text-slate-500 mt-2 text-lg">Xem và quản lý các thông tin liên hệ từ người xem đã điền qua form.</p>
          </div>
          <div className="relative w-96">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 w-5 h-5" />
            <input 
              className="w-full pl-12 pr-4 py-3 bg-white border-none rounded-full text-sm shadow-sm focus:ring-2 focus:ring-primary/20 transition-all" 
              placeholder="Tìm kiếm thông tin..." 
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
        </header>

        {/* Metrics */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="bg-white p-8 rounded-xl shadow-sm hover:scale-[1.02] transition-transform">
            <div className="flex justify-between items-start mb-4">
              <UserPlus className="text-primary w-10 h-10 p-2 bg-primary/5 rounded-xl" />
              <span className="text-green-600 text-xs font-bold bg-green-100 px-2 py-1 rounded-full">+12%</span>
            </div>
            <p className="text-slate-500 text-sm font-medium">Tổng số lượt kết nối</p>
            <h3 className="text-4xl font-headline font-bold text-primary mt-1">{contacts.length}</h3>
          </div>
          <div className="bg-primary p-8 rounded-xl shadow-sm hover:scale-[1.02] transition-transform text-white">
            <div className="flex justify-between items-start mb-4">
              <ClipboardList className="text-secondary-container w-10 h-10 p-2 bg-white/10 rounded-xl" />
            </div>
            <p className="text-white/70 text-sm font-medium">Chờ xử lý</p>
            <h3 className="text-4xl font-headline font-bold text-secondary-container mt-1">{contacts.length}</h3>
          </div>
          <div className="bg-white p-8 rounded-xl shadow-sm flex items-center space-x-6">
            <div className="w-16 h-16 rounded-full border-4 border-secondary border-t-transparent animate-spin"></div>
            <div>
              <p className="text-slate-500 text-sm font-medium">Tỷ lệ chuyển đổi</p>
              <h3 className="text-3xl font-headline font-bold text-on-surface">68.5%</h3>
            </div>
          </div>
        </section>

        {/* Table */}
        <section className="bg-white rounded-xl shadow-sm overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-slate-50 text-slate-500 uppercase text-[10px] tracking-widest font-bold">
                  <th className="px-8 py-5">Tên</th>
                  <th className="px-6 py-5">Email</th>
                  <th className="px-6 py-5">Số điện thoại</th>
                  <th className="px-6 py-5">Nội dung</th>
                  <th className="px-6 py-5">Thời gian</th>
                  <th className="px-8 py-5 text-right">Thao tác</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {loading ? (
                  <tr><td colSpan={6} className="text-center py-10 text-slate-400">Đang tải dữ liệu...</td></tr>
                ) : filteredContacts.length === 0 ? (
                  <tr><td colSpan={6} className="text-center py-10 text-slate-400">Không tìm thấy kết quả.</td></tr>
                ) : filteredContacts.map((contact, index) => (
                  <motion.tr 
                    key={contact.id}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.05 }}
                    className={cn("group hover:bg-slate-50/50 transition-colors", index === 0 && "bg-secondary/5")}
                  >
                    <td className="px-8 py-6">
                      <div className="flex items-center space-x-3">
                        {index === 0 && <div className="w-2 h-2 rounded-full bg-secondary shrink-0" title="Mới nhất"></div>}
                        <span className="font-semibold text-on-surface">{contact.name}</span>
                      </div>
                    </td>
                    <td className="px-6 py-6 text-slate-600 text-sm italic">{contact.email}</td>
                    <td className="px-6 py-6 text-slate-600 text-sm">{contact.phone}</td>
                    <td className="px-6 py-6 text-slate-600 text-sm max-w-xs truncate">{contact.message}</td>
                    <td className="px-6 py-6 text-slate-400 text-xs">
                      {new Date(contact.timestamp).toLocaleString("vi-VN")}
                    </td>
                    <td className="px-8 py-6 text-right">
                      <button 
                        onClick={() => setSelectedContact(contact)}
                        className="text-primary font-bold text-xs uppercase tracking-tighter opacity-0 group-hover:opacity-100 transition-opacity"
                      >
                        Xem Chi Tiết
                      </button>
                    </td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* FAB */}
        <button 
          onClick={handleExportCSV}
          className="fixed bottom-12 right-12 bg-primary-container text-white px-8 py-4 rounded-full shadow-2xl flex items-center space-x-3 hover:scale-105 transition-transform duration-400 active:scale-95"
        >
          <FileText className="w-5 h-5" />
          <span className="text-sm font-bold tracking-wider uppercase">Xuất Báo Cáo</span>
        </button>

        {/* Modal */}
        <AnimatePresence>
          {selectedContact && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className="bg-white rounded-2xl shadow-2xl w-full max-w-2xl overflow-hidden"
              >
                <div className="flex justify-between items-center p-6 border-b border-slate-100 bg-slate-50/50">
                  <h3 className="font-headline text-2xl font-bold text-primary">Chi tiết liên hệ</h3>
                  <button 
                    onClick={() => setSelectedContact(null)}
                    className="text-slate-400 hover:text-red-500 transition-colors"
                  >
                    <X className="w-6 h-6" />
                  </button>
                </div>
                <div className="p-8">
                  <table className="w-full text-left border-collapse">
                    <tbody className="divide-y divide-slate-100">
                      <tr>
                        <th className="py-4 text-slate-500 font-medium w-1/3">Họ và tên</th>
                        <td className="py-4 font-semibold text-on-surface">{selectedContact.name}</td>
                      </tr>
                      <tr>
                        <th className="py-4 text-slate-500 font-medium">Email</th>
                        <td className="py-4 text-primary">{selectedContact.email}</td>
                      </tr>
                      <tr>
                        <th className="py-4 text-slate-500 font-medium">Số điện thoại</th>
                        <td className="py-4 text-on-surface">{selectedContact.phone}</td>
                      </tr>
                      <tr>
                        <th className="py-4 text-slate-500 font-medium">Thời gian</th>
                        <td className="py-4 text-slate-600">
                          {new Date(selectedContact.timestamp).toLocaleString("vi-VN")}
                        </td>
                      </tr>
                      <tr>
                        <th className="py-4 text-slate-500 font-medium align-top">Nội dung</th>
                        <td className="py-4 text-slate-700 whitespace-pre-wrap leading-relaxed">
                          {selectedContact.message}
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div className="p-6 border-t border-slate-100 bg-slate-50/50 flex justify-end">
                  <button 
                    onClick={() => setSelectedContact(null)}
                    className="px-6 py-2.5 bg-slate-200 text-slate-700 font-medium rounded-lg hover:bg-slate-300 transition-colors"
                  >
                    Đóng
                  </button>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>
      </main>
    </div>
  );
};

// --- Main App Component ---

export default function App() {
  const [view, setView] = useState<"landing" | "login" | "dashboard">("landing");
  const [token, setToken] = useState<string | null>(localStorage.getItem("admin_token"));

  useEffect(() => {
    if (token) {
      setView("dashboard");
    }
  }, [token]);

  const handleLoginSuccess = (newToken: string) => {
    setToken(newToken);
    localStorage.setItem("admin_token", newToken);
    setView("dashboard");
  };

  const handleLogout = () => {
    setToken(null);
    localStorage.removeItem("admin_token");
    setView("landing");
  };

  return (
    <div className="min-h-screen bg-surface">
      <AnimatePresence mode="wait">
        {view === "landing" && (
          <motion.div 
            key="landing"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <Navbar onLoginClick={() => setView("login")} />
            <main>
              <Hero />
              <Achievements />
              <section className="py-32 relative overflow-hidden bg-white">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-full bg-gradient-to-b from-primary/5 to-transparent opacity-50 pointer-events-none" />
                <div className="max-w-5xl mx-auto px-8 relative z-10">
                  <motion.div 
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="flex flex-col items-center text-center space-y-10"
                  >
                    <div className="relative">
                      <div className="absolute -top-10 -left-6 md:-left-12 text-8xl text-primary/10 font-serif leading-none select-none">"</div>
                      <h2 className="font-headline text-4xl md:text-5xl lg:text-6xl italic text-primary px-4 md:px-10 leading-tight relative z-10">
                        Giáo dục không phải là việc đổ đầy một chiếc bình, <br className="hidden md:block"/>mà là thắp sáng một ngọn lửa.
                      </h2>
                      <div className="absolute -bottom-16 -right-6 md:-right-12 text-8xl text-primary/10 font-serif leading-none select-none">"</div>
                    </div>
                    
                    <div className="w-24 h-px bg-secondary/30 my-4" />
                    
                    <div className="max-w-3xl text-on-surface-variant/90 text-lg md:text-xl leading-relaxed font-light">
                      Hơn 15 năm gắn bó với bục giảng, niềm hạnh phúc lớn nhất của tôi là được thấy ánh mắt say mê của học sinh khi tự tay chế tạo robot hay viết những dòng code đầu tiên. Tôi tin rằng, một người thầy tận tâm không chỉ trao truyền kiến thức STEM, mà còn nuôi dưỡng lòng kiên trì và khơi dậy tiềm năng vô hạn trong mỗi em.
                    </div>
                    
                    <div className="flex flex-wrap justify-center gap-12 mt-8 pt-8 w-full">
                      <div className="text-center">
                        <span className="block text-primary font-bold text-5xl font-serif mb-2 tracking-tight">Tin học</span>
                        <span className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-400">Giáo viên</span>
                      </div>
                      <div className="hidden md:block w-px h-16 bg-slate-200 self-center" />
                      <div className="text-center">
                        <span className="block text-primary font-bold text-5xl font-serif mb-2 tracking-tight">STEM, AI</span>
                        <span className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-400">& Robotics</span>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </section>
              <Skills />
              <ContactForm />
            </main>
            <footer className="w-full py-12 px-8 bg-white border-t border-slate-100">
              <div className="flex flex-col md:flex-row justify-between items-center max-w-7xl mx-auto space-y-4 md:space-y-0">
                <p className="font-body text-xs tracking-wide uppercase text-slate-500">© 2024 Thầy Sinh AI. Bảo lưu mọi quyền.</p>
                <div className="flex space-x-8">
                  <a className="font-body text-xs tracking-wide uppercase text-slate-500 hover:text-secondary transition-colors" href="#">Chính sách bảo mật</a>
                  <a className="font-body text-xs tracking-wide uppercase text-slate-500 hover:text-secondary transition-colors" href="#">Điều khoản dịch vụ</a>
                  <a className="font-body text-xs tracking-wide uppercase text-slate-500 hover:text-secondary transition-colors" href="#">Tuyển sinh</a>
                </div>
              </div>
            </footer>
          </motion.div>
        )}

        {view === "login" && (
          <motion.div 
            key="login"
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
          >
            <LoginPage 
              onLoginSuccess={handleLoginSuccess} 
              onBack={() => setView("landing")} 
            />
          </motion.div>
        )}

        {view === "dashboard" && (
          <motion.div 
            key="dashboard"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <Dashboard onLogout={handleLogout} />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
