import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Phone, Mail, MapPin, Save, RefreshCw } from 'lucide-react';
import { useAdmin } from '../../contexts/AdminContext';
import { Button } from '../../components/ui/Button';
import { Input } from '../../components/ui/Input';
import { Card } from '../../components/ui/Card';

const ContactInfoPage: React.FC = () => {
  const { contactInfo, updateContactInfo } = useAdmin();
  const [formData, setFormData] = useState(contactInfo);
  const [saved, setSaved] = useState(false);

  const handleSave = () => {
    updateContactInfo(formData);
    setSaved(true);
    setTimeout(() => setSaved(false), 3000);
  };

  const handleReset = () => {
    setFormData(contactInfo);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
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
                  معلومات التواصل
                </h1>
                <p className="text-[#2D2D2D]/70 mt-1">
                  تحديث بيانات الاتصال والعنوان
                </p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Button 
                variant="ghost" 
                size="md"
                onClick={handleReset}
                icon={RefreshCw}
              >
                إعادة تعيين
              </Button>
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
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 lg:px-8 py-12">
        <div className="max-w-3xl mx-auto">
          {saved && (
            <div className="mb-6 p-4 bg-green-50 border-2 border-green-200 rounded-2xl">
              <p className="text-green-800 text-center font-medium">
                ✓ تم حفظ التغييرات بنجاح!
              </p>
            </div>
          )}

          <Card variant="default" className="p-8">
            <div className="space-y-6">
              {/* WhatsApp */}
              <div>
                <label className="block text-sm font-medium text-[#2D2D2D] mb-2">
                  رقم الواتساب
                </label>
                <Input
                  name="whatsapp"
                  value={formData.whatsapp}
                  onChange={handleChange}
                  icon={Phone}
                  placeholder="966535185802"
                  dir="ltr"
                />
                <p className="mt-2 text-sm text-[#2D2D2D]/60">
                  الرقم بدون + أو مسافات (مثال: 966535185802)
                </p>
              </div>

              {/* Phone */}
              <div>
                <label className="block text-sm font-medium text-[#2D2D2D] mb-2">
                  رقم الهاتف (للعرض)
                </label>
                <Input
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  icon={Phone}
                  placeholder="920019974"
                  dir="ltr"
                />
                <p className="mt-2 text-sm text-[#2D2D2D]/60">
                  الرقم بالصيغة المطلوبة للعرض (مثال: 920019974)
                </p>
              </div>

              {/* Email */}
              <div>
                <label className="block text-sm font-medium text-[#2D2D2D] mb-2">
                  البريد الإلكتروني
                </label>
                <Input
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  icon={Mail}
                  placeholder="info@buramed.com"
                  dir="ltr"
                />
              </div>

              {/* Address English */}
              <div>
                <label className="block text-sm font-medium text-[#2D2D2D] mb-2">
                  العنوان (إنجليزي)
                </label>
                <Input
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                  icon={MapPin}
                  placeholder="Al Mughrizat, Othman Bin Affan Road, Riyadh"
                />
              </div>

              {/* Address Arabic */}
              <div>
                <label className="block text-sm font-medium text-[#2D2D2D] mb-2">
                  العنوان (عربي)
                </label>
                <Input
                  name="addressAr"
                  value={formData.addressAr}
                  onChange={handleChange}
                  icon={MapPin}
                  placeholder="حي المغرزات، شارع عثمان بن عفان، الرياض"
                />
              </div>
            </div>
          </Card>

          {/* Preview */}
          <div className="mt-8">
            <h2 className="text-xl font-bold text-[#2D2D2D] mb-4">
              معاينة
            </h2>
            <Card variant="gradient" className="p-6">
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-[#D4AF86]" />
                  <div>
                    <p className="text-sm text-[#2D2D2D]/60">واتساب</p>
                    <p className="font-medium text-[#2D2D2D]" dir="ltr">
                      {formData.whatsapp}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-[#D4AF86]" />
                  <div>
                    <p className="text-sm text-[#2D2D2D]/60">هاتف</p>
                    <p className="font-medium text-[#2D2D2D]" dir="ltr">
                      {formData.phone}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-[#D4AF86]" />
                  <div>
                    <p className="text-sm text-[#2D2D2D]/60">بريد إلكتروني</p>
                    <p className="font-medium text-[#2D2D2D]" dir="ltr">
                      {formData.email}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <MapPin className="w-5 h-5 text-[#D4AF86]" />
                  <div>
                    <p className="text-sm text-[#2D2D2D]/60">العنوان (عربي)</p>
                    <p className="font-medium text-[#2D2D2D]">
                      {formData.addressAr}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <MapPin className="w-5 h-5 text-[#D4AF86]" />
                  <div>
                    <p className="text-sm text-[#2D2D2D]/60">العنوان (إنجليزي)</p>
                    <p className="font-medium text-[#2D2D2D]">
                      {formData.address}
                    </p>
                  </div>
                </div>
              </div>
            </Card>
          </div>

          {/* Instructions */}
          <div className="mt-8">
            <Card variant="glass" className="p-6">
              <h3 className="font-bold text-[#2D2D2D] mb-3">
                📌 ملاحظات مهمة
              </h3>
              <ul className="space-y-2 text-sm text-[#2D2D2D]/70">
                <li>• رقم الواتساب يُستخدم في جميع أزرار الحجز</li>
                <li>• البريد الإلكتروني يظهر في الفوتر وصفحة التواصل</li>
                <li>• العنوان يظهر في الفوتر والخريطة</li>
                <li>• التغييرات تُحفظ في المتصفح (localStorage)</li>
                <li>• للحفظ الدائم، حدّث الملفات في: <code className="bg-white px-2 py-1 rounded">src/data/</code></li>
              </ul>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ContactInfoPage;
