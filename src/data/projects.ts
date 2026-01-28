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
}

export const projects: Project[] = [
  {
    id: "linjalla",
    title: "Linjalla",
    category: "iOS Navigation",
    year: "2026",
    client: "Self-Published",
    service: "Mobile App Development",
    stack: "Swift, SwiftUI, MapKit, CoreLocation, GTFS API",
    description: "Real-time public transit navigation app for Finnish cities with live tracking and route optimization. Linjalla helps commuters visualize bus and tram movements in real-time.",
    heroImage: "/assets/linjalla-hero.jpg", 
    challenge: "Commuters in Finnish cities needed a more visual, immediate way to see public transport locations than traditional timetable apps provided. The challenge was to handle real-time high-frequency data updates from public transit APIs Digitransit without draining battery or cluttering the UI, while maintaining smooth map interactions.",
    solution: "A native iOS application built with SwiftUI for high performance and responsiveness. The app consumes GTFS Realtime feeds to render vehicle positions on a MapKit interface. Smart data polling and local caching strategies ensure the app remains responsive even with spotty network connections. The design focuses on high contrast and quick interactions for on-the-go usage.",
    features: [
      "Real-time vehicle tracking on interactive map",
      "Live arrival estimates for stops",
      "Support for HSL (Helsinki) regions",
      "Minimalist, battery-efficient design",
      "Native iOS performance with SwiftUI"
    ]
  },
  {
    id: "jatkopaikka",
    title: "Jatkopaikka",
    category: "Social Platform",
    year: "2026",
    client: "Personal Project",
    service: "Full Stack Development",
    stack: "React, Node.js, Vercel, WebSocket, PostgreSQL",
    description: "Social check-in service connecting users with local venues, events, and community recommendations. Jatkopaikka provides real-time insights into nightlife activity.",
    heroImage: "/assets/jatkopaikka-hero.jpg",
    challenge: "Nightlife goers often struggle to know which venues are lively right now and where friends are tonight without long debates. Existing review sites offer static data, but lack real-time 'vibe' indicators. The technical challenge was to aggregate and serve live crowd density data and user check-ins instantly to thousands of concurrent users during peak weekend hours.",
    solution: "A real-time social platform that aggregates user check-ins and anonymous density data to show a 'heat map' of nightlife activity. Built on a serverless architecture to scale automatically during Friday and Saturday nights. Uses WebSockets to push live updates to the client so users always see the current state of venues.",
    features: [
      "Real-time venue occupancy indicators when treshold met",
      "Social check-ins and status sharing between friends",
      "Scalable serverless backend",
      "Interactive map of local nightlife spots",
      "Privacy-focused anonymous data handling, all check-in data deleted each morning",
      "easy sign-up with social accounts"
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
