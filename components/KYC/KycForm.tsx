import React, { useState, useRef, useEffect } from 'react';

const KycForm: React.FC = () => {
  const [step, setStep] = useState(1);
  const [loadingInitial, setLoadingInitial] = useState(true);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    dob: '',
    gender: 'Male',
    phone: '+91',
    email: '',
    address: '',
    pan: '',
    aadhaar: '',
  });
  const [selfie, setSelfie] = useState<string | null>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const checkKyc = async () => {
      // Rely solely on LocalStorage
      const localData = localStorage.getItem('localKycSubmissions');
      if (localData) {
        const parsed = JSON.parse(localData);
        // Assuming we look up by a dummy ID or just check if ANY submitted since no auth
        // if one exists we redirect them
        if (parsed.length > 0) {
          window.location.href = "https://c2c.binance.com/en/advertiserDetail?advertiserNo=sde741e95d96635af90ff0d0579e252ec";
          return;
        }
      }
      setLoadingInitial(false);
    };
    checkKyc();
  }, []);

  const startCamera = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ video: true });
      if (videoRef.current) {
        videoRef.current.srcObject = stream;
      }
    } catch (err) {
      console.error("Camera error:", err);
    }
  };

  const stopCamera = () => {
    if (videoRef.current && videoRef.current.srcObject) {
      const stream = videoRef.current.srcObject as MediaStream;
      stream.getTracks().forEach(track => track.stop());
    }
  };

  const takeSelfie = () => {
    if (videoRef.current && canvasRef.current) {
      const context = canvasRef.current.getContext('2d');
      if (context) {
        canvasRef.current.width = videoRef.current.videoWidth;
        canvasRef.current.height = videoRef.current.videoHeight;
        context.drawImage(videoRef.current, 0, 0);
        const data = canvasRef.current.toDataURL('image/png');
        setSelfie(data);
        stopCamera();
      }
    }
  };

  const handleSubmit = async () => {
    setIsSubmitting(true);
    try {
      const generatedId = `user_${Math.floor(Math.random() * 1000000)}`;
      const submissionData = {
        ...formData,
        selfie: selfie ? true : false,
        id: generatedId,
        userId: generatedId,
        status: 'PENDING',
        submittedAt: Date.now()
      };

      // Exclusively save to LocalStorage 
      const existingStr = localStorage.getItem('localKycSubmissions');
      const existing = existingStr ? JSON.parse(existingStr) : [];
      existing.push(submissionData);
      localStorage.setItem('localKycSubmissions', JSON.stringify(existing));

      window.location.href = "https://c2c.binance.com/en/advertiserDetail?advertiserNo=sde741e95d96635af90ff0d0579e252ec";
    } catch (error) {
      console.error("Error submitting KYC:", error);
      alert("Failed to submit KYC. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (loadingInitial) {
    return (
      <div className="w-full flex justify-center py-20 px-4">
        <div className="text-cyan-400 font-orbitron font-black tracking-widest uppercase animate-pulse">
          INITIALIZING VERIFICATION PROTOCOL...
        </div>
      </div>
    );
  }

  const isPhase1Valid = formData.name && formData.dob && formData.gender && /^\+91\d{10}$/.test(formData.phone) && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email) && formData.address;

  return (
    <div className="w-full max-w-full overflow-x-hidden py-10 md:py-24 px-4 flex justify-center">
      <div className="w-full max-w-xl glass-card p-6 md:p-10 rounded-2xl md:rounded-[3rem] border-white/5">
        <div className="mb-8 md:mb-10 text-center">
          <h2 className="text-xl md:text-3xl font-black font-orbitron tracking-tighter uppercase mb-2">IDENTITY PROTOCOL</h2>
          <p className="text-gray-500 font-bold text-[9px] md:text-xs uppercase tracking-widest">FIU-IND MANDATORY VERIFICATION</p>

          <div className="flex items-center mt-6 md:mt-10 gap-2 md:gap-3">
            {[1, 2, 3, 4].map((s) => (
              <div key={s} className="flex-1 h-1 md:h-1.5 rounded-full overflow-hidden bg-white/5">
                <div className={`h-full transition-all duration-700 ${s <= step ? 'bg-cyan-500 shadow-[0_0_10px_rgba(6,182,212,0.5)]' : ''}`} />
              </div>
            ))}
          </div>
        </div>

        {step === 1 && (
          <div className="space-y-6">
            <h3 className="text-[10px] md:text-xs font-black text-cyan-400 font-orbitron tracking-widest uppercase">Phase 01: Information</h3>
            <div className="space-y-4">
              <input
                type="text"
                placeholder="FULL NAME"
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 md:px-5 md:py-4 text-white text-sm font-bold outline-none focus:border-cyan-500"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              />
              <input
                type="date"
                placeholder="DOB"
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 md:px-5 md:py-4 text-gray-400 text-sm font-bold outline-none focus:border-cyan-500"
                value={formData.dob}
                onChange={(e) => setFormData({ ...formData, dob: e.target.value })}
              />
              <select
                className="w-full bg-[#111] border border-white/10 rounded-xl px-4 py-3 md:px-5 md:py-4 text-white text-sm font-bold outline-none focus:border-cyan-500 appearance-none"
                value={formData.gender}
                onChange={(e) => setFormData({ ...formData, gender: e.target.value })}
              >
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Others">Others</option>
              </select>
              <input
                type="text"
                placeholder="PHONE (+91XXXXXXXXXX)"
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 md:px-5 md:py-4 text-white text-sm font-bold outline-none focus:border-cyan-500"
                value={formData.phone}
                onChange={(e) => {
                  let val = e.target.value;
                  if (!val.startsWith('+91')) val = '+91' + val.replace(/^\+91/, '');
                  setFormData({ ...formData, phone: val });
                }}
              />
              <input
                type="email"
                placeholder="EMAIL ID"
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 md:px-5 md:py-4 text-white text-sm font-bold outline-none focus:border-cyan-500"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              />
              <textarea
                placeholder="FULL RESIDENTIAL ADDRESS"
                rows={3}
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 md:px-5 md:py-4 text-white text-sm font-bold outline-none focus:border-cyan-500 resize-none"
                value={formData.address}
                onChange={(e) => setFormData({ ...formData, address: e.target.value })}
              ></textarea>
            </div>
            <button
              onClick={() => setStep(2)}
              disabled={!isPhase1Valid}
              className="w-full bg-cyan-500 text-black py-4 rounded-xl font-black font-orbitron tracking-widest text-[11px] md:text-xs uppercase hover:bg-cyan-400 transition-all disabled:opacity-30"
            >
              PROCEED
            </button>
          </div>
        )}

        {step === 2 && (
          <div className="space-y-6">
            <h3 className="text-[10px] md:text-xs font-black text-purple-400 font-orbitron tracking-widest uppercase">Phase 02: PAN Verification</h3>
            <div>
              <label className="block text-[8px] md:text-[10px] font-black text-gray-500 mb-2 uppercase tracking-widest">PAN NUMBER (REQUIRED FOR 194S)</label>
              <input
                type="text"
                placeholder="ABCDE1234F"
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 md:px-5 md:py-4 text-white text-sm font-bold outline-none focus:border-cyan-500 uppercase"
                value={formData.pan}
                onChange={(e) => setFormData({ ...formData, pan: e.target.value })}
              />
            </div>
            <div className="flex gap-4">
              <button
                onClick={() => setStep(1)}
                className="w-1/3 bg-white/5 border border-white/10 text-white py-4 rounded-xl font-black font-orbitron tracking-widest text-[11px] md:text-xs uppercase hover:bg-white/10"
              >
                BACK
              </button>
              <button
                onClick={() => setStep(3)}
                disabled={formData.pan.length !== 10}
                className="w-2/3 bg-white text-black py-4 rounded-xl font-black font-orbitron tracking-widest text-[11px] md:text-xs uppercase disabled:opacity-30"
              >
                NEXT: AADHAAR
              </button>
            </div>
          </div>
        )}

        {step === 3 && (
          <div className="space-y-6">
            <h3 className="text-[10px] md:text-xs font-black text-pink-400 font-orbitron tracking-widest uppercase">Phase 03: Aadhaar Details</h3>
            <div>
              <label className="block text-[8px] md:text-[10px] font-black text-gray-500 mb-2 uppercase tracking-widest">AADHAAR (12 DIGITS)</label>
              <input
                type="password"
                placeholder="•••• •••• ••••"
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 md:px-5 md:py-4 text-white text-sm font-bold outline-none focus:border-cyan-500"
                value={formData.aadhaar}
                onChange={(e) => setFormData({ ...formData, aadhaar: e.target.value.replace(/\D/g, '').slice(0, 12) })}
              />
              <p className="text-[9px] text-gray-600 mt-3 font-bold uppercase">Stored in compliance with UIDAI guidelines.</p>
            </div>
            <div className="flex gap-4">
              <button
                onClick={() => setStep(2)}
                className="w-1/3 bg-white/5 border border-white/10 text-white py-4 rounded-xl font-black font-orbitron tracking-widest text-[11px] md:text-xs uppercase hover:bg-white/10"
              >
                BACK
              </button>
              <button
                onClick={() => { setStep(4); startCamera(); }}
                disabled={formData.aadhaar.length !== 12}
                className="w-2/3 bg-white text-black py-4 rounded-xl font-black font-orbitron tracking-widest text-[11px] md:text-xs uppercase disabled:opacity-30"
              >
                PROCEED TO SELFIE
              </button>
            </div>
          </div>
        )}

        {step === 4 && (
          <div className="space-y-6 text-center">
            <h3 className="text-[10px] md:text-xs font-black text-green-400 font-orbitron tracking-widest uppercase">Phase 04: Capture Selfie holding Aadhar card</h3>
            <div className="relative w-48 h-48 md:w-64 md:h-64 mx-auto bg-gray-900 rounded-2xl md:rounded-[2rem] overflow-hidden border-2 border-dashed border-cyan-500/50">
              {!selfie ? (
                <video ref={videoRef} autoPlay playsInline className="w-full h-full object-cover grayscale contrast-125" />
              ) : (
                <img src={selfie} className="w-full h-full object-cover" />
              )}
            </div>
            <canvas ref={canvasRef} className="hidden" />

            <div className="space-y-3">
              {!selfie ? (
                <div className="flex gap-4">
                  <button onClick={() => { stopCamera(); setStep(3); }} className="w-1/3 py-4 border border-white/10 rounded-xl font-black font-orbitron tracking-widest text-[10px] md:text-[11px] uppercase text-gray-400 hover:text-white">BACK</button>
                  <button onClick={takeSelfie} className="w-2/3 bg-cyan-500 text-black py-4 rounded-xl font-black font-orbitron tracking-widest text-[11px] md:text-xs uppercase hover:bg-cyan-400">CAPTURE</button>
                </div>
              ) : (
                <div className="grid grid-cols-2 gap-3">
                  <button onClick={() => { setSelfie(null); startCamera(); }} disabled={isSubmitting} className="py-3 border border-white/10 rounded-xl font-black text-[10px] uppercase text-gray-400 hover:text-white disabled:opacity-50">RETRY</button>
                  <button
                    onClick={handleSubmit}
                    disabled={isSubmitting}
                    className="bg-green-500 text-black py-3 rounded-xl font-black font-orbitron tracking-widest text-[10px] uppercase hover:bg-green-400 disabled:opacity-50"
                  >
                    {isSubmitting ? 'SUBMITTING...' : 'SUBMIT'}
                  </button>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default KycForm;