const { LegalPage, P, UL, h } = window.LegalKit;

const link = (href, text) => h("a", { href, style: { color: "var(--color-primary)" } }, text);
const strong = (...kids) => h("strong", null, ...kids);

const DOC = {
  title: "Conditions d’utilisation",
  updated: "19 juillet 2026",
  meta: "Date d’entrée en vigueur : 19 juillet 2026",
  intro: h(React.Fragment, null,
    P(strong("Prestataire du service : "), "Jules Battaglia, Entrepreneur Individuel (EI), France", h("br"),
      strong("Contact : "), link("mailto:contact@gobilago.com", "contact@gobilago.com")),
    P("Les présentes Conditions d’utilisation (les ", strong("« Conditions »"), ") définissent les règles applicables à l’utilisation de l’application mobile Gobilago et de ses services associés (ensemble, l’", strong("« App »"), "). Elles se veulent claires et équitables. Si une disposition des présentes Conditions entre en conflit avec un droit impératif du consommateur qui vous est applicable, ce droit impératif prévaut.")),
  sections: [
    { id: "provider", title: "Qui fournit Gobilago", body: h("div", null,
      P("Gobilago est développée et exploitée par ", strong("Jules Battaglia, Entrepreneur Individuel (EI)"), ", établi en France (", strong("« Gobilago », « nous », « notre » ou « nos »"), ")."),
      P("Vous pouvez nous contacter à l’adresse ", strong("contact@gobilago.com"), ".")) },

    { id: "acceptance", title: "Acceptation des présentes Conditions", body: h("div", null,
      P("En téléchargeant, en accédant à ou en utilisant l’App, vous acceptez les présentes Conditions et reconnaissez avoir pris connaissance de la ", link("privacy.html", "Politique de confidentialité"), ". Si vous ne les acceptez pas, veuillez ne pas utiliser l’App."),
      P("Vous devez avoir au moins ", strong("15 ans"), " pour créer un compte ou utiliser les fonctionnalités en ligne. Si la loi de votre lieu de résidence exige le consentement d’un parent ou représentant légal, vous ne pouvez utiliser ces fonctionnalités qu’avec ce consentement. Vous devez également avoir la capacité juridique de conclure les présentes Conditions.")) },

    { id: "what-it-does", title: "Fonctionnement de Gobilago", body: h("div", null,
      P("Gobilago est une application d’apprentissage fondée sur le rappel actif et la répétition espacée. Elle vous permet de créer et d’étudier du contenu, de l’organiser en collections, de suivre votre progression et, de manière facultative, d’utiliser la synchronisation dans le cloud et une Bibliothèque publique de collections."),
      P("L’App est conçue comme un outil d’aide à l’apprentissage. Elle ne garantit aucune note, aucun résultat à un examen, aucune amélioration de la mémoire, aucune qualification professionnelle ni aucun autre résultat d’apprentissage particulier. Elle ne constitue pas un avis médical, psychologique ou professionnel.")) },

    { id: "licence", title: "Licence d’utilisation de l’App", body: h("div", null,
      P("Nous vous accordons une licence personnelle, limitée, non exclusive, non transférable et révocable pour utiliser l’App à des fins personnelles ou éducatives licites, sous réserve des présentes Conditions."),
      P("L’App est concédée sous licence et non vendue. Lorsque vous l’obtenez par l’App Store d’Apple, votre utilisation du logiciel est également soumise aux règles d’utilisation applicables d’Apple et à son ", link("https://www.apple.com/legal/internet-services/itunes/dev/stdeula/", "Contrat de licence utilisateur final standard"), ". Les présentes Conditions régissent en complément les comptes Gobilago, les services cloud, la Bibliothèque publique, le contenu utilisateur et les autres services."),
      P("Vous ne pouvez pas vendre, concéder en sous-licence, redistribuer, copier, modifier, procéder à l’ingénierie inverse de l’App ni tenter d’en extraire le code source, sauf lorsque la loi applicable l’autorise expressément ou qu’une licence open source le permet.")) },

    { id: "accounts", title: "Comptes et utilisation en mode invité", body: h("div", null,
      P("Certaines fonctionnalités peuvent être utilisées sans compte enregistré. La synchronisation dans le cloud, la récupération de compte ou la publication dans la Bibliothèque peuvent nécessiter un compte."),
      P("Vous acceptez de fournir des informations exactes, de protéger raisonnablement vos identifiants et de nous avertir rapidement si vous pensez que votre compte a été compromis. Vous êtes responsable des activités réalisées depuis votre compte, sauf si elles résultent de notre manquement à protéger correctement le service."),
      P("Vous pouvez supprimer votre compte depuis l’App. Le traitement et la suppression des données du compte sont décrits dans la Politique de confidentialité.")) },

    { id: "private-content", title: "Votre contenu d’apprentissage privé", body: h("div", null,
      P("Vous restez propriétaire du contenu original que vous créez, notamment les collections, textes, images, dessins, annotations et structures d’apprentissage (le ", strong("« Contenu utilisateur »"), ")."),
      P("Lorsque vous utilisez la synchronisation facultative dans le cloud, vous nous accordez une licence limitée pour héberger, copier, traiter et transmettre votre Contenu utilisateur privé uniquement dans la mesure raisonnablement nécessaire à la fourniture des fonctions de synchronisation, sauvegarde, compte et assistance. Cette licence prend fin lors de la suppression du contenu cloud concerné, sous réserve des délais techniques raisonnables décrits dans la Politique de confidentialité."),
      P("Il vous appartient de conserver des copies du contenu qui compte pour vous. Malgré le soin raisonnable que nous apportons au service, aucun appareil local ni service cloud ne peut garantir qu’aucune donnée ne sera jamais perdue.")) },

    { id: "library", title: "Publication dans la Bibliothèque publique", body: h("div", null,
      P("La publication d’une collection est facultative. Lorsque vous publiez du Contenu utilisateur dans la Bibliothèque publique, vous nous accordez une licence non exclusive, mondiale et gratuite pour héberger, reproduire, mettre en forme, afficher, mettre à disposition et distribuer ce contenu dans Gobilago. Vous autorisez également les autres utilisateurs à le télécharger et à l’utiliser pour leur apprentissage personnel."),
      P("Cette licence existe uniquement pour nous permettre d’exploiter et d’améliorer la Bibliothèque. Elle ne nous transfère pas la propriété de votre contenu et ne nous autorise pas à vendre votre collection publiée comme notre propre produit."),
      P("Vous pouvez retirer un contenu de la publication. Il ne sera alors plus proposé à de nouveaux utilisateurs, mais les copies déjà téléchargées sur l’appareil d’un autre utilisateur peuvent y rester accessibles. La Politique de confidentialité explique le traitement des copies présentes sur les serveurs et des collections téléchargées."),
      P("En publiant du contenu, vous confirmez que :"),
      UL([
        "Vous l’avez créé ou disposez des autorisations nécessaires pour le publier ;",
        "Il ne porte atteinte à aucun droit d’auteur, droit à la vie privée, droit à l’image, droit des marques ou autre droit ;",
        "Il ne contient aucun élément illicite, trompeur, haineux, menaçant, relevant de l’exploitation sexuelle ou malveillant ;",
        "Il ne révèle aucune information sensible ou privée concernant une autre personne sans son autorisation ; et",
        "Son titre et sa description représentent raisonnablement le contenu de la collection."
      ]),
      P("Nous pouvons examiner, limiter la visibilité, refuser ou supprimer un contenu public lorsque cela est raisonnablement nécessaire pour faire respecter les présentes Conditions, respecter la loi, protéger les utilisateurs ou préserver la qualité et la sécurité de la Bibliothèque. Le cas échéant, vous pouvez nous demander le motif de cette mesure ou solliciter un réexamen."),
      P("Le contenu de la Bibliothèque est créé par les utilisateurs. Nous ne le cautionnons pas et ne garantissons pas qu’il soit complet, exact, sûr ou adapté à un cours ou examen particulier.")) },

    { id: "acceptable-use", title: "Utilisation acceptable", body: h("div", null,
      P("Veuillez utiliser Gobilago de manière respectueuse et licite. Vous ne devez pas :"),
      UL([
        "Accéder au compte ou aux données privées d’une autre personne sans autorisation ;",
        "Perturber, surcharger, sonder ou contourner la sécurité ou les limites techniques de l’App ;",
        "Téléverser des logiciels malveillants, du spam, du contenu frauduleux ou illicite ;",
        "Harceler, menacer, usurper l’identité ou exploiter une autre personne ;",
        "Extraire ou copier en masse la Bibliothèque publique par des moyens automatisés sans autorisation ;",
        "Utiliser Gobilago ou le contenu d’un autre utilisateur d’une manière portant atteinte aux droits de propriété intellectuelle ; ou",
        "Utiliser l’App pour enfreindre la loi applicable."
      ]),
      P("L’interopérabilité raisonnable, la recherche en sécurité et l’ingénierie inverse qui ne peuvent légalement être interdites ne sont pas prohibées par les présentes Conditions.")) },

    { id: "payments", title: "Accès gratuit et paiements de soutien facultatifs", body: h("div", null,
      P("Gobilago est actuellement gratuite. L’App peut vous proposer d’effectuer un ", strong("paiement de soutien facultatif et unique"), " par l’intermédiaire du système d’achat intégré d’Apple."),
      P("Un paiement de soutien :"),
      UL([
        "Est entièrement facultatif ;",
        "Ne débloque aucune fonctionnalité, aucun élément numérique, aucun traitement prioritaire ni aucun service futur garanti ;",
        "N’est pas un abonnement et ne se renouvelle pas automatiquement ; et",
        "Ne modifie pas vos droits au titre des présentes Conditions."
      ]),
      P("Apple traite la transaction et affiche le prix avant votre confirmation. La facturation, l’annulation et les demandes de remboursement sont traitées conformément aux règles d’Apple et à la loi applicable. Vous pouvez demander de l’aide concernant un achat Apple sur ", link("https://reportaproblem.apple.com/", "reportaproblem.apple.com"), "."),
      P("Nous pourrons proposer à l’avenir des fonctionnalités payantes ou freemium facultatives. Dans ce cas, nous afficherons clairement le prix, les fonctionnalités, la période de facturation, les modalités de renouvellement et toute condition supplémentaire avant l’achat. Un ancien paiement de soutien ne sera jamais converti en abonnement et aucun prélèvement récurrent ne commencera sans votre confirmation expresse dans la boutique concernée.")) },

    { id: "notifications", title: "Notifications et autorisations de l’appareil", body: h("div", null,
      P("L’App peut demander l’autorisation d’envoyer des rappels d’étude ou d’utiliser d’autres fonctions de l’appareil. Ces autorisations sont facultatives, sauf si elles sont clairement nécessaires à une fonctionnalité que vous choisissez. Vous pouvez les modifier dans les réglages de votre appareil. Les notifications sont de simples rappels ; leur heure de réception n’est pas garantie, car elle peut dépendre de votre appareil et de son système d’exploitation.")) },

    { id: "privacy", title: "Vie privée", body: h("div", null,
      P("Notre ", link("privacy.html", "Politique de confidentialité"), " explique quelles données personnelles nous traitons, pourquoi nous les traitons, combien de temps nous les conservons et quels sont vos droits. La synchronisation dans le cloud est facultative et l’App est conçue pour conserver les données d’étude sur votre appareil, sauf si vous activez des fonctionnalités en ligne ou publiez du contenu.")) },

    { id: "third-parties", title: "Services tiers", body: h("div", null,
      P("L’App s’appuie sur des services tiers pour certaines fonctions, notamment la distribution et les paiements via l’App Store, l’authentification et l’infrastructure cloud facultative. Ces prestataires peuvent appliquer leurs propres conditions et politiques de confidentialité. Nous choisissons et intégrons nos prestataires avec un soin raisonnable, mais nous ne contrôlons pas les services exploités indépendamment par des tiers.")) },

    { id: "intellectual-property", title: "Notre propriété intellectuelle", body: h("div", null,
      P("À l’exception du Contenu utilisateur et des éléments tiers ou open source, le logiciel, la marque, la conception visuelle, les textes et les ressources originales de Gobilago appartiennent à Jules Battaglia et sont protégés par le droit de la propriété intellectuelle applicable."),
      P("Les présentes Conditions ne vous autorisent pas à utiliser le nom, le logo ou l’identité visuelle de Gobilago en dehors de l’utilisation ordinaire de l’App.")) },

    { id: "availability", title: "Disponibilité et modifications de l’App", body: h("div", null,
      P("Nous nous efforçons de maintenir la fiabilité de Gobilago, mais ne pouvons garantir une disponibilité ininterrompue ou exempte d’erreurs. Nous pouvons corriger, mettre à jour, ajouter, supprimer ou interrompre des fonctionnalités pour des raisons techniques, de sécurité, juridiques ou liées au produit."),
      P("Nous essaierons de vous prévenir dans un délai raisonnable lorsqu’une modification affecte de manière importante une fonctionnalité en ligne ou votre accès au contenu cloud. Les fonctionnalités peuvent se comporter différemment selon l’appareil ou la version du système d’exploitation.")) },

    { id: "termination", title: "Suspension et résiliation", body: h("div", null,
      P("Vous pouvez cesser d’utiliser l’App ou supprimer votre compte à tout moment."),
      P("Nous pouvons restreindre ou suspendre un compte, ou supprimer un contenu public, si nous estimons raisonnablement que les présentes Conditions ont été enfreintes de manière grave ou répétée, si cela est nécessaire pour protéger le service ou les autres utilisateurs, ou si la loi l’exige. Sauf urgence liée à la sécurité, à la sûreté ou à une obligation légale, nous nous efforcerons de vous en informer et de vous fournir une explication raisonnable."),
      P("La résiliation ne supprime pas les droits déjà acquis au titre de la loi applicable. Les dispositions qui doivent logiquement continuer à produire leurs effets — notamment celles relatives à la propriété, aux licences portant sur le contenu public téléchargé, à la responsabilité et aux litiges — restent applicables après la résiliation.")) },

    { id: "warranties", title: "Garanties et responsabilité", body: h("div", null,
      P("Nous fournissons l’App avec un soin et une compétence raisonnables. Toutefois, Gobilago est proposée ", strong("« selon sa disponibilité »"), " et nous ne pouvons garantir que chaque fonctionnalité sera toujours ininterrompue, exempte d’erreurs ou compatible avec chaque appareil."),
      P("Aucune disposition des présentes Conditions n’exclut ni ne limite les droits ou recours qui ne peuvent légalement l’être, notamment les garanties impératives accordées aux consommateurs. Rien n’exclut la responsabilité en cas de fraude, faute intentionnelle, faute lourde, décès ou dommage corporel causé par une négligence, ni toute autre responsabilité que la loi applicable interdit d’exclure."),
      P("Dans la mesure permise par la loi, nous ne sommes pas responsables :"),
      UL([
        "Des pertes qui n’étaient pas raisonnablement prévisibles lorsque vous avez accepté les présentes Conditions ;",
        "Des pertes commerciales ou professionnelles résultant d’une utilisation personnelle de l’App ;",
        "Des problèmes causés exclusivement par votre appareil, votre fournisseur d’accès à Internet, une utilisation non autorisée de votre compte ou un service tiers échappant raisonnablement à notre contrôle ; ou",
        "Des résultats d’apprentissage ou décisions reposant uniquement sur du contenu de la Bibliothèque créé par les utilisateurs."
      ]),
      P("Si notre manquement à une obligation de diligence raisonnable vous cause une perte prévisible, les présentes Conditions ne vous empêchent pas d’exercer les recours prévus par la loi applicable.")) },

    { id: "term-changes", title: "Modification des présentes Conditions", body: h("div", null,
      P("Nous pouvons modifier les présentes Conditions afin de tenir compte des évolutions de l’App, de la loi, des exigences de sécurité ou de notre modèle économique. Nous mettrons à jour la date d’entrée en vigueur et, en cas de modification importante, vous en informerons dans un délai raisonnable par l’intermédiaire de l’App, de notre site ou, lorsque cela est possible, par e-mail."),
      P("Les modifications s’appliquent pour l’avenir. Si la loi exige votre accord exprès à une modification importante, nous vous le demanderons. Si vous refusez les Conditions révisées, vous pouvez cesser d’utiliser le service concerné et supprimer votre compte.")) },

    { id: "disputes", title: "Droit applicable et litiges", body: h("div", null,
      P("Les présentes Conditions sont régies par le droit français. Si vous résidez dans un autre pays, vous conservez également les protections impératives accordées aux consommateurs par la loi de votre pays de résidence. Aucune disposition ne vous oblige à porter une demande en justice devant une juridiction qui ne serait pas compétente au regard de la loi applicable."),
      P("Veuillez d’abord écrire à ", strong("contact@gobilago.com"), " afin que nous puissions tenter de résoudre votre réclamation à l’amiable.")) },

    { id: "general", title: "Dispositions générales", body: h("div", null,
      P("Si une juridiction juge une disposition des présentes Conditions inapplicable, les autres dispositions restent en vigueur. Le retard dans l’exercice d’un droit ne constitue pas une renonciation à ce droit. Nous ne pouvons transférer nos obligations d’une manière qui réduirait vos droits impératifs de consommateur sans votre consentement."),
      P("Les présentes Conditions et la Politique de confidentialité constituent l’accord relatif aux services Gobilago. Les conditions applicables d’Apple continuent de régir votre utilisation de l’App Store ainsi que des services de distribution logicielle et de paiement d’Apple."),
      P("En cas de traduction des présentes Conditions, la version anglaise prévaut uniquement dans la mesure permise par la loi applicable. Les protections impératives applicables à une version locale traduite restent inchangées.")) },

    { id: "contact", title: "Contact", body: h("div", null,
      P("Toute question, réclamation, demande de modération ou notification relative aux présentes Conditions peut être envoyée à :"),
      P(strong("Jules Battaglia — Entrepreneur Individuel (EI)"), h("br"),
        strong("E-mail : "), link("mailto:contact@gobilago.com", "contact@gobilago.com"))) }
  ]
};

ReactDOM.createRoot(document.getElementById("root")).render(h(LegalPage, { doc: DOC }));
setTimeout(() => window.lucide && window.lucide.createIcons(), 60);
