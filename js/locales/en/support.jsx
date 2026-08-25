const { LegalPage, P, UL, Callout, h } = window.LegalKit;

const link = (href, text) => h("a", { href, style: { color: "var(--color-primary)" } }, text);
const strong = (...kids) => h("strong", null, ...kids);
const mail = link("mailto:contact@gobilago.com", "contact@gobilago.com");

const DOC = {
  title: "Gobilago Support",
  updated: "August 26, 2026",
  meta: "Support for the Gobilago iOS app · We read and answer every message",
  intro: h(React.Fragment, null,
    P(strong("Email: "), mail, h("br"),
      strong("Response time: "), "usually within 2 business days", h("br"),
      strong("Language: "), "English or French", h("br"),
      strong("Published by: "), "Jules Battaglia, Entrepreneur Individuel (EI), France"),
    P("This page is the official support channel for ", strong("Gobilago"), ", the offline-first spaced-repetition app for iPhone and iPad. Write to us about anything: a bug, a question about your account or a purchase, a data-privacy request, a piece of Library content you want reviewed, or an idea for a feature you would like to see.")),
  sections: [
    { id: "contact", title: "Contact us", body: h("div", null,
      P("The fastest way to reach a human is email:"),
      P(strong("Email: "), mail),
      P("If the app offers a support or feedback entry in its Settings screen, using it is equally good — it reaches the same inbox."),
      P("To help us answer on the first reply, please include:"),
      UL([
        "Your Gobilago app version and your iOS version;",
        "Your device model (for example iPhone 14, iPad Air);",
        "The email address on your Gobilago account, if the question concerns your account or a purchase;",
        "What you expected to happen and what happened instead;",
        "A screenshot or screen recording, if the issue is visual."
      ]),
      Callout("Please never send us your password. We will never ask you for it, and no message from Gobilago will ever ask you to reply with your login credentials.")) },

    { id: "getting-started", title: "Getting started", body: h("div", null,
      P("Gobilago works offline from the first launch, and you can use the whole local learning loop as a guest — no email address required. Create a collection, add your knowledge content, and start a study session; the scheduler takes over from there."),
      P("You only need a registered account for the online features: cloud sync, recovering your content on a new device, publishing to the public Library, and buying or restoring Premium."),
      P("If the app is not behaving as expected right after installation, the usual first steps are: make sure iOS is up to date, make sure Gobilago is on the latest App Store version, then fully quit and reopen the app. If that does not help, write to us at ", mail, ".")) },

    { id: "studying", title: "Studying and the scheduler", body: h("div", null,
      P("Gobilago is built on active recall and spaced repetition: each item comes back at the moment it is most useful to review, and your answers adjust when it comes back next. Reviews that look “too early” or “too late” are usually the scheduler reacting to a recent lapse or a long streak of correct answers."),
      P("If your study queue looks wrong — items repeating endlessly, a collection that never comes due, progress that seems to reset — tell us the collection name, roughly how many items it contains, and what you are seeing. Scheduling questions are much easier to diagnose with a screenshot of the study screen."),
      P("Gobilago is a study aid. It does not promise a particular grade, exam result, or qualification, and it is not medical or professional advice.")) },

    { id: "account", title: "Account and sign-in", body: h("div", null,
      P("You can sign in with an email address, with Apple, or with Google. An internet connection is required to create an account or sign in; once you are signed in, your local content stays available offline."),
      P("Common account issues:"),
      UL([
        "Not receiving a sign-in or confirmation email — check your spam folder, then confirm the address you typed;",
        "Signing in with the wrong method — an account created with Apple is separate from one created with the same address by email, so use the method you originally chose;",
        "“Hide My Email” with Sign in with Apple — messages we send go to the private relay address Apple generated for you;",
        "A locked or compromised account — write to us immediately and we will help you secure it."
      ]),
      P("You must be at least 15 years old to create an account or use the online features, and older where local law requires parental consent.")) },

    { id: "premium", title: "Premium, purchases and restoring", body: h("div", null,
      P("Free access includes the complete local learning experience: creating and studying your own content, the spaced-repetition scheduler, offline access, study history and streaks, downloading public collections, and up to three active published collections."),
      P("Premium adds multi-device cloud sync and recovery of your private content, plus unlimited active public collections. Depending on your country it may be offered as a monthly or annual subscription, or as a one-time lifetime purchase."),
      h("h3", null, "Restoring a purchase"),
      P("Purchases are tied to a registered Gobilago account. If Premium is not showing after a reinstall or on a new device: sign in to the same Gobilago account, then use ", strong("Restore Purchases"), " in the app’s settings. Make sure you are signed in to the same Apple Account that made the original purchase."),
      P("If the same App Store purchase was previously linked to a different Gobilago account, restoring moves Premium to the account you are signed in to now, and removes it from the previous one. Private learning content is never merged or transferred between accounts."),
      P("If Restore Purchases does not bring back an entitlement you paid for, email us with the date of purchase and the Apple receipt, and we will sort it out.")) },

    { id: "billing", title: "Subscriptions, cancellation and refunds", body: h("div", null,
      P("Apple handles all App Store billing for Gobilago. Subscriptions renew automatically until you cancel them in your Apple Account."),
      h("h3", null, "Cancelling"),
      P("Open ", strong("Settings → Apple Account → Subscriptions"), " on your device, select Gobilago, and cancel. Cancelling stops the next renewal; Premium stays active until the end of the period you already paid for."),
      Callout("Deleting the app or deleting your Gobilago account does not cancel an Apple subscription. Cancel it separately in your Apple Account to stop future renewals."),
      h("h3", null, "Refunds"),
      P("We do not process App Store payments and cannot issue a refund directly. Request one from Apple at ", link("https://reportaproblem.apple.com/", "reportaproblem.apple.com"), ". Your statutory consumer rights — including withdrawal and conformity rights — are unaffected, and you can always write to us if Apple's process does not resolve the matter.")) },

    { id: "sync", title: "Cloud sync and recovering content", body: h("div", null,
      P("Cloud sync is optional and available with Premium. Your study content lives on your device; sync keeps a private copy so you can pick up on another device or restore after losing one."),
      P("If sync seems stuck: confirm you are signed in on both devices, confirm Premium is active, check your network connection, and give the app a moment in the foreground to finish uploading. If two devices edited the same collection offline, the app applies its conflict rules on the next sync."),
      P("When Premium expires, ordinary sync stops but your local content stays on your device. The last cloud copy is retained for 12 months after expiry, and during that window the app can offer limited read-only recovery. After that period the retained backup is scheduled for deletion."),
      P("Please keep your own copies of anything critical. No local device or cloud service can guarantee that data is never lost.")) },

    { id: "library", title: "The public Library", body: h("div", null,
      P("Publishing a collection is entirely optional. Published collections can be downloaded and studied by other people, so only publish content you created or have permission to share, and keep the title and description honest about what is inside."),
      P("You can unpublish at any time. Unpublishing removes a collection from public discovery, but copies already downloaded to someone else's device remain on that device."),
      P("Library content is made by users. We do not endorse it or guarantee it is accurate, complete, or suitable for a particular course or exam.")) },

    { id: "report", title: "Reporting content or a moderation decision", body: h("div", null,
      P("To report a published collection that infringes your rights, exposes private information, or breaks our rules, email ", mail, " with the collection title, the author name shown in the app, and a short description of the problem. Include a link or screenshot if you can."),
      P("If your own collection was hidden or removed and you believe that was a mistake, write to us and we will explain the reason and reconsider where appropriate.")) },

    { id: "notifications", title: "Notifications and reminders", body: h("div", null,
      P("Study reminders are optional. You can turn them on or off inside the app, and at the system level under ", strong("Settings → Notifications → Gobilago"), " on your device."),
      P("Reminders are best-effort: iOS decides exactly when a scheduled notification is delivered, so delivery at a precise minute is not guaranteed — particularly in Low Power Mode or with Focus modes active.")) },

    { id: "bugs", title: "Bugs and feature requests", body: h("div", null,
      P("Bug reports are genuinely welcome, and so are feature ideas — a lot of what is in Gobilago today started as an email from someone using it."),
      P("For a bug, tell us the steps that reproduce it, how often it happens, and your app and iOS versions. For a crash, tell us what you were doing right before it. For a feature request, tell us the problem you are trying to solve rather than the solution you have in mind; it usually leads somewhere better."),
      P("Send both to ", mail, ".")) },

    { id: "privacy", title: "Privacy, your data and account deletion", body: h("div", null,
      P("Gobilago is designed to keep your study content on your device unless you deliberately enable an online feature or publish something. What we process, why, and for how long is described in the ", link("privacy.html", "Privacy Policy"), "."),
      P("You can delete your account yourself from the app’s settings. Deletion removes the server account together with its private cloud content and publications, subject to the deletion periods described in the Privacy Policy. Content stored locally stays on your device until you delete the app or the content itself."),
      P("To exercise a data-protection right — access, correction, erasure, portability, objection — write to ", mail, " from the address on your account, and we will respond within the statutory time limits.")) },

    { id: "accessibility", title: "Accessibility", body: h("div", null,
      P("Gobilago aims to work with the iOS accessibility features you already rely on, including Dynamic Type, VoiceOver, Reduce Motion, and high-contrast settings."),
      P("If something is unreadable, unreachable, or unusable with assistive technology, we treat it as a bug. Tell us which screen and which feature you use, and we will prioritise it.")) },

    { id: "who", title: "Who you are writing to", body: h("div", null,
      P("Gobilago is developed and operated by:"),
      P(strong("Jules Battaglia — Entrepreneur Individuel (EI)"), h("br"),
        "France", h("br"),
        strong("Email: "), mail),
      P("Our postal contact details are published in Gobilago's Legal Notice, and are available on request by email."),
      P("See also the ", link("terms.html", "Terms of Use"), " and the ", link("privacy.html", "Privacy Policy"), ".")) }
  ]
};

ReactDOM.createRoot(document.getElementById("root")).render(h(LegalPage, { doc: DOC }));
setTimeout(() => window.lucide && window.lucide.createIcons(), 60);
