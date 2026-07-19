/* Gobilago.com ? FR site copy. */
(function () {
  window.I18n = window.I18n || {};
  window.I18n.fr = {
  "langToggle": "EN",
  "nav": {
    "method": "Méthode",
    "model": "Modèle",
    "studying": "Apprendre",
    "features": "Fonctionnalités",
    "getApp": "Obtenir l’app"
  },
  "hero": {
    "tag": "Fiches intelligentes · iPhone & iPad",
    "h1a": "Apprenez n’importe quoi.",
    "h1b": "Retenez-le pour de bon.",
    "lead1": "Gobilago est une application de répétition espacée qui vous fait ",
    "leadEm": "rappeler activement",
    "lead2": " ce que vous étudiez — en tapant, en dessinant, en le reproduisant de mémoire — puis ramène chaque carte juste avant que vous ne l’oubliiez. C’est tout le principe : se rappeler, pas reconnaître.",
    "seeHow": "Voir comment ça marche",
    "note": "Gratuit pour débuter · Fonctionne hors ligne · Aucun compte requis"
  },
  "intro": {
    "eyebrow": "Qu’est-ce que Gobilago",
    "h2": "Des fiches intelligentes pour tout ce qui mérite d’être retenu",
    "lead": "Gobilago est une application d’apprentissage fondée sur deux idées simples : se rappeler activement une chose la fixe en mémoire, et la revoir juste avant de l’oublier la grave pour de bon — c’est la répétition espacée.",
    "steps": [
      [
        "pencil",
        "Créez une carte",
        "Transformez tout ce que vous voulez apprendre en une question et une réponse — en quelques secondes."
      ],
      [
        "brain",
        "Rappelez-vous",
        "À chaque session, vous reproduisez la réponse de mémoire — sans regarder, sans « je le savais »."
      ],
      [
        "calendar-clock",
        "Révisez au bon moment",
        "Chaque carte revient juste avant que vous ne l’oubliiez, puis de moins en moins souvent."
      ]
    ],
    "learnLabel": "Apprenez à peu près tout",
    "topics": [
      [
        "languages",
        "Vocabulaire"
      ],
      [
        "globe",
        "Capitales & géographie"
      ],
      [
        "calendar",
        "Dates historiques"
      ],
      [
        "sigma",
        "Formules & équations"
      ],
      [
        "microscope",
        "Anatomie & sciences"
      ],
      [
        "book-open",
        "Définitions & concepts"
      ],
      [
        "pen-tool",
        "Kanji & kana"
      ],
      [
        "users",
        "Visages & noms"
      ]
    ]
  },
  "principle": {
    "eyebrow": "Le principe",
    "s1": "Relire la réponse donne une impression de ",
    "sStrike": "progrès",
    "s2": ". Ce qui dure vraiment, c’est le ",
    "sHl": "rappel actif",
    "s3": " — retrouver la réponse de mémoire vous-même, au lieu de simplement la reconnaître sur la page.",
    "cols": [
      [
        "brain",
        "Retrouver, pas relire",
        "Chaque fois que vous ramenez une réponse de votre mémoire, vous la renforcez. La relecture passive ne change presque rien — c’est l’effort de rappel qui la fait tenir."
      ],
      [
        "pen-tool",
        "Produisez-la vous-même",
        "Tapez-la. Dessinez-la. La réponse reste cachée jusqu’à ce que vous ayez reconstruit la vôtre — car l’effort de la produire, c’est ça, apprendre."
      ],
      [
        "git-compare-arrows",
        "Noté automatiquement, dans les deux sens",
        "Fort en kanji→anglais mais faible dans l’autre sens ? Chaque direction est suivie et planifiée indépendamment."
      ]
    ]
  },
  "model": {
    "eyebrow": "Le modèle",
    "h2": "Chaque notion, décomposée en ce qui mérite d’être testé",
    "lead": "Une fiche classique a un recto et un verso. Une notion Gobilago conserve chaque facette testable d’une idée — sa lecture, son sens, sa forme — pour que chacune soit rappelée et planifiée séparément, pile au moment où vous êtes sur le point de l’oublier.",
    "items": [
      [
        "Notion",
        "circle-dot",
        "Une connaissance que vous voulez garder — ex. le mot « manger ». Elle vit dans votre mémoire à long terme comme un élément unique."
      ],
      [
        "Aspects",
        "scan-face",
        "Les facettes testables d’une notion : le kanji, la lecture, le sens. Chacune peut être une question ou une réponse."
      ],
      [
        "Cartes",
        "git-compare-arrows",
        "Un lien dirigé — aspect question → aspect réponse. Chaque carte est rappelée, notée et planifiée indépendamment."
      ],
      [
        "Clusters",
        "boxes",
        "Quand une carte en implique clairement une autre, elles partagent un calendrier — pour ne jamais répéter l’inutile."
      ]
    ]
  },
  "interactions": {
    "eyebrow": "Comment vous étudiez",
    "h2": "Trois façons de prouver que vous savez vraiment",
    "lead": "Chaque aspect choisit l’interaction qui teste vraiment la mémoire — puis Gobilago la note automatiquement, supprimant le biais de vous noter vous-même. Appuyez pour prévisualiser.",
    "types": [
      [
        "Affichage",
        "eye",
        "Contexte en lecture seule",
        "Un prompt statique qui encadre le test — une phrase, une image, une lecture. Il pose le décor mais n’est jamais noté seul.",
        "contexte"
      ],
      [
        "Écrire",
        "text-cursor-input",
        "Reproduire au clavier",
        "Tapez la pièce manquante et Gobilago la vérifie pour vous, caractère par caractère. Pas d’auto-évaluation « je le savais » — vous l’avez produite ou non.",
        "langue"
      ],
      [
        "Dessiner",
        "pen-tool",
        "Reconstruire à la main",
        "Retracez un symbole ou un diagramme trait par trait sur un canevas Skia. Parfait pour les kanji, kana, signatures et tout ce que vos doigts doivent mémoriser.",
        "langue"
      ]
    ],
    "fillBlank": "Complétez la phrase",
    "findKana": "Trouvez le kana",
    "context": "Contexte",
    "autoGraded": "Noté automatiquement · correct",
    "strokeOrder": "Ordre des traits reconnu"
  },
  "scheduler": {
    "eyebrow": "Le planificateur",
    "h2": "Il sait ce que vous êtes sur le point d’oublier",
    "lead": "Les connaissances traversent deux phases, automatiquement :",
    "phase1h": "Entraînement",
    "phase1p": "Répétitions rapides et fréquentes jusqu’à ce que vous vous en souveniez trois fois de suite. Les nouvelles connaissances commencent ici.",
    "phase2h": "Rétention",
    "phase2p": "Des intervalles inspirés de SM-2 qui s’allongent à mesure que vous réussissez. Ratez-en un et ça repart de zéro — l’honnîteté avant tout.",
    "offline": "Entièrement hors ligne. La synchronisation ne bloque jamais l’interface.",
    "cardHead": "Mémoire à long terme",
    "rows": [
      [
        "overdue",
        "a",
        "hiragana",
        "1 jour de retard"
      ],
      [
        "upcoming",
        "manger",
        "verbes français",
        "dans 1 jour"
      ],
      [
        "dormant",
        "comer",
        "espagnol",
        "dans 3 jours"
      ],
      [
        "upcoming",
        "食べる",
        "japonais",
        "dans 5 jours"
      ]
    ]
  },
  "features": {
    "eyebrow": "Inclus",
    "h2": "Tout ce dont un apprenant sérieux a vraiment besoin",
    "lead": "Pas de bruit, pas de harcèlement. Juste les outils qui rendent la construction et la rétention des connaissances naturelles.",
    "items": [
      [
        "layout-template",
        "var(--atom-indigo)",
        "Collections et modèles",
        "Des structures de notions réutilisables — intégrées, les vôtres ou de la communauté. Créez un nouveau deck en quelques secondes.",
        "Intégré"
      ],
      [
        "replace-all",
        "var(--atom-teal)",
        "Opérations sur les champs",
        "Transformez toute une collection en masse : rechercher & remplacer, changer la casse, ajouter des affixes, vider des champs.",
        null
      ],
      [
        "library-big",
        "var(--atom-violet)",
        "Bibliothèque communautaire",
        "Publiez, téléchargez et partagez des collections. Les instantanés versionnés garantissent que la mise à jour d’un auteur ne casse jamais votre copie.",
        null
      ],
      [
        "wifi-off",
        "var(--atom-green)",
        "Hors ligne en priorité",
        "Tout fonctionne sans signal. Votre graphe se synchronise discrètement en arrière-plan dès que vous êtes en ligne.",
        null
      ],
      [
        "copy-plus",
        "var(--atom-blue)",
        "Modèles dérivés",
        "Personnalisez un modèle lors de la création et Gobilago sauvegarde automatiquement une variante cachée dédupliquée — sans encombrement.",
        null
      ],
      [
        "lock",
        "var(--atom-amber)",
        "À vous, en privé",
        "Un verrou mono-appareil garde vos données cohérentes. Aucun compte requis pour commencer, jamais.",
        null
      ]
    ]
  },
  "roadmap": {
    "eyebrow": "À venir",
    "h2": "Ce qui arrive prochainement",
    "lead": "Gobilago est développé en open source. Voici un aperçu de ce qui est en cours — façonné, en partie, par vos demandes.",
    "items": [
      [
        "graduation-cap",
        "Modes Examen et Intensif",
        "Sessions de révision ciblées et examens chronométrés pour la veille."
      ],
      [
        "sparkles",
        "Génération de collections par IA",
        "Transformez un prompt ou un PDF en collection prête à étudier."
      ],
      [
        "arrow-left-right",
        "Import Anki & Quizlet",
        "Importez vos decks existants sans perdre votre historique."
      ],
      [
        "users",
        "Decks collaboratifs",
        "Construisez et maintenez des collections avec vos camarades."
      ],
      [
        "flame",
        "Séries quotidiennes et widget",
        "Un rappel discret sur l’écran d’accueil pour garder vos souvenirs frais."
      ]
    ]
  },
  "cta": {
    "h2": "Commencez à vraiment mémoriser.",
    "sub": "Gratuit pour débuter, fonctionne hors ligne, aucun compte requis. Créez votre première collection en quelques minutes.",
    "ios": "Nécessite iOS 17+"
  },
  "footer": {
    "brand": "Mémoriser, pas reconnaître. Une application de répétition espacée hors ligne pour ceux qui veulent vraiment retenir ce qu’ils apprennent.",
    "product": "Produit",
    "company": "Entreprise",
    "legal": "Légal",
    "productLinks": [
      [
        "Méthode",
        "#principle"
      ],
      [
        "Le modèle",
        "#model"
      ],
      [
        "Apprendre",
        "#types"
      ],
      [
        "Fonctionnalités",
        "#features"
      ]
    ],
    "companyLinks": [
      [
        "Feuille de route",
        "#roadmap"
      ],
      [
        "Contact",
        "mailto:contact@gobilago.com"
      ]
    ],
    "legalLinks": [
      [
        "Conditions d’utilisation",
        "terms.html"
      ],
      [
        "Politique de confidentialité",
        "privacy.html"
      ]
    ],
    "made": "Fait avec soin · iOS uniquement · Fonctionne hors ligne"
  },
  "phone": {
    "count1": "1 sur 2",
    "count2": "2 sur 2",
    "typeSpanish": "Tapez l’espagnol",
    "findKana": "Trouvez le kana",
    "prompt1": "manger",
    "submit": "Valider",
    "dontKnow": "Je ne sais pas",
    "closeMatch": "Presque",
    "correctAnswer": "Bonne réponse",
    "yourAnswer": "Votre réponse",
    "strokeOk": "Ordre des traits reconnu",
    "howWell": "Vous en souvenez-vous bien ?",
    "again": "Revoir",
    "hard": "Difficile",
    "easy": "Facile",
    "continue": "Continuer"
  },
  "appStore": {
    "line1": "T?l?charger dans",
    "line2": "l?App Store"
  },
  "tweaks": {
    "title": "R?glages",
    "mood": "Ambiance",
    "warm": "Teinte papier chaude",
    "dark": "Mode sombre",
    "confetti": "Confettis",
    "accent": "Accent",
    "accentColor": "Couleur d?accent",
    "hero": "En-t?te",
    "layout": "Mise en page"
  }
};
})();
