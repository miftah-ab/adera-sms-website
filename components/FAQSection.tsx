"use client";

import { useState } from"react";

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question:"How does Adera SMS work?",
      answer:
"Adera SMS runs as a lightweight service on your Android phone. When an incoming call ends without being answered, Adera detects the missed call event, reads the caller's number, and dispatches your pre-configured text message through your phone's standard mobile network carrier.",
    },
    {
      question:"What happens when I miss a call?",
      answer:
"Within seconds of a missed call being recorded by Android, Adera's local engine triggers an automated SMS response to that caller. The event is recorded in your local in-app activity log so you have full visibility of all outgoing replies.",
    },
    {
      question:"Can I customize the message?",
      answer:
"Yes. You have complete control over the wording of your automated SMS reply. You can craft any message template you want, whether formal, casual, or business-oriented.",
    },
    {
      question:"Does Adera send the message automatically?",
      answer:
"Yes. Once you toggle Auto Reply on in the app settings, Adera handles the response entirely in the background without needing you to manually confirm or unlock your phone.",
    },
    {
      question:"Does Adera need internet?",
      answer:
"No. Missed-call detection and SMS sending work entirely offline via your device's cellular network. Internet connectivity is only used to check for newer app version updates and optional telemetry.",
    },
    {
      question:"Does Adera store my calls or messages?",
      answer:
"All call data, phone numbers, and reply logs are stored locally on your device. Nothing is uploaded to any external server operated by Adera. Your messages and personal information remain strictly under your control.",
    },
    {
      question:"Which Android versions are supported?",
      answer:
"Adera SMS supports Android 8.0 (Oreo) and above, up through Android 14 and 15, ensuring compatibility with modern Android permission architectures and multi-SIM devices.",
    },
    {
      question:"How do I install Adera?",
      answer:
"Download the official Android APK directly from this website. Tap the downloaded file in your notifications or downloads folder, grant installation permission if prompted, open Adera SMS, and turn on Auto Reply.",
    },
  ];

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="faq" className="relative bg-white py-24 lg:py-32 border-t border-slate-200 overflow-hidden transition-colors duration-250">
      <div className="relative z-10 mx-auto max-w-4xl px-6 lg:px-8">

        {/* Header */}
        <div className="text-center max-w-2xl mx-auto">
          <p className="text-xs font-bold uppercase tracking-widest text-emerald-600">
            Frequently Asked Questions
          </p>
          <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-slate-900">
            Questions, answered.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600">
            Clear, honest details about how Adera operates on your Android device.
          </p>
        </div>

        {/* Accordion list */}
        <div className="mt-14 space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={faq.question}
                className={`rounded-2xl border transition-all duration-200 overflow-hidden ${
                  isOpen
                    ?"border-emerald-500/40 bg-emerald-50/50"
                    :"border-slate-200 bg-slate-50 hover:border-slate-300"
                }`}
              >
                <button
                  type="button"
                  onClick={() => toggle(idx)}
                  className="flex w-full items-center justify-between p-6 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400 cursor-pointer"
                  aria-expanded={isOpen}
                >
                  <span className="text-base sm:text-lg font-bold text-slate-900 pr-4">
                    {faq.question}
                  </span>
                  <div
                    className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full transition-transform duration-200 ${
                      isOpen
                        ?"bg-emerald-600 text-white rotate-180"
                        :"bg-slate-200/60 text-slate-500"
                    }`}
                  >
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 pt-1 text-sm sm:text-base leading-relaxed text-slate-700 border-t border-slate-100 animate-in fade-in duration-150">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
