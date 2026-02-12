import Link from "next/link";

export default function Page() {
    return (
        <div className="container" style={{ color: "white", padding: "40px" }}>
            <Link href="/" style={{ textDecoration: "none", fontSize: "1.2rem", marginBottom: "20px", display: "inline-block" }}>
                ← Back to Home
            </Link>

            <h1 style={{ fontSize: "2.5rem", marginBottom: "30px", borderBottom: "2px solid rgba(255,255,255,0.2)", paddingBottom: "10px" }}>Team Handbook</h1>

            <section style={{ marginBottom: "40px" }}>
                <h2 style={{ fontSize: "1.8rem", marginBottom: "20px" }}>Our Core Values</h2>
                <ul style={{ fontSize: "1.1rem", lineHeight: "1.6", paddingLeft: "20px" }}>
                    <li><strong>Innovation First:</strong> We constantly push the boundaries of what is possible.</li>
                    <li><strong>Transparency:</strong> Open communication is key to our success.</li>
                    <li><strong>Collaboration:</strong> We believe that great things are achieved together.</li>
                    <li><strong>User-Centric:</strong> strictly adhere to user needs and feedback.</li>
                </ul>
            </section>

            <section>
                <h2 style={{ fontSize: "1.8rem", marginBottom: "20px" }}>Code of Conduct</h2>
                <p style={{ fontSize: "1.1rem", lineHeight: "1.6" }}>
                    We are committed to providing a friendly, safe, and welcoming environment for all, regardless of gender, sexual orientation, disability, ethnicity, or religion.
                    Mutual respect and inclusivity are non-negotiable parts of our daily work life.
                </p>
            </section>
        </div>
    );
}
