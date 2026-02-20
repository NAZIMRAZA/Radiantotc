
import React, { useState } from 'react';
import { APP_CONFIG } from '../constants';

export const FAQPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const faqs = [
    { q: "What is Radiantvault Ventures?", a: "Radiantvault Ventures is a leading peer-to-peer (P2P) cryptocurrency trading platform in India. We provide a secure, transparent, and user-friendly marketplace for individuals to trade digital assets directly with one another. By eliminating intermediaries, we offer faster and more decentralized trading options." },
    { q: "How do I create an account on Radiantvault Ventures?", a: "Step 1: Click on the Sign Up button. Step 2: Enter email, choice password. Step 3: Verify email. Once verified, log in and proceed to KYC." },
    { q: "Is KYC mandatory?", a: "Yes, KYC (Know Your Customer) is mandatory for all users on Radiantvault Ventures. We enforce strict KYC rules to ensure compliance with Indian regulations." },
    { q: "What documents do I need for KYC verification?", a: "Valid government photo ID (Aadhaar/PAN/Passport), Proof of Address, Passport Photo, and a Real-time Selfie." },
    { q: "How long does KYC verification take?", a: "Usually 24-48 hours after submission. You will be notified via email." },
    { q: "How do I trade cryptocurrency on Radiantvault Ventures?", a: "Browse offers, choose a buyer/seller, initiate trade, confirm payment, and release crypto via escrow." },
    { q: "What payment methods are accepted?", a: "Bank transfers (IMPS, NEFT, RTGS), UPI, and popular mobile wallets." },
    { q: "Is there a minimum or maximum trading limit?", a: "Limits vary by the individual offer. Check offer details before proceeding." },
    { q: "What are the fees for trading on Radiantvault Ventures?", a: "We charge a small, transparent transaction fee displayed upfront before you confirm." },
    { q: "Is Radiantvault Ventures secure?", a: "Yes. We use advanced encryption, 2FA, and a secure escrow system for all trades." },
    { q: "How does the escrow system work?", a: "Crypto is held in a neutral escrow wallet once a trade starts. It's only released to the buyer after both parties confirm the payment." },
    { q: "What happens if I have a dispute during a trade?", a: "Our support team mediates. Provide evidence (payment proof/chats) and we will resolve based on facts." },
    { q: "How do I withdraw my cryptocurrency to an external wallet?", a: "Go to Wallet, select crypto, enter destination address and amount, then confirm." },
    { q: "Can I trade other cryptocurrencies besides Bitcoin?", a: "Yes, we support BTC, ETH, LTC, and USDT, with more assets added regularly." },
    { q: "Is there a mobile app for Radiantvault Ventures?", a: "Currently in development for Android and iOS. Stay tuned for the release!" },
    { q: "What happens if I forget my password?", a: "Use the 'Forgot Password' link on the login page to receive a reset link via email." },
    { q: "Can I delete my Radiantvault Ventures account?", a: "Yes, contact support for assistance. Note that data removal is permanent." },
    { q: "How can I contact customer support?", a: "Email: radiantvaultventures@gmail.com, or use the Live Chat on our website during business hours." },
    { q: "Are there any risks in P2P cryptocurrency trading?", a: "Risks exist, but we mitigate them through escrow, KYC, and ratings. Always verify payment receipt before releasing." },
    { q: "Does Radiantvault Ventures comply with Indian regulations?", a: "Yes, we adhere to all Indian VDA regulations, including FIU-IND compliance and 1% TDS (Sec 194S)." },
    { q: "Can foreign nationals use Radiantvault Ventures?", a: "Currently available only to Indian residents. International expansion is planned." },
    { q: "How can I report suspicious activity?", a: "Email security@radiantvault.com immediately with details." },
    { q: "What is the future of Radiantvault Ventures?", a: "Expanding asset support, launching a mobile app, and entering international markets while remaining Bharat's #1 hub." }
  ];

  const filteredFaqs = faqs.filter(f =>
    f.q.toLowerCase().includes(searchTerm.toLowerCase()) ||
    f.a.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="max-w-4xl mx-auto py-24 px-4">
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-black font-orbitron tracking-tighter mb-4 uppercase">Support Terminal</h1>
        <p className="text-gray-500 font-bold uppercase tracking-widest text-xs">Access the Knowledge Database</p>
      </div>

      <div className="relative mb-12">
        <input
          type="text"
          placeholder="SEARCH FAQ DATABASE..."
          className="w-full bg-white/5 border border-white/10 rounded-2xl py-5 px-8 text-white font-orbitron text-sm focus:outline-none focus:border-cyan-500/50 focus:ring-1 focus:ring-cyan-500/20"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <div className="absolute right-6 top-1/2 -translate-y-1/2 text-gray-500 font-black text-xs">CTRL + K</div>
      </div>

      <div className="space-y-4">
        {filteredFaqs.map((faq, i) => (
          <details key={i} className="group glass-card rounded-2xl border-white/5 overflow-hidden">
            <summary className="flex justify-between items-center p-6 cursor-pointer list-none">
              <span className="font-bold text-gray-200 text-sm md:text-base pr-8">{faq.q}</span>
              <span className="text-cyan-400 transform group-open:rotate-180 transition-transform font-bold">↓</span>
            </summary>
            <div className="p-6 pt-0 text-gray-400 text-sm leading-relaxed font-medium border-t border-white/5 bg-black/20">
              {faq.a}
            </div>
          </details>
        ))}
        {filteredFaqs.length === 0 && (
          <div className="text-center py-20 text-gray-600 font-black uppercase tracking-widest">No matching protocol entries found.</div>
        )}
      </div>
    </div>
  );
};

