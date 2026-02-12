import Link from "next/link";

export default function Page() {
    const jobs = [
        { title: "Senior Frontend Developer", type: "Full-time", location: "Remote" },
        { title: "UI/UX Designer", type: "Full-time", location: "Hybrid" },
        { title: "Product Manager", type: "Contract", location: "New York" },
    ];

    return (
        <div className="container" style={{ color: "white", padding: "40px" }}>
            <Link href="/" style={{ textDecoration: "none", fontSize: "1.2rem", marginBottom: "20px", display: "inline-block" }}>
                ← Back to Home
            </Link>

            <h1 style={{ fontSize: "2.5rem", marginBottom: "30px", borderBottom: "2px solid rgba(255,255,255,0.2)", paddingBottom: "10px" }}>Careers</h1>

            <p style={{ fontSize: "1.2rem", marginBottom: "30px" }}>Join us in building the future. We are always looking for talented individuals.</p>

            <div style={{ display: "grid", gap: "20px" }}>
                {jobs.map((job, index) => (
                    <div key={index} style={{ backgroundColor: "rgba(255,255,255,0.1)", padding: "20px", borderRadius: "10px" }}>
                        <h3 style={{ fontSize: "1.5rem", marginBottom: "10px" }}>{job.title}</h3>
                        <p style={{ marginBottom: "15px", opacity: 0.9 }}>{job.type} • {job.location}</p>
                        <button style={{ backgroundColor: "white", color: "#990606", border: "none", padding: "10px 20px", borderRadius: "5px", fontWeight: "bold", cursor: "pointer" }}>
                            Apply Now
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
}
