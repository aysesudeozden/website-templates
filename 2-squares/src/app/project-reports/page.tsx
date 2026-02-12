import Link from "next/link";

export default function Page() {
    return (
        <div className="container" style={{ color: "white", padding: "40px" }}>
            <Link href="/" style={{ textDecoration: "none", fontSize: "1.2rem", marginBottom: "20px", display: "inline-block" }}>
                ← Back to Home
            </Link>

            <h1 style={{ fontSize: "2.5rem", marginBottom: "30px", borderBottom: "2px solid rgba(255,255,255,0.2)", paddingBottom: "10px" }}>Project Reports</h1>

            <table style={{ width: "100%", borderCollapse: "collapse", fontSize: "1.1rem" }}>
                <thead>
                    <tr style={{ borderBottom: "2px solid white", textAlign: "left" }}>
                        <th style={{ padding: "10px 0" }}>Project Name</th>
                        <th style={{ padding: "10px 0" }}>Client</th>
                        <th style={{ padding: "10px 0" }}>Status</th>
                        <th style={{ padding: "10px 0" }}>Due Date</th>
                    </tr>
                </thead>
                <tbody>
                    {[
                        { name: "Alpha Redesign", client: "TechCorp", status: "In Progress", date: "Dec 30, 2025" },
                        { name: "Beta Mobile App", client: "StartupInc", status: "Testing", date: "Nov 15, 2025" },
                        { name: "Gamma Dashboard", client: "BigData Co", status: "Completed", date: "Oct 01, 2025" },
                    ].map((project, i) => (
                        <tr key={i} style={{ borderBottom: "1px solid rgba(255,255,255,0.2)" }}>
                            <td style={{ padding: "15px 0" }}>{project.name}</td>
                            <td style={{ padding: "15px 0" }}>{project.client}</td>
                            <td style={{ padding: "15px 0" }}>{project.status}</td>
                            <td style={{ padding: "15px 0" }}>{project.date}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