export const PolicyPage: React.FC<{ title: string; content: React.ReactNode }> = ({ title, content }) => (
  <div className="max-w-4xl mx-auto py-24 px-4">
    <div className="glass-card p-10 md:p-16 rounded-[3rem] border-white/5">
      <h1 className="text-3xl font-black font-orbitron mb-12 text-white uppercase tracking-tighter">{title}</h1>
      <div className="text-gray-400 leading-relaxed font-medium">
        {content}
      </div>
    </div>
  </div>
);

export const AMLPolicyContent = () => (
  <div className="space-y-10 text-sm md:text-base">
    <div className="space-y-4">
      <p className="text-cyan-400 font-bold uppercase text-xs tracking-widest">Last Updated: 01-OCT-2025</p>
      <p>RadiantvaultOTC, operated by Radiantvault Ventures Private Limited, is committed to preventing money laundering, terrorist financing, fraud, and illegal activities.</p>
    </div>

    <div className="space-y-4">
      <h3 className="text-xl font-black font-orbitron text-white">1. Introduction</h3>
      <p>We follow applicable Indian laws and international standards including:</p>
      <ul className="list-disc pl-6 space-y-2 text-gray-400">
        <li>Prevention of Money Laundering Act (PMLA)</li>
        <li>FIU-IND reporting requirements</li>
        <li>Information Technology Act, 2000</li>
        <li>FATF Recommendations</li>
      </ul>
      <p>All users must comply with this AML & KYC Policy to trade with us.</p>
    </div>

    <div className="space-y-4">
      <h3 className="text-xl font-black font-orbitron text-white">2. Purpose of AML & KYC</h3>
      <p>The purpose of our AML & KYC process is to:</p>
      <ul className="list-disc pl-6 space-y-2 text-gray-400">
        <li>Verify identity of users</li>
        <li>Prevent fraud and chargebacks</li>
        <li>Detect suspicious transactions</li>
        <li>Comply with FIU-IND regulations</li>
        <li>Protect Radiantvault Ventures Private Limited from legal risk</li>
      </ul>
      <p className="font-bold text-red-500">Trading without KYC is not allowed.</p>
    </div>

    <div className="space-y-4">
      <h3 className="text-xl font-black font-orbitron text-white">3. Customer Identification (KYC Requirements)</h3>
      <p>Every customer must submit:</p>

      <p className="font-bold text-white mt-4">Mandatory Documents</p>
      <ul className="list-disc pl-6 space-y-2 text-gray-400">
        <li>Aadhaar Card (Front & Back, clearly readable)</li>
        <li>PAN Card</li>
        <li>Selfie holding Aadhaar</li>
        <li>Liveness Verification (Video or Face Match)</li>
        <li>Active Mobile Number</li>
      </ul>

      <p className="font-bold text-white mt-4">Additional Verification (If Required)</p>
      <p>We may request:</p>
      <ul className="list-disc pl-6 space-y-2 text-gray-400">
        <li>Bank statement</li>
        <li>Income proof</li>
        <li>Video call verification</li>
        <li>Source of funds declaration</li>
      </ul>
      <p>Accounts failing verification will be rejected.</p>
    </div>

    <div className="space-y-4">
      <h3 className="text-xl font-black font-orbitron text-white">4. Verification Standards</h3>
      <p>RadiantvaultOTC ensures:</p>
      <ul className="list-disc pl-6 space-y-2 text-gray-400">
        <li>Name on PAN must match Aadhaar</li>
        <li>Bank account must be same-name account</li>
        <li>Documents must be original and valid</li>
        <li>Images must be clear and unedited</li>
      </ul>
      <p>Fake or altered documents will lead to permanent ban.</p>
    </div>

    <div className="space-y-4">
      <h3 className="text-xl font-black font-orbitron text-white">5. Ongoing Monitoring</h3>
      <p>We continuously monitor accounts for:</p>
      <ul className="list-disc pl-6 space-y-2 text-gray-400">
        <li>Large or unusual transactions</li>
        <li>Multiple accounts</li>
        <li>Chargeback risk</li>
        <li>Suspicious payment patterns</li>
        <li>Fraud or scam indicators</li>
      </ul>
      <p>We may pause or cancel trades if suspicious activity is detected.</p>
    </div>

    <div className="space-y-4">
      <h3 className="text-xl font-black font-orbitron text-white">6. High-Risk Customers</h3>
      <p>We do not trade with:</p>
      <ul className="list-disc pl-6 space-y-2 text-gray-400">
        <li>Anonymous users</li>
        <li>Fake KYC users</li>
        <li>Fraud-reported accounts</li>
        <li>Users with previous chargebacks</li>
        <li>Sanctioned individuals</li>
        <li>Politically Exposed Persons (PEPs) without enhanced due diligence</li>
      </ul>
      <p>We reserve the right to deny service.</p>
    </div>

    <div className="space-y-4">
      <h3 className="text-xl font-black font-orbitron text-white">7. Source of Funds Checks</h3>
      <p>Users may be asked to provide proof of funds such as:</p>
      <ul className="list-disc pl-6 space-y-2 text-gray-400">
        <li>Salary slips</li>
        <li>Business income proof</li>
        <li>Bank statements</li>
      </ul>
      <p>This is required for FIU-IND compliance.</p>
    </div>

    <div className="space-y-4">
      <h3 className="text-xl font-black font-orbitron text-white">8. Suspicious Activity Reporting</h3>
      <p>If suspicious activity is detected, RadiantvaultOTC may:</p>
      <ul className="list-disc pl-6 space-y-2 text-gray-400">
        <li>Freeze account</li>
        <li>Cancel trade</li>
        <li>Report transaction to FIU-IND</li>
        <li>Share information with banks</li>
        <li>Inform law enforcement agencies</li>
      </ul>
      <p>Users will not be notified if reporting is required by law.</p>
    </div>

    <div className="space-y-4">
      <h3 className="text-xl font-black font-orbitron text-white">9. Record Keeping</h3>
      <p>We keep KYC and transaction records for the period required under Indian law and FIU guidelines. Records may include:</p>
      <ul className="list-disc pl-6 space-y-2 text-gray-400">
        <li>KYC documents</li>
        <li>Transaction history</li>
        <li>IP logs</li>
        <li>Communication records</li>
      </ul>
    </div>

    <div className="space-y-4">
      <h3 className="text-xl font-black font-orbitron text-white">10. Chargeback and Fraud Policy</h3>
      <p>If a user initiates chargeback after receiving crypto:</p>
      <ul className="list-disc pl-6 space-y-2 text-gray-400">
        <li>KYC and trade records will be shared with banks and LEA</li>
        <li>User must obtain NOC from Law Enforcement Agency</li>
        <li>All legal and recovery costs must be paid by the user</li>
      </ul>
      <p>Legal action may be taken.</p>
    </div>

    <div className="space-y-4">
      <h3 className="text-xl font-black font-orbitron text-white">11. Employee Compliance</h3>
      <p>RadiantvaultOTC staff are trained in AML procedures and required to:</p>
      <ul className="list-disc pl-6 space-y-2 text-gray-400">
        <li>Maintain confidentiality</li>
        <li>Report suspicious activity</li>
        <li>Follow compliance protocols</li>
      </ul>
    </div>

    <div className="space-y-4">
      <h3 className="text-xl font-black font-orbitron text-white">12. User Responsibilities</h3>
      <p>Users must:</p>
      <ul className="list-disc pl-6 space-y-2 text-gray-400">
        <li>Provide true information</li>
        <li>Use own bank account</li>
        <li>Avoid third-party payments</li>
        <li>Report account compromise immediately</li>
      </ul>
      <p>Failure may result in account suspension.</p>
    </div>

    <div className="space-y-4">
      <h3 className="text-xl font-black font-orbitron text-white">13. Data Protection</h3>
      <p>All KYC data is encrypted and stored securely with restricted access.</p>
      <p>We do not sell user data. Information may be shared only with regulators, banks, Binance, or law enforcement when legally required.</p>
    </div>

    <div className="space-y-4">
      <h3 className="text-xl font-black font-orbitron text-white">14. Updates to Policy</h3>
      <p>This AML & KYC Policy may be updated anytime. Continued use means acceptance.</p>
    </div>

    <div className="space-y-4">
      <h3 className="text-xl font-black font-orbitron text-white">15. Contact</h3>
      <p>Radiantvault Ventures Private Limited</p>
      <p><span className="text-white font-bold">Email:</span> support@radiantvaultotc.com</p>
      <p><span className="text-white font-bold">Phone:</span> 7829193944</p>
      <p><span className="text-white font-bold">Registered Address:</span> V.NO-24/8/1, SLV Temple Road, Mangammanapalya Bangalore-560068, Karnataka</p>
    </div>

    <div className="mt-8 pt-8 border-t border-white/10 text-center">
      <p className="text-cyan-400 font-orbitron font-black text-sm tracking-widest uppercase">RadiantvaultOTC – Trusted FIU-Compliant Crypto OTC Trading in India</p>
    </div>
  </div>
);

