/* Gobilago.com ? EN site copy. */
(function () {
  window.I18n = window.I18n || {};
  window.I18n.en = {
  "langToggle": "FR",
  "nav": {
    "method": "Method",
    "model": "Model",
    "studying": "Studying",
    "features": "Features",
    "getApp": "Get the app"
  },
  "hero": {
    "tag": "Smarter flashcards · iPhone & iPad",
    "h1a": "Learn anything.",
    "h1b": "Remember it forever.",
    "lead1": "Gobilago is a spaced-repetition learning app that makes you ",
    "leadEm": "actively recall",
    "lead2": " what you study — typing, drawing, reproducing it actively from memory — then each card is brought back right before you’d forget.",
    "seeHow": "See how it works",
    "note": "Free to start · Works fully offline · No account required"
  },
  "intro": {
    "eyebrow": "What is Gobilago",
    "h2": "Smarter flashcards for anything worth remembering",
    "lead": "Gobilago is a learning app built on two simple ideas: actively recalling something makes it stick, and reviewing it right before you forget keeps it for good — that’s spaced repetition.",
    "steps": [
      [
        "pencil",
        "Make a card",
        "Turn anything you want to learn into a quick atomic \"notion\" containing different aspects to it (same as card faces except that a Gobilago notion can have an arbitrary number of faces)"
      ],
      [
        "brain",
        "Recall it",
        "In each session you reproduce the answer from memory. This removes the frustration of thinking you knew the answer once it is revealed : if you can't reproduce it, you don't know it."
      ],
      [
        "calendar-clock",
        "Review on time",
        "Each card records when they need to be reviewed next time based on jow you know it. It comes back just before you’d forget it, it will appear less and less often as it sticks."
      ]
    ],
    "learnLabel": "Learn just about anything",
    "topics": [
      [
        "languages",
        "Vocabulary"
      ],
      [
        "globe",
        "Capitals & geography"
      ],
      [
        "calendar",
        "Historical dates"
      ],
      [
        "sigma",
        "Formulas & equations"
      ],
      [
        "microscope",
        "Anatomy & science"
      ],
      [
        "book-open",
        "Definitions & concepts"
      ],
      [
        "pen-tool",
        "Kanji & kana"
      ],
      [
        "users",
        "Faces & names"
      ]
    ]
  },
  "principle": {
    "eyebrow": "The principle",
    "s1": "Re-reading the answer feels like ",
    "sStrike": "progress",
    "s2": ". What actually lasts is ",
    "sHl": "active recall",
    "s3": " — bringing the answer back from memory yourself, instead of passively acknowledge it when revealing the answer.",
    "cols": [
      [
        "brain",
        "Retrieve, don’t re-read",
        "Every time you pull an answer back from memory, you strengthen it. Passive review barely moves the needle — effortful recall along engages muscle memory which is a great way to boost the learning process."
      ],
      [
        "pen-tool",
        "Produce it yourself",
        "Type it. Draw it. The answer stays hidden until you’ve reconstructed your own — because the effort of producing it is the learning."
      ],
      [
        "git-compare-arrows",
        "Tested in both directions",
        "You can fully tailor how different aspects of a same notion interact with each other : tracking independantly both sides (e.g. English->Kanji and Kanji->English) or grouping them into a same \"cluster\" that trains both as one unique Spaced Repetition card."
      ]
    ]
  },
  "model": {
    "eyebrow": "The model",
    "h2": "Each notion, broken into what’s worth testing",
    "lead": "A flat flashcard has one front and one back. A Gobilago notion keeps every testable side of an idea — for instance, its reading, its meaning, its form — so each side can be recalled and scheduled on its own or grouped, exactly when you’re about to forget it.",
    "items": [
      [
        "Notion",
        "circle-dot",
        "A single piece of knowledge you want to keep — e.g. the word “to eat.” It lives in your long-term memory as one item."
      ],
      [
        "Aspects",
        "scan-face",
        "The testable sides of a notion: for instance, the kanji, the reading, the meaning. Each one can be a prompt or an answer."
      ],
      [
        "Cards",
        "git-compare-arrows",
        "A prompt aspect → answer aspect direction. Each card is recalled, graded and scheduled independently or grouped together so it doesn't make it too intense."
      ],
      [
        "Clusters",
        "boxes",
        "When knowing one card clearly implies you know the another, they share a schedule — so you never grind through redundant reps."
      ]
    ]
  },
  "interactions": {
    "eyebrow": "How you study",
    "h2": "Three ways to prove you actually know it",
    "lead": "Every aspect picks the interaction that genuinely tests recall — then Gobilago grades it automatically, removing the bias to mark yourself right. Tap to preview.",
    "types": [
      [
        "Display",
        "eye",
        "Read-only context",
        "A static prompt that frames the test — a sentence, an image, a reading. It sets the scene but is never scored on its own.",
        "context"
      ],
      [
        "Type",
        "text-cursor-input",
        "Reproduce by keyboard",
        "Type the missing piece and Gobilago checks it for you, character by character. No “I knew that” self-grading — you either produced it or you didn’t.",
        "language"
      ],
      [
        "Draw",
        "pen-tool",
        "Reconstruct by hand",
        "Redraw a symbol or diagram stroke-by-stroke on a Skia-powered canvas. Perfect for kanji, kana, signatures, and anything your fingers need to remember.",
        "language"
      ]
    ],
    "fillBlank": "Fill the blank",
    "findKana": "Find the kana",
    "context": "Context",
    "autoGraded": "Auto-graded · correct",
    "strokeOrder": "Stroke order recognised"
  },
  "scheduler": {
    "eyebrow": "The scheduler",
    "h2": "It knows what you’re about to forget",
    "lead": "Knowledge moves through two phases, automatically:",
    "phase1h": "Training",
    "phase1p": "Rapid, high-frequency reps until you recall it three times in a row. New knowledge sprints here first.",
    "phase2h": "Retention",
    "phase2p": "SM-2-inspired intervals that stretch as you succeed. Miss one and next review will be soon — honesty over streaks.",
    "offline": "Fully offline. Sync never blocks the UI.",
    "cardHead": "Long Term Memory",
    "rows": [
      [
        "overdue",
        "a",
        "hiragana",
        "1 day overdue"
      ],
      [
        "upcoming",
        "manger",
        "french verbs",
        "in 1 day"
      ],
      [
        "dormant",
        "comer",
        "espagnol",
        "in 3 days"
      ],
      [
        "upcoming",
        "食べる",
        "japonais",
        "in 5 days"
      ]
    ]
  },
  "features": {
    "eyebrow": "Built in",
    "h2": "Everything a serious learner actually needs",
    "lead": "No noise, no nagging. Just the tools that make building and keeping knowledge feel effortless.",
    "items": [
      [
        "layout-template",
        "var(--atom-indigo)",
        "Collections & templates",
        "Reusable notion structures — built-in, your own, or from the community. Spin up a new deck in seconds.",
        "Built-in"
      ],
      [
        "replace-all",
        "var(--atom-teal)",
        "Field operations",
        "Bulk-transform a whole collection at once: find & replace, change case, add affixes, clear fields.",
        null
      ],
      [
        "library-big",
        "var(--atom-violet)",
        "Community library",
        "Publish, download and share collections. Versioned snapshots mean an author’s update never breaks your copy.",
        null
      ],
      [
        "wifi-off",
        "var(--atom-green)",
        "Offline-first",
        "Everything works with zero signal. Your graph syncs quietly in the background the moment you’re back online.",
        null
      ],
      [
        "copy-plus",
        "var(--atom-blue)",
        "Derived templates",
        "Tweak a template as you create and Gobilago auto-saves a deduplicated hidden variant — no clutter.",
        null
      ],
      [
        "lock",
        "var(--atom-amber)",
        "Yours, privately",
        "A single-device lock keeps your data consistent. No account required to start, ever.",
        null
      ]
    ]
  },
  "roadmap": {
    "eyebrow": "On the way",
    "h2": "What’s coming next",
    "lead": "I am a solo developer building Gobilago constantly working on it to improve it. Here’s a peek at what I am working on to make this app fit my vision of the perfect flashcard system.",
    "items": [
      [
        "graduation-cap",
        "Exam & Intensive modes",
        "Focused cram sessions and timed exams for the night before."
      ],
      [
        "sparkles",
        "AI collection generation",
        "Turn a prompt or a PDF into a ready-to-study collection."
      ],
      [
        "arrow-left-right",
        "Anki & Quizlet import",
        "Bring your existing decks across without losing your history."
      ],
      [
        "users",
        "Collaborative decks",
        "Build and maintain collections together with classmates."
      ],
      [
        "flame",
        "Daily streaks & widget",
        "A gentle home-screen nudge to keep your memories fresh."
      ]
    ]
  },
  "cta": {
    "h2": "Start remembering things for real.",
    "sub": "Free to start, works fully offline, no account required. Build your first collection in a couple of minutes or download one.",
    "ios": "Requires iOS 16+"
  },
  "footer": {
    "brand": "Gobilago - An offline-first spaced-repetition app for people who want to actually keep what they learn.",
    "product": "Product",
    "company": "Company",
    "legal": "Legal",
    "productLinks": [
      [
        "Method",
        "#principle"
      ],
      [
        "The model",
        "#model"
      ],
      [
        "Studying",
        "#types"
      ],
      [
        "Features",
        "#features"
      ]
    ],
    "companyLinks": [
      [
        "Roadmap",
        "#roadmap"
      ],
      [
        "Support",
        "support.html"
      ],
      [
        "Contact",
        "mailto:contact@gobilago.com"
      ]
    ],
    "legalLinks": [
      [
        "Terms of Use",
        "terms.html"
      ],
      [
        "Privacy Policy",
        "privacy.html"
      ]
    ],
    "made": "Made with care · iOS only (for now) · Works offline"
  },
  "phone": {
    "count1": "1 of 2",
    "count2": "2 of 2",
    "typeSpanish": "Type the Spanish",
    "findKana": "Find the kana",
    "prompt1": "eat",
    "submit": "Submit",
    "dontKnow": "I don’t know",
    "closeMatch": "Close match",
    "correctAnswer": "Correct answer",
    "yourAnswer": "Your answer",
    "strokeOk": "Stroke order recognised",
    "howWell": "How well did you remember?",
    "again": "Again",
    "hard": "Hard",
    "easy": "Easy",
    "continue": "Continue"
  },
  "appStore": {
    "line1": "Download on the",
    "line2": "App Store"
  },
  "tweaks": {
    "title": "Tweaks",
    "mood": "Mood",
    "warm": "Warm paper tone",
    "dark": "Dark mode",
    "confetti": "Confetti moments",
    "accent": "Accent",
    "accentColor": "Accent color",
    "hero": "Hero",
    "layout": "Layout"
  }
};
})();
