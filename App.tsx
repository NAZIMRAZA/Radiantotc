import React, { useState, useEffect } from 'react';
import { HashRouter as Router, Routes, Route, Navigate, Link, useLocation } from 'react-router-dom';
import Navigation from './components/Navigation';
import AdList from './components/P2P/AdList';
import KycForm from './components/KYC/KycForm';
import TradeRoom from './components/Trade/TradeRoom';
import AuthPage from './components/Auth/AuthPage';
import AdminPanel from './components/Admin/AdminPanel';
import Logo from './components/Logo';
import { FAQPage, PolicyPage, AMLPolicyContent, TermsOfServiceContent, CookiePolicyContent, RiskDisclosureContent, ChargebackPolicyContent, RefundPolicyContent, FIUComplianceContent, WebsiteDisclaimerContent, ContactUsContent } from './components/LegalPages';
import { AssetType, TradeSide, P2PAd, TradeStatus, Trade, User, KycStatus } from './types';
import { APP_CONFIG, MOCK_PRICES } from './constants';
import { CountUp } from './components/BinanceDetailsPanel';
import FeedbackSlider from './components/FeedbackSliderNew';
import DesktopFeedbackSlider from './components/DesktopFeedbackSlider';

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const App: React.FC = () => {
  const [selectedAsset, setSelectedAsset] = useState<AssetType>(AssetType.USDT);
  const [tradeSide, setTradeSide] = useState<TradeSide>(TradeSide.BUY);
  const [activeTrade, setActiveTrade] = useState<Trade | null>(null);
  const [user, setUser] = useState<User | null>(null);

  const [usdtPrice, setUsdtPrice] = useState<number>(() => {
    const saved = localStorage.getItem('PLATFORM_USDT_PRICE');
    return saved ? parseFloat(saved) : MOCK_PRICES.USDT;
  });

  const [ads, setAds] = useState<P2PAd[]>([
    {
      id: 'ad_1',
      userId: 'user_99',
      userName: 'RadiantVaultOTC',
      side: TradeSide.SELL,
      asset: AssetType.USDT,
      price: usdtPrice,
      priceType: 'FIXED',
      minLimit: 5000,
      maxLimit: 50000,
      paymentMethods: ['UPI', 'IMPS'],
      availableAmount: 1200,
    },
    {
      id: 'ad_2',
      userId: 'user_102',
      userName: 'RadiantVaultOTC',
      side: TradeSide.SELL,
      asset: AssetType.USDT,
      price: usdtPrice + 0.05,
      priceType: 'FIXED',
      minLimit: 1000,
      maxLimit: 100000,
      paymentMethods: ['UPI', 'NEFT'],
      availableAmount: 8500,
    }
  ]);

  useEffect(() => {
    setAds(prev => prev.map(ad => ({
      ...ad,
      price: ad.id === 'ad_1' ? usdtPrice : usdtPrice + 0.05
    })));
  }, [usdtPrice]);

  const handleStartTrade = (ad: P2PAd) => {
    if (!user) { window.location.hash = '#/auth'; return; }
    const totalInr = ad.minLimit;
    const tdsAmount = totalInr * APP_CONFIG.TDS_RATE;
    const newTrade: Trade = {
      id: `TR-${Math.random().toString(36).substr(2, 9).toUpperCase()}`,
      adId: ad.id,
      buyerId: user.id,
      sellerId: ad.userId,
      asset: ad.asset,
      amount: totalInr / ad.price,
      price: ad.price,
      totalInr: totalInr,
      tdsAmount: tdsAmount,
      commission: totalInr * APP_CONFIG.DEFAULT_COMMISSION,
      status: TradeStatus.PENDING_PAYMENT,
      createdAt: Date.now(),
      escrowLockedAt: Date.now(),
    };
    setActiveTrade(newTrade);
    window.location.hash = '#/trade-active';
  };

  const handleLogin = (newUser: User) => { setUser(newUser); window.location.hash = '#/'; };
  const handleLogout = () => { setUser(null); window.location.hash = '#/'; };

  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen flex flex-col bg-[#030712] text-[#f3f4f6]">
        <Navigation user={user} onLogout={handleLogout} />

        <main className="flex-grow w-full max-w-full overflow-x-hidden pt-16 md:pt-20">
          <Routes>
            <Route path="/" element={
              <div className="space-y-16 md:space-y-32 pb-16 md:pb-32">
                {/* 1. HERO SECTION */}
                <section className="relative min-h-[70vh] md:min-h-[85vh] flex items-center justify-center px-4 pt-10 md:pt-20">
                  <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-16 items-center relative z-10 w-full">
                    <div className="text-left space-y-6 md:space-y-8">
                      <div className="inline-flex items-center gap-2 px-3 py-1.5 md:px-4 md:py-2 rounded-full glass-card border-cyan-500/20 text-cyan-400 text-[10px] md:text-xs font-black tracking-widest font-orbitron">
                        <span className="w-1.5 h-1.5 bg-cyan-400 rounded-full animate-ping"></span>
                        INDIA'S TRUSTED P2P HUB
                      </div>
                      <h1 className="text-4xl md:text-8xl font-black font-orbitron leading-[1] md:leading-[0.9] tracking-tighter">
                        RADIANTVAULT <br />
                        <span className="gradient-text">VENTURES</span>
                      </h1>
                      <p className="text-sm md:text-xl text-gray-400 font-medium max-w-xl leading-relaxed">
                        Welcome to Radiantvault Ventures – India’s trusted P2P engine.
                        <span className="block mt-2 text-cyan-400">Secure, fast, and FIU-compliant trade architecture.</span>
                      </p>
                      <div className="flex flex-col sm:flex-row gap-4 pt-2">
                        <button onClick={() => window.location.hash = user ? '#/kyc' : '#/auth'}
                          className="w-full sm:w-auto bg-white text-black px-8 py-4 md:px-10 md:py-5 rounded-xl md:rounded-2xl font-black font-orbitron tracking-widest text-[11px] md:text-sm hover:bg-cyan-400 transition-all shadow-[0_0_20px_rgba(255,255,255,0.1)]">
                          INITIALIZE TRADE
                        </button>
                        <button onClick={() => document.getElementById('about-us')?.scrollIntoView({ behavior: 'smooth' })}
                          className="w-full sm:w-auto glass-card px-8 py-4 md:px-10 md:py-5 rounded-xl md:rounded-2xl font-black font-orbitron tracking-widest text-[11px] md:text-sm text-white hover:border-purple-500/50">
                          OUR MISSION
                        </button>
                      </div>
                    </div>

                    <div className="relative hidden lg:block">
                      <div className="grid grid-cols-2 gap-6">
                        <div className="glass-card p-8 rounded-3xl space-y-4 animate-float border-cyan-500/30">
                          <p className="text-xs font-black text-cyan-400 font-orbitron tracking-[0.2em] uppercase">USDT RATE</p>
                          <p className="text-4xl font-black text-white font-orbitron">₹{usdtPrice.toFixed(2)}</p>
                        </div>
                        <div className="glass-card p-8 rounded-3xl space-y-4 animate-float border-purple-500/30" style={{ animationDelay: '-2s' }}>
                          <p className="text-xs font-black text-purple-400 font-orbitron tracking-[0.2em] uppercase">NODES</p>
                          <p className="text-4xl font-black text-white font-orbitron">ACTIVE</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>

                {/* 2. TRADE WITH BINANCE SECTION */}
                <section id="trade-with-binance" className="max-w-7xl mx-auto px-4 scroll-mt-24 w-full">
                  <div className="glass-card p-6 md:p-12 rounded-3xl md:rounded-[4rem] border-white/5 bg-gradient-to-b from-white/5 to-transparent relative overflow-hidden">
                    <div className="absolute top-0 right-0 p-8 md:p-16 opacity-5">
                      <svg className="w-32 h-32 md:w-64 md:h-64 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
                    </div>

                    <div className="text-center mb-8 md:mb-12 space-y-2 relative z-10">
                      <span className="text-[10px] md:text-xs font-black text-cyan-400 font-orbitron tracking-widest uppercase">Verified Merchant</span>
                      <h2 className="text-2xl md:text-4xl font-black text-white font-orbitron tracking-tighter uppercase">Trade With Binance</h2>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 relative z-10">
                      <div className="space-y-8">
                        {/* Identity */}
                        <div className="space-y-4">
                          <div className="flex items-center gap-4">
                            <div className="h-16 w-16 md:h-20 md:w-20 rounded-2xl bg-gradient-to-br from-yellow-400 to-yellow-600 p-[2px]">
                              <div className="h-full w-full rounded-2xl bg-black flex items-center justify-center">
                                <Logo className="w-10 h-10 md:w-12 md:h-12" />
                              </div>
                            </div>
                            <div>
                              <div className="flex items-center gap-2">
                                <h3 className="text-2xl md:text-3xl font-black text-white font-orbitron tracking-tighter">RadiantVaultOTC</h3>
                                <span className="bg-yellow-500/20 text-yellow-500 text-[10px] md:text-xs font-black px-2 py-0.5 rounded border border-yellow-500/30 font-orbitron">PRO</span>
                              </div>
                              <p className="text-sm md:text-base font-bold text-gray-500 uppercase tracking-widest mt-1">Professional Crypto Exchange</p>
                            </div>
                          </div>

                          <div className="flex gap-2 flex-wrap">
                            <div className="px-3 py-1 bg-white/5 rounded-full border border-white/10 text-[9px] md:text-[10px] font-black text-gray-400 uppercase tracking-widest">Last Seen: 8 hours ago</div>
                            <div className="px-3 py-1 bg-white/5 rounded-full border border-white/10 text-[9px] md:text-[10px] font-black text-gray-400 uppercase tracking-widest">Joined: 2024-09-29</div>
                          </div>
                        </div>

                        {/* Verification */}
                        <div className="grid grid-cols-2 gap-3 md:gap-4">
                          {['Email Verified', 'SMS Verified', 'ID Verified', 'Address Verified'].map((item, i) => (
                            <div key={i} className="bg-black/40 p-3 md:p-4 rounded-xl border border-green-500/20 flex items-center gap-3">
                              <div className="w-6 h-6 rounded-full bg-green-500/10 border border-green-500/30 flex items-center justify-center text-green-500 shrink-0">
                                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
                              </div>
                              <span className="text-[10px] md:text-xs font-black text-gray-300 uppercase tracking-widest">{item}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Performance */}
                      <div className="space-y-4 md:space-y-6">
                        <div className="grid grid-cols-2 gap-4">
                          <div className="bg-black/40 p-4 md:p-6 rounded-2xl border border-white/5 text-center">
                            <p className="text-[9px] md:text-[10px] font-black text-gray-600 uppercase tracking-widest mb-1 md:mb-2">All Trades</p>
                            <p className="text-2xl md:text-3xl font-black text-white font-orbitron"><CountUp end={7735} /></p>
                          </div>
                          <div className="bg-black/40 p-4 md:p-6 rounded-2xl border border-white/5 text-center">
                            <p className="text-[9px] md:text-[10px] font-black text-gray-600 uppercase tracking-widest mb-1 md:mb-2">30-Day Trades</p>
                            <p className="text-2xl md:text-3xl font-black text-white font-orbitron"><CountUp end={681} /></p>
                          </div>
                        </div>

                        <div className="bg-green-500/5 p-6 rounded-2xl border border-green-500/20 text-center relative overflow-hidden flex flex-col items-center justify-center min-h-[120px]">
                          <div className="absolute top-0 right-0 p-4 opacity-20">
                            <svg className="w-16 h-16 text-green-500 animate-pulse" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
                          </div>
                          <p className="text-[10px] md:text-xs font-black text-green-500 uppercase tracking-[0.2em] mb-1 md:mb-2 relative z-10">30-Day Completion Rate</p>
                          <p className="text-4xl md:text-5xl font-black text-white font-orbitron relative z-10"><CountUp end={100} suffix="%" /></p>
                        </div>

                        <div className="pt-2">
                          <a
                            href="https://c2c.binance.com/en/advertiserDetail?advertiserNo=sde741e95d96635af90ff0d0579e252ec"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-full bg-white text-black py-4 md:py-5 rounded-2xl font-black font-orbitron tracking-[0.2em] text-[10px] md:text-xs uppercase flex items-center justify-center gap-3 shadow-[0_0_20px_rgba(255,255,255,0.1)] hover:shadow-[0_0_30px_rgba(255,255,255,0.2)] active:scale-95 transition-all"
                          >
                            <img src="https://bin.bnbstatic.com/static/images/common/favicon.ico" className="w-4 h-4 md:w-5 md:h-5 rounded-md" alt="Binance" />
                            View Official Binance Profile
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>

                {/* 3. TRADING INTERFACE */}
                <section className="max-w-7xl mx-auto px-4 w-full">
                  <div className="gradient-border p-[1px] rounded-2xl md:rounded-3xl overflow-hidden">
                    <div className="bg-gray-950 rounded-[inherit]">
                      <div className="p-4 md:p-8 border-b border-white/5 flex flex-col md:flex-row gap-4 md:gap-8 items-center justify-between">
                        <div className="flex bg-white/5 p-1 rounded-xl md:rounded-2xl w-full md:w-auto">
                          <button onClick={() => setTradeSide(TradeSide.BUY)} className={`flex-1 md:w-32 py-2 md:py-3 rounded-lg md:rounded-xl font-black font-orbitron text-[10px] md:text-xs tracking-widest transition-all ${tradeSide === TradeSide.BUY ? 'bg-green-500 text-black shadow-lg shadow-green-500/20' : 'text-gray-500 hover:text-white'}`}>BUY</button>
                          <button onClick={() => setTradeSide(TradeSide.SELL)} className={`flex-1 md:w-32 py-2 md:py-3 rounded-lg md:rounded-xl font-black font-orbitron text-[10px] md:text-xs tracking-widest transition-all ${tradeSide === TradeSide.SELL ? 'bg-red-500 text-white shadow-lg shadow-red-500/20' : 'text-gray-500 hover:text-white'}`}>SELL</button>
                        </div>
                        <div className="flex gap-2 overflow-x-auto w-full md:w-auto pb-1 no-scrollbar">
                          {[AssetType.USDT, AssetType.BTC, AssetType.ETH].map(asset => (
                            <button
                              key={asset}
                              onClick={() => setSelectedAsset(asset)}
                              className={`px-4 md:px-8 py-2 md:py-3 rounded-lg md:rounded-xl font-black font-orbitron text-[9px] md:text-xs tracking-widest transition-all border ${selectedAsset === asset ? 'border-cyan-500 text-cyan-400 bg-cyan-500/5' : 'border-white/5 text-gray-500 hover:border-white/10'} whitespace-nowrap`}
                            >
                              {asset}
                            </button>
                          ))}
                        </div>
                      </div>
                      <AdList ads={ads.filter(ad => ad.asset === selectedAsset)} asset={selectedAsset} side={tradeSide} onTrade={handleStartTrade} />
                    </div>
                  </div>
                </section>

                {/* 3.5. GLOBAL REACH GIF SECTION */}
                <section className="max-w-7xl mx-auto px-4 w-full h-full flex justify-center items-center overflow-hidden rounded-3xl md:rounded-[4rem] group relative">
                  <div className="absolute inset-0 bg-cyan-500/20 mix-blend-overlay group-hover:bg-cyan-500/10 transition-colors z-10 pointer-events-none rounded-[inherit]"></div>
                  <img src="/images/World.gif" alt="Global Reach" className="w-full h-auto object-cover rounded-[inherit] opacity-80 group-hover:opacity-100 transition-opacity" />
                </section>

                {/* 4. FIU COMPLIANCE SECTION */}
                <section className="max-w-7xl mx-auto px-4 w-full">
                  <div className="glass-card p-6 md:p-12 rounded-3xl md:rounded-[4rem] border-cyan-500/20 bg-gradient-to-b from-cyan-500/5 to-transparent">
                    <div className="text-center mb-8 md:mb-16 space-y-2">
                      <h2 className="text-2xl md:text-4xl font-black font-orbitron tracking-tighter uppercase">FIU Compliance</h2>
                      <p className="text-gray-500 font-bold uppercase tracking-widest text-[8px] md:text-xs">Secure trading environment guidelines</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                      {/* Card 1: FIU-Compliant */}
                      <div className="glass-card p-6 rounded-3xl border-white/5 space-y-4 bg-black/40 hover:border-cyan-500/30 transition-colors">
                        <div className="text-3xl">🔐</div>
                        <h3 className="text-[11px] md:text-[13px] font-black font-orbitron text-white uppercase tracking-widest leading-tight">FIU-Compliant & Regulation-First</h3>
                        <div className="text-[10px] md:text-xs text-gray-400 font-medium leading-relaxed space-y-2">
                          <p>RadiantvaultOTC operates under a strict compliance framework aligned with Indian VDA regulations and FIU-IND reporting obligations.</p>
                          <p>We maintain a fully KYC-verified trading environment to ensure transparency, fraud prevention, and regulatory adherence.</p>
                        </div>
                      </div>

                      {/* Card 2: 1% TDS */}
                      <div className="glass-card p-6 rounded-3xl border-white/5 space-y-4 bg-black/40 hover:border-cyan-500/30 transition-colors">
                        <div className="text-3xl">🧾</div>
                        <h3 className="text-[11px] md:text-[13px] font-black font-orbitron text-white uppercase tracking-widest leading-tight">1% TDS Compliance</h3>
                        <div className="text-[10px] md:text-xs text-gray-400 font-medium leading-relaxed space-y-2">
                          <p>In accordance with Section 194S of the Income Tax Act (India):</p>
                          <ul className="list-disc pl-4 space-y-1">
                            <li>1% TDS is applicable on eligible VDA transactions.</li>
                            <li>TDS compliance is monitored and executed.</li>
                            <li>Users are responsible for tax reporting accuracy.</li>
                          </ul>
                          <p>We operate strictly within the Indian VDA framework (30% tax regime + 1% TDS).</p>
                        </div>
                      </div>

                      {/* Card 3: 100% KYC */}
                      <div className="glass-card p-6 rounded-3xl border-white/5 space-y-4 bg-black/40 hover:border-cyan-500/30 transition-colors">
                        <div className="text-3xl">🪪</div>
                        <h3 className="text-[11px] md:text-[13px] font-black font-orbitron text-white uppercase tracking-widest leading-tight">100% KYC Verified Trading</h3>
                        <div className="text-[10px] md:text-xs text-gray-400 font-medium leading-relaxed space-y-2">
                          <p>To maintain regulatory integrity and prevent misuse, we verify:</p>
                          <ul className="list-disc pl-4 space-y-1">
                            <li>Aadhaar (Front & Back) & PAN Card</li>
                            <li>Selfie with Aadhaar & Liveness Verification</li>
                            <li>OTP-Verified Mobile Number</li>
                          </ul>
                          <p className="text-red-400 font-bold uppercase pt-1">No anonymous or partially verified accounts permitted.</p>
                        </div>
                      </div>

                      {/* Card 4: Fast Execution */}
                      <div className="glass-card p-6 rounded-3xl border-white/5 space-y-4 bg-black/40 hover:border-cyan-500/30 transition-colors">
                        <div className="text-3xl">⚡</div>
                        <h3 className="text-[11px] md:text-[13px] font-black font-orbitron text-white uppercase tracking-widest leading-tight">Fast Transaction Processing</h3>
                        <div className="text-[10px] md:text-xs text-gray-400 font-medium leading-relaxed space-y-2">
                          <ul className="list-disc pl-4 space-y-1">
                            <li>Order placement via RadiantvaultOTC</li>
                            <li>Secure redirection to official Binance P2P listing</li>
                            <li>Real-time coordination & monitoring for payment</li>
                          </ul>
                          <p>Processing speed depends on banking timelines, but our workflow is optimized for efficiency.</p>
                        </div>
                      </div>

                      {/* Card 5: Safe Environment */}
                      <div className="glass-card p-6 rounded-3xl border-white/5 space-y-4 bg-black/40 hover:border-cyan-500/30 transition-colors">
                        <div className="text-3xl">🛡</div>
                        <h3 className="text-[11px] md:text-[13px] font-black font-orbitron text-white uppercase tracking-widest leading-tight">Safe & Secure Environment</h3>
                        <div className="text-[10px] md:text-xs text-gray-400 font-medium leading-relaxed space-y-2">
                          <p>Our infrastructure includes:</p>
                          <ul className="list-disc pl-4 space-y-1">
                            <li>Encrypted data & Role-based access controls</li>
                            <li>Transaction monitoring & Anti-fraud risk checks</li>
                            <li>Third-party payment prohibition & Chargeback defense</li>
                          </ul>
                          <p>We follow a risk-based AML approach aligning with PMLA & FIU standards.</p>
                        </div>
                      </div>

                      {/* Card 6: Transparency */}
                      <div className="glass-card p-6 rounded-3xl border-white/5 space-y-4 bg-black/40 hover:border-cyan-500/30 transition-colors">
                        <div className="text-3xl">🔎</div>
                        <h3 className="text-[11px] md:text-[13px] font-black font-orbitron text-white uppercase tracking-widest leading-tight">Transparency & Accountability</h3>
                        <div className="text-[10px] md:text-xs text-gray-400 font-medium leading-relaxed space-y-2">
                          <p>RadiantvaultOTC does not facilitate anonymous crypto trading.</p>
                          <p>Trade execution occurs via the Binance P2P escrow mechanism, ensuring additional transaction security, transparency, and accountability.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>

                {/* 5. FEEDBACK SECTION */}
                <section className="max-w-7xl mx-auto px-4 w-full">
                  <div className="space-y-10 md:space-y-16">
                    <div className="text-center space-y-2">
                      <h2 className="text-2xl md:text-5xl font-black font-orbitron tracking-tighter uppercase">Transmission Log</h2>
                      <p className="text-cyan-400 font-black uppercase tracking-[0.2em] text-[8px] md:text-[10px]">Verified Network Feedback</p>
                    </div>

                    {/* Mobile Slider */}
                    <div className="block md:hidden w-full">
                      <FeedbackSlider />
                    </div>

                    {/* Desktop Slider */}
                    <div className="hidden md:block w-full">
                      <DesktopFeedbackSlider />
                    </div>
                  </div>
                </section>
              </div>
            } />
            <Route path="/auth" element={<AuthPage onLogin={handleLogin} />} />
            <Route path="/kyc" element={user ? <KycForm /> : <Navigate to="/auth" />} />
            <Route path="/faq" element={<FAQPage />} />
            <Route path="/admin" element={<AdminPanel onUpdatePrice={setUsdtPrice} currentPrice={usdtPrice} />} />
            <Route path="/trade-active" element={activeTrade && user ? <TradeRoom trade={activeTrade} isBuyer={true} /> : <Navigate to="/" />} />
            <Route path="/compliance" element={<PolicyPage title="AML & Compliance" content={<AMLPolicyContent />} />} />
            <Route path="/fiu-compliance" element={<PolicyPage title="FIU Compliance" content={<FIUComplianceContent />} />} />
            <Route path="/disclaimer" element={<PolicyPage title="Website Disclaimer" content={<WebsiteDisclaimerContent />} />} />
            <Route path="/contact" element={<PolicyPage title="Contact Us" content={<ContactUsContent />} />} />
            <Route path="/terms" element={<PolicyPage centerHeading="Terms and Conditions" title="Terms of Service" content={<TermsOfServiceContent />} />} />
            <Route path="/cookies" element={<PolicyPage title="Cookie Policy" content={<CookiePolicyContent />} />} />
            <Route path="/risk" element={<PolicyPage title="Risk Disclosure Statement" content={<RiskDisclosureContent />} />} />
            <Route path="/chargeback" element={<PolicyPage title="Chargeback Policy" content={<ChargebackPolicyContent />} />} />
            <Route path="/refund" element={<PolicyPage title="Refund Policy" content={<RefundPolicyContent />} />} />
          </Routes>
        </main>

        <BottomLayout />
      </div>
    </Router>
  );
};

const BottomLayout: React.FC = () => {
  const location = useLocation();
  if (location.pathname === '/auth') return null;

  return (
    <>
      <section className="max-w-7xl mx-auto px-4 mb-16 md:mb-24 w-full">
        {location.pathname === '/' && (
          <div className="flex flex-col items-center justify-center space-y-8 md:space-y-12">
            <div className="text-center relative flex justify-center group cursor-default">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-500/20 to-transparent blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>
              <h2 className="text-[16px] sm:text-2xl md:text-3xl lg:text-4xl font-black font-orbitron tracking-tighter uppercase relative transition-transform duration-500 group-hover:scale-105">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-cyan-200 to-white drop-shadow-[0_0_10px_rgba(34,211,238,0.6)] group-hover:from-cyan-300 group-hover:via-white group-hover:to-cyan-300 transition-all duration-500">
                  Are You Ready For Swift {' '}
                </span>
                <br className="md:hidden" />
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-purple-500 drop-shadow-[0_0_15px_rgba(168,85,247,0.6)] group-hover:drop-shadow-[0_0_25px_rgba(34,211,238,1)] transition-all duration-500 animate-pulse">
                  Your Trading Experience
                </span>
              </h2>
            </div>

            <a
              href="https://c2c.binance.com/en/advertiserDetail?advertiserNo=sde741e95d96635af90ff0d0579e252ec"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-[#FCD535] text-black px-8 py-4 md:px-12 md:py-5 rounded-2xl font-black font-orbitron uppercase text-xs md:text-sm hover:scale-105 transition-all duration-300 shadow-[0_0_20px_rgba(252,213,53,0.3)] hover:shadow-[0_0_40px_rgba(252,213,53,0.6)] active:scale-95"
            >
              <img src="https://bin.bnbstatic.com/static/images/common/favicon.ico" className="w-5 h-5 md:w-6 md:h-6 rounded-md" alt="Binance" />
              Trade on Binance
            </a>
          </div>
        )}
      </section>

      <footer className="bg-black/50 border-t border-white/5 py-12 md:py-24">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 mb-12 md:mb-20 text-left">
            <div className="lg:w-2/5 space-y-4 md:space-y-6">
              <div className="flex items-center gap-3">
                <Logo className="h-8 w-8 md:h-10 md:w-10" />
                <span className="text-base md:text-xl font-black font-orbitron tracking-tighter">RadiantvaultOTC</span>
              </div>
              <div className="text-[10px] md:text-sm text-gray-400 font-medium space-y-3">
                <p>RadiantvaultOTC is operated by Radiantvault Ventures Private Limited, a professional OTC crypto trading desk and verified Binance P2P Pro Merchant serving customers across India.</p>
                <p>We provide FIU-compliant crypto trading services through Binance escrow with strict AML, KYC, and fraud-prevention policies.</p>
              </div>
              <div className="space-y-2">
                <h4 className="text-[10px] font-black font-orbitron tracking-widest text-white uppercase">HQ</h4>
                <p className="text-[10px] md:text-xs text-gray-600 leading-relaxed font-bold uppercase">Bangalore 560068, Karnataka, India</p>
              </div>
              <Link to="/admin" className="flex items-center gap-2 px-3 py-1 bg-white/5 border border-white/10 rounded-full w-fit mt-4 hover:border-cyan-500/50 hover:bg-white/10 transition-colors">
                <span className="text-[8px] md:text-[10px] font-black font-orbitron tracking-widest text-cyan-400 uppercase">PROD NODE READY</span>
              </Link>
            </div>

            <div className="lg:w-3/5 grid grid-cols-3 gap-4 sm:gap-8">
              <div>
                <h4 className="text-[10px] md:text-xs font-black font-orbitron tracking-widest text-white mb-4 md:mb-6 uppercase">Platform</h4>
                <ul className="space-y-3 text-[10px] md:text-sm text-gray-600 font-bold uppercase tracking-wider">
                  <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-cyan-500 rounded-full shrink-0"></span><Link to="/" className="hover:text-cyan-400 transition-colors">Exchange</Link></li>
                  <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-cyan-500 rounded-full shrink-0"></span><Link to="/faq" className="hover:text-cyan-400 transition-colors">Help / FAQs</Link></li>
                  <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-cyan-500 rounded-full shrink-0"></span><Link to="/contact" className="hover:text-cyan-400 transition-colors">Contact Us</Link></li>
                </ul>
              </div>
              <div>
                <h4 className="text-[10px] md:text-xs font-black font-orbitron tracking-widest text-white mb-4 md:mb-6 uppercase">Compliance</h4>
                <ul className="space-y-3 text-[10px] md:text-sm text-gray-600 font-bold uppercase tracking-wider">
                  <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-cyan-500 rounded-full shrink-0"></span><Link to="/terms" className="hover:text-cyan-400 transition-colors">Terms</Link></li>
                  <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-cyan-500 rounded-full shrink-0"></span><Link to="/risk" className="hover:text-cyan-400 transition-colors">Risk</Link></li>
                  <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-cyan-500 rounded-full shrink-0"></span><Link to="/chargeback" className="hover:text-cyan-400 transition-colors">Chargeback</Link></li>
                  <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-cyan-500 rounded-full shrink-0"></span><Link to="/refund" className="hover:text-cyan-400 transition-colors">Refund</Link></li>
                </ul>
              </div>
              <div>
                <h4 className="text-[10px] md:text-xs font-black font-orbitron tracking-widest text-white mb-4 md:mb-6 uppercase">Resources</h4>
                <ul className="space-y-3 text-[10px] md:text-sm text-gray-600 font-bold uppercase tracking-wider">
                  <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-cyan-500 rounded-full shrink-0"></span><Link to="/compliance" className="hover:text-cyan-400 transition-colors">AML Policy</Link></li>
                  <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-cyan-500 rounded-full shrink-0"></span><Link to="/fiu-compliance" className="hover:text-cyan-400 transition-colors">FIU Stmt</Link></li>
                  <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-cyan-500 rounded-full shrink-0"></span><Link to="/cookies" className="hover:text-cyan-400 transition-colors">Cookies</Link></li>
                  <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-cyan-500 rounded-full shrink-0"></span><Link to="/disclaimer" className="hover:text-cyan-400 transition-colors">Disclaimer</Link></li>
                </ul>
              </div>
            </div>
          </div>
          <div className="border-t border-white/5 pt-8">
            <div className="inline-block glass-card px-6 py-4 md:px-8 md:py-6 rounded-2xl md:rounded-[2rem] border-cyan-500/20 max-w-4xl w-full">
              <p className="text-[9px] md:text-sm font-bold text-gray-400 leading-relaxed">
                <span className="text-cyan-400 font-orbitron font-black text-[10px] block mb-1 tracking-widest">OFFICIAL DECLARATION</span>
                <span className="text-white">{APP_CONFIG.LEGAL_NAME}</span> is FIU-IND registered: <span className="text-cyan-400">{APP_CONFIG.FIU_REG_ID}</span>
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default App;