export const TermsOfServiceContent = () => (
  <div className="space-y-10 text-sm md:text-base">
    <div className="space-y-4">
      <p className="text-cyan-400 font-bold uppercase text-xs tracking-widest">Last Updated: 01-OCT-2025</p>
      <p>These terms are provided by <span className="text-white font-bold">RadiantvaultOTC</span>.</p>
    </div>

    <div className="space-y-4">
      <h3 className="text-xl font-black font-orbitron text-white">1. Introduction</h3>
      <p>These Terms and Conditions govern your use of the website and services provided by Radiantvault Ventures Private Limited, operating under the trade name RadiantvaultOTC.</p>
      <p>By using our website or trading with us, you agree to these Terms. If you do not agree, do not use our services.</p>
    </div>

    <div className="space-y-4">
      <h3 className="text-xl font-black font-orbitron text-white">2. Company Information</h3>
      <ul className="list-disc pl-6 space-y-2 text-gray-400">
        <li><span className="text-white font-bold">Legal Name:</span> Radiantvault Ventures Private Limited</li>
        <li><span className="text-white font-bold">Trade Name:</span> RadiantvaultOTC</li>
        <li><span className="text-white font-bold">Registered Address:</span> V.NO-24/8/1, SLV Temple Road, Mangammanapalya Bangalore-560068, Karnataka</li>
        <li><span className="text-white font-bold">Email:</span> support@radiantvaultotc.com</li>
      </ul>
      <p>RadiantvaultOTC operates as a verified Binance P2P Pro Merchant and OTC crypto trading service.</p>
    </div>

    <div className="space-y-4">
      <h3 className="text-xl font-black font-orbitron text-white">3. Eligibility</h3>
      <p>You must:</p>
      <ul className="list-disc pl-6 space-y-2 text-gray-400">
        <li>Be at least 18 years old</li>
        <li>Complete full KYC verification</li>
        <li>Use your own bank account</li>
        <li>Provide accurate information</li>
      </ul>
      <p>We reserve the right to refuse service to anyone.</p>
    </div>

    <div className="space-y-4">
      <h3 className="text-xl font-black font-orbitron text-white">4. Mandatory KYC Requirement</h3>
      <p>Trading with RadiantvaultOTC requires full KYC verification.</p>
      <p>Required documents:</p>
      <ul className="list-disc pl-6 space-y-2 text-gray-400">
        <li>Aadhaar Card (Front & Back)</li>
        <li>PAN Card</li>
        <li>Selfie holding Aadhaar</li>
        <li>Liveness check</li>
        <li>Active mobile number</li>
      </ul>
      <p>If KYC is incomplete or suspicious, we will not trade.</p>
    </div>

    <div className="space-y-4">
      <h3 className="text-xl font-black font-orbitron text-white">5. Trading Process</h3>
      <ol className="list-decimal pl-6 space-y-2 text-gray-400">
        <li>User places order on our website</li>
        <li>User is redirected to our Binance P2P ad</li>
        <li>Payment is made via Binance escrow system</li>
        <li>Crypto released after payment confirmation</li>
      </ol>
      <p>We do not accept payments outside Binance order chat unless officially approved.</p>
    </div>

    <div className="space-y-4">
      <h3 className="text-xl font-black font-orbitron text-white">6. Payment Rules</h3>
      <ul className="list-disc pl-6 space-y-2 text-gray-400">
        <li>Only same-name bank account allowed</li>
        <li>No third-party payments</li>
        <li>No cash deposits</li>
        <li>No suspicious transactions</li>
      </ul>
      <p>Violation may lead to account ban.</p>
    </div>

    <div className="space-y-4">
      <h3 className="text-xl font-black font-orbitron text-white">7. Chargeback Policy</h3>
      <p>If user initiates a chargeback after receiving crypto:</p>
      <ul className="list-disc pl-6 space-y-2 text-gray-400">
        <li>User must immediately resolve dispute</li>
        <li>User must obtain NOC from Law Enforcement Agency</li>
        <li>All legal, banking, and investigation costs must be reimbursed to Radiantvault Ventures Private Limited</li>
        <li>Legal action may be taken under Indian law</li>
      </ul>
      <p>User KYC and transaction data may be shared with banks and LEA.</p>
    </div>

    <div className="space-y-4">
      <h3 className="text-xl font-black font-orbitron text-white">8. AML & FIU Compliance</h3>
      <p>RadiantvaultOTC follows FIU-IND and PMLA guidelines. We may:</p>
      <ul className="list-disc pl-6 space-y-2 text-gray-400">
        <li>Monitor transactions</li>
        <li>Reject suspicious trades</li>
        <li>Freeze accounts</li>
        <li>Report transactions to authorities</li>
      </ul>
    </div>

    <div className="space-y-4">
      <h3 className="text-xl font-black font-orbitron text-white">9. Fees</h3>
      <p>We may charge:</p>
      <ul className="list-disc pl-6 space-y-2 text-gray-400">
        <li>Trading margins</li>
        <li>Service fees</li>
        <li>Legal handling fees</li>
        <li>Chargeback investigation costs</li>
      </ul>
      <p>Fees will be displayed before order confirmation.</p>
    </div>

    <div className="space-y-4">
      <h3 className="text-xl font-black font-orbitron text-white">10. Risks of Crypto Trading</h3>
      <p>Crypto trading involves risks including:</p>
      <ul className="list-disc pl-6 space-y-2 text-gray-400">
        <li>Price volatility</li>
        <li>Bank restrictions</li>
        <li>Regulatory changes</li>
        <li>Loss of funds</li>
      </ul>
      <p>RadiantvaultOTC does not provide investment advice.</p>
    </div>

    <div className="space-y-4">
      <h3 className="text-xl font-black font-orbitron text-white">11. Limitation of Liability</h3>
      <p>RadiantvaultOTC is not liable for:</p>
      <ul className="list-disc pl-6 space-y-2 text-gray-400">
        <li>Binance platform issues</li>
        <li>Bank delays</li>
        <li>Blockchain congestion</li>
        <li>User mistakes</li>
      </ul>
      <p>Our liability is limited to the trading amount.</p>
    </div>

    <div className="space-y-4">
      <h3 className="text-xl font-black font-orbitron text-white">12. Account Suspension</h3>
      <p>We may suspend accounts for:</p>
      <ul className="list-disc pl-6 space-y-2 text-gray-400">
        <li>Fake KYC</li>
        <li>Fraud attempts</li>
        <li>Chargebacks</li>
        <li>Abuse or threats</li>
        <li>Suspicious activity</li>
      </ul>
    </div>

    <div className="space-y-4">
      <h3 className="text-xl font-black font-orbitron text-white">13. Intellectual Property</h3>
      <p>All website content belongs to Radiantvault Ventures Private Limited. Do not copy or misuse.</p>
    </div>

    <div className="space-y-4">
      <h3 className="text-xl font-black font-orbitron text-white">14. Jurisdiction</h3>
      <p>All disputes are subject to courts in Bangalore, Karnataka, India.</p>
    </div>

    <div className="space-y-4">
      <h3 className="text-xl font-black font-orbitron text-white">15. Updates to Terms</h3>
      <p>We may update Terms anytime. Continued use means acceptance.</p>
    </div>

    <div className="space-y-4">
      <h3 className="text-xl font-black font-orbitron text-white">16. Contact</h3>
      <p>Radiantvault Ventures Private Limited</p>
      <p><span className="text-white font-bold">Email:</span> support@radiantvaultotc.com</p>
      <p><span className="text-white font-bold">Phone:</span> 7892193944</p>
    </div>

    <div className="mt-8 pt-8 border-t border-white/10 text-center">
      <p className="text-cyan-400 font-orbitron font-black text-sm tracking-widest uppercase">RadiantvaultOTC – Trusted FIU-Compliant Crypto OTC Trading</p>
    </div>
  </div>
);

