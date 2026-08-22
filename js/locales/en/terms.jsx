const { LegalPage, P, UL, h } = window.LegalKit;

const link = (href, text) => h("a", { href, style: { color: "var(--color-primary)" } }, text);
const strong = (...kids) => h("strong", null, ...kids);

const DOC = {
  title: "Terms of Use",
  updated: "July 24, 2026",
  meta: "Effective date: July 24, 2026",
  intro: h(React.Fragment, null,
    P(strong("Service provider: "), "Jules Battaglia, Entrepreneur Individuel (EI), France", h("br"),
      strong("Contact: "), link("mailto:contact@gobilago.com", "contact@gobilago.com")),
    P("These Terms of Use (the ", strong("“Terms”"), ") explain the rules for using the Gobilago mobile application and its related services (together, the ", strong("“App”"), "). They are intended to be clear and fair. If anything in these Terms conflicts with a mandatory consumer right that applies to you, that mandatory right prevails.")),
  sections: [
    { id: "provider", title: "Who provides Gobilago", body: h("div", null,
      P("Gobilago is developed and operated by ", strong("Jules Battaglia, Entrepreneur Individuel (EI)"), ", established in France (", strong("“Gobilago,” “we,” “us,” or “our”"), ")."),
      P("The provider’s statutory identification and postal contact details are published separately in Gobilago’s Legal Notice. These details form part of the pre-contract information available to you before a purchase, without being repeated in these service Terms."),
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
      P("The core local learning experience may be used as a guest without providing an email address. A registered, non-anonymous Gobilago account is required to purchase or restore Premium, use Premium cloud sync, recover cloud content, and publish collections."),
      P("Premium is linked to the registered account used for the purchase. You must be connected to the internet to create or sign in to an account and complete a purchase, restore, or Founder claim. Your local learning content remains available offline."),
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

    { id: "payments", title: "Free and Premium access", body: h("div", null,
      h("h3", null, "9.1 Free access"),
      P("Free access includes the complete local-first learning loop: creating and studying personal content, the core spaced-repetition system, offline access, local study history and streaks, and downloading public collections. A Free registered account may have up to ", strong("three active published collections"), " at one time."),

      h("h3", null, "9.2 Premium benefits"),
      P("Premium adds account continuity and scale, including multi-device private-content cloud sync and recovery and unlimited active public collections. Cloud sync remains optional and does not replace your responsibility to keep local access to content that is important to you."),
      P("If Premium expires while more than three of your collections are already published, those existing publications are not automatically removed. You may update, correct, unpublish, or delete them, but you cannot publish another collection until you are within the Free allowance or regain Premium."),

      h("h3", null, "9.3 Available products"),
      P("Depending on your country, eligibility, and the current RevenueCat offering, Gobilago may offer:"),
      UL([
        "A monthly auto-renewable subscription;",
        "An annual auto-renewable subscription;",
        "A one-time lifetime Premium purchase;",
        "A free or discounted introductory trial for an eligible subscription; and",
        "A promotional Founder lifetime grant during a limited campaign."
      ]),
      P("The paywall and Apple’s purchase confirmation show the product available to you, its current local price and taxes, billing period, trial duration and eligibility, and the benefits included. Those purchase-specific details control if they differ from general descriptions in these Terms."),

      h("h3", null, "9.4 Auto-renewable subscriptions and trials"),
      P("Monthly and annual subscriptions renew automatically for the same period unless cancelled through your Apple Account before the renewal deadline displayed by Apple. Apple charges your Apple Account and manages billing. Cancelling auto-renewal does not immediately remove Premium; access continues until the end of the paid or trial period shown by Apple and RevenueCat."),
      P("If an eligible subscription starts with a free or discounted trial, it converts to the paid auto-renewable subscription shown at confirmation unless you cancel before the trial ends in accordance with Apple’s instructions. Trial eligibility and availability are determined by Apple and may vary by account or region."),
      P("You can view or cancel a subscription from Gobilago’s purchase-management entry point or in your Apple Account subscription settings. Deleting the App or your Gobilago account ", strong("does not cancel an Apple subscription"), "."),

      h("h3", null, "9.5 Lifetime Premium"),
      P("A lifetime purchase is a non-consumable, one-time purchase and does not renew. “Lifetime” means Premium access for the lifetime of the Gobilago service, without recurring charges. It does not guarantee that Gobilago will operate forever or that every feature will remain unchanged indefinitely. Mandatory consumer rights and any access already purchased remain protected by applicable law."),

      h("h3", null, "9.6 Founder lifetime Premium"),
      P("During a server-controlled Founder campaign, an eligible registered account that signs in or is created during the displayed campaign window may receive an account-bound, non-renewing lifetime Premium grant at no charge. It has no cash value and cannot be transferred through Restore Purchases."),
      P("Founder Premium does not expire merely because the campaign ends. We may revoke it only where reasonably necessary because it was obtained through fraud, a technical exploit, a material error, or a serious or repeated breach of these Terms. Where appropriate, we will provide notice and an opportunity to contact us."),

      h("h3", null, "9.7 Purchase restoration and account transfer"),
      P("Purchases require a registered Gobilago account. Restore Purchases asks Apple and RevenueCat to validate eligible App Store purchases for the account currently signed in."),
      P("If the same Apple purchase was linked to another registered Gobilago account, restoring it may transfer Premium to the current account and remove Premium from the previous account. Private learning content is not transferred or merged between accounts. Founder promotional grants are account-bound and are not transferred by Restore Purchases."),

      h("h3", null, "9.8 Refunds"),
      P("Apple processes App Store payments and refund requests. Gobilago does not receive your full payment-card details and cannot issue an App Store refund directly. You may request a refund through ", link("https://reportaproblem.apple.com/", "reportaproblem.apple.com"), " or another Apple channel available in your country. Nothing in these Terms limits mandatory refund, conformity, withdrawal, or other consumer rights."),

      h("h3", null, "9.9 Premium expiry and cloud retention"),
      P("When a subscription is cancelled, Premium continues until its recorded expiry date. When Premium actually expires:"),
      UL([
        "Ordinary private-content cloud sync stops;",
        "Your local content remains available indefinitely on that device unless you delete it or uninstall the App;",
        h("span", null, "The last Premium cloud copy is retained for ", strong("12 months"), " after expiry;"),
        "During that period, the App may provide limited read-only recovery of the retained copy; and",
        "Unless you resubscribe or delete the cloud copy earlier, the retained private backup is scheduled for deletion after that period."
      ]),
      P("You may separately request deletion of cloud data without cancelling a subscription. Resubscribing during retention resumes Premium sync under the App’s conflict and recovery rules.")) },

    { id: "notifications", title: "Notifications and device permissions", body: h("div", null,
      P("The App may ask for permission to send study reminders or use other device features. These permissions are optional unless clearly required for a feature you choose. You can change them in your device settings. Notifications are reminders only; delivery time is not guaranteed because it may depend on your device and operating system.")) },

    { id: "privacy", title: "Privacy", body: h("div", null,
      P("Our ", link("privacy.html", "Privacy Policy"), " explains what personal data we process, why we process it, how long we keep it, and your rights. Premium cloud sync is optional, and the App is designed to keep study content on your device unless you enable an online feature or publish content.")) },

    { id: "third-parties", title: "Third-party services", body: h("div", null,
      P("The App relies on Apple for App Store distribution and payment processing, RevenueCat for purchase and entitlement management, Supabase for authentication and optional cloud services, and Apple or Google when you choose their sign-in method. Those providers apply their own terms and privacy policies."),
      P("You must comply with applicable third-party terms when using the App, including Apple’s App Store and Media Services terms. We are responsible for choosing and integrating our providers with reasonable care, but we do not control services operated independently by those providers.")) },

    { id: "intellectual-property", title: "Our intellectual property", body: h("div", null,
      P("Except for User Content and third-party or open-source materials, Gobilago’s software, branding, visual design, text, and original assets belong to Jules Battaglia and are protected by applicable intellectual-property law."),
      P("These Terms do not grant permission to use the Gobilago name, logo, or branding outside ordinary use of the App.")) },

    { id: "availability", title: "Availability and changes to the App", body: h("div", null,
      P("We aim to keep Gobilago reliable, but we cannot promise uninterrupted or error-free availability. We may fix, update, add, remove, or discontinue features for technical, security, legal, or product reasons."),
      P("We will try to give reasonable notice when a change materially affects an online feature, a paid benefit, or your ability to access cloud content. We will not use this clause to avoid obligations for paid digital services or to remove access contrary to mandatory law. Features may behave differently across devices or operating-system versions.")) },

    { id: "termination", title: "Suspension and termination", body: h("div", null,
      P("You may stop using the App or delete your account at any time."),
      P("Account deletion is available in Settings. Deleting a registered account removes its server account and associated private cloud content and publications, subject to the deletion periods and limited legal or security retention described in the Privacy Policy. Local study content remains on the device unless you delete it separately or uninstall the App. ", strong("Account deletion does not cancel an Apple subscription."), " Cancel the subscription separately in your Apple Account to prevent future renewal."),
      P("After deletion, an eligible App Store purchase may be restored to a new registered Gobilago account. Restoring purchase access does not recover cloud content deleted with the former account and does not transfer Founder Premium."),
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
      P("Please contact ", strong("contact@gobilago.com"), " first so that we can try to resolve a concern informally."),
      P("If you have not been able to resolve your dispute after sending us a dated written complaint (by post or email) that recalls the circumstances of the dispute and what you are claiming, and you have either received a negative written response from us or no response within two months of sending your complaint, you may refer the matter, free of charge, to the consumer mediator designated below."),
      P("In accordance with Articles L.616-1 and R.616-1 of the French Consumer Code, our company has put in place a consumer-mediation scheme. The mediation entity appointed is: ", strong("SAS MÉDIATION CONSOMMATION DÉVELOPPEMENT"), ". In the event of a dispute, any consumer may file a complaint:"),
      UL([
        h("span", null, "online at: ", link("https://www.medconsodev.eu", "https://www.medconsodev.eu"), "; or"),
        "by post to: MÉDIATION CONSOMMATION DÉVELOPPEMENT — C/O Centre d’Affaires Stéphanois SAS — Immeuble l’Horizon — Esplanade de France — 3 rue J. Constant Milleret — 42000 SAINT-ÉTIENNE, France."
      ]),
      P("This scheme is open to consumers residing in France. Under EU law, it may also be used by consumers residing in another European Union or European Economic Area member state for a cross-border dispute with Gobilago, subject to the mediator’s own admissibility rules. Consumers residing outside the European Union cannot use this scheme; they retain the mandatory protections available under the law of their country of residence, as noted in Section 19."),
      P("The former European Commission Online Dispute Resolution platform was discontinued in 2025 and is therefore not referenced in these Terms.")) },

    { id: "general", title: "General provisions", body: h("div", null,
      P("If a court finds one part of these Terms unenforceable, the remaining provisions continue to apply. A delay in enforcing a right is not a waiver of that right. We may not transfer our obligations in a way that reduces your mandatory consumer rights without your consent."),
      P("These Terms and the Privacy Policy form the agreement concerning Gobilago’s services. Apple’s applicable terms continue to govern your use of the App Store and Apple’s software-distribution and payment services."),
      P("The English and French versions are intended to be substantively equivalent. The French version prevails for consumers in France. Elsewhere, the English version prevails to the extent permitted by law. Any mandatory protection applicable in your country remains unaffected.")) },

    { id: "contact", title: "Contact", body: h("div", null,
      P("Questions, complaints, moderation requests, or notices concerning these Terms can be sent to:"),
      P(strong("Jules Battaglia — Entrepreneur Individuel (EI)"), h("br"),
        strong("Email: "), link("mailto:contact@gobilago.com", "contact@gobilago.com"))) }
  ]
};

ReactDOM.createRoot(document.getElementById("root")).render(h(LegalPage, { doc: DOC }));
setTimeout(() => window.lucide && window.lucide.createIcons(), 60);
