
import React, { useState } from 'react';
import { APP_CONFIG } from '../constants';

export const FAQPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const faqs = [
    { q: "What is RadiantvaultOTC?", a: "RadiantvaultOTC is an OTC crypto trading service operated by Radiantvault Ventures Private Limited, a verified Binance P2P Pro Merchant offering FIU-compliant crypto trading in India." },
    { q: "How does trading with RadiantvaultOTC work?", a: "1. Register on our website\n2. Complete KYC verification\n3. Place order\n4. Redirect to our Binance P2P ad\n5. Pay via Binance escrow\n6. Crypto released after confirmation" },
    { q: "Why should I trade with RadiantvaultOTC?", a: "• Verified Binance Pro Merchant\n• FIU-compliant trading\n• Fast execution\n• Multiple payment options\n• Secure escrow through Binance" },
    { q: "Do you provide investment advice?", a: "No. RadiantvaultOTC does not provide financial or investment advice." },

    // KYC VERIFICATION
    { q: "Is KYC mandatory?", a: "Yes. We do not trade without full KYC verification." },
    { q: "What documents are required for KYC?", a: "• Aadhaar Card (Front & Back)\n• PAN Card\n• Selfie holding Aadhaar\n• Liveness verification\n• Active mobile number" },
    { q: "Why do you need KYC?", a: "To comply with FIU-IND AML rules and prevent fraud, scams, and chargebacks." },
    { q: "How long does KYC approval take?", a: "Usually within a few hours to 24 hours depending on document clarity." },
    { q: "Is my KYC data safe?", a: "Yes. We store KYC data encrypted and securely according to Indian IT Act guidelines." },

    // BINANCE TRADING
    { q: "Why am I redirected to Binance?", a: "All trades are executed through Binance escrow for safety and transparency." },
    { q: "Can I pay outside Binance?", a: "No. Never send money outside Binance order chat unless officially instructed." },
    { q: "Do I need a Binance account?", a: "Yes. You must have a verified Binance account to trade with us." },
    { q: "What if Binance is down?", a: "Trades may be delayed. RadiantvaultOTC is not responsible for Binance platform issues." },

    // PAYMENTS
    { q: "What payment methods do you accept?", a: "UPI, IMPS, RTGS, NEFT, Bank Transfer." },
    { q: "Can I pay from someone else’s bank account?", a: "No. Third-party payments are strictly prohibited." },
    { q: "Why same-name payment is required?", a: "To prevent fraud and comply with AML regulations." },
    { q: "What happens if I send from wrong account?", a: "Trade may be cancelled and funds may be held until verification." },

    // CHARGEBACK & FRAUD
    { q: "What is a chargeback?", a: "When a user reverses payment after receiving crypto." },
    { q: "What happens if I do chargeback?", a: "You must resolve it immediately, provide NOC from LEA, and reimburse all losses and legal costs.\nLegal action may be taken." },
    { q: "Why such strict chargeback rules?", a: "Because crypto is irreversible and fraud protection is necessary." },

    // FEES
    { q: "Do you charge fees?", a: "Our trading margin is included in price. Additional legal or bank charges may apply in disputes." },
    { q: "Are there hidden charges?", a: "No hidden charges. All costs are shown before trade." },

    // REFUNDS
    { q: "Can I cancel my order?", a: "Yes, before payment is made." },
    { q: "Can I get refund after crypto is released?", a: "No. Crypto transactions are final." },
    { q: "What if I paid but didn’t get crypto?", a: "Contact support immediately with proof of payment." },

    // TAXES
    { q: "Do I have to pay crypto tax in India?", a: "Yes. Crypto gains may be taxed at 30% and 1% TDS may apply. Consult your CA." },
    { q: "Do you deduct TDS?", a: "Depends on regulations and trade structure. Users are responsible for tax compliance." },

    // SECURITY
    { q: "How do you protect users?", a: "• SSL encryption\n• OTP login\n• Fraud monitoring\n• Secure servers\n• Binance escrow" },
    { q: "Can my account be hacked?", a: "Use strong password and 2FA. Never share OTP." },
    { q: "Do you store crypto?", a: "No. Crypto is handled through Binance escrow." },

    // COMPLIANCE
    { q: "Are you FIU compliant?", a: "Yes. Radiantvault Ventures Private Limited follows FIU-IND AML rules." },
    { q: "Do you report suspicious transactions?", a: "Yes, when legally required." },
    { q: "Can you reject my trade?", a: "Yes, if suspicious activity is detected." },

    // ACCOUNT
    { q: "Can my account be banned?", a: "Yes, for fake KYC, fraud, abuse, or chargebacks." },
    { q: "Can I delete my account?", a: "Yes, subject to legal record-keeping requirements." },

    // SUPPORT
    { q: "How do I contact RadiantvaultOTC?", a: "Email: support@radiantvaultotc.com\nPhone: [Insert Number]" },
    { q: "What are support hours?", a: "24×7 trading support." },

    // LEGAL
    { q: "What laws apply?", a: "All disputes are subject to courts in Karnataka, India." },
    { q: "Do you share my data?", a: "Only with banks, Binance, FIU-IND, or law enforcement when legally required." },
    { q: "Where can I read your policies?", a: "Check footer links for Terms, Privacy Policy, AML Policy, Risk Disclosure, etc." }
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
            <div className="p-6 pt-0 text-gray-400 text-sm leading-relaxed font-medium border-t border-white/5 bg-black/20 whitespace-pre-line">
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

export const PolicyPage: React.FC<{ title: string; centerHeading?: string; content: React.ReactNode }> = ({ title, centerHeading, content }) => (
  <div className="max-w-4xl mx-auto py-24 px-4">
    {centerHeading && (
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-black font-orbitron tracking-tighter uppercase">{centerHeading}</h1>
      </div>
    )}
    <div className="glass-card p-10 md:p-16 rounded-[3rem] border-white/5">
      <h2 className="text-3xl font-black font-orbitron mb-12 text-white uppercase tracking-tighter">{title}</h2>
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

export const CookiePolicyContent = () => (
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

export const ChargebackPolicyContent = () => (
  <div className="space-y-10 text-sm md:text-base">
    <div className="space-y-4">
      <p className="text-cyan-400 font-bold uppercase text-xs tracking-widest">Last Updated: 10-OCT-2025</p>
      <p>This Chargeback & Payment Dispute Agreement applies to all users trading with RadiantvaultOTC, operated by Radiantvault Ventures Private Limited.</p>
      <p>By trading with us, you agree to these terms. This agreement is legally binding.</p>
    </div>

    <div className="space-y-4">
      <h3 className="text-xl font-black font-orbitron text-white">1. Definition of Chargeback</h3>
      <p>A chargeback or payment dispute includes:</p>
      <ul className="list-disc pl-6 space-y-2 text-gray-400">
        <li>Bank reversal request</li>
        <li>UPI dispute</li>
        <li>IMPS/RTGS reversal</li>
        <li>Payment fraud complaint</li>
        <li>Unauthorized transaction claim</li>
      </ul>
      <p>after crypto has been released.</p>
    </div>

    <div className="space-y-4">
      <h3 className="text-xl font-black font-orbitron text-white">2. Same-Name Payment Rule</h3>
      <p>Users must pay only from their own bank account matching their KYC name. Third-party payments are strictly prohibited.</p>
      <p>If third-party payment is used:</p>
      <ul className="list-disc pl-6 space-y-2 text-gray-400">
        <li>Trade may be cancelled</li>
        <li>Funds may be frozen</li>
        <li>Legal action may be taken</li>
      </ul>
    </div>

    <div className="space-y-4">
      <h3 className="text-xl font-black font-orbitron text-white">3. Chargeback After Crypto Release</h3>
      <p>If a user initiates chargeback after receiving crypto, the user must immediately:</p>
      <ol className="list-decimal pl-6 space-y-2 text-gray-400">
        <li>Inform RadiantvaultOTC</li>
        <li>Contact their bank</li>
        <li>Withdraw the complaint</li>
        <li>Provide written confirmation</li>
      </ol>
      <p>Failure to cooperate will result in legal action.</p>
    </div>

    <div className="space-y-4">
      <h3 className="text-xl font-black font-orbitron text-white">4. Mandatory NOC Requirement</h3>
      <p>User must obtain an official No Objection Certificate (NOC) from the Law Enforcement Agency or bank confirming that:</p>
      <ul className="list-disc pl-6 space-y-2 text-gray-400">
        <li>Complaint has been withdrawn</li>
        <li>No fraud claim exists</li>
      </ul>
      <p>This NOC must be sent to our bank and Radiantvault Ventures Private Limited.</p>
    </div>

    <div className="space-y-4">
      <h3 className="text-xl font-black font-orbitron text-white">5. Liability for Losses</h3>
      <p>If chargeback causes loss to Radiantvault Ventures Private Limited, the user agrees to pay:</p>
      <ul className="list-disc pl-6 space-y-2 text-gray-400">
        <li>Crypto value loss</li>
        <li>Bank penalties</li>
        <li>Legal fees</li>
        <li>Investigation costs</li>
        <li>Compliance costs</li>
        <li>Recovery expenses</li>
      </ul>
      <p>Payment must be made within 7 days of notice.</p>
    </div>

    <div className="space-y-4">
      <h3 className="text-xl font-black font-orbitron text-white">6. Legal Action</h3>
      <p>Radiantvault Ventures Private Limited may take legal action under:</p>
      <ul className="list-disc pl-6 space-y-2 text-gray-400">
        <li>Indian Penal Code</li>
        <li>IT Act 2000</li>
        <li>PMLA</li>
        <li>Banking fraud laws</li>
      </ul>
      <p>We may file FIR or civil recovery suit. User KYC and transaction details may be shared with banks and law enforcement.</p>
    </div>

    <div className="space-y-4">
      <h3 className="text-xl font-black font-orbitron text-white">7. Account Blacklisting</h3>
      <p>Users involved in chargebacks will be:</p>
      <ul className="list-disc pl-6 space-y-2 text-gray-400">
        <li>Permanently banned</li>
        <li>Reported to exchanges</li>
        <li>Added to internal blacklist</li>
      </ul>
      <p>Future trades will be denied.</p>
    </div>

    <div className="space-y-4">
      <h3 className="text-xl font-black font-orbitron text-white">8. False Fraud Claims</h3>
      <p>If user falsely claims payment fraud after receiving crypto, it will be treated as criminal fraud.</p>
      <p>Radiantvault Ventures Private Limited reserves right to recover damages.</p>
    </div>

    <div className="space-y-4">
      <h3 className="text-xl font-black font-orbitron text-white">9. Dispute Resolution Process</h3>
      <p>If payment dispute occurs:</p>
      <ol className="list-decimal pl-6 space-y-2 text-gray-400">
        <li>User must contact support within 24 hours</li>
        <li>Provide transaction proof</li>
        <li>Cooperate with bank investigation</li>
        <li>Follow instructions from RadiantvaultOTC</li>
      </ol>
      <p>Failure may lead to account suspension.</p>
    </div>

    <div className="space-y-4">
      <h3 className="text-xl font-black font-orbitron text-white">10. No Responsibility for User Bank Issues</h3>
      <p>RadiantvaultOTC is not responsible for:</p>
      <ul className="list-disc pl-6 space-y-2 text-gray-400">
        <li>User bank restrictions</li>
        <li>Frozen accounts</li>
        <li>Payment delays</li>
      </ul>
      <p>User must resolve bank issues themselves.</p>
    </div>

    <div className="space-y-4">
      <h3 className="text-xl font-black font-orbitron text-white">11. Acceptance of Agreement</h3>
      <p>By trading with RadiantvaultOTC, you confirm:</p>
      <ul className="list-disc pl-6 space-y-2 text-gray-400">
        <li>You will not initiate fraudulent chargebacks</li>
        <li>You understand legal consequences</li>
        <li>You agree to reimburse losses</li>
      </ul>
    </div>

    <div className="space-y-4">
      <h3 className="text-xl font-black font-orbitron text-white">12. Jurisdiction</h3>
      <p>All disputes are subject to courts in Bangalore, Karnataka, India.</p>
    </div>

    <div className="space-y-4">
      <h3 className="text-xl font-black font-orbitron text-white">13. Contact</h3>
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

export const RefundPolicyContent = () => (
  <div className="space-y-10 text-sm md:text-base">
    <div className="space-y-4">
      <p className="text-cyan-400 font-bold uppercase text-xs tracking-widest">Last Updated: 10-OCT-2025</p>
      <p>This Refund & Cancellation Policy applies to all users trading with RadiantvaultOTC, operated by Radiantvault Ventures Private Limited.</p>
      <p>Cryptocurrency transactions are irreversible. Please read this policy carefully before trading.</p>
      <p>By using our services, you agree to this policy.</p>
    </div>

    <div className="space-y-4">
      <h3 className="text-xl font-black font-orbitron text-white">1. Nature of Crypto Transactions</h3>
      <p>Cryptocurrency trades executed through RadiantvaultOTC and Binance P2P escrow are final.</p>
      <p>Once crypto is released to the buyer, the transaction cannot be reversed.</p>
      <p>Refunds are only possible in limited situations described below.</p>
    </div>

    <div className="space-y-4">
      <h3 className="text-xl font-black font-orbitron text-white">2. Order Cancellation Before Payment</h3>
      <p>A user may cancel an order if:</p>
      <ul className="list-disc pl-6 space-y-2 text-gray-400">
        <li>Payment has not been made</li>
        <li>Binance order is still open</li>
        <li>No funds have been received</li>
      </ul>
      <p>Repeated cancellations may lead to account restrictions.</p>
    </div>

    <div className="space-y-4">
      <h3 className="text-xl font-black font-orbitron text-white">3. Payment Made but Crypto Not Released</h3>
      <p>If payment is made and crypto has not yet been released:</p>
      <p>User must:</p>
      <ol className="list-decimal pl-6 space-y-2 text-gray-400">
        <li>Contact RadiantvaultOTC support immediately</li>
        <li>Provide proof of payment</li>
        <li>Follow Binance dispute process</li>
      </ol>
      <p>If payment is confirmed, crypto will be released or payment refunded.</p>
    </div>

    <div className="space-y-4">
      <h3 className="text-xl font-black font-orbitron text-white">4. Payment Sent Incorrectly</h3>
      <p>If user sends payment:</p>
      <ul className="list-disc pl-6 space-y-2 text-gray-400">
        <li>To wrong account</li>
        <li>From third-party account</li>
        <li>Without Binance order</li>
        <li>Without correct reference</li>
      </ul>
      <p>RadiantvaultOTC will try to assist but does not guarantee recovery. Any recovery charges will be borne by the user.</p>
    </div>

    <div className="space-y-4">
      <h3 className="text-xl font-black font-orbitron text-white">5. Refunds After Crypto Release</h3>
      <p>Refunds are NOT allowed after crypto has been released, except in cases of proven technical error caused by RadiantvaultOTC.</p>
      <p>Price changes or user mistakes are not valid refund reasons.</p>
    </div>

    <div className="space-y-4">
      <h3 className="text-xl font-black font-orbitron text-white">6. Chargebacks Are Not Refunds</h3>
      <p>Initiating bank or UPI chargeback after receiving crypto is considered fraud.</p>
      <p>Users must follow the Chargeback Agreement and resolve disputes immediately.</p>
      <p>Legal action may be taken.</p>
    </div>

    <div className="space-y-4">
      <h3 className="text-xl font-black font-orbitron text-white">7. Third-Party Payment Restrictions</h3>
      <p>Payments must be made only from same-name bank account.</p>
      <p>If third-party payment is used:</p>
      <ul className="list-disc pl-6 space-y-2 text-gray-400">
        <li>Trade may be cancelled</li>
        <li>Refund may be delayed</li>
        <li>Funds may be frozen until verification</li>
      </ul>
      <p>RadiantvaultOTC is not responsible for bank delays.</p>
    </div>

    <div className="space-y-4">
      <h3 className="text-xl font-black font-orbitron text-white">8. Failed or Rejected Transactions</h3>
      <p>Refunds may be issued if:</p>
      <ul className="list-disc pl-6 space-y-2 text-gray-400">
        <li>Payment fails</li>
        <li>Duplicate payment received</li>
        <li>Trade cannot be completed</li>
      </ul>
      <p>Refunds will be sent to the original bank account within a reasonable time. Bank charges may be deducted.</p>
    </div>

    <div className="space-y-4">
      <h3 className="text-xl font-black font-orbitron text-white">9. Fees & Charges</h3>
      <p>Refunds may deduct:</p>
      <ul className="list-disc pl-6 space-y-2 text-gray-400">
        <li>Bank charges</li>
        <li>Payment gateway fees</li>
        <li>Compliance verification costs</li>
        <li>Legal processing fees</li>
      </ul>
    </div>

    <div className="space-y-4">
      <h3 className="text-xl font-black font-orbitron text-white">10. Fraud or Suspicious Activity</h3>
      <p>If fraud is suspected:</p>
      <ul className="list-disc pl-6 space-y-2 text-gray-400">
        <li>Refunds may be withheld</li>
        <li>Account may be frozen</li>
        <li>Case may be reported to authorities</li>
      </ul>
      <p>Funds may be returned only after investigation.</p>
    </div>

    <div className="space-y-4">
      <h3 className="text-xl font-black font-orbitron text-white">11. Processing Time</h3>
      <p>Refund processing depends on banks and payment networks. Typical time:</p>
      <ul className="list-disc pl-6 space-y-2 text-gray-400">
        <li>UPI / IMPS: 1–3 working days</li>
        <li>NEFT / RTGS: 2–5 working days</li>
      </ul>
      <p>Delays beyond our control are not our responsibility.</p>
    </div>

    <div className="space-y-4">
      <h3 className="text-xl font-black font-orbitron text-white">12. How to Request Refund</h3>
      <p>Contact:</p>
      <p>Radiantvault Ventures Private Limited<br />
        Trade Name: RadiantvaultOTC<br />
        <span className="text-white font-bold">Email:</span> support@radiantvaultotc.com<br />
        <span className="text-white font-bold">Phone:</span> 7829193944</p>
      <p>Provide:</p>
      <ul className="list-disc pl-6 space-y-2 text-gray-400">
        <li>Binance Order ID</li>
        <li>Payment Proof</li>
        <li>Registered Phone Number</li>
      </ul>
    </div>

    <div className="space-y-4">
      <h3 className="text-xl font-black font-orbitron text-white">13. Policy Updates</h3>
      <p>RadiantvaultOTC may update this policy anytime. Continued use means acceptance.</p>
    </div>

    <div className="space-y-4">
      <h3 className="text-xl font-black font-orbitron text-white">14. Contact</h3>
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

export const FIUComplianceContent = () => (
  <div className="space-y-10 text-sm md:text-base">
    <div className="space-y-4">
      <h2 className="text-2xl font-black font-orbitron text-white">FIU Compliance Statement</h2>
      <p className="text-cyan-400 font-bold uppercase text-xs tracking-widest">Last Updated: 10-OCT-2025</p>
    </div>

    <div className="space-y-4">
      <h3 className="text-xl font-black font-orbitron text-white">1. Introduction</h3>
      <p>RadiantvaultOTC is operated by Radiantvault Ventures Private Limited, an OTC cryptocurrency trading service committed to complying with Indian financial regulations and anti-money laundering requirements.</p>
      <p>We follow applicable laws including:</p>
      <ul className="list-disc pl-6 space-y-2 text-gray-400">
        <li>Prevention of Money Laundering Act (PMLA)</li>
        <li>Financial Intelligence Unit – India (FIU-IND) reporting requirements</li>
        <li>Information Technology Act, 2000</li>
        <li>FATF AML/CFT Guidelines</li>
      </ul>
      <p>Our objective is to provide safe, transparent, and compliant crypto trading services in India.</p>
    </div>

    <div className="space-y-4">
      <h3 className="text-xl font-black font-orbitron text-white">2. FIU Compliance Commitment</h3>
      <p>Radiantvault Ventures Private Limited maintains internal systems and policies to:</p>
      <ul className="list-disc pl-6 space-y-2 text-gray-400">
        <li>Identify customers through KYC verification</li>
        <li>Monitor transactions for suspicious activity</li>
        <li>Maintain transaction records</li>
        <li>Report suspicious transactions when required</li>
        <li>Prevent fraud and financial crime</li>
      </ul>
      <p>We cooperate fully with FIU-IND and law enforcement agencies.</p>
    </div>

    <div className="space-y-4">
      <h3 className="text-xl font-black font-orbitron text-white">3. Customer Due Diligence (CDD)</h3>
      <p>All customers must complete full KYC verification before trading.</p>
      <p>Required documents include:</p>
      <ul className="list-disc pl-6 space-y-2 text-gray-400">
        <li>Aadhaar Card</li>
        <li>PAN Card</li>
        <li>Selfie Verification</li>
        <li>Liveness Check</li>
        <li>Active Mobile Number</li>
      </ul>
      <p>Enhanced Due Diligence may be required for high-value or high-risk users.</p>
    </div>

    <div className="space-y-4">
      <h3 className="text-xl font-black font-orbitron text-white">4. Transaction Monitoring</h3>
      <p>RadiantvaultOTC monitors trading activity for:</p>
      <ul className="list-disc pl-6 space-y-2 text-gray-400">
        <li>Unusual transaction patterns</li>
        <li>Multiple account activity</li>
        <li>Chargeback risk</li>
        <li>Fraud indicators</li>
        <li>Sanctioned or restricted entities</li>
      </ul>
      <p>Suspicious transactions may be paused or rejected.</p>
    </div>

    <div className="space-y-4">
      <h3 className="text-xl font-black font-orbitron text-white">5. Reporting Obligations</h3>
      <p>Radiantvault Ventures Private Limited may report transactions to FIU-IND when legally required.</p>
      <p>We may also share information with:</p>
      <ul className="list-disc pl-6 space-y-2 text-gray-400">
        <li>Banks</li>
        <li>Payment providers</li>
        <li>Binance (for trade verification)</li>
        <li>Law enforcement agencies</li>
      </ul>
      <p>Users may not be notified where disclosure is legally mandated.</p>
    </div>

    <div className="space-y-4">
      <h3 className="text-xl font-black font-orbitron text-white">6. Record Retention</h3>
      <p>We maintain records of:</p>
      <ul className="list-disc pl-6 space-y-2 text-gray-400">
        <li>KYC documents</li>
        <li>Transaction details</li>
        <li>Communication logs</li>
        <li>IP and device logs</li>
      </ul>
      <p>Records are retained for the period required under Indian law and FIU-IND guidelines.</p>
    </div>

    <div className="space-y-4">
      <h3 className="text-xl font-black font-orbitron text-white">7. Employee Compliance &amp; Training</h3>
      <p>RadiantvaultOTC employees receive AML compliance training and must:</p>
      <ul className="list-disc pl-6 space-y-2 text-gray-400">
        <li>Follow internal AML procedures</li>
        <li>Report suspicious activity</li>
        <li>Maintain confidentiality</li>
      </ul>
    </div>

    <div className="space-y-4">
      <h3 className="text-xl font-black font-orbitron text-white">8. Risk-Based Approach</h3>
      <p>RadiantvaultOTC applies a risk-based approach to identify high-risk users including:</p>
      <ul className="list-disc pl-6 space-y-2 text-gray-400">
        <li>High-volume traders</li>
        <li>Unusual transaction patterns</li>
        <li>Politically Exposed Persons (PEPs)</li>
        <li>Users from restricted regions</li>
      </ul>
      <p>Additional verification may be required.</p>
    </div>

    <div className="space-y-4">
      <h3 className="text-xl font-black font-orbitron text-white">9. Prohibited Activities</h3>
      <p>RadiantvaultOTC does NOT support transactions related to:</p>
      <ul className="list-disc pl-6 space-y-2 text-gray-400">
        <li>Money laundering</li>
        <li>Terrorist financing</li>
        <li>Fraud or scams</li>
        <li>Illegal goods or services</li>
        <li>Sanctioned individuals or entities</li>
      </ul>
      <p>Accounts involved in such activity will be suspended.</p>
    </div>

    <div className="space-y-4">
      <h3 className="text-xl font-black font-orbitron text-white">10. User Responsibility</h3>
      <p>Users must:</p>
      <ul className="list-disc pl-6 space-y-2 text-gray-400">
        <li>Provide accurate information</li>
        <li>Use same-name bank account</li>
        <li>Avoid third-party payments</li>
        <li>Cooperate with compliance checks</li>
      </ul>
      <p>Failure may result in account suspension or reporting.</p>
    </div>

    <div className="space-y-4">
      <h3 className="text-xl font-black font-orbitron text-white">11. Cooperation with Authorities</h3>
      <p>Radiantvault Ventures Private Limited cooperates fully with:</p>
      <ul className="list-disc pl-6 space-y-2 text-gray-400">
        <li>FIU-IND</li>
        <li>Law Enforcement Agencies</li>
        <li>Banks</li>
        <li>Courts</li>
      </ul>
      <p>We may provide user information when legally required.</p>
    </div>

    <div className="space-y-4">
      <h3 className="text-xl font-black font-orbitron text-white">12. Contact</h3>
      <p>Radiantvault Ventures Private Limited<br />
        Trade Name: RadiantvaultOTC<br />
        <span className="text-white font-bold">Email:</span> support@radiantvaultotc.com<br />
        <span className="text-white font-bold">Phone:</span> 7829193944<br />
        <span className="text-white font-bold">Registered Address:</span> V.NO-24/8/1, SLV Temple Road, Mangammanapalya Bangalore-560068, Karnataka</p>
    </div>

    <div className="mt-8 pt-8 border-t border-white/10 text-center">
      <p className="text-cyan-400 font-orbitron font-black text-sm tracking-widest uppercase">RadiantvaultOTC – Trusted FIU-Compliant Crypto OTC Trading in India</p>
    </div>
  </div>
);

export const WebsiteDisclaimerContent = () => (
  <div className="space-y-10 text-sm md:text-base">
    <div className="space-y-4">
      <h2 className="text-2xl font-black font-orbitron text-white">Website Disclaimer</h2>
      <p className="text-cyan-400 font-bold uppercase text-xs tracking-widest">Last Updated: 10-OCT-2025</p>
    </div>

    <div className="space-y-4">
      <h3 className="text-xl font-black font-orbitron text-white">1. General Information</h3>
      <p>The information provided on this website is for general informational purposes only.</p>
      <p>This website is operated by Radiantvault Ventures Private Limited, trading as RadiantvaultOTC, an OTC cryptocurrency trading service.</p>
      <p>By using this website, you agree to this Disclaimer.</p>
    </div>

    <div className="space-y-4">
      <h3 className="text-xl font-black font-orbitron text-white">2. No Investment Advice</h3>
      <p>RadiantvaultOTC does NOT provide:</p>
      <ul className="list-disc pl-6 space-y-2 text-gray-400">
        <li>Investment advice</li>
        <li>Financial advice</li>
        <li>Trading recommendations</li>
        <li>Tax advice</li>
      </ul>
      <p>All trading decisions are made solely by the user.</p>
      <p>Users should consult financial and tax advisors before trading cryptocurrency.</p>
    </div>

    <div className="space-y-4">
      <h3 className="text-xl font-black font-orbitron text-white">3. Cryptocurrency Risk</h3>
      <p>Cryptocurrency trading is highly risky.</p>
      <p>Prices are volatile and may change rapidly.</p>
      <p>Users may lose part or all of their funds.</p>
      <p>Radiantvault Ventures Private Limited is not responsible for trading losses.</p>
    </div>

    <div className="space-y-4">
      <h3 className="text-xl font-black font-orbitron text-white">4. Regulatory Disclaimer</h3>
      <p>Cryptocurrency laws in India and other countries may change at any time.</p>
      <p>Users are responsible for understanding and complying with local laws.</p>
      <p>RadiantvaultOTC is not liable for losses due to regulatory changes.</p>
    </div>

    <div className="space-y-4">
      <h3 className="text-xl font-black font-orbitron text-white">5. Binance Platform Disclaimer</h3>
      <p>RadiantvaultOTC trades are executed through Binance P2P escrow.</p>
      <p>We are not responsible for:</p>
      <ul className="list-disc pl-6 space-y-2 text-gray-400">
        <li>Binance system downtime</li>
        <li>Binance account restrictions</li>
        <li>Binance policy changes</li>
        <li>Binance platform errors</li>
      </ul>
      <p>Users must follow Binance terms separately.</p>
    </div>

    <div className="space-y-4">
      <h3 className="text-xl font-black font-orbitron text-white">6. Payment &amp; Banking Disclaimer</h3>
      <p>Banks may delay or block crypto-related payments.</p>
      <p>Radiantvault Ventures Private Limited is not responsible for:</p>
      <ul className="list-disc pl-6 space-y-2 text-gray-400">
        <li>Bank restrictions</li>
        <li>Payment failures</li>
        <li>Frozen accounts</li>
        <li>Chargeback investigations</li>
      </ul>
      <p>Users must resolve bank issues themselves.</p>
    </div>

    <div className="space-y-4">
      <h3 className="text-xl font-black font-orbitron text-white">7. Accuracy of Information</h3>
      <p>We try to keep website information accurate and updated.</p>
      <p>However, we do not guarantee:</p>
      <ul className="list-disc pl-6 space-y-2 text-gray-400">
        <li>Completeness</li>
        <li>Accuracy</li>
        <li>Timeliness</li>
      </ul>
      <p>Information may change without notice.</p>
    </div>

    <div className="space-y-4">
      <h3 className="text-xl font-black font-orbitron text-white">8. Third-Party Links</h3>
      <p>Our website may contain links to third-party websites such as Binance or payment providers.</p>
      <p>We are not responsible for their content, policies, or services.</p>
      <p>Users should review third-party policies separately.</p>
    </div>

    <div className="space-y-4">
      <h3 className="text-xl font-black font-orbitron text-white">9. Technical Disclaimer</h3>
      <p>We do not guarantee uninterrupted website operation.</p>
      <p>Issues may occur due to:</p>
      <ul className="list-disc pl-6 space-y-2 text-gray-400">
        <li>Internet failures</li>
        <li>Server downtime</li>
        <li>Cyber attacks</li>
        <li>Software bugs</li>
      </ul>
      <p>RadiantvaultOTC is not liable for losses caused by technical problems beyond our control.</p>
    </div>

    <div className="space-y-4">
      <h3 className="text-xl font-black font-orbitron text-white">10. Limitation of Liability</h3>
      <p>To the maximum extent permitted by law, Radiantvault Ventures Private Limited is not liable for:</p>
      <ul className="list-disc pl-6 space-y-2 text-gray-400">
        <li>Trading losses</li>
        <li>Missed profits</li>
        <li>Technical issues</li>
        <li>Bank problems</li>
        <li>Third-party service failures</li>
      </ul>
      <p>Our liability is limited to the amount of the trade involved.</p>
    </div>

    <div className="space-y-4">
      <h3 className="text-xl font-black font-orbitron text-white">11. User Responsibility</h3>
      <p>Users must:</p>
      <ul className="list-disc pl-6 space-y-2 text-gray-400">
        <li>Provide correct KYC information</li>
        <li>Use own bank account</li>
        <li>Follow AML rules</li>
        <li>Keep login credentials secure</li>
      </ul>
      <p>Failure may result in account suspension.</p>
    </div>

    <div className="space-y-4">
      <h3 className="text-xl font-black font-orbitron text-white">12. Intellectual Property</h3>
      <p>All website content, logo, and design belong to Radiantvault Ventures Private Limited.</p>
      <p>Unauthorized copying is prohibited.</p>
    </div>

    <div className="space-y-4">
      <h3 className="text-xl font-black font-orbitron text-white">13. Jurisdiction</h3>
      <p>All disputes are subject to courts in Bangalore, Karnataka, India.</p>
    </div>

    <div className="space-y-4">
      <h3 className="text-xl font-black font-orbitron text-white">14. Updates</h3>
      <p>This Disclaimer may be updated anytime.</p>
      <p>Continued use of the website means acceptance of changes.</p>
    </div>

    <div className="space-y-4">
      <h3 className="text-xl font-black font-orbitron text-white">15. Contact</h3>
      <p>Radiantvault Ventures Private Limited<br />
        Trade Name: RadiantvaultOTC<br />
        <span className="text-white font-bold">Email:</span> support@radiantvaultotc.com<br />
        <span className="text-white font-bold">Phone:</span> 7829193944<br />
        <span className="text-white font-bold">Registered Address:</span> V.NO-24/8/1, SLV Temple Road, Mangammanapalya Bangalore-560068, Karnataka</p>
    </div>

    <div className="mt-8 pt-8 border-t border-white/10 text-center">
      <p className="text-cyan-400 font-orbitron font-black text-sm tracking-widest uppercase">RadiantvaultOTC – Trusted FIU-Compliant Crypto OTC Trading in India</p>
    </div>
  </div>
);

export const ContactUsContent = () => (
  <div className="space-y-10 text-sm md:text-base">
    <div className="space-y-4">
      <h2 className="text-2xl font-black font-orbitron text-white">Contact Us</h2>
      <p>If you have questions about our services, policies, or need assistance with a trade, our support team is available to help.</p>
    </div>

    <div className="space-y-4">
      <h3 className="text-xl font-black font-orbitron text-white">Customer Support</h3>
      <p>For general inquiries, trade assistance, or compliance questions, please contact us through the following channels:</p>
      <p><span className="text-white font-bold">Email:</span> support@radiantvaultotc.com</p>
      <p><span className="text-white font-bold">Phone:</span> +91 7829193944</p>
      <p>We aim to respond to all support requests within a reasonable timeframe.</p>
    </div>

    <div className="space-y-4">
      <h3 className="text-xl font-black font-orbitron text-white">Registered Office</h3>
      <p>Radiantvault Ventures Private Limited<br />
        V.NO-24/8/1, SLV Temple Road<br />
        Mangammanapalya, Bangalore – 560068<br />
        Karnataka, India</p>
    </div>

    <div className="space-y-4">
      <h3 className="text-xl font-black font-orbitron text-white">Business Information</h3>
      <p><span className="text-white font-bold">Trade Name:</span> RadiantvaultOTC<br />
        <span className="text-white font-bold">Operating Entity:</span> Radiantvault Ventures Private Limited</p>
      <p>For legal, compliance, or regulatory matters, please contact us via email with full details so our team can assist appropriately.</p>
    </div>

    <div className="mt-8 pt-8 border-t border-white/10 text-center">
      <p className="text-cyan-400 font-orbitron font-black text-sm tracking-widest uppercase">RadiantvaultOTC – Trusted FIU-Compliant Crypto OTC Trading in India</p>
    </div>
  </div>
);
