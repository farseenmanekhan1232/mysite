export interface Thought {
    slug: string;
    date: string;
    title: string;
    content: string;
}

export const thoughts: Thought[] = [
    {
        slug: 'mediocre-software',
        date: '2026-01-22',
        title: 'Why is all major software so mediocre?',
        content: `Why is it that almost all the major companies' software I use is pretty mediocre?

- On X, half of my video posts fail to upload multiple times, every time.
- On Meta's dev platform, it's nearly impossible to understand the docs to configure a WhatsApp bot, let alone test it.
- For Google Auth to work on a mobile app, I had to upload, create-delete-recreate a Firebase app and upload SHA-1 multiple times from multiple places to multiple places.
- For Microsoft, bro come on.
- On YouTube, half the time when I navigate from Shorts to homepage and back to Shorts, the first 20 Shorts are the exact same ones I already watched.
- Same for Instagram Reels.

Even after so many years in the business, all of them only care about shoving ads deep down our throats.

Now ChatGPT is doing the same.

Fuck ads.`
    },
    {
        slug: 'clarity-vs-code',
        date: '2026-01-13',
        title: 'Clarity vs Code',
        content: `Most people think building products is about code. I used to think that too.

But after building for clients, working at startups, and trying to ship my own SaaS, I realised something painful: code is maybe 30% of the equation. Clarity is the other 70%.

We obsess over the stack. Next.js vs SvelteKit. SQL vs NoSQL. We spend days setting up the "perfect" architecture for a problem we don't even fully understand yet. It's procrastination disguised as productivity.

The hardest part isn't writing the function. It's knowing exactly what that function needs to do for the user. It's having the clarity to say "no" to features that don't matter.

Building fast is good. But building the *right* thing is better. And you can't build the right thing if you're busy fighting your tools instead of understanding the problem.`
    },
    {
        slug: 'ai-and-insecurity',
        date: '2026-01-08',
        title: 'AI and the death of the craftsman',
        content: `There's a specific feeling I get now when I code. It's not the flow state I used to have. It's something else.

When I write code now, I'm often just steering an LLM. "Generate a function that does X." "Fix this error." "Refactor this."

It works. It's faster. It's objectively more efficient.

But it's ruining the joy of programming for me.

I used to pride myself on thinking through the edge cases. On holding the entire logic tree in my head. On that moment when the complex system you visualized actually runs.

Now? I'm left with this lingering "what if" insecurity. Did I really build this? Or did I just assemble it? If the AI made a subtle logic error, will I even catch it, or have I become too lazy to read the code deeply?

We're trading mastery for speed. Maybe that's the inevitable trade-off of technology, but it feels like we're losing something human in the process.`
    },
    {
        slug: 'build-boring',
        date: '2026-01-13',
        title: 'Build boring things',
        content: `Everyone wants to build the next big thing. The next Notion. The next Linear. The next OpenAI wrapper that changes the world.

So we over-engineer. We add AI to things that need a spreadsheet. We build complex microservices for an app with zero users.

But look at the real problems people have. They're usually small, annoying, and repeated daily.

They don't need fancy agents. They don't need a vector database. They need a button that actually works. They need a form that saves their data reliably.

I'm learning to embrace the "boring." Solve a real problem for a real person. Make it reliable. Make it fast.

Money follows utility, not complexity.`
    },
    {
        slug: 'coding-agents',
        date: '2025-12-24',
        title: 'We are the new mill workers',
        content: `Writing code is becoming overrated.

We are living through the exact same transition that textile workers faced during the Industrial Revolution. For a long time, weaving was a skilled craft. Then the machines came.

The weavers who refused to adapt were left behind. The ones who learned to operate the machines—to become the orchestrators rather than the laborers—stayed relevant.

We are seeing the same thing with coding agents. The "labor" of writing syntax is crashing to zero value. If your only skill is memorizing React hooks, you're in trouble.

But curiosity? The ability to connect dots? The ability to understand a system and direct the machine to build it? That value is constant.

History is repeating. We just have better screens.`
    },
    {
        slug: 'optimism-roi',
        date: '2025-12-20',
        title: 'The ROI of optimism',
        content: `It's cool to be cynical. It's easy to look at everything—the job market, the AI hype, the economy—and say "it's all over."

Shitposting and doom-scrolling feel good in the moment. They validate our fears.

But looking back, every good thing that happened to me came from a moment of irrational optimism. Applying for a job I wasn't qualified for. Starting a project when I had no time. Reaching out to someone way out of my league.

Optimism is a strategy. It's a competitive advantage because most people are too busy being "realistic" to try the things that might actually work.

I'm choosing to be optimistic. Not because I'm blind to the problems, but because it's the only way to actually solve them.`
    }
];
