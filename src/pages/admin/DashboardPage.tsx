import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { 
  Users, 
  Star, 
  Stethoscope, 
  Tag, 
  Phone, 
  LogOut,
  Settings,
  BarChart3
} from 'lucide-react';
import { useAdmin } from '../../contexts/AdminContext';
import { Button } from '../../components/ui/Button';
import { Card } from '../../components/ui/Card';

const DashboardPage: React.FC = () => {
  const { logout, services, testimonials, doctors, offers } = useAdmin();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/admin/login');
  };

  const sections = [
    {
      title: 'الخدمات',
      titleEn: 'Services',
      icon: Stethoscope,
      count: services.length,
      color: 'from-rose-400 to-pink-500',
      link: '/admin/services',
    },
    {
      title: 'الشهادات',
      titleEn: 'Testimonials',
      icon: Star,
      count: testimonials.length,
      color: 'from-blue-400 to-cyan-500',
      link: '/admin/testimonials',
    },
    {
      title: 'الأطباء',
      titleEn: 'Doctors',
      icon: Users,
      count: doctors.length,
      color: 'from-purple-400 to-pink-500',
      link: '/admin/doctors',
    },
    {
      title: 'العروض',
      titleEn: 'Offers',
      icon: Tag,
      count: offers.length,
      color: 'from-emerald-400 to-teal-500',
      link: '/admin/offers',
    },
    {
      title: 'معلومات التواصل',
      titleEn: 'Contact Info',
      icon: Phone,
      count: 1,
      color: 'from-orange-400 to-rose-500',
      link: '/admin/contact',
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#F5F5F0] via-white to-[#FFF5F5]">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-[#D4AF86]/20">
        <div className="container mx-auto px-4 lg:px-8 py-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-[#2D2D2D]">
                لوحة التحكم
              </h1>
              <p className="text-[#2D2D2D]/70 mt-1">
                إدارة محتوى موقع عيادات بيورا
              </p>
            </div>
            <div className="flex items-center gap-4">
              <Link to="/" target="_blank">
                <Button variant="secondary" size="md">
                  عرض الموقع
                </Button>
              </Link>
              <Button 
                variant="ghost" 
                size="md"
                onClick={handleLogout}
                icon={LogOut}
              >
                تسجيل خروج
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 lg:px-8 py-12">
        {/* Stats Overview */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          <Card variant="gradient" className="p-6">
            <div className="flex items-center gap-4">
              <div className="p-3 rounded-2xl bg-gradient-to-br from-[#D4AF86] to-[#C9A87C]">
                <BarChart3 className="w-6 h-6 text-white" />
              </div>
              <div>
                <p className="text-sm text-[#2D2D2D]/60">إجمالي المحتويات</p>
                <p className="text-3xl font-bold text-[#2D2D2D]">
                  {services.length + testimonials.length + doctors.length + offers.length}
                </p>
              </div>
            </div>
          </Card>

          <Card variant="gradient" className="p-6">
            <div className="flex items-center gap-4">
              <div className="p-3 rounded-2xl bg-gradient-to-br from-emerald-400 to-teal-500">
                <Settings className="w-6 h-6 text-white" />
              </div>
              <div>
                <p className="text-sm text-[#2D2D2D]/60">الأقسام النشطة</p>
                <p className="text-3xl font-bold text-[#2D2D2D]">
                  {sections.length}
                </p>
              </div>
            </div>
          </Card>

          <Card variant="gradient" className="p-6">
            <div className="flex items-center gap-4">
              <div className="p-3 rounded-2xl bg-gradient-to-br from-purple-400 to-pink-500">
                <Star className="w-6 h-6 text-white" />
              </div>
              <div>
                <p className="text-sm text-[#2D2D2D]/60">آخر تحديث</p>
                <p className="text-xl font-bold text-[#2D2D2D]">
                  اليوم
                </p>
              </div>
            </div>
          </Card>
        </div>

        {/* Sections Grid */}
        <div>
          <h2 className="text-2xl font-bold text-[#2D2D2D] mb-6">
            إدارة المحتوى
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {sections.map((section, index) => (
              <Link key={index} to={section.link}>
                <Card 
                  variant="default" 
                  hoverable 
                  delay={index * 0.1}
                  className="p-6 group"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className={`p-4 rounded-2xl bg-gradient-to-br ${section.color}`}>
                      <section.icon className="w-8 h-8 text-white" />
                    </div>
                    <div className="text-start">
                      <p className="text-3xl font-bold text-[#2D2D2D]">
                        {section.count}
                      </p>
                      <p className="text-sm text-[#2D2D2D]/60">عنصر</p>
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-bold text-[#2D2D2D] mb-1">
                    {section.title}
                  </h3>
                  <p className="text-sm text-[#2D2D2D]/60 mb-4">
                    {section.titleEn}
                  </p>

                  <div className="flex items-center text-[#D4AF86] font-medium group-hover:gap-3 transition-all gap-2">
                    <span>تعديل</span>
                    <svg
                      className="w-4 h-4 transition-transform group-hover:translate-x-1 rtl:group-hover:-translate-x-1 rtl:rotate-180"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </Card>
              </Link>
            ))}
          </div>
        </div>

        {/* Quick Actions */}
        <div className="mt-12">
          <Card variant="glass" className="p-8">
            <h2 className="text-2xl font-bold text-[#2D2D2D] mb-6">
              إجراءات سريعة
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <Link to="/admin/services">
                <Button variant="secondary" size="md" fullWidth>
                  إضافة خدمة جديدة
                </Button>
              </Link>
              <Link to="/admin/testimonials">
                <Button variant="secondary" size="md" fullWidth>
                  إضافة شهادة عميل
                </Button>
              </Link>
              <Link to="/admin/contact">
                <Button variant="secondary" size="md" fullWidth>
                  تحديث معلومات التواصل
                </Button>
              </Link>
            </div>
          </Card>
        </div>

        {/* Help Section */}
        <div className="mt-8">
          <Card variant="gradient" className="p-6">
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-full bg-[#D4AF86]/20">
                <Settings className="w-6 h-6 text-[#D4AF86]" />
              </div>
              <div className="flex-1">
                <h3 className="font-bold text-[#2D2D2D] mb-2">
                  💡 نصيحة: احفظ التغييرات
                </h3>
                <p className="text-sm text-[#2D2D2D]/70">
                  جميع التعديلات يتم حفظها تلقائياً في المتصفح (localStorage). 
                  للحفظ الدائم، انسخ البيانات من كل قسم واحفظها في ملفات المشروع.
                </p>
              </div>
            </div>
          </Card>
        </div>
      </main>
    </div>
  );
};

export default DashboardPage;
