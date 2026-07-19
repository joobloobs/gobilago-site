const { LegalPage, P, UL, Callout, h } = window.LegalKit;

const link = (href, text) => h("a", { href, style: { color: "var(--color-primary)" } }, text);
const strong = (...kids) => h("strong", null, ...kids);

const DOC = {
  title: "Politique de confidentialité",
  updated: "17 juin 2026",
  intro: "Responsable du traitement : Jules Battaglia · Contact : contact@gobilago.com",
  sections: [
    { id: "who-we-are", title: "Qui sommes-nous", body: h("div", null,
      P("Gobilago est une application iOS d’apprentissage par répétition espacée développée et exploitée par Jules Battaglia, développeur indépendant établi en France. Jules Battaglia est le responsable du traitement des données personnelles effectué dans le cadre de l’App."),
      P("La présente Politique de confidentialité explique quelles données sont collectées, pour quelles raisons, comment elles sont utilisées et quels sont vos droits au titre du Règlement général sur la protection des données (RGPD) et du droit français applicable.")) },

    { id: "data-we-collect", title: "Données collectées", body: h("div", null,
      h("h3", null, "2.1 Données du compte"),
      P("Lorsque vous créez un compte pour utiliser la synchronisation dans le cloud ou la Bibliothèque, nous collectons :"),
      UL([
        h("span", null, "Votre ", strong("adresse e-mail"), " (utilisée pour l’authentification et la gestion du compte) ;"),
        h("span", null, "Un ", strong("mot de passe haché"), " ou un jeton OAuth (selon le mode de connexion — nous ne stockons jamais votre mot de passe en clair) ;"),
        h("span", null, "Un ", strong("nom d’utilisateur"), " de votre choix, qui est ", strong("visible publiquement"), " par les autres utilisateurs, par exemple comme auteur d’une collection publiée. Ce nom d’utilisateur est un pseudonyme — il ne doit pas nécessairement contenir votre vrai nom — mais il est associé à votre compte en interne. Votre adresse e-mail n’est ", strong("jamais"), " affichée publiquement.")
      ]),
      P(strong("Base légale :"), " exécution d’un contrat (article 6, paragraphe 1, point b) du RGPD) — les données du compte sont nécessaires à la fourniture de la synchronisation dans le cloud et de la Bibliothèque."),
      h("h3", null, "2.2 Contenu d’étude"),
      P("Si la synchronisation dans le cloud est activée, les données suivantes sont téléversées sur nos serveurs :"),
      UL([
        h("span", null, strong("Collections"), " — noms, descriptions, icônes et apparence que vous configurez ;"),
        h("span", null, strong("Atomes et Faces"), " — le contenu que vous créez, notamment les textes, images et dessins ;"),
        h("span", null, strong("Modèles"), " — les structures de cartes réutilisables que vous enregistrez ou publiez ;"),
        h("span", null, strong("Configuration des Clusters et Facettes"), " — la manière dont vos atomes sont structurés pour l’apprentissage.")
      ]),
      P(strong("Base légale :"), " exécution d’un contrat (article 6, paragraphe 1, point b) du RGPD) — la synchronisation est une fonctionnalité facultative que vous activez."),
      h("h3", null, "2.3 Données relatives aux performances de révision"),
      P("Lorsque la synchronisation dans le cloud est activée, nous enregistrons également :"),
      UL([
        h("span", null, strong("Journaux de révision"), " — horodatages, scores de rappel et données d’intervalle SRS produits chaque fois que vous étudiez ;"),
        h("span", null, strong("État de planification des Clusters"), " — intervalles actuels, dates d’échéance et progression d’entraînement pour chaque Cluster.")
      ]),
      P(strong("Base légale :"), " exécution d’un contrat (article 6, paragraphe 1, point b) du RGPD) — ces données permettent le fonctionnement de la répétition espacée sur plusieurs appareils."),
      h("h3", null, "2.4 Données que nous ne collectons PAS"),
      UL([
        "Nous n’utilisons aucun SDK d’analyse tiers (ni Firebase, Mixpanel, Amplitude ou équivalent) ;",
        "Nous ne collectons aucun identifiant d’appareil, identifiant publicitaire ou donnée de localisation ;",
        "Nous ne suivons pas votre comportement dans d’autres applications ou sites web ;",
        "Toutes les données d’étude restent uniquement sur votre appareil, sauf si vous activez expressément la synchronisation dans le cloud."
      ])) },

    { id: "how-we-use", title: "Utilisation de vos données", body: h("div", null,
      h("table", { className: "legal-table" },
        h("thead", null,
          h("tr", null,
            h("th", null, "Finalité"),
            h("th", null, "Données utilisées"),
            h("th", null, "Base légale"))),
        h("tbody", null,
          h("tr", null, h("td", null, "Authentifier votre compte"), h("td", null, "E-mail, mot de passe haché"), h("td", null, "Contrat")),
          h("tr", null, h("td", null, "Synchroniser votre contenu d’étude entre vos appareils"), h("td", null, "Collections, atomes, journaux de révision"), h("td", null, "Contrat")),
          h("tr", null, h("td", null, "Mettre à disposition la Bibliothèque publique"), h("td", null, "Collections publiées avec votre accord"), h("td", null, "Contrat")),
          h("tr", null, h("td", null, "Détecter et prévenir les abus"), h("td", null, "Activité du compte, contenu publié"), h("td", null, "Intérêts légitimes"))))) },

    { id: "data-storage", title: "Stockage et transferts des données", body: h("div", null,
      h("h3", null, "4.1 Stockage local"),
      P("Vos données sont principalement stockées ", strong("sur votre appareil"), " au moyen de SQLite. L’App est conçue pour fonctionner entièrement hors ligne. La synchronisation dans le cloud est une fonction pratique exécutée en arrière-plan, et non une obligation."),
      h("h3", null, "4.2 Stockage dans le cloud"),
      P("Les données cloud sont stockées par l’intermédiaire de ", strong("Supabase"), " (Supabase Inc., société américaine). Elles sont hébergées dans la région ", strong("UE de Supabase (Francfort, Allemagne)"), ". Supabase traite les données sur la base de clauses contractuelles types (CCT), qui constituent le mécanisme juridique applicable aux éventuels transferts au sein de son infrastructure. Pour en savoir plus, consultez ", link("https://supabase.com/privacy", "la documentation de Supabase relative à la confidentialité"), "."),
      P("Aucun autre service tiers ne reçoit vos données personnelles."),
      h("h3", null, "4.3 Durée de conservation"),
      UL([
        h("span", null, strong("Données du compte"), " : conservées tant que votre compte existe, puis supprimées dans les 30 jours suivant sa suppression."),
        h("span", null, strong("Contenu d’étude et journaux de révision"), " : conservés tant que votre compte existe, puis supprimés dans les 30 jours suivant sa suppression."),
        h("span", null, strong("Contenu publié dans la Bibliothèque"), " : retiré immédiatement de l’affichage public lorsque vous annulez sa publication ou supprimez votre compte, puis entièrement supprimé dans un délai de 30 jours."),
        h("span", null, strong("Données locales sur votre appareil"), " : conservées jusqu’à ce que vous désinstalliez l’App ou les supprimiez manuellement.")
      ])) },

    { id: "data-sharing", title: "Partage des données", body: h("div", null,
      P("Nous ne vendons, ne louons et n’échangeons pas vos données personnelles. Nous ne les partageons que dans les cas limités suivants :"),
      UL([
        h("span", null, strong("Supabase"), " — notre prestataire d’infrastructure cloud, agissant en qualité de sous-traitant dans le cadre d’un accord de traitement des données ;"),
        h("span", null, strong("Obligation légale"), " — lorsque la loi applicable, une décision de justice ou une autorité de contrôle l’exige ;"),
        h("span", null, strong("Protection des droits"), " — lorsque cela est nécessaire pour prévenir la fraude ou les abus, ou protéger la sécurité des utilisateurs.")
      ])) },

    { id: "your-rights", title: "Vos droits au titre du RGPD", body: h("div", null,
      P("En tant que personne concernée au sens du RGPD, vous disposez des droits suivants :"),
      h("table", { className: "legal-table" },
        h("thead", null,
          h("tr", null, h("th", null, "Droit"), h("th", null, "Signification"))),
        h("tbody", null,
          h("tr", null, h("td", null, strong("Accès"), " (art. 15)"), h("td", null, "Demander une copie de toutes les données personnelles que nous détenons à votre sujet")),
          h("tr", null, h("td", null, strong("Rectification"), " (art. 16)"), h("td", null, "Faire corriger des données inexactes ou incomplètes")),
          h("tr", null, h("td", null, strong("Effacement"), " (art. 17)"), h("td", null, "Demander la suppression de vos données (« droit à l’oubli »)")),
          h("tr", null, h("td", null, strong("Limitation"), " (art. 18)"), h("td", null, "Nous demander de limiter l’utilisation de vos données pendant le règlement d’un litige")),
          h("tr", null, h("td", null, strong("Portabilité"), " (art. 20)"), h("td", null, "Recevoir vos données dans un format structuré et lisible par machine")),
          h("tr", null, h("td", null, strong("Opposition"), " (art. 21)"), h("td", null, "Vous opposer à un traitement fondé sur les intérêts légitimes")),
          h("tr", null, h("td", null, strong("Retrait du consentement")), h("td", null, "Lorsque le traitement repose sur votre consentement, le retirer à tout moment sans remettre en cause les traitements antérieurs")))),
      P("Pour exercer l’un de ces droits, écrivez à ", link("mailto:contact@gobilago.com", "contact@gobilago.com"), " en indiquant « Demande RGPD » dans l’objet. Nous vous répondrons dans un délai de ", strong("30 jours"), "."),
      P("Vous avez également le droit d’introduire une réclamation auprès de l’autorité française chargée de la protection des données :"),
      h("div", { className: "legal-address" },
        strong("Commission Nationale de l’Informatique et des Libertés (CNIL)"), h("br", null),
        "3 Place de Fontenoy — TSA 80715", h("br", null),
        "75334 Paris Cedex 07", h("br", null),
        link("https://www.cnil.fr", "https://www.cnil.fr"))) },

    { id: "security", title: "Sécurité", body: h("div", null,
      P("Nous appliquons les mesures suivantes pour protéger vos données :"),
      UL([
        "Toutes les données en transit sont chiffrées au moyen de TLS 1.2 ou d’une version ultérieure ;",
        "Les mots de passe sont hachés avec bcrypt par Supabase Auth — nous ne stockons et ne transmettons jamais les mots de passe en clair ;",
        "L’accès à la base de données cloud est limité par des politiques de sécurité au niveau des lignes, afin que chaque utilisateur ne puisse lire que ses propres données ;",
        "Nous utilisons les fonctions intégrées de journalisation d’audit et de contrôle d’accès de Supabase."
      ]),
      P("Aucun système n’est sûr à 100 %. En cas de violation de données susceptible d’affecter vos droits et libertés, nous vous en informerons ainsi que l’autorité de contrôle compétente conformément au RGPD, dans les 72 heures suivant le moment où nous en avons connaissance.")) },

    { id: "children", title: "Enfants", body: h("div", null,
      P("L’App ne s’adresse pas aux enfants de moins de 15 ans, âge du consentement numérique en France au titre du RGPD. Nous ne collectons pas sciemment de données personnelles concernant des enfants de moins de 15 ans. Si vous pensez qu’un enfant de moins de 15 ans a créé un compte, veuillez nous contacter ; nous supprimerons rapidement ce compte.")) },

    { id: "changes", title: "Modification de la présente Politique", body: h("div", null,
      P("Nous pouvons modifier la présente Politique de confidentialité. En cas de modification importante, nous mettrons à jour la date de « Dernière mise à jour » figurant en haut du document et, lorsque cela est raisonnablement possible, vous en informerons au moyen d’un avis dans l’App ou d’un e-mail. La poursuite de l’utilisation de l’App après la publication des modifications vaut acceptation de la Politique mise à jour.")) },

    { id: "contact", title: "Contact", body: h("div", null,
      P("Pour toute question relative à la confidentialité ou pour exercer vos droits :"),
      P(strong("Jules Battaglia")),
      P("E-mail : ", link("mailto:contact@gobilago.com", "contact@gobilago.com")),
      P("Nous nous efforçons de répondre à toutes les demandes dans un délai de 30 jours."),
      h("p", { style: { marginTop: "2rem", fontStyle: "italic", opacity: 0.7, fontSize: "0.875rem" } }, "La présente Politique s’applique à l’application iOS Gobilago et à tous les services cloud associés.")) }
  ]
};

ReactDOM.createRoot(document.getElementById("root")).render(h(LegalPage, { doc: DOC }));
setTimeout(() => window.lucide && window.lucide.createIcons(), 60);
