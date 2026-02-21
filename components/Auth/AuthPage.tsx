import React, { useState } from 'react';
import { User, KycStatus } from '../../types';
import { auth } from '../../firebase';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';

interface AuthPageProps {
  onLogin: (user: User) => void;
}

const AuthPage: React.FC<AuthPageProps> = ({ onLogin }) => {
  const [isLogin, setIsLogin] = useState(true);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    phone: '',
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      if (isLogin) {
        const userCredential = await signInWithEmailAndPassword(auth, formData.email, formData.password);
        const firebaseUser = userCredential.user;
        const mockUser: User = {
          id: firebaseUser.uid,
          email: firebaseUser.email || formData.email,
          phone: firebaseUser.phoneNumber || formData.phone || 'N/A',
          kycStatus: KycStatus.PENDING,
          isFrozen: false,
          twoFactorEnabled: false,
          tradeSuccessRate: 100,
          completedTrades: 0,
        };
        onLogin(mockUser);
      } else {
        const userCredential = await createUserWithEmailAndPassword(auth, formData.email, formData.password);
        const firebaseUser = userCredential.user;
        const mockUser: User = {
          id: firebaseUser.uid,
          email: firebaseUser.email || formData.email,
          phone: formData.phone || 'N/A',
          kycStatus: KycStatus.PENDING,
          isFrozen: false,
          twoFactorEnabled: false,
          tradeSuccessRate: 100,
          completedTrades: 0,
        };
        onLogin(mockUser);
      }
    } catch (err: any) {
      setError(err.message || 'Authentication failed. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-md mx-auto py-12 px-4">
      <div className="bg-white p-8 rounded-3xl shadow-xl border border-gray-100 text-gray-900">
        <div className="text-center mb-10">
          <div className="inline-block bg-orange-100 p-4 rounded-2xl mb-4">
            <svg className="w-10 h-10 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
            </svg>
          </div>
          <h1 className="text-2xl font-bold text-gray-900 font-orbitron">{isLogin ? 'WELCOME BACK' : 'CREATE ACCOUNT'}</h1>
          <p className="text-gray-500 mt-2 text-sm font-medium">
            {isLogin ? 'Log in to start trading digital assets' : 'Join the most trusted P2P platform in India'}
          </p>
        </div>

        {error && (
          <div className="mb-6 p-4 bg-red-500/10 border border-red-500/20 rounded-xl text-red-500 text-xs font-bold flex items-center gap-2">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="block text-sm font-bold text-gray-700 mb-2 uppercase tracking-widest text-[10px]">Email Address</label>
            <input
              type="email"
              required
              className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-orange-500 outline-none transition text-black font-bold"
              placeholder="name@example.com"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            />
          </div>

          {!isLogin && (
            <div>
              <label className="block text-sm font-bold text-gray-700 mb-2 uppercase tracking-widest text-[10px]">Mobile Number</label>
              <div className="relative">
                <span className="absolute left-4 top-3.5 text-gray-400 font-bold">+91</span>
                <input
                  type="tel"
                  required
                  className="w-full pl-14 pr-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-orange-500 outline-none transition text-black font-bold"
                  placeholder="789219XXXX"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                />
              </div>
            </div>
          )}

          <div>
            <label className="block text-sm font-bold text-gray-700 mb-2 uppercase tracking-widest text-[10px]">Password</label>
            <input
              type="password"
              required
              className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-orange-500 outline-none transition text-black font-bold"
              placeholder="••••••••"
              value={formData.password}
              onChange={(e) => setFormData({ ...formData, password: e.target.value })}
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-orange-600 text-white py-4 rounded-xl font-black font-orbitron tracking-widest text-sm uppercase hover:bg-orange-700 transition shadow-lg shadow-orange-100 disabled:opacity-50 flex items-center justify-center gap-2"
          >
            {loading ? 'PROCESSING...' : (isLogin ? 'SIGN IN' : 'INITIALIZE')}
          </button>
        </form>

        <div className="mt-8 pt-8 border-t border-gray-100 text-center">
          <p className="text-sm text-gray-500 font-bold">
            {isLogin ? "Don't have an account?" : "Already have an account?"}
            <button
              onClick={() => setIsLogin(!isLogin)}
              className="ml-2 text-orange-600 font-black uppercase tracking-widest text-xs hover:underline"
            >
              {isLogin ? 'Sign Up' : 'Log In'}
            </button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default AuthPage;