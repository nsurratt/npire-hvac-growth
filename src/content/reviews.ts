export interface Review {
  name: string
  neighborhood: string
  rating: number
  text: string
  date: string
}

export const allReviews: Review[] = [
  { name: 'Rhonda L.', neighborhood: 'St. Matthews', rating: 5, text: "Jim came out on a 95-degree day in July, diagnosed the issue in 20 minutes, and had us cooling again in two hours. He even noticed our filter was clogged and changed it without charging extra.", date: 'March 2024' },
  { name: 'Brad T.', neighborhood: 'Middletown', rating: 5, text: "We got three quotes for a new AC system. Jim's wasn't the lowest but he was the only one who did a proper load calculation and explained why the other quotes were recommending an oversized unit.", date: 'February 2024' },
  { name: 'Maria S.', neighborhood: 'Jeffersontown', rating: 5, text: "Nate caught a cracked heat exchanger — a real safety issue. He didn't try to scare us into a full system replacement; he explained the options clearly and let us decide. That kind of honesty is rare.", date: 'January 2024' },
  { name: 'Dennis H.', neighborhood: 'Prospect', rating: 5, text: "Jim has serviced my HVAC for six years. He remembers what was done last time, what's on its way out, what to watch for. That continuity is worth a lot — you can't get that from a big company.", date: 'November 2023' },
  { name: 'Carol V.', neighborhood: 'Louisville East End', rating: 5, text: "Emergency call on a Saturday night — furnace out in December. Nate was there within two hours. Fixed it, explained what happened, and billed fair. I can't say enough good things.", date: 'December 2023' },
  { name: 'James P.', neighborhood: 'Shelbyville', rating: 4, text: "Good honest work. Jim installed a whole new system and did the load calc himself — didn't just quote us the biggest unit available. Two years later, everything runs great.", date: 'October 2023' },
  { name: 'Angela K.', neighborhood: 'St. Matthews', rating: 5, text: "Wanda in the office is amazing — she called back within 20 minutes on a Friday afternoon. The whole experience, start to finish, feels like dealing with people who actually care.", date: 'September 2023' },
  { name: 'Robert F.', neighborhood: 'LaGrange', rating: 5, text: "I drive past three other HVAC companies to get to Hometown, and I'll keep doing it. Jim treats every job like it's his own house. I trust him completely.", date: 'August 2023' },
]