export const PrivacyPolicyContent = () => (
  <div className="space-y-10 text-sm md:text-base">
    <div className="space-y-4">
      <h3 className="text-xl font-black font-orbitron text-white">1️⃣ Legal Identity of Data Fiduciary</h3>
      <p>Radiantvault Ventures Private Limited (“RadiantvaultOTC”) is the Data Fiduciary responsible for processing personal data under the Digital Personal Data Protection Act, 2023 (India).</p>
    </div>

    <div className="space-y-4">
      <h3 className="text-xl font-black font-orbitron text-white">2️⃣ Categories of Data Collected</h3>
      <p>We collect the following categories of personal data:</p>
      <ul className="list-disc pl-6 space-y-2 text-gray-400">
        <li>Aadhaar (front and back image)</li>
        <li>PAN card details</li>
        <li>Selfie holding Aadhaar</li>
        <li>Liveness verification data</li>
        <li>Mobile number (OTP verified)</li>
        <li>Email address</li>
        <li>IP address and device information</li>
        <li>Transaction history</li>
        <li>Banking/payment metadata</li>
      </ul>
    </div>

    <div className="space-y-4">
      <h3 className="text-xl font-black font-orbitron text-white">3️⃣ Purpose of Data Collection</h3>
      <p>Personal data is collected strictly for:</p>
      <ul className="list-disc pl-6 space-y-2 text-gray-400">
        <li>KYC verification</li>
        <li>AML compliance</li>
        <li>Fraud prevention</li>
        <li>Regulatory reporting to FIU-IND</li>
        <li>Transaction execution</li>
        <li>Dispute resolution and chargeback investigation</li>
        <li>Legal compliance under PMLA 2002</li>
      </ul>
      <p>No data is collected for unrelated commercial exploitation.</p>
    </div>

    <div className="space-y-4">
      <h3 className="text-xl font-black font-orbitron text-white">4️⃣ Legal Basis for Processing</h3>
      <p>Processing is conducted based on:</p>
      <ul className="list-disc pl-6 space-y-2 text-gray-400">
        <li>User consent</li>
        <li>Statutory obligations under Indian law</li>
        <li>Prevention of money laundering and fraud</li>
      </ul>
    </div>

    <div className="space-y-4">
      <h3 className="text-xl font-black font-orbitron text-white">5️⃣ Mandatory KYC Policy</h3>
      <p>Trading access is granted only after successful KYC verification. RadiantvaultOTC does not allow anonymous transactions.</p>
    </div>

    <div className="space-y-4">
      <h3 className="text-xl font-black font-orbitron text-white">6️⃣ Data Storage & Encryption</h3>
      <p>All sensitive personal data is:</p>
      <ul className="list-disc pl-6 space-y-2 text-gray-400">
        <li>Stored in encrypted format</li>
        <li>Secured using industry-standard encryption protocols</li>
        <li>Protected against unauthorized access</li>
      </ul>
      <p>Document storage is access-restricted and monitored.</p>
    </div>

    <div className="space-y-4">
      <h3 className="text-xl font-black font-orbitron text-white">7️⃣ Data Sharing & Disclosure</h3>
      <p>Personal data may be shared with:</p>
      <ul className="list-disc pl-6 space-y-2 text-gray-400">
        <li>Law enforcement agencies (LEA)</li>
        <li>FIU-IND</li>
        <li>Banking partners (in case of disputes)</li>
        <li>Regulatory authorities</li>
      </ul>
      <p>We do not sell personal data.</p>
    </div>

    <div className="space-y-4">
      <h3 className="text-xl font-black font-orbitron text-white">8️⃣ Data Retention Policy</h3>
      <p>Data is retained:</p>
      <ul className="list-disc pl-6 space-y-2 text-gray-400">
        <li>For a minimum of 5 years as required under AML regulations</li>
        <li>Longer if required for ongoing investigations or legal proceedings</li>
      </ul>
      <p>After retention expiry, data is securely deleted.</p>
    </div>

    <div className="space-y-4">
      <h3 className="text-xl font-black font-orbitron text-white">9️⃣ User Rights Under DPDP Act</h3>
      <p>Users have the right to:</p>
      <ul className="list-disc pl-6 space-y-2 text-gray-400">
        <li>Access their personal data</li>
        <li>Request correction</li>
        <li>Request deletion (subject to legal retention requirements)</li>
        <li>Withdraw consent where legally permissible</li>
      </ul>
    </div>

    <div className="space-y-4">
      <h3 className="text-xl font-black font-orbitron text-white">🔟 Withdrawal of Consent</h3>
      <p>Withdrawal of consent may result in:</p>
      <ul className="list-disc pl-6 space-y-2 text-gray-400">
        <li>Account suspension</li>
        <li>Termination of trading privileges</li>
        <li>Regulatory reporting if applicable</li>
      </ul>
    </div>

    <div className="space-y-4">
      <h3 className="text-xl font-black font-orbitron text-white">1️⃣1️⃣ Third-Party Service Providers</h3>
      <p>We may use third-party KYC verification tools, hosting providers, and fraud monitoring services. These vendors are contractually obligated to maintain confidentiality and data security.</p>
    </div>

    <div className="space-y-4">
      <h3 className="text-xl font-black font-orbitron text-white">1️⃣2️⃣ Cross-Border Data Transfers</h3>
      <p>If data is processed outside India, such transfer will comply with applicable Indian data protection regulations.</p>
    </div>

    <div className="space-y-4">
      <h3 className="text-xl font-black font-orbitron text-white">1️⃣3️⃣ Cookies & Technical Data</h3>
      <p>We collect technical data such as:</p>
      <ul className="list-disc pl-6 space-y-2 text-gray-400">
        <li>Device identifiers</li>
        <li>IP address</li>
        <li>Browser type</li>
        <li>Login timestamps</li>
      </ul>
      <p>This is used for fraud detection and security monitoring.</p>
    </div>

    <div className="space-y-4">
      <h3 className="text-xl font-black font-orbitron text-white">1️⃣4️⃣ Grievance Redressal Mechanism</h3>
      <p>Users may contact the designated Grievance Officer for privacy concerns. Complaint response timeline shall comply with statutory requirements under Indian law.</p>
    </div>

    <div className="space-y-4">
      <h3 className="text-xl font-black font-orbitron text-white">1️⃣5️⃣ Policy Updates</h3>
      <p>RadiantvaultOTC reserves the right to update this Privacy Policy to reflect regulatory or operational changes. Updated policies will be published on the website with effective date.</p>
    </div>
  </div>
);

