import Link from "next/link";
import AderaLogo from "@/components/AderaLogo";

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-[#050b08] text-zinc-200">
      {/* Top Header */}
      <header className="border-b border-white/[0.08] bg-[#050b08]/80 backdrop-blur-md sticky top-0 z-40">
        <div className="mx-auto flex max-w-4xl items-center justify-between px-6 py-4">
          <Link href="/" className="flex items-center gap-2.5 group">
            <AderaLogo className="w-6 h-6" variant="badge" />
            <span className="font-bold text-white tracking-tight">
              Adera <span className="text-emerald-400">SMS</span>
            </span>
          </Link>
          <Link
            href="/"
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-zinc-400 hover:text-white transition-colors"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Back to Home
          </Link>
        </div>
      </header>

      {/* Main Terms Document Content */}
      <main className="mx-auto max-w-3xl px-6 py-16">
        <div className="border-b border-white/[0.08] pb-8">
          <span className="text-xs font-bold uppercase tracking-widest text-emerald-400">
            Legal Document
          </span>
          <h1 className="mt-3 text-3xl sm:text-4xl font-black tracking-tight text-white">
            TERMS OF SERVICE
          </h1>
          <div className="mt-3 flex flex-wrap items-center gap-4 text-xs font-mono text-zinc-400">
            <span><strong>Effective Date:</strong> August 1, 2026</span>
            <span>•</span>
            <span><strong>Last Updated:</strong> August 1, 2026</span>
          </div>
        </div>

        <div className="mt-10 space-y-9 text-sm leading-relaxed text-zinc-300">
          <section className="space-y-3">
            <h2 className="text-lg font-bold text-white">1. Introduction and Acceptance</h2>
            <p>
              These Terms of Service (&quot;Terms&quot;) govern the download, installation, and use of Adera SMS (&quot;the Application,&quot; &quot;the App&quot;), developed by Adera SMS (&quot;the Developer,&quot; &quot;we,&quot; &quot;us,&quot; &quot;our&quot;). By installing or using the Application, you (&quot;the User,&quot; &quot;you&quot;) agree to be bound by these Terms. If you do not agree, do not install or use the Application.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-white">2. Definitions</h2>
            <p>
              Terms used in these Terms of Service have the same meaning as defined in the Application&apos;s Privacy Policy, including &quot;Application,&quot; &quot;Device,&quot; &quot;User,&quot; and &quot;Services,&quot; unless otherwise specified here.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-white">3. Eligibility</h2>
            <p>
              You must be legally permitted to use SMS-based communication tools in your jurisdiction, and must comply with any minimum age requirement applicable under local law, to use the Application. By using the Application, you represent that you meet these requirements.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-white">4. License to Use Adera SMS</h2>
            <p>
              Subject to these Terms, the Developer grants you a limited, non-exclusive, non-transferable, revocable license to install and use the Application on a Device you own or control, for your own personal or lawful business purposes.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-white">5. Permitted Use</h2>
            <p>
              You may use Adera SMS to configure and send automated SMS replies to your own missed calls, in accordance with these Terms and applicable law.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-white">6. Prohibited Use</h2>
            <p>
              You agree not to use Adera SMS to: send spam, fraudulent, deceptive, or misleading messages; harass, threaten, or abuse any recipient; violate any applicable telecommunications, consumer protection, or anti-spam law; send messages to numbers without a lawful basis for doing so; circumvent carrier restrictions or attempt to interfere with mobile network operations; or engage in any illegal communication of any kind.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-white">7. User Responsibilities</h2>
            <p>
              You are solely responsible for the content of any message template you configure within the Application, for ensuring your use of the Application complies with applicable law, and for the consequences of any automated message sent through your use of the Application.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-white">8. User-Configured Automated SMS</h2>
            <p>
              Adera SMS sends an automated SMS reply based entirely on message content that you write and configure. The Developer does not review, approve, or control the content of your configured messages, and has no ability to prevent a message from being sent once you have enabled the Application and configured a reply.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-white">9. SMS Sending and Carrier Charges</h2>
            <p>
              Messages sent through Adera SMS use your Device&apos;s own SMS capability and your own mobile carrier connection. Standard carrier or network charges for sending SMS messages may apply, exactly as they would for any other text message you send manually. You are responsible for any such charges.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-white">10. Consent and Respect for Recipients</h2>
            <p>
              You are responsible for ensuring you have an appropriate basis to send an automated reply to anyone who calls the number associated with your Device, and for respecting the communication preferences and applicable rights of message recipients under local law.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-white">11. Spam, Harassment, Abuse, Fraud, and Illegal Communications</h2>
            <p>
              Use of the Application to send spam, harassing, threatening, fraudulent, or otherwise illegal communications is strictly prohibited and is a material breach of these Terms.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-white">12. Misuse of Automated Messaging</h2>
            <p>
              The Developer reserves the right to take appropriate action, including limiting or discontinuing support for the Application to a User, if the Developer becomes aware of misuse of the Application&apos;s automated messaging function in violation of these Terms, to the extent such action is feasible given the Application&apos;s local, on-device operation.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-white">13. Device and Permission Requirements</h2>
            <p>
              The Application requires certain Android permissions, described in the Privacy Policy, to function. If you deny or later revoke a required permission, some or all of the Application&apos;s core functionality will not operate. This is a limitation of the Application&apos;s design and Android&apos;s permission system, not a defect.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-white">14. Third-Party Networks and Services</h2>
            <p>
              The Application depends on your Device&apos;s mobile network and carrier to send SMS messages. The Developer has no control over, and is not responsible for, the availability, reliability, or performance of any third-party mobile network or carrier.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-white">15. Availability of the Application</h2>
            <p>
              The Developer does not guarantee that the Application will be available, uninterrupted, or error-free at all times. The Application is provided on an &quot;as is&quot; and &quot;as available&quot; basis.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-white">16. Updates and Changes to the Application</h2>
            <p>
              The Developer may release updates to the Application from time to time, including bug fixes, new features, or changes to existing functionality. The Application may check for available updates and may, in some circumstances, require you to install an update to continue using certain functionality, as described within the Application itself.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-white">17. Beta/Experimental Features</h2>
            <p>
              Where the Application offers features explicitly labeled as beta, experimental, or early access, such features are provided without warranty and may be changed or removed at any time.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-white">18. Intellectual Property</h2>
            <p>
              The Application, including its name, design, source code, and branding, is the property of the Developer and is protected by applicable intellectual property laws. These Terms do not grant you any ownership interest in the Application.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-white">19. User Content and Message Templates</h2>
            <p>
              You retain ownership of the message templates and text you personally write within the Application. By configuring a message template, you are not granting the Developer any license to that content beyond what is necessary for the Application to function on your own Device, since this content is not transmitted to or stored by the Developer under the Application&apos;s current architecture.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-white">20. Feedback</h2>
            <p>
              If you voluntarily provide feedback, suggestions, or ideas about the Application to the Developer, the Developer may use that feedback to improve the Application without any obligation to you.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-white">21. Privacy</h2>
            <p>
              Your use of the Application is also governed by the Application&apos;s Privacy Policy, which is incorporated into these Terms by reference.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-white">22. Third-Party Services</h2>
            <p>
              The Application may link to optional third-party services, such as an external support or contribution page. Your use of any such third-party service is governed by that service&apos;s own terms, and the Developer is not responsible for third-party services.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-white">23. Disclaimers</h2>
            <p>
              The Application is provided &quot;as is,&quot; without warranties of any kind, express or implied, including but not limited to warranties of merchantability, fitness for a particular purpose, or non-infringement. The Developer does not warrant that the Application will be error-free, that defects will be corrected, or that any SMS message sent through the Application will be successfully delivered.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-white">24. Limitation of Liability</h2>
            <p>
              To the maximum extent permitted by applicable law, the Developer shall not be liable for the content of any user-configured message, a recipient&apos;s reaction to any message sent through the Application, carrier or network failures, incorrect phone numbers entered or stored by the User, messages blocked, delayed, or altered by any carrier, charges imposed by any mobile operator, or misuse of the Application&apos;s automated messaging function by the User. This limitation does not attempt to eliminate liability that cannot lawfully be excluded under applicable law.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-white">25. Indemnification</h2>
            <p>
              You agree to indemnify and hold the Developer harmless from any claim, liability, damage, or expense arising from your use of the Application in violation of these Terms or applicable law, including the content of any message you configure and send.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-white">26. Suspension or Termination</h2>
            <p>
              The Developer may, where technically feasible given the Application&apos;s local operation, limit support or discontinue an update path for a User found to be in material violation of these Terms. You may stop using the Application, and uninstall it, at any time.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-white">27. Effect of Termination</h2>
            <p>
              Upon termination of your use of the Application, the license granted in Section 4 ends. Locally stored data on your Device is handled as described in the Privacy Policy.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-white">28. Changes to These Terms</h2>
            <p>
              The Developer may revise these Terms from time to time. The &quot;Last Updated&quot; date will reflect the most recent revision. Continued use of the Application after a revision constitutes acceptance of the updated Terms.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-white">29. Governing Law</h2>
            <p>
              These Terms shall be governed by the laws of Ethiopia, without regard to its conflict of law principles, except where mandatory local consumer protection law provides otherwise.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-white">30. Dispute Resolution</h2>
            <p>
              Any dispute arising from these Terms or use of the Application shall first be attempted to be resolved informally by contacting the Developer using the information in Section 37.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-white">31. Severability</h2>
            <p>
              If any provision of these Terms is found to be unenforceable, the remaining provisions shall remain in full force and effect.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-white">32. Waiver</h2>
            <p>
              The failure of the Developer to enforce any right or provision of these Terms shall not be considered a waiver of that right or provision.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-white">33. Entire Agreement</h2>
            <p>
              These Terms, together with the Privacy Policy, constitute the entire agreement between you and the Developer regarding the Application, superseding any prior agreements.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-white">34. Assignment</h2>
            <p>
              The Developer may assign these Terms in connection with a transfer of the Application. You may not assign these Terms without the Developer&apos;s prior written consent.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-white">35. Force Majeure</h2>
            <p>
              The Developer shall not be liable for any failure or delay in performance resulting from causes beyond its reasonable control, including network outages, carrier failures, or other events outside its control.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-white">36. Notices</h2>
            <p>
              The Developer may provide notices to you through the Application itself, such as an in-app message or update notification. It is your responsibility to keep the Application updated to receive current notices.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-white">37. Contact Information</h2>
            <p>
              For questions about these Terms, contact:<br />
              <strong>Developer/Owner:</strong> Adera SMS<br />
              <strong>Contact Email:</strong> aderasms@gmail.com
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-white">38. Effective Date / Last Updated</h2>
            <p>
              These Terms are effective as of August 1, 2026 and were last updated on August 1, 2026.
            </p>
          </section>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-white/[0.06] py-8 text-center text-xs text-zinc-500">
        © 2026 Adera. All rights reserved.
      </footer>
    </div>
  );
}
