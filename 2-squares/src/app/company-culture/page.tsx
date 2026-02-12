import Link from "next/link";

export default function Page() {
    return (
        <div className="container" style={{ color: "white", padding: "40px" }}>
            <Link href="/" style={{ textDecoration: "none", fontSize: "1.2rem", marginBottom: "20px", display: "inline-block" }}>
                ← Back to Home
            </Link>

            <h1 style={{ fontSize: "2.5rem", marginBottom: "30px", borderBottom: "2px solid rgba(255,255,255,0.2)", paddingBottom: "10px" }}>Company Culture</h1>

            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "40px", alignItems: "center" }}>
                <div>
                    <h2 style={{ fontSize: "1.8rem", marginBottom: "15px" }}>Life at Our Company</h2>
                    <p style={{ lineHeight: "1.6", fontSize: "1.1rem", marginBottom: "20px" }}>
                        We work hard, but we also know how to have fun. From our annual retreats to weekly knowledge-sharing sessions, our culture is built on learning and connection.
                    </p>
                    <ul style={{ lineHeight: "1.8", fontSize: "1.1rem" }}>
                        <li>🌱 Continuous Learning Budget</li>
                        <li>🧘‍♂️ Wellness Programs</li>
                        <li>🎉 Monthly Team Socials</li>
                    </ul>
                </div>

                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "10px" }}>
                    <div style={{ aspectRatio: "1/1", backgroundColor: "rgba(255,255,255,0.2)", borderRadius: "10px" }}></div>
                    <div style={{ aspectRatio: "1/1", backgroundColor: "rgba(255,255,255,0.2)", borderRadius: "10px" }}></div>
                    <div style={{ aspectRatio: "1/1", backgroundColor: "rgba(255,255,255,0.2)", borderRadius: "10px" }}></div>
                    <div style={{ aspectRatio: "1/1", backgroundColor: "rgba(255,255,255,0.2)", borderRadius: "10px" }}></div>
                </div>
            </div>
        </div>
    );
}
