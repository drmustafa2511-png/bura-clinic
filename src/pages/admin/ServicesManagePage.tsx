import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Save, Plus, Trash2, Edit } from 'lucide-react';
import { useAdmin } from '../../contexts/AdminContext';
import { Button } from '../../components/ui/Button';
import { Card } from '../../components/ui/Card';
const ServicesManagePage: React.FC = () => {
  const { services, updateServices } = useAdmin();
  const [saved, setSaved] = useState(false);

  const handleSave = () => {
    setSaved(true);
    setTimeout(() => setSaved(false), 3000);
  };

  const handleDelete = (id: string) => {
    if (confirm('هل أنت متأكد من حذف هذه الخدمة؟')) {
      const updated = services.filter(s => s.id !== id);
      updateServices(updated);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#F5F5F0] via-white to-[#FFF5F5]">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-[#D4AF86]/20">
        <div className="container mx-auto px-4 lg:px-8 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Link to="/admin/dashboard">
                <button className="p-2 hover:bg-[#F5F5F0] rounded-full transition-colors">
                  <ArrowLeft className="w-6 h-6 text-[#2D2D2D]" />
                </button>
              </Link>
              <div>
                <h1 className="text-3xl font-bold text-[#2D2D2D]">
                  إدارة الخدمات
                </h1>
                <p className="text-[#2D2D2D]/70 mt-1">
                  {services.length} خدمة متاحة
                </p>
              </div>
            </div>
            <Button 
              variant="primary" 
              size="md"
              onClick={handleSave}
              icon={Save}
            >
              {saved ? '✓ تم الحفظ' : 'حفظ التغييرات'}
            </Button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 lg:px-8 py-12">
        {saved && (
          <div className="mb-6 p-4 bg-green-50 border-2 border-green-200 rounded-2xl">
            <p className="text-green-800 text-center font-medium">
              ✓ تم حفظ التغييرات بنجاح!
            </p>
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <Card key={service.id} variant="gradient" delay={index * 0.1}>
              <div className={`h-32 bg-gradient-to-br ${service.gradient} p-6 flex items-center justify-center`}>
                <h3 className="text-2xl font-bold text-white text-center">
                  {service.titleKey.split('.')[1]}
                </h3>
              </div>
              
              <div className="p-6">
                <div className="space-y-3 mb-4">
                  <div>
                    <p className="text-xs text-[#2D2D2D]/60">ID</p>
                    <p className="font-mono text-sm text-[#2D2D2D]">{service.id}</p>
                  </div>
                  <div>
                    <p className="text-xs text-[#2D2D2D]/60">مدة الجلسة</p>
                    <p className="text-sm text-[#2D2D2D]">{service.duration}</p>
                  </div>
                  <div>
                    <p className="text-xs text-[#2D2D2D]/60">عدد الجلسات</p>
                    <p className="text-sm text-[#2D2D2D]">{service.sessions}</p>
                  </div>
                  <div>
                    <p className="text-xs text-[#2D2D2D]/60">العلاجات</p>
                    <p className="text-sm text-[#2D2D2D]">{service.treatments.length} علاج</p>
                  </div>
                </div>

                <div className="flex gap-2">
                  <button
                    onClick={() => alert('ميزة التعديل قريباً')}
                    className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-[#F5F5F0] hover:bg-[#D4AF86]/20 rounded-xl transition-colors"
                  >
                    <Edit className="w-4 h-4" />
                    <span className="text-sm">تعديل</span>
                  </button>
                  <button
                    onClick={() => handleDelete(service.id)}
                    className="px-4 py-2 bg-red-50 hover:bg-red-100 text-red-600 rounded-xl transition-colors"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </Card>
          ))}

          {/* Add New Service Card */}
          <Card variant="gradient" className="flex items-center justify-center min-h-[400px]">
            <button className="flex flex-col items-center gap-4 p-8 hover:scale-105 transition-transform">
              <div className="p-4 rounded-full bg-[#D4AF86]/20">
                <Plus className="w-8 h-8 text-[#D4AF86]" />
              </div>
              <p className="text-lg font-medium text-[#2D2D2D]">
                إضافة خدمة جديدة
              </p>
            </button>
          </Card>
        </div>

        {/* Info */}
        <div className="mt-8">
          <Card variant="glass" className="p-6">
            <h3 className="font-bold text-[#2D2D2D] mb-3">
              📝 ملاحظة
            </h3>
            <p className="text-sm text-[#2D2D2D]/70">
              حالياً يمكنك عرض وحذف الخدمات. لإضافة أو تعديل تفاصيل الخدمات، 
              يُفضل تعديل ملف: <code className="bg-white px-2 py-1 rounded font-mono">src/data/services.ts</code>
            </p>
          </Card>
        </div>
      </main>
    </div>
  );
};

export default ServicesManagePage;
