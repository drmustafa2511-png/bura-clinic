import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Lock, Eye, EyeOff } from 'lucide-react';
import { useAdmin } from '../../contexts/AdminContext';
import { Button } from '../../components/ui/Button';
import { Input } from '../../components/ui/Input';

const LoginPage: React.FC = () => {
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const { login, isAdminEnabled } = useAdmin();
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (!isAdminEnabled) {
      setError('لوحة التحكم غير مفعلة. أضف VITE_ADMIN_PASSWORD في إعدادات البيئة لتفعيلها.');
      return;
    }

    if (login(password)) {
      navigate('/admin/dashboard');
    } else {
      setError('كلمة المرور غير صحيحة');
      setPassword('');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#F5F5F0] via-white to-[#FFF5F5] flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <div className="inline-flex p-4 rounded-full bg-gradient-to-br from-[#D4AF86] to-[#C9A87C] mb-4">
            <Lock className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-3xl font-bold text-[#2D2D2D] mb-2">
            لوحة التحكم
          </h1>
          <p className="text-[#2D2D2D]/70">
            عيادات بيورا - تسجيل دخول المسؤول
          </p>
        </div>

        <div className="bg-white rounded-3xl shadow-2xl p-8">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-[#2D2D2D] mb-2">
                كلمة المرور
              </label>
              <div className="relative">
                <Input
                  type={showPassword ? 'text' : 'password'}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="أدخل كلمة المرور"
                  icon={Lock}
                  required
                  autoFocus
                  dir="ltr"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute start-4 top-1/2 transform -translate-y-1/2 text-[#2D2D2D]/40 hover:text-[#D4AF86] transition-colors"
                >
                  {showPassword ? (
                    <EyeOff className="w-5 h-5" />
                  ) : (
                    <Eye className="w-5 h-5" />
                  )}
                </button>
              </div>
              {error && (
                <p className="mt-2 text-sm text-red-500">{error}</p>
              )}
            </div>

            <Button type="submit" variant="primary" size="lg" fullWidth disabled={!isAdminEnabled}>
              {isAdminEnabled ? 'دخول' : 'لوحة التحكم غير مفعلة'}
            </Button>
          </form>

          <div className="mt-6 p-4 bg-[#FFF5F5] rounded-2xl">
            <p className="text-sm text-[#2D2D2D]/70 text-center">
              لوحة التحكم محمية عبر متغير بيئة: <code className="font-mono bg-white px-2 py-1 rounded">VITE_ADMIN_PASSWORD</code>
            </p>
            <p className="text-xs text-[#2D2D2D]/50 text-center mt-2">
              لم تعد توجد كلمة مرور ثابتة داخل الكود.
            </p>
          </div>
        </div>

        <div className="mt-6 text-center">
          <a
            href="/"
            className="text-sm text-[#D4AF86] hover:text-[#C9A87C] transition-colors"
          >
            ← العودة للموقع الرئيسي
          </a>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
