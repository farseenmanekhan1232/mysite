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
        title: 'why is all major software so mediocre?',
        content: `why is it that almost all the major companies' software i use is pretty mediocre?

- on x, half of my video posts fail to upload multiple times, every time.
- on meta's dev platform, it's nearly impossible to understand the docs to configure a whatsapp bot, let alone test it.
- for google auth to work on a mobile app, i had to upload, create-delete-recreate a firebase app and upload sha-1 multiple times from multiple places to multiple places.
- for microsoft, bro come on.
- on youtube, half the time when i navigate from shorts to homepage and back to shorts, the first 20 shorts are the exact same ones i already watched.
- same for instagram reels.

even after so many years in the business, all of them only care about shoving ads deep down our throats.

now chatgpt is doing the same.

fuck ads.`
    },
    {
        slug: 'clarity-vs-code',
        date: '2026-01-13',
        title: 'clarity vs code',
        content: `most people think building products is about code. i used to think that too.

but after building for clients, working at startups, and trying to ship my own saas, i realised something painful: code is maybe 30% of the equation. clarity is the other 70%.

we obsess over the stack. next.js vs sveltekit. sql vs nosql. we spend days setting up the "perfect" architecture for a problem we don't even fully understand yet. it's procrastination disguised as productivity.

the hardest part isn't writing the function. it's knowing exactly what that function needs to do for the user. it's having the clarity to say "no" to features that don't matter.

building fast is good. but building the *right* thing is better. and you can't build the right thing if you're busy fighting your tools instead of understanding the problem.`
    },
    {
        slug: 'ai-and-insecurity',
        date: '2026-01-08',
        title: 'ai and the death of the craftsman',
        content: `there's a specific feeling i get now when i code. it's not the flow state i used to have. it's something else.

when i write code now, i'm often just steering an llm. "generate a function that does X." "fix this error." "refactor this."

it works. it's faster. it's objectively more efficient.

but it's ruining the joy of programming for me.

i used to pride myself on thinking through the edge cases. on holding the entire logic tree in my head. on that moment when the complex system you visualized actually runs.

now? i'm left with this lingering "what if" insecurity. did i really build this? or did i just assemble it? if the ai made a subtle logic error, will i even catch it, or have i become too lazy to read the code deeply?

we're trading mastery for speed. maybe that's the inevitable trade-off of technology, but it feels like we're losing something human in the process.`
    },
    {
        slug: 'build-boring',
        date: '2026-01-13',
        title: 'build boring things',
        content: `everyone wants to build the next big thing. the next notion. the next linear. the next open ai wrapper that changes the world.

so we over-engineer. we add ai to things that need a spreadsheet. we build complex microservices for an app with zero users.

but look at the real problems people have. they're usually small, annoying, and repeated daily.

they don't need fancy agents. they don't need a vector database. they need a button that actually works. they need a form that saves their data reliably.

i'm learning to embrace the "boring." solve a real problem for a real person. make it reliable. make it fast.

money follows utility, not complexity.`
    },
    {
        slug: 'coding-agents',
        date: '2025-12-24',
        title: 'we are the new mill workers',
        content: `writing code is becoming overrated.

we are living through the exact same transition that textile workers faced during the industrial revolution. for a long time, weaving was a skilled craft. then the machines came.

the weavers who refused to adapt were left behind. the ones who learned to operate the machines—to become the orchestrators rather than the laborers—stayed relevant.

we are seeing the same thing with coding agents. the "labor" of writing syntax is crashing to zero value. if your only skill is memorizing react hooks, you're in trouble.

but curiosity? the ability to connect dots? the ability to understand a system and direct the machine to build it? that value is constant.

history is repeating. we just have better screens.`
    },
    {
        slug: 'optimism-roi',
        date: '2025-12-20',
        title: 'the roi of optimism',
        content: `it's cool to be cynical. it's easy to look at everything—the job market, the ai hype, the economy—and say "it's all over."

shitposting and doom-scrolling feel good in the moment. they validate our fears.

but looking back, every good thing that happened to me came from a moment of irrational optimism. applying for a job i wasn't qualified for. starting a project when i had no time. reaching out to someone way out of my league.

optimism is a strategy. it's a competitive advantage because most people are too busy being "realistic" to try the things that might actually work.

i'm choosing to be optimistic. not because i'm blind to the problems, but because it's the only way to actually solve them.`
    }
];
