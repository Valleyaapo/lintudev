export interface Project {
  id: string;
  title: string;
  category: string;
  year: string;
  client: string;
  service: string;
  stack: string;
  description: string;
  heroImage: string;
  challenge: string;
  solution: string;
  features: string[];
  links?: Array<{
    label: string;
    url: string;
    download?: boolean;
  }>;
}

export const projects: Project[] = [
  {
    id: "linjalla",
    title: "Linjalla",
    category: "iOS Navigation",
    year: "2026",
    client: "Self-published",
    service: "Mobile App Development",
    stack: "Swift, SwiftUI, MapKit, CoreLocation, GTFS API",
    description: "Live bus and tram positions on a map, for six Finnish transit regions. Built natively for iPhone.",
    heroImage: "/assets/linjalla-hero.jpg", 
    challenge: "Timetable apps list departures; Linjalla shows where each bus and tram is on the map right now. The technical problem was handling high-frequency updates from Digitransit's real-time feeds without draining the battery, cluttering the screen or making the map stutter.",
    solution: "A native SwiftUI app that reads GTFS Realtime feeds and draws vehicle positions on MapKit. It polls for updates and caches data locally, so the map keeps working on a patchy connection. The interface uses high contrast so it reads quickly on the move.",
    features: [
      "Real-time vehicle tracking on interactive map",
      "Live arrival estimates for stops",
      "Six Finnish regions: HSL, Tampere, Turku, Oulu, Kuopio, Jyväskylä",
      "High-contrast interface for use on the move"
    ],
    links: [
      {
        label: "Visit app",
        url: "https://linjalla.app"
      },
      {
        label: "App Store",
        url: "https://apps.apple.com/fi/app/linjalla/id6757194796"
      }
    ]
  },
  {
    id: "atelier",
    title: "Atelier",
    category: "iOS Learning",
    year: "2026",
    client: "Self-published",
    service: "Mobile App Development",
    stack: "Swift, SwiftUI, SwiftData, FSRS, AVFoundation",
    description: "Spaced-repetition flashcards for art and languages. Atelier teaches painters and paintings by sight, and French or Swedish words by ear and by hand.",
    heroImage: "/assets/atelier-hero.jpg",
    challenge: "General flashcard apps treat every card as plain text, so a painting and a French noun get the same bare question and answer. Learning art needs the image to lead; learning a language needs sound, grammatical gender and eventually producing the word, not only recognising it. People also arrive with years of review history in other apps and don't want to start over.",
    solution: "A native SwiftUI app with a different card face for each kind of deck: artworks fill the card, vocabulary shows gender tags, example sentences and spoken audio, and well-known words graduate to typed recall. A modern FSRS scheduler picks only what's about to be forgotten. Deck packages from other flashcard apps import with their images, audio and review history, so progress carries over. Everything stays on the device.",
    features: [
      "Artwork cards with a period filter, from the Renaissance onward",
      "Spoken words, gender tags and example sentences",
      "Recognise, Write and Mixed review modes per deck",
      "FSRS spaced-repetition scheduling with daily limits",
      "Imports .apkg and .colpkg decks with media and history",
      "No account, no tracking; all data stays on the iPhone"
    ],
    links: [
      {
        label: "App Store",
        url: "https://apps.apple.com/fi/app/atelier-flashcards-study/id6835171304"
      },
      {
        label: "Download sample deck",
        url: "/atelier/atelier-sample.apkg",
        download: true
      },
      {
        label: "Support",
        url: "/atelier/support"
      },
      {
        label: "Privacy",
        url: "/atelier/privacy"
      }
    ]
  },
  {
    id: "jatkopaikka",
    title: "Jatkopaikka",
    category: "Social Platform",
    year: "2026",
    client: "Self-published",
    service: "Full Stack Development",
    stack: "Next.js, React, Supabase, PostgreSQL, PostGIS, MapLibre, Vercel",
    description: "A live map of which bars are busy right now, built from check-ins. A venue shows a count only once three verified people are in, and every check-in expires at 06:00.",
    heroImage: "/assets/jatkopaikka-hero.jpg",
    challenge: "On a night out it's hard to know which places are busy right now and where your friends are without a long debate. Review sites only show static information. The technical problem was serving live check-ins and crowd counts to everyone at once during the weekend peak.",
    solution: "Check-ins feed a live map: venues show anonymous crowd counts, and friends see where each other are. The backend is serverless, so it scales up on Friday and Saturday nights, and WebSocket updates keep the map current without reloading.",
    features: [
      "Real-time crowd counts, shown only once three verified users are in",
      "Social check-ins and status sharing between friends",
      "Interactive map of local nightlife spots",
      "Live check-ins expire at 06:00; personal history is deleted after 30 days",
      "Sign-up with social accounts"
    ],
    links: [
      {
        label: "Visit site",
        url: "https://jatkopaikka.com"
      }
    ]
  }
];

export const getProject = (id: string | undefined): Project | undefined => {
  return projects.find((p) => p.id === id);
};

export const getNextProject = (currentId: string): Project | undefined => {
  const currentIndex = projects.findIndex((p) => p.id === currentId);
  if (currentIndex === -1) return projects[0];
  const nextIndex = (currentIndex + 1) % projects.length;
  return projects[nextIndex];
};
