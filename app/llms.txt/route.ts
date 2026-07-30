export const dynamic = "force-static";

const SITE_URL = "https://majorsandeepunnikrishnanfoundation.in";

const CONTENT = `# Major Sandeep Unnikrishnan Ashok Chakra Foundation

> Official website of the Major Sandeep Unnikrishnan Ashok Chakra Foundation, a charitable trust registered on 4 June 2026 in Kollam, Kerala, India, honouring Major Sandeep Unnikrishnan, Ashok Chakra (Posthumous) — team commander of the 51 Special Action Group, National Security Guard, who was killed defending hostages inside the Taj Mahal Palace Hotel, Mumbai, during Operation Black Tornado on 28 November 2008.

The Foundation carries forward Major Unnikrishnan's motto, "Seva Parmo Dharma" (service is the highest duty), through welfare work for defence personnel and their families, public welfare and medical relief, educational support for students, and initiatives promoting national service and patriotism.

## Key facts

- Honouree: Major Sandeep Unnikrishnan, Ashok Chakra (Posthumous), born 15 March 1977 in Kozhikode, Kerala; commissioned 12 June 1999 into 7 Bihar; served with 51 Special Action Group, National Security Guard; killed in action 28 November 2008 during Operation Black Tornado (26/11 Mumbai attacks).
- Trust registered: 4 June 2026, Kollam, Kerala.
- Founders: Colonel S. Dinny (Retd.), Colonel Kochu Koshy Panicker Shaurya Chakra (Retd.), and Major General (Dr) C. S. Nair Vishisht Seva Medal (Retd.).
- Registered address: Lakshanam, Valathungal PO, Kollam, Kerala - 691011, India.
- Phone: +91 95579 97414.

## Pages

- [Home](${SITE_URL}/): Biography, the Trust's mission, trustees, initiatives, and contact form.

## Sections on the homepage

- Biography — the life and final mission of Major Sandeep Unnikrishnan.
- The Trust — vision, mission, and the four pillars of the Foundation's work.
- Board of Trustees.
- Upcoming initiatives.
- Contact and support the Trust.
`;

export async function GET() {
  return new Response(CONTENT, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
    },
  });
}
