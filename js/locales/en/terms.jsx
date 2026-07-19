const { LegalPage, P, UL, h } = window.LegalKit;

const link = (href, text) => h("a", { href, style: { color: "var(--color-primary)" } }, text);
const strong = (...kids) => h("strong", null, ...kids);

const DOC = {
  title: "Terms of Use",
  updated: "July 19, 2026",
  meta: "Effective date: July 19, 2026",
  intro: h(React.Fragment, null,
    P(strong("Service provider: "), "Jules Battaglia, Entrepreneur Individuel (EI), France", h("br"),
      strong("Contact: "), link("mailto:contact@gobilago.com", "contact@gobilago.com")),
    P("These Terms of Use (the ", strong("“Terms”"), ") explain the rules for using the Gobilago mobile application and its related services (together, the ", strong("“App”"), "). They are intended to be clear and fair. If anything in these Terms conflicts with a mandatory consumer right that applies to you, that mandatory right prevails.")),
  sections: [
    { id: "provider", title: "Who provides Gobilago", body: h("div", null,
      P("Gobilago is developed and operated by ", strong("Jules Battaglia, Entrepreneur Individuel (EI)"), ", established in France (", strong("“Gobilago,” “we,” “us,” or “our”"), ")."),
      P("You can contact us at ", strong("contact@gobilago.com"), ".")) },

    { id: "acceptance", title: "Accepting these Terms", body: h("div", null,
      P("By downloading, accessing, or using the App, you agree to these Terms and acknowledge the ", link("privacy.html", "Privacy Policy"), ". If you do not agree, please do not use the App."),
      P("You must be at least ", strong("15 years old"), " to create an account or use online features. If the law where you live requires consent from a parent or legal guardian, you may use those features only with that consent. You must also be legally able to enter into these Terms.")) },

    { id: "what-it-does", title: "What Gobilago does", body: h("div", null,
      P("Gobilago is a learning application based on active recall and spaced repetition. It lets you create and study knowledge content, organise it into collections, track learning progress, and optionally use cloud sync and a public collection Library."),
      P("The App is designed as a study aid. It does not guarantee any particular grade, examination result, memory improvement, professional qualification, or other learning outcome. It is not medical, psychological, or professional advice.")) },

    { id: "licence", title: "Licence to use the App", body: h("div", null,
      P("We grant you a personal, limited, non-exclusive, non-transferable, and revocable licence to use the App for lawful personal or educational purposes, subject to these Terms."),
      P("The App is licensed, not sold. When you obtain it through Apple’s App Store, your use of the application software is also subject to Apple’s applicable usage rules and ", link("https://www.apple.com/legal/internet-services/itunes/dev/stdeula/", "Standard End User Licence Agreement"), ". These Terms govern Gobilago’s accounts, cloud services, public Library, user content, and other services in addition to that software licence."),
      P("You may not sell, sublicense, redistribute, copy, modify, reverse-engineer, or attempt to extract the source code of the App, except where applicable law expressly permits it or where an open-source licence allows it.")) },

    { id: "accounts", title: "Accounts and guest use", body: h("div", null,
      P("Some features may be used without a registered account. Features such as cloud sync, account recovery, or publishing to the Library may require an account."),
      P("You agree to provide accurate account information, keep your login credentials reasonably secure, and tell us promptly if you believe your account has been compromised. You are responsible for activity performed through your account unless it resulted from our failure to protect the service appropriately."),
      P("You may delete your account through the App. The handling and deletion of account data is described in the Privacy Policy.")) },

    { id: "private-content", title: "Your private learning content", body: h("div", null,
      P("You retain ownership of the original content you create, including collections, text, images, drawings, annotations, and study structures (", strong("“User Content”"), ")."),
      P("When you use optional cloud sync, you give us a limited licence to host, copy, process, and transmit your private User Content only as reasonably necessary to provide sync, backup, account, and support functions. This licence ends when the relevant cloud content is deleted, subject to reasonable technical deletion periods described in the Privacy Policy."),
      P("You are responsible for keeping copies of content that is important to you. Although we take reasonable care, no local device or cloud service can guarantee that data will never be lost.")) },

    { id: "library", title: "Publishing to the public Library", body: h("div", null,
      P("Publishing a collection is optional. When you publish User Content to the public Library, you grant us a non-exclusive, worldwide, royalty-free licence to host, reproduce, format, display, make available, and distribute that content within Gobilago. You also allow other users to download and use it for their personal learning."),
      P("This licence exists only so that we can operate and improve the Library. It does not transfer ownership of your content to us, and it does not allow us to sell your published collection as our own product."),
      P("You can unpublish content. Unpublishing removes it from new public discovery, but copies already downloaded to another user’s device may remain available to that user. The Privacy Policy explains how server copies and downloaded collections are handled."),
      P("By publishing content, you confirm that:"),
      UL([
        "You created it or have the necessary permission to publish it;",
        "It does not infringe copyright, privacy, publicity, trademark, or other rights;",
        "It does not contain unlawful, deceptive, hateful, threatening, sexually exploitative, or malicious material;",
        "It does not expose another person’s sensitive or private information without permission; and",
        "Its title and description reasonably represent what the collection contains."
      ]),
      P("We may review, limit visibility of, reject, or remove public content when reasonably necessary to enforce these Terms, comply with law, protect users, or maintain the quality and safety of the Library. Where appropriate, you may contact us to ask why action was taken or request reconsideration."),
      P("Library content is created by users. We do not endorse it or guarantee that it is complete, accurate, safe, or suitable for a particular course or examination.")) },

    { id: "acceptable-use", title: "Acceptable use", body: h("div", null,
      P("Please use Gobilago respectfully and lawfully. You must not:"),
      UL([
        "Access another person’s account or private data without permission;",
        "Interfere with, overload, probe, or bypass the App’s security or technical limits;",
        "Upload malware, spam, fraudulent material, or unlawful content;",
        "Harass, threaten, impersonate, or exploit another person;",
        "Scrape or bulk-copy the public Library through automated means without permission;",
        "Use Gobilago or another user’s content in a way that infringes intellectual-property rights; or",
        "Use the App to break applicable law."
      ]),
      P("Reasonable interoperability, security research, and reverse engineering that cannot lawfully be restricted are not prohibited by these Terms.")) },

    { id: "payments", title: "Free access and optional support payments", body: h("div", null,
      P("Gobilago is currently free to use. The App may invite you to make an ", strong("optional, one-time support payment"), " through Apple’s in-app purchase system."),
      P("A support payment:"),
      UL([
        "Is entirely voluntary;",
        "Does not unlock a feature, digital item, priority treatment, or guaranteed future service;",
        "Is not a subscription and does not renew automatically; and",
        "Does not change your rights under these Terms."
      ]),
      P("Apple processes the transaction and displays the price before you confirm it. Billing, cancellation, and refund requests are handled under Apple’s rules and applicable law. You can request help with an Apple purchase through ", link("https://reportaproblem.apple.com/", "reportaproblem.apple.com"), "."),
      P("We may offer optional paid or freemium features in the future. If we do, we will clearly show the price, functionality, billing period, renewal terms, and any additional conditions before you purchase. A previous support payment will never be converted into a subscription, and no recurring charge will begin without your express confirmation through the applicable store.")) },

    { id: "notifications", title: "Notifications and device permissions", body: h("div", null,
      P("The App may ask for permission to send study reminders or use other device features. These permissions are optional unless clearly required for a feature you choose. You can change them in your device settings. Notifications are reminders only; delivery time is not guaranteed because it may depend on your device and operating system.")) },

    { id: "privacy", title: "Privacy", body: h("div", null,
      P("Our ", link("privacy.html", "Privacy Policy"), " explains what personal data we process, why we process it, how long we keep it, and your rights. Cloud sync is optional, and the App is designed to keep study data on your device unless you enable online features or publish content.")) },

    { id: "third-parties", title: "Third-party services", body: h("div", null,
      P("The App relies on third-party services for functions such as App Store distribution and payments, authentication, and optional cloud infrastructure. Those providers may apply their own terms and privacy policies. We are responsible for choosing and integrating our providers with reasonable care, but we do not control services operated independently by third parties.")) },

    { id: "intellectual-property", title: "Our intellectual property", body: h("div", null,
      P("Except for User Content and third-party or open-source materials, Gobilago’s software, branding, visual design, text, and original assets belong to Jules Battaglia and are protected by applicable intellectual-property law."),
      P("These Terms do not grant permission to use the Gobilago name, logo, or branding outside ordinary use of the App.")) },

    { id: "availability", title: "Availability and changes to the App", body: h("div", null,
      P("We aim to keep Gobilago reliable, but we cannot promise uninterrupted or error-free availability. We may fix, update, add, remove, or discontinue features for technical, security, legal, or product reasons."),
      P("We will try to give reasonable notice when a change materially affects an online feature or your ability to access cloud content. Features may behave differently across devices or operating-system versions.")) },

    { id: "termination", title: "Suspension and termination", body: h("div", null,
      P("You may stop using the App or delete your account at any time."),
      P("We may restrict or suspend an account or remove public content when we reasonably believe these Terms have been materially or repeatedly breached, when necessary to protect the service or other users, or when required by law. Except in urgent safety, security, or legal situations, we will aim to provide notice and a reasonable explanation."),
      P("Termination does not take away rights that already arose under applicable law. Sections that logically need to continue—such as ownership, licences for downloaded public content, liability, and dispute provisions—remain effective after termination.")) },

    { id: "warranties", title: "Warranties and responsibility", body: h("div", null,
      P("We provide the App with reasonable care and skill. However, Gobilago is offered on an ", strong("“as available”"), " basis, and we cannot promise that every feature will always be uninterrupted, error-free, or compatible with every device."),
      P("Nothing in these Terms excludes or limits rights or remedies that cannot legally be excluded, including mandatory consumer guarantees. Nothing excludes liability for fraud, intentional misconduct, gross negligence, death or personal injury caused by negligence, or any other liability that applicable law does not allow us to exclude."),
      P("To the extent permitted by law, we are not responsible for:"),
      UL([
        "Losses that were not reasonably foreseeable when you accepted these Terms;",
        "Business or professional losses resulting from personal use of the App;",
        "Problems caused solely by your device, internet provider, unauthorised account use, or a third-party service outside our reasonable control; or",
        "Learning outcomes or decisions made solely in reliance on user-created Library content."
      ]),
      P("If our failure to use reasonable care causes you a foreseeable loss, these Terms do not prevent you from seeking the remedies available under applicable law.")) },

    { id: "term-changes", title: "Changes to these Terms", body: h("div", null,
      P("We may update these Terms to reflect changes to the App, law, security requirements, or our business model. We will update the effective date and, for material changes, provide reasonable notice through the App, our website, or email where practicable."),
      P("Changes apply prospectively. If applicable law requires your express agreement to a material change, we will ask for it. If you do not accept revised Terms, you may stop using the affected service and delete your account.")) },

    { id: "disputes", title: "Governing law and disputes", body: h("div", null,
      P("These Terms are governed by French law. If you live elsewhere, you also retain any mandatory consumer protections provided by the law of your country of residence. Nothing in these Terms forces you to bring a consumer claim before a court that does not have jurisdiction under applicable law."),
      P("Please contact ", strong("contact@gobilago.com"), " first so that we can try to resolve a concern informally.")) },

    { id: "general", title: "General provisions", body: h("div", null,
      P("If a court finds one part of these Terms unenforceable, the remaining provisions continue to apply. A delay in enforcing a right is not a waiver of that right. We may not transfer our obligations in a way that reduces your mandatory consumer rights without your consent."),
      P("These Terms and the Privacy Policy form the agreement concerning Gobilago’s services. Apple’s applicable terms continue to govern your use of the App Store and Apple’s software-distribution and payment services."),
      P("If these Terms are translated, the English version controls only to the extent permitted by applicable law. Mandatory protections applicable to a translated local version remain unaffected.")) },

    { id: "contact", title: "Contact", body: h("div", null,
      P("Questions, complaints, moderation requests, or notices concerning these Terms can be sent to:"),
      P(strong("Jules Battaglia — Entrepreneur Individuel (EI)"), h("br"),
        strong("Email: "), link("mailto:contact@gobilago.com", "contact@gobilago.com"))) }
  ]
};

ReactDOM.createRoot(document.getElementById("root")).render(h(LegalPage, { doc: DOC }));
setTimeout(() => window.lucide && window.lucide.createIcons(), 60);
