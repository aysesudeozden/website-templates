import Link from "next/link";

export default function Page() {
    return (
        <div className="container" style={{ color: "white", padding: "40px" }}>
            <Link href="/" style={{ textDecoration: "none", fontSize: "1.2rem", marginBottom: "20px", display: "inline-block" }}>
                ← Back to Home
            </Link>

            <h1 style={{ fontSize: "2.5rem", marginBottom: "30px", borderBottom: "2px solid rgba(255,255,255,0.2)", paddingBottom: "10px" }}>Contact Info</h1>

            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "50px" }}>
                <div>
                    <h2 style={{ fontSize: "1.8rem", marginBottom: "20px" }}>Get in Touch</h2>
                    <p style={{ fontSize: "1.1rem", marginBottom: "10px" }}>📍 123 Business Rd, Innovation City, 34000</p>
                    <p style={{ fontSize: "1.1rem", marginBottom: "10px" }}>📞 +90 (212) 555 0123</p>
                    <p style={{ fontSize: "1.1rem", marginBottom: "30px" }}>✉️ hello@company.com</p>

                    <h3 style={{ fontSize: "1.5rem", marginBottom: "15px" }}>Office Hours</h3>
                    <p>Mon - Fri: 9:00 AM - 6:00 PM</p>
                </div>

                <form style={{ display: "flex", flexDirection: "column", gap: "15px" }}>
                    <input type="text" placeholder="Your Name" style={{ padding: "15px", borderRadius: "5px", border: "none" }} />
                    <input type="email" placeholder="Your Email" style={{ padding: "15px", borderRadius: "5px", border: "none" }} />
                    <textarea rows={4} placeholder="Message" style={{ padding: "15px", borderRadius: "5px", border: "none" }}></textarea>
                    <button type="button" style={{ backgroundColor: "white", color: "#990606", padding: "15px", border: "none", borderRadius: "5px", fontWeight: "bold", cursor: "pointer", fontSize: "1.1rem" }}>
                        Send Message
                    </button>
                </form>
            </div>
        </div>
    );
}
