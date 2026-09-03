import Link from "next/link";
import AderaLogo from "@/components/AderaLogo";

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-white text-slate-700">
      {/* Top Header */}
      <header className="border-b border-slate-200 bg-white/90 backdrop-blur-md sticky top-0 z-40">
        <div className="mx-auto flex max-w-4xl items-center justify-between px-6 py-4">
          <Link href="/" className="flex items-center gap-2.5 group">
            <AderaLogo className="w-6 h-6" variant="badge" />
            <span className="font-bold text-slate-900 tracking-tight">
              Adera <span className="text-emerald-600">SMS</span>
            </span>
          </Link>
          <Link
            href="/"
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-500 hover:text-emerald-600 transition-colors"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Back to Home
          </Link>
        </div>
      </header>

      {/* Main Privacy Document Content */}
      <main className="mx-auto max-w-3xl px-6 py-16">
        <div className="border-b border-slate-200 pb-8">
          <span className="text-xs font-bold uppercase tracking-widest text-emerald-600">
            Legal Document
          </span>
          <h1 className="mt-3 text-3xl sm:text-4xl font-black tracking-tight text-slate-900">
            PRIVACY POLICY
          </h1>
          <div className="mt-3 flex flex-wrap items-center gap-4 text-xs font-mono text-slate-500">
            <span><strong>Effective Date:</strong> August 1, 2026</span>
            <span>•</span>
            <span><strong>Last Updated:</strong> August 1, 2026</span>
          </div>
        </div>

        <div className="mt-10 space-y-10 text-sm leading-relaxed text-slate-600">
          <section className="space-y-3">
            <h2 className="text-xl font-bold text-slate-900">1. Introduction</h2>
            <p>
              Adera SMS (&quot;the Application,&quot; &quot;the App,&quot; &quot;Adera SMS&quot;) is an Android application that automatically sends a user-configured SMS reply when the user misses a phone call. This Privacy Policy explains what information the Application may access, how that information is used, and what happens to it, so that users can make an informed decision about installing and using the Application.
            </p>
            <p>
              This Application is developed and operated by Adera SMS (&quot;the Developer,&quot; &quot;we,&quot; &quot;us,&quot; &quot;our&quot;). Where the Developer&apos;s legal identity as an individual or registered business is not yet established, this Policy uses the placeholder above until that information is finalized.
            </p>
            <p>
              This Privacy Policy applies to the Adera SMS Android application, its associated update mechanism, and any Adera SMS website used to distribute the Application or this Policy. It does not apply to third-party services a user may choose to visit from within the Application, such as an external support or payment page, which are addressed separately in Section 16.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-slate-900">2. Definitions</h2>
            <ul className="list-disc list-inside space-y-1.5 pl-2">
              <li><strong>Application / Adera SMS:</strong> the Android software described in this Policy.</li>
              <li><strong>Device:</strong> the Android smartphone or tablet on which the Application is installed.</li>
              <li><strong>Personal Data / Personal Information:</strong> information that relates to an identified or identifiable individual, including a phone number.</li>
              <li><strong>Call Data:</strong> information related to incoming or missed phone calls on the Device, including the calling number, timestamp, and which SIM received the call, where applicable.</li>
              <li><strong>SMS:</strong> a text message sent through the Device&apos;s standard SMS/text messaging capability.</li>
              <li><strong>User:</strong> the individual who installs, configures, and uses the Application.</li>
              <li><strong>Services:</strong> the functionality provided by the Application, including missed-call detection, automated SMS replies, and related settings.</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-bold text-slate-900">3. Information Adera SMS May Access</h2>
            
            <div className="space-y-2">
              <h3 className="text-base font-bold text-emerald-700">3.1 Phone/Call State Information</h3>
              <p>
                The Application accesses the Device&apos;s phone state to detect when a call is ringing, answered, or ends unanswered. This is necessary for the Application&apos;s core function of detecting a missed call. This information is processed locally on the Device and is not transmitted externally. If this access is denied, the Application cannot detect missed calls and its core function will not work.
              </p>
            </div>

            <div className="space-y-2">
              <h3 className="text-base font-bold text-emerald-700">3.2 Missed-Call Information</h3>
              <p>
                When a call is missed, the Application reads the relevant entry from the Device&apos;s call log to identify the calling number, the timestamp, and, where the Device and Android version support it, the SIM that received the call. This is required to send the automated reply to the correct number from the correct SIM. This information is stored locally on the Device in the Application&apos;s own local activity log so the User can review past activity. It is not transmitted to the Developer or any third party as part of this core function.
              </p>
            </div>

            <div className="space-y-2">
              <h3 className="text-base font-bold text-emerald-700">3.3 Call-Log Information</h3>
              <p>
                The Application reads call log entries specifically to detect missed calls as described above. It does not read, store, or transmit the User&apos;s full historical call log beyond what is needed to detect and log the Application&apos;s own automated replies.
              </p>
            </div>

            <div className="space-y-2">
              <h3 className="text-base font-bold text-emerald-700">3.4 Phone Number Information</h3>
              <p>
                The calling party&apos;s phone number is read from the missed call in order to send the automated SMS reply to that number. The number is stored locally in the Application&apos;s activity log, displayed to the User within the Application, and is not transmitted outside the Device as part of the Application&apos;s core function.
              </p>
            </div>

            <div className="space-y-2">
              <h3 className="text-base font-bold text-emerald-700">3.5 SMS-Related Information</h3>
              <p>
                The Application uses the Device&apos;s SMS sending capability to deliver the User&apos;s configured automated reply message to the number that called. The content of the message is written and controlled entirely by the User. Message content is not transmitted to the Developer or any third party; it is sent directly from the Device to the recipient through the Device&apos;s own mobile network connection, the same way any other text message is sent from the phone.
              </p>
            </div>

            <div className="space-y-2">
              <h3 className="text-base font-bold text-emerald-700">3.6 Device/Application Information</h3>
              <p>
                The Application may access general, non-personal information such as its own installed version number, in order to check for available updates. See Section 4 regarding the INTERNET permission and Section 7 regarding what this check does and does not involve.
              </p>
            </div>

            <div className="space-y-2">
              <h3 className="text-base font-bold text-emerald-700">3.7 Information Provided Voluntarily by the User</h3>
              <p>
                The User may voluntarily enter information into the Application, such as custom reply message templates, quiet hours settings, and, if the optional Contacts permission is granted, may cause the Application to display a caller&apos;s saved contact name rather than only their number. This information is stored locally on the Device.
              </p>
            </div>

            <div className="space-y-2">
              <h3 className="text-base font-bold text-emerald-700">3.8 Information Generated Through Use of the Application</h3>
              <p>
                As the Application is used, it generates a local activity log of missed calls and whether an automated reply was sent successfully. This log is stored locally on the Device for the User&apos;s own reference and is not transmitted externally as part of the Application&apos;s core function.
              </p>
            </div>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-slate-900">4. Android Permissions</h2>
            
            <div className="space-y-2 pl-4 border-l-2 border-emerald-500/30">
              <p><strong>READ_PHONE_STATE:</strong> Used to detect changes in call state, including when a call is missed. Required for the Application&apos;s core function. If denied, the Application cannot detect missed calls.</p>
              <p><strong>READ_CALL_LOG:</strong> Used to identify the number, timestamp, and SIM associated with a missed call, so the correct reply can be sent from the correct SIM. Required for the Application&apos;s core function. If denied, the Application cannot identify who to reply to.</p>
              <p><strong>SEND_SMS:</strong> Used to send the User&apos;s configured automated reply message. Required for the Application&apos;s core function. If denied, the Application cannot send replies.</p>
              <p><strong>INTERNET:</strong> Used only to check for available Application updates by requesting a small, non-personal version information file, and to load an optional external support page if the User chooses to open it. This permission is not used to transmit call data, SMS content, or phone numbers. See Section 7 for further detail.</p>
              <p><strong>RECEIVE_BOOT_COMPLETED:</strong> Used to automatically resume the Application&apos;s missed-call detection service after the Device restarts, if the User has the Application turned on. If denied or restricted by the Device, the Application may need to be manually reopened after a restart for its core function to resume.</p>
              <p><strong>READ_CONTACTS (Optional):</strong> Used only if the User chooses to enable it, to display a caller&apos;s saved contact name instead of only their phone number in the Application&apos;s activity log. This is entirely optional; if not granted, or if a number does not match a saved contact, the Application continues to function normally and simply displays the phone number.</p>
            </div>

            <p className="pt-2">
              Android controls whether each permission is granted, and the User may review or revoke permissions at any time through the Device&apos;s system settings. The Developer does not have independent control over Android&apos;s permission system.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-slate-900">5. How Adera SMS Uses Information</h2>
            <p>
              Information described in Section 3 is used solely to: detect a missed call; determine whether an automated reply should be sent based on the User&apos;s settings, including quiet hours; send the User&apos;s configured reply message; maintain a local activity log for the User&apos;s own reference; and apply the User&apos;s configured settings, such as message templates and language preference. The Developer does not use this information for advertising, does not sell this information, and does not use this information to build user profiles.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-slate-900">6. Automated SMS</h2>
            <p>
              Adera SMS sends an automated SMS reply after a qualifying missed call, based entirely on the User&apos;s own configuration. The User is solely responsible for the content of the message they configure. SMS messages sent by the Application may incur standard carrier or network charges, exactly as any other text message would. The Developer does not control, and cannot guarantee, delivery of any SMS message, since delivery depends on the recipient&apos;s carrier, network conditions, device status, and factors entirely outside the Application&apos;s or Developer&apos;s control. Adera SMS does not control the recipient&apos;s device or their mobile network in any way.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-slate-900">7. Local Processing and Data Storage</h2>
            <p>
              The core functionality of Adera SMS, detecting a missed call and sending a configured reply, is processed entirely locally on the User&apos;s Device. Call data, phone numbers, and message content associated with this core function are not uploaded to any server operated by the Developer.
            </p>
            <p>
              The Application does use Firebase Analytics, Firebase Crashlytics, and Firebase Performance Monitoring, provided by Google, to collect anonymous, non-personal usage information such as whether the app was opened, whether an automated reply was successfully sent, general app performance data, and crash reports if the Application encounters an error. This anonymous usage collection is enabled by default and is not tied to the User&apos;s name, phone number, call data, or message content, which are never included in this data under any circumstance. To the extent the Application processes information locally on the Device, that information remains on the Device unless the User chooses to export or share it themselves, for example through the Device&apos;s own share function.
            </p>
            <p>
              The Application also periodically contacts a public update-check address to determine whether a newer version is available. This request does not include personal information; it checks the Application&apos;s own version number against the latest available version.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-slate-900">8. Data Sharing and Disclosure</h2>
            <p>
              The Developer does not sell User data. The Developer does not share call data, phone numbers, or message content with third parties, mobile carriers, or advertisers. Anonymous usage data described in Section 7 is processed by Google as the provider of Firebase Analytics, Crashlytics, and Performance Monitoring, under Google&apos;s own applicable terms. The Developer may disclose information if required to do so by law, legal process, or a valid governmental request, to the extent such information exists and is within the Developer&apos;s possession.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-slate-900">9. Data Retention</h2>
            <p>
              Locally stored data, including the Application&apos;s activity log and settings, is retained on the Device for as long as the Application remains installed, or until the User deletes it through the Application&apos;s own settings or by clearing Application data through the Device&apos;s system settings. The Developer does not separately retain call data, phone numbers, or message content on any server, as this information is not transmitted to the Developer as part of the Application&apos;s core function.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-slate-900">10. Data Deletion</h2>
            <p>
              Users may delete locally stored activity log entries within the Application, where such a feature is available. Uninstalling the Application removes its locally stored data from the Device, consistent with standard Android application behavior. The Developer is not aware of any external retention of call data, phone numbers, or message content that would survive deletion, as this information is not transmitted to the Developer under the Application&apos;s current architecture.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-slate-900">11. User Rights</h2>
            <p>
              Depending on the User&apos;s jurisdiction, the User may have rights including the right to access, correct, delete, restrict, or object to the processing of their personal information, the right to data portability, the right to withdraw consent, and the right to lodge a complaint with a relevant supervisory authority. Because Adera SMS processes call data and message content locally on the User&apos;s own Device rather than on a server controlled by the Developer, many of these rights are already exercised directly by the User through the Application&apos;s own settings and the Device&apos;s system settings. The exact rights available depend on the User&apos;s specific jurisdiction and applicable law.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-slate-900">12. Children&apos;s Privacy</h2>
            <p>
              Adera SMS is not directed at children and is not designed to knowingly collect personal information from children. The Developer does not knowingly permit use of the Application by children below the age required by applicable local law without appropriate parental or guardian consent. If a parent or guardian believes a child has used the Application in a manner inconsistent with this Policy, they may contact the Developer using the information in Section 18.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-slate-900">13. International Users</h2>
            <p>
              Adera SMS may be used by individuals in various countries, and privacy laws differ by jurisdiction. This Policy is intended to describe the Application&apos;s actual data practices in a manner applicable across jurisdictions, including but not limited to the European Economic Area, the United Kingdom, the United States, and Ethiopia. The Developer does not claim full compliance with any specific regional framework, such as the GDPR or CCPA, but seeks to describe applicable rights and practices accurately for Users in these regions. Users should consult applicable local law for the precise rights available to them.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-slate-900">14. GDPR-Related Information</h2>
            <p>
              For Users located in the European Economic Area or United Kingdom, the Developer, identified in Section 1, acts as the data controller for any personal information processed in connection with the Application, to the limited extent such processing occurs outside the User&apos;s own Device, as described in Section 7. Where a legal basis for processing can reasonably be determined, it is the User&apos;s consent, given through use of the Application and its settings, or the Developer&apos;s legitimate interest in maintaining and improving the Application through anonymous usage and crash data. Data subject rights are described in Section 11. Users in this region may lodge a complaint with their relevant national supervisory authority. The Developer has not designated a formal Data Protection Officer at this time.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-slate-900">15. Security</h2>
            <p>
              The Developer takes reasonable measures appropriate to the nature of the Application to protect information processed by it, including the fact that call data and message content are processed locally on the Device rather than transmitted to a central server, which limits certain categories of risk. However, no method of electronic storage or transmission, including local device storage, can be guaranteed to be completely secure, and the Developer cannot guarantee absolute security.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-slate-900">16. Third-Party Services and Links</h2>
            <p>
              Adera SMS may include a link to an external, optional support page, such as a Ye Buna page, allowing Users to voluntarily support the Application&apos;s development. If a User chooses to visit such a page, that service&apos;s own privacy policy and terms apply to that interaction, and the Developer is not responsible for the practices of that third-party service. The Application does not otherwise integrate advertising networks or third-party data processors beyond Google&apos;s Firebase services described in Section 7.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-slate-900">17. Changes to This Privacy Policy</h2>
            <p>
              The Developer may update this Privacy Policy from time to time to reflect changes in the Application or applicable law. The &quot;Last Updated&quot; date at the top of this Policy will reflect the most recent revision. Continued use of the Application after an update constitutes acceptance of the revised Policy.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-slate-900">18. Contact</h2>
            <p>
              For questions about this Privacy Policy or the Application&apos;s data practices, contact:<br />
              <strong>Developer/Owner:</strong> Adera SMS<br />
              <strong>Privacy Contact Email:</strong> aderasms@gmail.com
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-slate-900">19. Legal Disclaimer</h2>
            <p>
              This Privacy Policy describes the data practices of Adera SMS to the best of the Developer&apos;s knowledge and is provided for informational purposes. It is not a substitute for independent legal advice, and Users or the Developer should consult a qualified legal professional regarding specific legal obligations in their jurisdiction.
            </p>
          </section>

          <section className="space-y-3 rounded-2xl border border-emerald-100 bg-emerald-50/50 p-6">
            <h2 className="text-xl font-bold text-emerald-800">20. Privacy at a Glance</h2>
            <ul className="list-disc list-inside space-y-2 text-slate-700">
              <li>Adera SMS needs access to call and phone state information to detect missed calls, and to SMS sending to reply to them.</li>
              <li>This core function is processed entirely on your Device; your call data, phone numbers, and message content are not uploaded to any server.</li>
              <li>Anonymous, non-personal usage and crash data is collected automatically through Google Firebase to help improve the Application; this never includes your call data, phone numbers, or message content.</li>
              <li>You control your permissions at any time through your Device&apos;s settings.</li>
              <li>Contact name display is optional and only activates if you choose to grant it.</li>
            </ul>
          </section>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-slate-200 py-8 text-center text-xs text-slate-500">
        © 2026 Adera. All rights reserved.
      </footer>
    </div>
  );
}
