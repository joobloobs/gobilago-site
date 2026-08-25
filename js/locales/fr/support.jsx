const { LegalPage, P, UL, Callout, h } = window.LegalKit;

const link = (href, text) => h("a", { href, style: { color: "var(--color-primary)" } }, text);
const strong = (...kids) => h("strong", null, ...kids);
const mail = link("mailto:contact@gobilago.com", "contact@gobilago.com");

const DOC = {
  title: "Assistance Gobilago",
  updated: "26 août 2026",
  meta: "Assistance pour l’application iOS Gobilago · Nous lisons et répondons à chaque message",
  intro: h(React.Fragment, null,
    P(strong("E-mail : "), mail, h("br"),
      strong("Délai de réponse : "), "généralement sous 2 jours ouvrés", h("br"),
      strong("Langues : "), "français ou anglais", h("br"),
      strong("Éditeur : "), "Jules Battaglia, Entrepreneur Individuel (EI), France"),
    P("Cette page est le canal d’assistance officiel de ", strong("Gobilago"), ", l’application de répétition espacée hors ligne pour iPhone et iPad. Écrivez-nous pour tout sujet : un bug, une question sur votre compte ou un achat, une demande relative à vos données personnelles, un contenu de la bibliothèque publique à signaler, ou une idée de fonctionnalité.")),
  sections: [
    { id: "contact", title: "Nous contacter", body: h("div", null,
      P("Le moyen le plus rapide de joindre une personne réelle est l’e-mail :"),
      P(strong("E-mail : "), mail),
      P("Si l’application propose une entrée d’assistance ou de retour dans ses réglages, elle convient tout aussi bien : elle aboutit à la même boîte de réception."),
      P("Pour que nous puissions répondre dès le premier message, merci d’indiquer :"),
      UL([
        "La version de l’application Gobilago et la version d’iOS que vous utilisez ;",
        "Le modèle de votre appareil (par exemple iPhone 14, iPad Air) ;",
        "L’adresse e-mail de votre compte Gobilago, si la question porte sur votre compte ou un achat ;",
        "Ce que vous attendiez et ce qui s’est produit à la place ;",
        "Une capture d’écran ou un enregistrement d’écran, si le problème est visuel."
      ]),
      Callout("Ne nous envoyez jamais votre mot de passe. Nous ne vous le demanderons jamais, et aucun message de Gobilago ne vous demandera de répondre avec vos identifiants de connexion.")) },

    { id: "getting-started", title: "Premiers pas", body: h("div", null,
      P("Gobilago fonctionne hors ligne dès le premier lancement, et toute la boucle d’apprentissage locale est utilisable en mode invité, sans adresse e-mail. Créez une collection, ajoutez vos contenus, lancez une session : le planificateur prend le relais."),
      P("Un compte enregistré n’est nécessaire que pour les fonctionnalités en ligne : la synchronisation cloud, la récupération de vos contenus sur un nouvel appareil, la publication dans la bibliothèque publique, ainsi que l’achat ou la restauration de Premium."),
      P("Si l’application ne se comporte pas comme prévu juste après l’installation, les premiers réflexes sont : vérifier qu’iOS est à jour, vérifier que Gobilago est dans sa dernière version App Store, puis quitter complètement l’application et la rouvrir. Si cela ne suffit pas, écrivez-nous à ", mail, ".")) },

    { id: "studying", title: "Apprentissage et planificateur", body: h("div", null,
      P("Gobilago repose sur le rappel actif et la répétition espacée : chaque élément revient au moment où sa révision est la plus utile, et vos réponses ajustent la prochaine échéance. Une révision qui paraît « trop tôt » ou « trop tard » traduit généralement la réaction du planificateur à un oubli récent ou à une longue série de bonnes réponses."),
      P("Si votre file de révision semble incorrecte — éléments qui reviennent sans fin, collection qui n’arrive jamais à échéance, progression qui semble se réinitialiser — indiquez-nous le nom de la collection, son nombre approximatif d’éléments et ce que vous observez. Une capture de l’écran d’étude facilite beaucoup le diagnostic."),
      P("Gobilago est une aide à l’apprentissage. L’application ne garantit aucune note, aucun résultat d’examen ni aucune qualification, et ne constitue ni un avis médical ni un conseil professionnel.")) },

    { id: "account", title: "Compte et connexion", body: h("div", null,
      P("Vous pouvez vous connecter avec une adresse e-mail, avec Apple ou avec Google. Une connexion internet est nécessaire pour créer un compte ou se connecter ; une fois connecté, vos contenus locaux restent accessibles hors ligne."),
      P("Problèmes de compte fréquents :"),
      UL([
        "E-mail de connexion ou de confirmation non reçu — vérifiez vos indésirables, puis l’adresse saisie ;",
        "Mauvaise méthode de connexion — un compte créé avec Apple est distinct d’un compte créé par e-mail avec la même adresse : utilisez la méthode choisie à l’origine ;",
        "« Masquer mon adresse e-mail » avec Se connecter avec Apple — nos messages arrivent alors sur l’adresse relais privée générée par Apple ;",
        "Compte bloqué ou compromis — écrivez-nous immédiatement et nous vous aiderons à le sécuriser."
      ]),
      P("Vous devez avoir au moins 15 ans pour créer un compte ou utiliser les fonctionnalités en ligne, et davantage lorsque la loi locale exige le consentement d’un parent ou tuteur.")) },

    { id: "premium", title: "Premium, achats et restauration", body: h("div", null,
      P("L’accès gratuit comprend toute l’expérience d’apprentissage locale : création et étude de vos propres contenus, planificateur de répétition espacée, accès hors ligne, historique et séries d’étude, téléchargement de collections publiques, et jusqu’à trois collections publiées actives."),
      P("Premium ajoute la synchronisation cloud multi-appareils et la récupération de vos contenus privés, ainsi qu’un nombre illimité de collections publiques actives. Selon votre pays, l’offre peut prendre la forme d’un abonnement mensuel ou annuel, ou d’un achat unique à vie."),
      h("h3", null, "Restaurer un achat"),
      P("Les achats sont rattachés à un compte Gobilago enregistré. Si Premium n’apparaît pas après une réinstallation ou sur un nouvel appareil : connectez-vous au même compte Gobilago, puis utilisez ", strong("Restaurer les achats"), " dans les réglages de l’application. Assurez-vous d’être connecté au même compte Apple que celui ayant réalisé l’achat d’origine."),
      P("Si le même achat App Store était auparavant lié à un autre compte Gobilago, la restauration transfère Premium vers le compte actuellement connecté et le retire du compte précédent. Les contenus d’apprentissage privés ne sont jamais fusionnés ni transférés entre comptes."),
      P("Si « Restaurer les achats » ne rétablit pas un accès que vous avez payé, écrivez-nous en indiquant la date d’achat et le reçu Apple : nous réglerons le problème.")) },

    { id: "billing", title: "Abonnements, résiliation et remboursements", body: h("div", null,
      P("Apple gère l’intégralité de la facturation App Store pour Gobilago. Les abonnements se renouvellent automatiquement tant que vous ne les résiliez pas depuis votre compte Apple."),
      h("h3", null, "Résilier"),
      P("Ouvrez ", strong("Réglages → Compte Apple → Abonnements"), " sur votre appareil, sélectionnez Gobilago et résiliez. La résiliation empêche le renouvellement suivant ; Premium reste actif jusqu’à la fin de la période déjà payée."),
      Callout("Supprimer l’application ou supprimer votre compte Gobilago ne résilie pas l’abonnement Apple. Résiliez-le séparément depuis votre compte Apple pour arrêter les renouvellements."),
      h("h3", null, "Remboursements"),
      P("Nous ne traitons pas les paiements App Store et ne pouvons pas rembourser directement. Faites votre demande auprès d’Apple sur ", link("https://reportaproblem.apple.com/", "reportaproblem.apple.com"), ". Vos droits de consommateur — notamment le droit de rétractation et la garantie de conformité — restent entiers, et vous pouvez toujours nous écrire si la procédure d’Apple ne règle pas la situation.")) },

    { id: "sync", title: "Synchronisation cloud et récupération", body: h("div", null,
      P("La synchronisation cloud est optionnelle et incluse avec Premium. Vos contenus vivent sur votre appareil ; la synchronisation en conserve une copie privée afin que vous puissiez reprendre sur un autre appareil ou restaurer après la perte d’un appareil."),
      P("Si la synchronisation semble bloquée : vérifiez que vous êtes connecté sur les deux appareils, que Premium est actif et que le réseau fonctionne, puis laissez l’application quelques instants au premier plan pour terminer l’envoi. Si deux appareils ont modifié la même collection hors ligne, l’application applique ses règles de conflit à la synchronisation suivante."),
      P("À l’expiration de Premium, la synchronisation ordinaire s’arrête mais vos contenus locaux restent sur votre appareil. La dernière copie cloud est conservée pendant 12 mois après l’expiration, période durant laquelle l’application peut proposer une récupération limitée en lecture seule. Passé ce délai, la sauvegarde conservée est programmée pour suppression."),
      P("Conservez vos propres copies de ce qui compte vraiment : aucun appareil ni service cloud ne peut garantir qu’aucune donnée ne sera jamais perdue.")) },

    { id: "library", title: "La bibliothèque publique", body: h("div", null,
      P("Publier une collection est entièrement facultatif. Les collections publiées peuvent être téléchargées et étudiées par d’autres personnes : ne publiez donc que des contenus que vous avez créés ou que vous avez le droit de partager, et veillez à ce que le titre et la description reflètent honnêtement leur contenu."),
      P("Vous pouvez dépublier à tout moment. La dépublication retire la collection de la découverte publique, mais les copies déjà téléchargées sur l’appareil d’une autre personne y restent."),
      P("Les contenus de la bibliothèque sont créés par les utilisateurs. Nous ne les approuvons pas et ne garantissons ni leur exactitude, ni leur exhaustivité, ni leur adéquation à un cours ou un examen donné.")) },

    { id: "report", title: "Signaler un contenu ou contester une décision", body: h("div", null,
      P("Pour signaler une collection publiée qui porte atteinte à vos droits, expose des informations privées ou enfreint nos règles, écrivez à ", mail, " en précisant le titre de la collection, le nom d’auteur affiché dans l’application et une brève description du problème. Joignez un lien ou une capture d’écran si possible."),
      P("Si votre propre collection a été masquée ou retirée et que vous pensez qu’il s’agit d’une erreur, écrivez-nous : nous vous expliquerons le motif et réexaminerons la décision lorsque cela se justifie.")) },

    { id: "notifications", title: "Notifications et rappels", body: h("div", null,
      P("Les rappels d’étude sont optionnels. Vous pouvez les activer ou les désactiver dans l’application, ainsi qu’au niveau du système dans ", strong("Réglages → Notifications → Gobilago"), " sur votre appareil."),
      P("Les rappels sont fournis au mieux : c’est iOS qui décide du moment exact de la remise d’une notification programmée ; une remise à la minute près n’est donc pas garantie, en particulier en mode économie d’énergie ou avec un mode de concentration actif.")) },

    { id: "bugs", title: "Bugs et suggestions", body: h("div", null,
      P("Les rapports de bugs sont vraiment les bienvenus, et les idées de fonctionnalités aussi : une bonne partie de ce que contient Gobilago aujourd’hui est née d’un e-mail d’une personne qui l’utilise."),
      P("Pour un bug, indiquez les étapes qui le reproduisent, sa fréquence, ainsi que vos versions de l’application et d’iOS. Pour un plantage, dites-nous ce que vous faisiez juste avant. Pour une suggestion, décrivez plutôt le problème que vous cherchez à résoudre que la solution que vous imaginez : le résultat est en général meilleur."),
      P("Envoyez le tout à ", mail, ".")) },

    { id: "privacy", title: "Confidentialité, données et suppression du compte", body: h("div", null,
      P("Gobilago est conçu pour garder vos contenus d’étude sur votre appareil, sauf si vous activez délibérément une fonctionnalité en ligne ou publiez un contenu. Ce que nous traitons, pourquoi et pendant combien de temps est décrit dans la ", link("privacy.html", "Politique de confidentialité"), "."),
      P("Vous pouvez supprimer vous-même votre compte depuis les réglages de l’application. La suppression retire le compte serveur ainsi que ses contenus cloud privés et ses publications, sous réserve des délais de suppression décrits dans la Politique de confidentialité. Les contenus stockés localement restent sur votre appareil jusqu’à ce que vous supprimiez l’application ou les contenus eux-mêmes."),
      P("Pour exercer un droit relatif à vos données — accès, rectification, effacement, portabilité, opposition — écrivez à ", mail, " depuis l’adresse de votre compte : nous répondrons dans les délais légaux.")) },

    { id: "accessibility", title: "Accessibilité", body: h("div", null,
      P("Gobilago vise à fonctionner avec les fonctionnalités d’accessibilité d’iOS que vous utilisez déjà, notamment le texte dynamique, VoiceOver, la réduction des animations et les réglages de contraste élevé."),
      P("Si quelque chose est illisible, inaccessible ou inutilisable avec une technologie d’assistance, nous le traitons comme un bug. Indiquez-nous l’écran concerné et la fonctionnalité que vous utilisez, et nous le prioriserons.")) },

    { id: "who", title: "À qui vous écrivez", body: h("div", null,
      P("Gobilago est développé et exploité par :"),
      P(strong("Jules Battaglia — Entrepreneur Individuel (EI)"), h("br"),
        "France", h("br"),
        strong("E-mail : "), mail),
      P("Nos coordonnées postales figurent dans les mentions légales de Gobilago et sont disponibles sur simple demande par e-mail."),
      P("Voir également les ", link("terms.html", "Conditions d’utilisation"), " et la ", link("privacy.html", "Politique de confidentialité"), ".")) }
  ]
};

ReactDOM.createRoot(document.getElementById("root")).render(h(LegalPage, { doc: DOC }));
setTimeout(() => window.lucide && window.lucide.createIcons(), 60);
