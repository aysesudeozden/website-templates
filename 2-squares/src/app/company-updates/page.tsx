import Link from "next/link";

export default function Page() {
    const updates = [
        { date: "Oct 24, 2025", title: "Global Expansion Plans Announced", snippet: "We are excited to open new offices in London and Tokyo next year." },
        { date: "Sep 10, 2025", title: "Q3 Financial Results Record Highs", snippet: "Our quarterly revenue has exceeded expectations by 40%." },
        { date: "Aug 15, 2025", title: "New Partnership with TechGiant", snippet: "Collaborating to bring AI-driven solutions to a wider market." },
    ];

    return (
        <div className="container" style={{ color: "white", padding: "40px" }}>
            <Link href="/" style={{ textDecoration: "none", fontSize: "1.2rem", marginBottom: "20px", display: "inline-block" }}>
                ← Back to Home
            </Link>

            <h1 style={{ fontSize: "2.5rem", marginBottom: "30px", borderBottom: "2px solid rgba(255,255,255,0.2)", paddingBottom: "10px" }}>Company Updates</h1>

            <div style={{ display: "flex", flexDirection: "column", gap: "30px" }}>
                {updates.map((update, index) => (
                    <article key={index} style={{ borderLeft: "4px solid white", paddingLeft: "20px" }}>
                        <small style={{ opacity: 0.8, fontSize: "0.9rem" }}>{update.date}</small>
                        <h2 style={{ fontSize: "1.5rem", margin: "5px 0 10px 0" }}>{update.title}</h2>
                        <p style={{ lineHeight: "1.5" }}>{update.snippet}</p>
                    </article>
                ))}
            </div>
        </div>
    );
}