export const RiskDisclosureContent = () => (
  <div className="space-y-10 text-sm md:text-base">
    <div className="space-y-4">
      <p className="text-cyan-400 font-bold uppercase text-xs tracking-widest">Last Updated: 01-OCT-2025</p>
      <p>This Risk Disclosure Statement explains the risks associated with cryptocurrency trading through RadiantvaultOTC, operated by Radiantvault Ventures Private Limited.</p>
      <p>Cryptocurrency trading involves significant financial risk. By using our services, you acknowledge and accept these risks. If you do not understand these risks, do not trade.</p>
    </div>

    <div className="space-y-4">
      <h3 className="text-xl font-black font-orbitron text-white">1. No Investment Advice</h3>
      <p>RadiantvaultOTC provides OTC crypto trading services only. We do NOT provide:</p>
      <ul className="list-disc pl-6 space-y-2 text-gray-400">
        <li>Investment advice</li>
        <li>Financial advice</li>
        <li>Tax advice</li>
        <li>Trading recommendations</li>
      </ul>
      <p>Users are responsible for their own decisions.</p>
    </div>

    <div className="space-y-4">
      <h3 className="text-xl font-black font-orbitron text-white">2. Price Volatility Risk</h3>
      <p>Cryptocurrency prices are highly volatile. Prices can rise or fall rapidly due to:</p>
      <ul className="list-disc pl-6 space-y-2 text-gray-400">
        <li>Market demand</li>
        <li>Global events</li>
        <li>Regulatory announcements</li>
        <li>Exchange liquidity</li>
      </ul>
      <p>You may lose part or all of your funds.</p>
    </div>

    <div className="space-y-4">
      <h3 className="text-xl font-black font-orbitron text-white">3. Regulatory Risk in India</h3>
      <p>Cryptocurrency regulations in India may change at any time. Possible risks include:</p>
      <ul className="list-disc pl-6 space-y-2 text-gray-400">
        <li>New government restrictions</li>
        <li>Banking limitations</li>
        <li>Additional taxes</li>
        <li>Trading bans</li>
      </ul>
      <p>Radiantvault Ventures Private Limited is not responsible for losses due to regulatory changes.</p>
    </div>

    <div className="space-y-4">
      <h3 className="text-xl font-black font-orbitron text-white">4. Banking Risks</h3>
      <p>Banks in India may delay or reject crypto-related transactions. Possible issues:</p>
      <ul className="list-disc pl-6 space-y-2 text-gray-400">
        <li>Payment reversal</li>
        <li>Account freeze</li>
        <li>Transaction failure</li>
        <li>Bank investigation</li>
      </ul>
      <p>Users are responsible for resolving bank issues.</p>
    </div>

    <div className="space-y-4">
      <h3 className="text-xl font-black font-orbitron text-white">5. Chargeback Risks</h3>
      <p>If a payment is reversed after crypto release:</p>
      <ul className="list-disc pl-6 space-y-2 text-gray-400">
        <li>User must resolve the dispute</li>
        <li>User must obtain NOC from Law Enforcement Agency</li>
        <li>All recovery costs must be reimbursed</li>
      </ul>
      <p>Legal action may be taken against fraudulent chargebacks.</p>
    </div>

    <div className="space-y-4">
      <h3 className="text-xl font-black font-orbitron text-white">6. Binance Platform Risk</h3>
      <p>RadiantvaultOTC trades through Binance P2P escrow. Risks may include:</p>
      <ul className="list-disc pl-6 space-y-2 text-gray-400">
        <li>Binance system downtime</li>
        <li>Escrow delays</li>
        <li>Platform policy changes</li>
        <li>Binance account restrictions</li>
      </ul>
      <p>Radiantvault Ventures Private Limited is not responsible for Binance platform issues.</p>
    </div>

    <div className="space-y-4">
      <h3 className="text-xl font-black font-orbitron text-white">7. Cybersecurity Risk</h3>
      <p>Cryptocurrency accounts may be targeted by hackers. Risks include:</p>
      <ul className="list-disc pl-6 space-y-2 text-gray-400">
        <li>Phishing attacks</li>
        <li>Malware</li>
        <li>Password theft</li>
        <li>SIM swap fraud</li>
      </ul>
      <p>Users must secure their accounts with strong passwords and 2FA.</p>
    </div>

    <div className="space-y-4">
      <h3 className="text-xl font-black font-orbitron text-white">8. Blockchain Risks</h3>
      <p>Blockchain transactions may be delayed due to:</p>
      <ul className="list-disc pl-6 space-y-2 text-gray-400">
        <li>Network congestion</li>
        <li>High fees</li>
        <li>Technical issues</li>
      </ul>
      <p>Crypto transfers are irreversible. RadiantvaultOTC cannot recover wrongly sent crypto.</p>
    </div>

    <div className="space-y-4">
      <h3 className="text-xl font-black font-orbitron text-white">9. Third-Party Payment Risk</h3>
      <p>We only accept same-name bank payments. If user pays from third-party account:</p>
      <ul className="list-disc pl-6 space-y-2 text-gray-400">
        <li>Trade may be cancelled</li>
        <li>Funds may be blocked</li>
        <li>Legal issues may arise</li>
      </ul>
      <p>User is responsible.</p>
    </div>

    <div className="space-y-4">
      <h3 className="text-xl font-black font-orbitron text-white">10. Taxation Risk</h3>
      <p>Crypto transactions in India may be subject to:</p>
      <ul className="list-disc pl-6 space-y-2 text-gray-400">
        <li>30% tax on gains</li>
        <li>1% TDS</li>
        <li>Additional reporting requirements</li>
      </ul>
      <p>Users must consult their tax advisor. RadiantvaultOTC does not provide tax advice.</p>
    </div>

    <div className="space-y-4">
      <h3 className="text-xl font-black font-orbitron text-white">11. Liquidity Risk</h3>
      <p>At times, sufficient crypto or fiat liquidity may not be available. This may cause:</p>
      <ul className="list-disc pl-6 space-y-2 text-gray-400">
        <li>Order delays</li>
        <li>Price slippage</li>
        <li>Trade cancellation</li>
      </ul>
    </div>

    <div className="space-y-4">
      <h3 className="text-xl font-black font-orbitron text-white">12. Technical Risks</h3>
      <p>Website or internet issues may affect trading. Possible issues:</p>
      <ul className="list-disc pl-6 space-y-2 text-gray-400">
        <li>Server downtime</li>
        <li>Connectivity problems</li>
        <li>Software bugs</li>
      </ul>
      <p>RadiantvaultOTC is not liable for technical interruptions beyond our control.</p>
    </div>

    <div className="space-y-4">
      <h3 className="text-xl font-black font-orbitron text-white">13. Loss of Access Risk</h3>
      <p>If you lose access to your email, phone, or Binance account, you may lose trading ability. RadiantvaultOTC cannot recover third-party accounts.</p>
    </div>

    <div className="space-y-4">
      <h3 className="text-xl font-black font-orbitron text-white">14. Legal Risk</h3>
      <p>Crypto trading laws differ by country. Users are responsible for complying with their local laws. Radiantvault Ventures Private Limited may suspend service if required by regulators.</p>
    </div>

    <div className="space-y-4">
      <h3 className="text-xl font-black font-orbitron text-white">15. Acceptance of Risk</h3>
      <p>By trading with RadiantvaultOTC, you confirm:</p>
      <ul className="list-disc pl-6 space-y-2 text-gray-400">
        <li>You understand crypto risks</li>
        <li>You accept financial responsibility</li>
        <li>You are trading voluntarily</li>
      </ul>
    </div>

    <div className="space-y-4">
      <h3 className="text-xl font-black font-orbitron text-white">16. Contact</h3>
      <p>Radiantvault Ventures Private Limited<br />
        Trade Name: RadiantvaultOTC</p>
      <p><span className="text-white font-bold">Email:</span> support@radiantvaultotc.com</p>
      <p><span className="text-white font-bold">Phone:</span> 7829193944</p>
      <p><span className="text-white font-bold">Registered Address:</span> V.NO-24/8/1, SLV Temple Road, Mangammanapalya Bangalore-560068, Karnataka</p>
    </div>

    <div className="mt-8 pt-8 border-t border-white/10 text-center">
      <p className="text-cyan-400 font-orbitron font-black text-sm tracking-widest uppercase">RadiantvaultOTC – Trusted FIU-Compliant Crypto OTC Trading in India</p>
    </div>
  </div>
);
