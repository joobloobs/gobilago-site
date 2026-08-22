const { LegalPage, P, UL, h } = window.LegalKit;

const link = (href, text) => h("a", { href, style: { color: "var(--color-primary)" } }, text);
const strong = (...kids) => h("strong", null, ...kids);

const DOC = {
  title: "Conditions d’utilisation",
  updated: "24 juillet 2026",
  meta: "Date d’entrée en vigueur : 24 juillet 2026",
  intro: h(React.Fragment, null,
    P(strong("Prestataire : "), "Jules Battaglia, Entrepreneur Individuel (EI), France", h("br"),
      strong("Contact : "), link("mailto:contact@gobilago.com", "contact@gobilago.com")),
    P("Les présentes Conditions d’utilisation (les ", strong("« Conditions »"), ") régissent l’utilisation de l’application mobile Gobilago et de ses services associés (ensemble, l’", strong("« Application »"), "). Toute disposition impérative protégeant le consommateur prévaut sur une clause incompatible des présentes Conditions.")),
  sections: [
    { id: "provider", title: "Qui fournit Gobilago", body: h("div", null,
      P("Gobilago est développé et exploité par ", strong("Jules Battaglia, Entrepreneur Individuel (EI)"), ", établi en France (", strong("« Gobilago », « nous », « notre » ou « nos »"), ")."),
      P("Les informations légales d’identification et les coordonnées postales du prestataire sont publiées séparément dans les Mentions légales. Elles font partie des informations précontractuelles accessibles avant tout achat, sans être répétées dans les présentes Conditions de service."),
      P("Vous pouvez nous contacter à ", strong("contact@gobilago.com"), ".")) },

    { id: "acceptance", title: "Acceptation des Conditions", body: h("div", null,
      P("En téléchargeant ou en utilisant l’Application, vous acceptez les présentes Conditions et reconnaissez avoir pris connaissance de la ", link("privacy.html", "Politique de confidentialité"), ". Si vous ne les acceptez pas, n’utilisez pas l’Application."),
      P("Vous devez avoir au moins ", strong("15 ans"), " pour créer un compte ou utiliser les fonctions en ligne. Si la loi de votre pays exige l’autorisation d’un représentant légal, vous ne pouvez les utiliser qu’avec cette autorisation.")) },

    { id: "what-it-does", title: "Objet de Gobilago", body: h("div", null,
      P("Gobilago est une application d’apprentissage fondée sur le rappel actif et la répétition espacée. Elle permet de créer et d’étudier du contenu, de l’organiser en collections, de suivre sa progression et, facultativement, d’utiliser la synchronisation cloud et une Bibliothèque publique."),
      P("Gobilago est une aide à l’apprentissage. L’Application ne garantit aucun résultat scolaire, examen, amélioration de la mémoire, qualification professionnelle ni résultat particulier. Elle ne fournit aucun conseil médical, psychologique ou professionnel.")) },

    { id: "licence", title: "Licence d’utilisation", body: h("div", null,
      P("Nous vous accordons une licence personnelle, limitée, non exclusive, non transférable et révocable pour utiliser l’Application à des fins personnelles ou éducatives licites, sous réserve des présentes Conditions."),
      P("L’Application est concédée sous licence et non vendue. Son logiciel reste également soumis aux règles d’utilisation d’Apple et au ", link("https://www.apple.com/legal/internet-services/itunes/dev/stdeula/", "contrat de licence standard d’Apple"), ". Les présentes Conditions régissent les comptes, services cloud, achats Premium, contenus utilisateurs et la Bibliothèque en complément de cette licence."),
      P("Vous ne pouvez pas vendre, sous-licencier, redistribuer, copier, modifier, désassembler ou tenter d’extraire le code source de l’Application, sauf autorisation expresse de la loi ou d’une licence open source applicable.")) },

    { id: "accounts", title: "Comptes et utilisation en invité", body: h("div", null,
      P("L’apprentissage local peut être utilisé en invité sans fournir d’adresse électronique. Un compte Gobilago enregistré et non anonyme est requis pour acheter ou restaurer Premium, utiliser la synchronisation cloud Premium, récupérer du contenu cloud et publier des collections."),
      P("Premium est lié au compte enregistré utilisé lors de l’achat. Une connexion à Internet est nécessaire pour créer un compte, s’y connecter, acheter, restaurer ou réclamer une offre Fondateur. Le contenu d’apprentissage local reste disponible hors ligne."),
      P("Vous devez fournir des informations exactes, protéger raisonnablement vos identifiants et nous avertir si votre compte semble compromis. Vous pouvez supprimer votre compte dans l’Application.")) },

    { id: "private-content", title: "Votre contenu privé", body: h("div", null,
      P("Vous restez propriétaire du contenu original que vous créez, notamment les collections, textes, images, dessins, annotations et structures d’étude (le ", strong("« Contenu utilisateur »"), ")."),
      P("Lorsque vous activez la synchronisation cloud, vous nous accordez une licence limitée pour héberger, copier, traiter et transmettre votre Contenu utilisateur uniquement afin de fournir la synchronisation, la sauvegarde, la récupération, le compte et l’assistance. Cette licence prend fin à la suppression du contenu concerné, sous réserve des délais techniques prévus dans la Politique de confidentialité."),
      P("Conservez une copie locale des contenus importants. Aucun appareil ni service cloud ne peut garantir l’absence absolue de perte de données.")) },

    { id: "library", title: "Publication dans la Bibliothèque", body: h("div", null,
      P("Publier une collection est facultatif. En publiant, vous nous accordez une licence non exclusive, mondiale et gratuite pour héberger, reproduire, mettre en forme, afficher, rendre disponible et distribuer ce contenu dans Gobilago. Vous autorisez également les autres utilisateurs à le télécharger et à l’utiliser pour leur apprentissage personnel."),
      P("Vous conservez la propriété de votre contenu. Vous pouvez le dépublier, mais une copie déjà téléchargée sur l’appareil d’un autre utilisateur peut y rester."),
      P("En publiant, vous garantissez que le contenu :"),
      UL([
        "Vous appartient ou peut légalement être publié par vous ;",
        "Ne porte pas atteinte aux droits d’auteur, à la vie privée, aux marques ou à d’autres droits ;",
        "N’est pas illicite, trompeur, haineux, menaçant, sexuellement exploitatif ou malveillant ;",
        "Ne divulgue pas les informations privées ou sensibles d’autrui sans autorisation ; et",
        "Est présenté par un titre et une description raisonnablement fidèles."
      ]),
      P("Nous pouvons examiner, limiter la visibilité, refuser ou supprimer un contenu public lorsque cela est raisonnablement nécessaire pour faire respecter les présentes Conditions, respecter la loi, protéger les utilisateurs ou assurer la qualité de la Bibliothèque. Les contenus de la Bibliothèque sont créés par les utilisateurs ; nous ne garantissons pas leur exactitude ni leur adéquation à un examen particulier.")) },

    { id: "acceptable-use", title: "Utilisation acceptable", body: h("div", null,
      P("Vous ne devez pas :"),
      UL([
        "Accéder au compte ou aux données privées d’autrui sans autorisation ;",
        "Contourner les mesures de sécurité ou les limites techniques, sonder ou surcharger le service ;",
        "Transmettre des logiciels malveillants, du spam, des contenus frauduleux ou illicites ;",
        "Harceler, menacer, usurper l’identité ou exploiter une autre personne ;",
        "Aspirer ou copier automatiquement et massivement la Bibliothèque sans autorisation ;",
        "Porter atteinte aux droits de propriété intellectuelle ; ou",
        "Utiliser l’Application pour enfreindre la loi."
      ]),
      P("Les actes d’interopérabilité, de recherche en sécurité ou d’ingénierie inverse qui ne peuvent légalement être interdits restent autorisés.")) },

    { id: "payments", title: "Accès Gratuit et Premium", body: h("div", null,
      h("h3", null, "9.1 Accès Gratuit"),
      P("L’accès Gratuit comprend l’ensemble de l’apprentissage local : création et étude du contenu personnel, répétition espacée, accès hors ligne, historique et séries d’étude locales, ainsi que téléchargement des collections publiques. Un compte Gratuit enregistré peut avoir jusqu’à ", strong("trois collections publiées actives"), " simultanément."),

      h("h3", null, "9.2 Avantages Premium"),
      P("Premium ajoute la continuité du compte et le passage à l’échelle, notamment la synchronisation et la récupération cloud privées sur plusieurs appareils, ainsi qu’un nombre illimité de collections publiques actives. La synchronisation cloud reste facultative."),
      P("Si Premium expire alors que plus de trois collections sont déjà publiées, elles ne sont pas retirées automatiquement. Vous pouvez les corriger, modifier, dépublier ou supprimer, mais vous ne pouvez pas en publier une nouvelle tant que vous dépassez la limite Gratuite ou que Premium n’est pas réactivé."),

      h("h3", null, "9.3 Produits disponibles"),
      P("Selon votre pays, votre éligibilité et l’offre RevenueCat en cours, Gobilago peut proposer :"),
      UL([
        "Un abonnement mensuel à renouvellement automatique ;",
        "Un abonnement annuel à renouvellement automatique ;",
        "Un achat Premium à vie, payé une seule fois ;",
        "Un essai introductif gratuit ou à tarif réduit pour un abonnement éligible ; et",
        "Un accès Premium Fondateur à vie accordé pendant une campagne limitée."
      ]),
      P("Le paywall et la confirmation d’achat Apple indiquent le produit disponible, son prix local et les taxes, la période de facturation, la durée et l’éligibilité de l’essai, ainsi que les avantages inclus. Ces informations propres à l’achat prévalent sur les descriptions générales des présentes Conditions."),

      h("h3", null, "9.4 Abonnements et essais"),
      P("Les abonnements mensuels et annuels se renouvellent automatiquement pour la même durée, sauf résiliation depuis votre compte Apple avant l’échéance indiquée par Apple. Apple débite votre compte et gère la facturation. La désactivation du renouvellement n’interrompt pas immédiatement Premium : l’accès continue jusqu’à la fin de la période payée ou d’essai indiquée par Apple et RevenueCat."),
      P("Un essai éligible devient l’abonnement payant affiché lors de la confirmation, sauf résiliation avant la fin de l’essai selon les instructions d’Apple. L’éligibilité dépend d’Apple et peut varier selon le compte ou le pays."),
      P("Vous pouvez gérer l’abonnement depuis l’Application ou les réglages d’abonnements de votre compte Apple. Supprimer l’Application ou votre compte Gobilago ", strong("n’annule pas l’abonnement Apple"), "."),

      h("h3", null, "9.5 Premium à vie"),
      P("L’achat à vie est un achat non consommable, payé une seule fois et sans renouvellement. « À vie » signifie un accès Premium pendant la durée de vie du service Gobilago, sans frais récurrents. Cela ne garantit pas que Gobilago fonctionnera indéfiniment ni que chaque fonctionnalité restera inchangée. Les droits impératifs du consommateur restent applicables."),

      h("h3", null, "9.6 Premium Fondateur à vie"),
      P("Pendant une campagne Fondateur contrôlée par le serveur, un compte enregistré éligible qui se connecte ou est créé pendant la période affichée peut recevoir gratuitement un accès Premium à vie, lié au compte et sans renouvellement. Il n’a aucune valeur monétaire et n’est pas transférable par « Restaurer les achats »."),
      P("Premium Fondateur ne prend pas fin à la clôture de la campagne. Il ne peut être révoqué que s’il a été obtenu par fraude, exploitation technique, erreur substantielle ou violation grave ou répétée des présentes Conditions. Lorsque cela est approprié, nous vous en informerons et vous pourrez nous contacter."),

      h("h3", null, "9.7 Restauration et transfert d’un achat"),
      P("« Restaurer les achats » demande à Apple et RevenueCat de vérifier les achats App Store éligibles pour le compte Gobilago actuellement connecté."),
      P("Si le même achat Apple était lié à un autre compte Gobilago enregistré, sa restauration peut transférer Premium vers le compte actuel et le retirer de l’ancien compte. Les contenus d’apprentissage privés ne sont ni transférés ni fusionnés. L’accès Fondateur reste lié à son compte d’origine."),

      h("h3", null, "9.8 Remboursements"),
      P("Apple traite les paiements App Store et les demandes de remboursement. Gobilago ne reçoit pas les coordonnées complètes de votre carte et ne peut pas émettre directement un remboursement App Store. Vous pouvez effectuer une demande sur ", link("https://reportaproblem.apple.com/", "reportaproblem.apple.com"), " ou par tout canal Apple disponible dans votre pays. Les droits impératifs relatifs au remboursement, à la conformité ou à la rétractation restent applicables."),

      h("h3", null, "9.9 Expiration de Premium et conservation cloud"),
      P("Après résiliation, Premium reste actif jusqu’à sa date d’expiration. À l’expiration effective :"),
      UL([
        "La synchronisation ordinaire des contenus privés s’arrête ;",
        "Le contenu local reste disponible sur l’appareil jusqu’à sa suppression ou la désinstallation ;",
        h("span", null, "La dernière copie cloud Premium est conservée pendant ", strong("12 mois"), " ;"),
        "Une récupération limitée en lecture seule peut être proposée pendant cette période ; et",
        "Sauf réabonnement ou suppression anticipée, la sauvegarde privée est programmée pour suppression après ce délai."
      ]),
      P("La suppression des données cloud est distincte de la résiliation. Un réabonnement pendant la période de conservation réactive la synchronisation selon les règles de récupération et de gestion des conflits de l’Application.")) },

    { id: "notifications", title: "Notifications et autorisations", body: h("div", null,
      P("L’Application peut demander l’autorisation d’envoyer des rappels d’étude ou d’utiliser certaines fonctions de l’appareil. Ces autorisations sont facultatives sauf indication claire contraire. Vous pouvez les modifier dans les réglages de l’appareil. La livraison exacte d’une notification n’est pas garantie.")) },

    { id: "privacy", title: "Confidentialité", body: h("div", null,
      P("Notre ", link("privacy.html", "Politique de confidentialité"), " décrit les données traitées, leur finalité, leur durée de conservation et vos droits. La synchronisation cloud Premium est facultative et les contenus privés restent sur l’appareil sauf activation d’une fonction en ligne ou publication volontaire.")) },

    { id: "third-parties", title: "Services tiers", body: h("div", null,
      P("L’Application utilise Apple pour la distribution et les paiements, RevenueCat pour les achats et droits Premium, Supabase pour l’authentification et les services cloud facultatifs, ainsi qu’Apple ou Google lorsque vous choisissez leur méthode de connexion."),
      P("Vous devez respecter les conditions tierces applicables, notamment celles de l’App Store et des services multimédias Apple. Nous sélectionnons et intégrons ces fournisseurs avec un soin raisonnable, mais ne contrôlons pas leurs services indépendants.")) },

    { id: "intellectual-property", title: "Propriété intellectuelle de Gobilago", body: h("div", null,
      P("À l’exception du Contenu utilisateur et des éléments tiers ou open source, le logiciel, la marque, le design, les textes et les ressources originales de Gobilago appartiennent à Jules Battaglia et sont protégés par la loi.")) },

    { id: "availability", title: "Disponibilité et évolution", body: h("div", null,
      P("Nous cherchons à fournir un service fiable sans pouvoir garantir une disponibilité permanente, l’absence d’erreur ou la compatibilité avec chaque appareil. Nous pouvons corriger, ajouter, retirer ou interrompre des fonctions pour des raisons techniques, de sécurité, juridiques ou de produit."),
      P("Nous essaierons de prévenir raisonnablement les utilisateurs lorsqu’une modification affecte substantiellement une fonction en ligne, un avantage payant ou l’accès au contenu cloud. Cette clause ne réduit pas nos obligations relatives aux services numériques payants ni vos droits impératifs.")) },

    { id: "termination", title: "Suspension, résiliation et suppression", body: h("div", null,
      P("Vous pouvez cesser d’utiliser l’Application ou supprimer votre compte à tout moment depuis les Réglages."),
      P("La suppression d’un compte enregistré supprime le compte serveur, les contenus cloud privés et les publications associés, sous réserve des délais techniques, de sécurité ou légaux décrits dans la Politique de confidentialité. Le contenu d’étude local reste sur l’appareil sauf si vous le supprimez séparément ou désinstallez l’Application. ", strong("La suppression du compte n’annule pas un abonnement Apple."), " Résiliez celui-ci séparément dans votre compte Apple pour empêcher son renouvellement."),
      P("Après la suppression, un achat App Store éligible peut être restauré sur un nouveau compte enregistré. Cela ne récupère pas les contenus cloud supprimés avec l’ancien compte et ne transfère pas Premium Fondateur."),
      P("Nous pouvons suspendre un compte ou retirer un contenu public en cas de violation grave ou répétée, pour protéger le service ou les utilisateurs, ou pour respecter la loi. Sauf urgence de sécurité ou obligation légale, nous chercherons à fournir une information et une explication raisonnables.")) },

    { id: "warranties", title: "Garanties et responsabilité", body: h("div", null,
      P("Nous fournissons l’Application avec un soin et une compétence raisonnables. Elle est proposée « selon disponibilité » et peut connaître des interruptions ou des erreurs."),
      P("Aucune clause n’exclut les garanties légales, la responsabilité pour fraude, faute intentionnelle ou lourde, décès ou dommage corporel dû à une négligence, ni toute responsabilité qui ne peut être exclue. Dans la mesure permise par la loi, nous ne répondons pas des pertes imprévisibles, professionnelles liées à un usage personnel, causées uniquement par votre appareil ou fournisseur d’accès, ni des décisions prises uniquement sur la foi d’un contenu créé par un utilisateur.")) },

    { id: "term-changes", title: "Modification des Conditions", body: h("div", null,
      P("Nous pouvons modifier les présentes Conditions pour refléter une évolution de l’Application, de la loi, de la sécurité ou du modèle économique. La date sera mise à jour et les changements substantiels seront notifiés dans l’Application, sur le site ou par courriel lorsque cela est raisonnablement possible."),
      P("Les changements s’appliquent pour l’avenir. Si la loi exige votre accord exprès, nous le demanderons.")) },

    { id: "disputes", title: "Droit applicable et litiges", body: h("div", null,
      P("Les présentes Conditions sont régies par le droit français. Si vous résidez ailleurs, vous conservez les protections impératives de votre pays et le droit de saisir toute juridiction compétente prévu par la loi."),
      P("Contactez d’abord ", strong("contact@gobilago.com"), " afin de rechercher une solution amiable."),
      P("Si vous n’êtes pas parvenu à résoudre votre litige après nous avoir adressé une réclamation écrite (courrier ou courriel), datée, rappelant les circonstances qui ont donné lieu au différend et ce que vous réclamez, vous pourrez saisir le médiateur de la consommation, désigné ci-dessous, si vous avez reçu une réponse écrite négative de notre part ou pas de réponse deux mois après l’envoi de votre réclamation."),
      P("Conformément aux articles L.616-1 et R.616-1 du code de la consommation, notre société a mis en place un dispositif de médiation de la consommation. L’entité de médiation retenue est : ", strong("SAS MÉDIATION CONSOMMATION DÉVELOPPEMENT"), ". En cas de litige, tout consommateur pourra déposer sa réclamation :"),
      UL([
        h("span", null, "sur le site : ", link("https://www.medconsodev.eu", "https://www.medconsodev.eu"), " ; ou"),
        "par voie postale à : MÉDIATION CONSOMMATION DÉVELOPPEMENT — C/O Centre d’Affaires Stéphanois SAS — Immeuble l’Horizon — Esplanade de France — 3 rue J. Constant Milleret — 42000 SAINT-ÉTIENNE."
      ]),
      P("Ce dispositif est ouvert aux consommateurs résidant en France. Conformément au droit de l’Union européenne, il peut également être saisi par des consommateurs résidant dans un autre État membre de l’Union européenne ou de l’Espace économique européen pour un litige transfrontalier vous opposant à Gobilago, sous réserve des règles de recevabilité propres au médiateur. Les consommateurs résidant hors de l’Union européenne ne peuvent pas recourir à ce dispositif ; ils conservent les protections impératives prévues par le droit de leur pays de résidence, rappelées à l’article 19."),
      P("L’ancienne plateforme européenne de règlement en ligne des litiges ayant été supprimée en 2025, elle n’est pas mentionnée ici.")) },

    { id: "general", title: "Dispositions générales", body: h("div", null,
      P("Si une clause est jugée inapplicable, les autres restent en vigueur. Un retard dans l’exercice d’un droit ne vaut pas renonciation. Nous ne pouvons transférer nos obligations d’une manière qui réduirait vos droits impératifs."),
      P("Les versions française et anglaise sont destinées à être équivalentes. La version française prévaut pour les consommateurs en France. Ailleurs, la version anglaise prévaut dans la mesure permise par la loi, sans réduire les protections locales impératives.")) },

    { id: "contact", title: "Contact", body: h("div", null,
      P("Questions, réclamations, demandes de modération ou notifications relatives aux présentes Conditions :"),
      P(strong("Jules Battaglia — Entrepreneur Individuel (EI)"), h("br"),
        strong("Courriel : "), link("mailto:contact@gobilago.com", "contact@gobilago.com"))) }
  ]
};

ReactDOM.createRoot(document.getElementById("root")).render(h(LegalPage, { doc: DOC }));
setTimeout(() => window.lucide && window.lucide.createIcons(), 60);
