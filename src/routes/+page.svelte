<script lang="ts">
    import { thoughts } from '$lib/thoughts';
    
    // Sort by date descending
    const sortedThoughts = [...thoughts].sort((a, b) => 
        new Date(b.date).getTime() - new Date(a.date).getTime()
    );

    function formatDate(dateStr: string) {
        return new Date(dateStr).toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'short', 
            day: 'numeric'
        });
    }
</script>

<svelte:head>
    <title>Farseen - Wikipedia</title>
    <meta name="description" content="Farseen - Fullstack developer building AI and streaming tools" />
</svelte:head>

<div class="container">
    <h1>Farseen</h1>
    <div class="hatnote">From the free encyclopedia, about the developer Farseen</div>

    <div class="infobox">
        <div class="infobox-title">Farseen</div>
        <div class="infobox-image">
            <img src="/me.png" alt="Farseen" />
        </div>
        <div class="infobox-row">
            <div class="infobox-header">Born</div>
            <div class="infobox-data">c. 2001<br/>Hubli, India</div>
        </div>
        <div class="infobox-row">
            <div class="infobox-header">Occupation</div>
            <div class="infobox-data">Software Developer</div>
        </div>
        <div class="infobox-row">
            <div class="infobox-header">Known for</div>
            <div class="infobox-data">Open-source AI tooling, Streaming infrastructure</div>
        </div>
        <div class="infobox-row">
            <div class="infobox-header">Website</div>
            <div class="infobox-data"><a href="https://github.com/farseenmanekhan1232">GitHub</a></div>
        </div>
        <div class="infobox-row">
            <div class="infobox-header">Socials</div>
            <div class="infobox-data">
                <a href="https://x.com/farsn_">X (Twitter)</a><br/>
                <a href="https://www.linkedin.com/in/farseen-m-2419531a7">LinkedIn</a><br/>
                <a href="https://www.youtube.com/@1farseen">YouTube</a><br/>
                <a href="https://farseen.substack.com/">Substack</a><br/>
                <a href="https://farseenmanekhan1232.medium.com/">Medium</a>
            </div>
        </div>
    </div>

    <p><b>Farseen</b> is an Indian software developer based in Hubli. Known for his open-source work on AI tooling and streaming infrastructure, his projects are characterized by a focus on authentic human utility over algorithmic engagement. He has been active in web development, specializing in fullstack applications using <a href="https://svelte.dev/">Svelte</a>, <a href="https://nextjs.org/">Next.js</a>, and <a href="https://workers.cloudflare.com/">Cloudflare Workers</a>.</p>

    <div class="toc">
        <div class="toc-title">Contents</div>
        <ul>
            <li><a href="#Biography"><span class="toc-number">1</span> Biography</a></li>
            <li><a href="#Skills"><span class="toc-number">2</span> Skills</a></li>
            <li><a href="#Projects"><span class="toc-number">3</span> Projects</a></li>
            <li><a href="#Thoughts"><span class="toc-number">4</span> Thoughts</a></li>
            <li><a href="#References"><span class="toc-number">5</span> References</a></li>
        </ul>
    </div>

    <details open>
        <summary><h2 id="Biography" style="display:inline-block; border-bottom: none; margin-top: 0; width: calc(100% - 1.5rem);">Biography</h2><div style="border-bottom: 1px solid var(--border-color); margin-bottom: 0.5em; margin-top: -0.5em;"></div></summary>
        <p>Farseen's path into software engineering began through self-taught exploration, starting with writing <a href="https://en.wikipedia.org/wiki/Python_(programming_language)">Python</a> scripts out of pure curiosity. He eventually transitioned into web development as a career.<sup id="cite_ref-1"><a href="#cite_note-1">[1]</a></sup> His early experiences in freelancing shaped his software philosophy, teaching him the realities of shipping production software: moving fast, writing reliable code, and solving actual user problems.</p>
        
        <p>He is a vocal critic of the "algorithmic noise" prevalent in modern social media, arguing that <a href="https://en.wikipedia.org/wiki/Artificial_intelligence">artificial intelligence</a> should act as a tool to automate "grunt work" rather than a replacement for human intent and creativity.<sup id="cite_ref-2"><a href="#cite_note-2">[2]</a></sup> Now, he spends most of his time building open-source tools he wants to see in the world.</p>
    </details>

    <details open>
        <summary><h2 id="Skills" style="display:inline-block; border-bottom: none; margin-top: 0; width: calc(100% - 1.5rem);">Skills</h2><div style="border-bottom: 1px solid var(--border-color); margin-bottom: 0.5em; margin-top: -0.5em;"></div></summary>
        <h3>Core Stack</h3>
        <ul>
            <li><b>Frontend:</b> <a href="https://en.wikipedia.org/wiki/React_(software)">React 19</a>, <a href="https://en.wikipedia.org/wiki/Next.js">Next.js 15</a>, <a href="https://en.wikipedia.org/wiki/TypeScript">TypeScript</a>, TailwindCSS 4, Vite</li>
            <li><b>Backend:</b> <a href="https://en.wikipedia.org/wiki/Node.js">Node.js</a>, Express, <a href="https://en.wikipedia.org/wiki/PostgreSQL">PostgreSQL</a>, <a href="https://en.wikipedia.org/wiki/Redis">Redis</a></li>
            <li><b>Languages:</b> JavaScript/TypeScript, Python, Shell scripting</li>
        </ul>

        <h3>Technical Differentiators</h3>
        <ul>
            <li><b>Cloudflare Edge Platform:</b> Workers, Pages, D1, R2, Vectorize, Workers AI, Durable Objects, OpenNext deployment</li>
            <li><b>AI/Vector Search:</b> Embeddings, semantic search, <a href="https://en.wikipedia.org/wiki/Large_language_model">LLM</a> orchestration, multi-API integration (Exa, Perplexity, etc.)</li>
            <li><b>Real-time Systems:</b> <a href="https://en.wikipedia.org/wiki/WebSocket">WebSockets</a>, Socket.IO, live data streaming</li>
            <li><b>Media Infrastructure:</b> <a href="https://en.wikipedia.org/wiki/FFmpeg">FFmpeg</a>, <a href="https://en.wikipedia.org/wiki/Real-Time_Messaging_Protocol">RTMP streaming</a>, MediaMTX/NGINX-RTMP</li>
        </ul>

        <h3>Secondary Skills</h3>
        <ul>
            <li><a href="https://en.wikipedia.org/wiki/Docker_(software)">Docker</a>, <a href="https://en.wikipedia.org/wiki/CI/CD">CI/CD</a></li>
            <li>Authentication (<a href="https://en.wikipedia.org/wiki/OAuth">OAuth</a>, Passport.js)</li>
            <li>File processing (PDFs, images, code)</li>
            <li>UI libraries (Radix UI, animation with Motion)</li>
        </ul>
    </details>

    <details open>
        <summary><h2 id="Projects" style="display:inline-block; border-bottom: none; margin-top: 0; width: calc(100% - 1.5rem);">Projects</h2><div style="border-bottom: 1px solid var(--border-color); margin-bottom: 0.5em; margin-top: -0.5em;"></div></summary>
        <p>His earlier stack revolved around TypeScript, Svelte, Next.js, Node, Postgres, and Cloudflare Workers. Recently, he has been deeply involved in AI/ML integration (using <a href="https://en.wikipedia.org/wiki/OpenAI">OpenAI</a>, Groq, and Vector DBs) and real-time streaming protocols (<a href="https://en.wikipedia.org/wiki/WebRTC">WebRTC</a>, mediasoup, FFmpeg).</p>
        
        <p>Farseen's notable open-source projects include:</p>

        <div class="thumb">
            <div class="thumbinner">
                <img src="/ideas.png" alt="Rynk Ideas Web screenshot" class="thumbimage" loading="lazy" />
            </div>
        </div>
        <h3 style="margin-top: 0.5em;"><a href="https://github.com/rynk-ai/rynk-ideas-web">Rynk Ideas</a></h3>
        <p>An open-source AI thought capture and synthesis tool built on the Cloudflare Edge platform. It acts as a pipeline converting raw thought "dumps" into clustered "Idea Threads" and actionable research plans. The technical stack involves Next.js, Cloudflare Workers, D1 (SQLite database), Vectorize for semantic search, and Groq for <a href="https://en.wikipedia.org/wiki/Large_language_model">LLM</a> orchestration.</p>
        <div class="clear-float"></div>

        <div class="thumb">
            <div class="thumbinner">
                <img src="/rynk.gif" alt="Rynk.io demo" class="thumbimage" loading="lazy" />
            </div>
        </div>
        <h3 style="margin-top: 0.5em;"><a href="https://rynk.io">Rynk.io</a></h3>
        <p>An AI-powered research platform running entirely on Cloudflare's edge network, utilizing embeddings and semantic search to connect ideas efficiently.</p>
        <div class="clear-float"></div>

        <div class="thumb">
            <div class="thumbinner">
                <img src="/neustream.png" alt="Neustream.app demo" class="thumbimage" loading="lazy" />
            </div>
        </div>
        <h3 style="margin-top: 0.5em;"><a href="https://neustream.app">Neustream.app</a></h3>
        <p>A multi-platform streaming infrastructure tool positioned as an open-source alternative to services like Restream. It leverages <a href="https://en.wikipedia.org/wiki/Real-Time_Messaging_Protocol">RTMP streaming</a> and <a href="https://en.wikipedia.org/wiki/FFmpeg">FFmpeg</a> to ingest a single video source and broadcast it efficiently to multiple destinations.</p>
        <div class="clear-float"></div>

        <div class="thumb">
            <div class="thumbinner">
                <img src="/winset.gif" alt="Win-set demo" class="thumbimage" loading="lazy" />
            </div>
        </div>
        <h3 style="margin-top: 0.5em;"><a href="https://github.com/farseenmanekhan1232/win-set">Win-set</a></h3>
        <p>A minimal, highly opinionated window manager for <a href="https://en.wikipedia.org/wiki/MacOS">macOS</a> with Hyprland-style auto-tiling. Built natively in Swift, it features Vim-style navigation (h/j/k/l), smart resize logic that pauses constraints during adjustment, drag-to-swap behavior, and multi-monitor support running on a lightweight footprint.</p>
        <div class="clear-float"></div>

        <div class="thumb">
            <div class="thumbinner">
                <img src="/tkeybr.gif" alt="Tkeybr demo" class="thumbimage" loading="lazy" />
            </div>
        </div>
        <h3 style="margin-top: 0.5em;"><a href="https://github.com/farseenmanekhan1232/tkeybr">Tkeybr</a></h3>
        <p>A terminal-based typing tutor directly inspired by keybr.com. It is designed to train muscle memory utilizing an adaptive learning algorithm with progressive letter unlocking, phonetic pseudo-words for natural typing, and real-time statistics tracking WPM, accuracy, and per-key errors through keyboard heatmaps.</p>
        <div class="clear-float"></div>

        <div class="thumb">
            <div class="thumbinner">
                <img src="/cf-companion.png" alt="CF-Tool Companion demo" class="thumbimage" loading="lazy" />
            </div>
        </div>
        <h3 style="margin-top: 0.5em;"><a href="https://github.com/farseenmanekhan1232/cf-tool">CF-Tool Companion</a></h3>
        <p>A <a href="https://en.wikipedia.org/wiki/Google_Chrome">Chrome</a> extension specifically built to resolve authentication friction in the popular Codeforces CLI tool. It streamlines the login process, allowing competitive programmers to seamlessly submit code and parse test cases directly from their terminal.</p>
        <div class="clear-float"></div>

        <h3 style="margin-top: 0.5em;"><a href="https://github.com/farseenmanekhan1232/opencode-ollama-multi-auth">opencode-ollama-multi-auth</a></h3>
        <p>An <a href="https://github.com/opencode-ai">Opencode</a> plugin for managing multiple Ollama Cloud API keys with automatic failover. It provides seamless key rotation on authentication errors (401, 403, 429), automatic key recovery after a configurable window, and supports both <code>opencode.json</code> and environment variable configuration. Built with TypeScript for developers needing reliable LLM API access without rate limit interruptions.</p>
    </details>

    <details open>
        <summary><h2 id="Thoughts" style="display:inline-block; border-bottom: none; margin-top: 0; width: calc(100% - 1.5rem);">Thoughts</h2><div style="border-bottom: 1px solid var(--border-color); margin-bottom: 0.5em; margin-top: -0.5em;"></div></summary>
        <p>A chronological timeline of public writings and journal entries.</p>
        
        <div class="thoughts-feed">
            {#each sortedThoughts as thought}
                <details class="thought-item" style="margin-left: 1em; margin-bottom: 1.5em;">
                    <summary style="font-size: 1.1em; margin-top: 0.5em;">
                        <h3 style="display:inline; margin: 0; font-size: 1em;">{thought.title}</h3> 
                        <span style="color: var(--text-muted); font-size: 0.8em; margin-left: 0.5rem; font-weight: normal;">— {formatDate(thought.date)}</span>
                    </summary>
                    <div class="thought-content" style="margin-top: 0.5em; padding-left: 1.5em; border-left: 2px solid #eaecf0; white-space: pre-wrap;">
                        {thought.content}
                    </div>
                </details>
            {/each}
        </div>
    </details>

    <details open>
        <summary><h2 id="References" style="display:inline-block; border-bottom: none; margin-top: 0; width: calc(100% - 1.5rem);">References</h2><div style="border-bottom: 1px solid var(--border-color); margin-bottom: 0.5em; margin-top: -0.5em;"></div></summary>
        <ol class="references-list">
            <li id="cite_note-1"><b><a href="#cite_ref-1">^</a></b> Farseen on GitHub. <a href="https://github.com/farseenmanekhan1232">github.com/farseenmanekhan1232</a></li>
            <li id="cite_note-2"><b><a href="#cite_ref-2">^</a></b> Farseen on Substack. <a href="https://farseen.substack.com/">farseen.substack.com</a></li>
            <li id="cite_note-3"><b>^</b> Professional inquiries. <a href="https://www.upwork.com/freelancers/farseen">Hire on Upwork</a></li>
            <li id="cite_note-4"><b>^</b> Contact: <a href="mailto:farseenmanekhan1232@gmail.com">farseenmanekhan1232@gmail.com</a></li>
        </ol>
    </details>
</div>
