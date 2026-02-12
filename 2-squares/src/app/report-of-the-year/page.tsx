import Link from "next/link";

export default function Page() {
    const metrics = [
        { label: "Total Revenue", value: "$12.5M" },
        { label: "YoY Growth", value: "+150%" },
        { label: "New Clients", value: "45+" },
        { label: "Projects Completed", value: "112" },
    ];

    return (
        <div className="container" style={{ color: "white", padding: "40px" }}>
            <Link href="/" style={{ textDecoration: "none", fontSize: "1.2rem", marginBottom: "20px", display: "inline-block" }}>
                ← Back to Home
            </Link>

            <h1 style={{ fontSize: "2.5rem", marginBottom: "30px", borderBottom: "2px solid rgba(255,255,255,0.2)", paddingBottom: "10px" }}>Report of the Year 2025</h1>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "20px", marginTop: "40px" }}>
                {metrics.map((metric, index) => (
                    <div key={index} style={{ backgroundColor: "white", color: "#990606", padding: "30px", borderRadius: "10px", textAlign: "center" }}>
                        <div style={{ fontSize: "3rem", fontWeight: "bold", marginBottom: "10px" }}>{metric.value}</div>
                        <div style={{ fontSize: "1.2rem", opacity: 0.8 }}>{metric.label}</div>
                    </div>
                ))}
            </div>

            <p style={{ marginTop: "40px", lineHeight: "1.6", fontSize: "1.1rem" }}>
                2025 has been a year of unprecedented growth. We have expanded our reach, deepened our client relationships, and delivered impactful solutions across the globe.
            </p>
        </div>
    );
}
