import Link from "next/link";

export default function Page() {
    const services = [
        { title: "AI Consulting", description: "Helping businesses integrate artificial intelligence into their workflows." },
        { title: "Cloud Migration", description: "Seamless transition of legacy systems to modern cloud infrastructure." },
        { title: "Cybersecurity Audits", description: "Comprehensive analysis to ensure your digital assets are protected." },
        { title: "Custom Software Dev", description: "Tailored solutions built from the ground up for your specific needs." },
    ];

    return (
        <div className="container" style={{ color: "white", padding: "40px" }}>
            <Link href="/" style={{ textDecoration: "none", fontSize: "1.2rem", marginBottom: "20px", display: "inline-block" }}>
                ← Back to Home
            </Link>

            <h1 style={{ fontSize: "2.5rem", marginBottom: "30px", borderBottom: "2px solid rgba(255,255,255,0.2)", paddingBottom: "10px" }}>New Services</h1>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "20px" }}>
                {services.map((service, index) => (
                    <div key={index} style={{ border: "1px solid rgba(255,255,255,0.3)", padding: "20px", borderRadius: "10px" }}>
                        <h3 style={{ fontSize: "1.5rem", marginBottom: "10px" }}>{service.title}</h3>
                        <p style={{ lineHeight: "1.5", opacity: 0.9 }}>{service.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}
