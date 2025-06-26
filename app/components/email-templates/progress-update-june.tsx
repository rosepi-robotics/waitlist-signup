interface ProgressUpdateJuneProps {
  unsubscribeUrl?: string
}

export function ProgressUpdateJune({ unsubscribeUrl }: ProgressUpdateJuneProps) {
  return (
    <div style={{ fontFamily: "Arial, sans-serif", maxWidth: "600px", margin: "0 auto", backgroundColor: "#ffffff" }}>
      {/* Header */}
      <div style={{ backgroundColor: "#f97316", padding: "32px 24px", textAlign: "center" }}>
        <img
          src="https://your-domain.com/images/rallie-logo-white.png"
          alt="Rallie"
          style={{ height: "40px", marginBottom: "16px" }}
        />
        <h1 style={{ color: "#ffffff", fontSize: "28px", fontWeight: "300", margin: "0", letterSpacing: "1px" }}>
          JUNE PROGRESS UPDATE
        </h1>
        <p style={{ color: "#fed7aa", fontSize: "16px", margin: "8px 0 0 0" }}>
          First Field Test Success + Team Expansion
        </p>
      </div>

      {/* Main Content */}
      <div style={{ padding: "32px 24px" }}>
        <p style={{ fontSize: "16px", lineHeight: "1.6", color: "#374151", marginBottom: "24px" }}>Hi there! 👋</p>

        <p style={{ fontSize: "16px", lineHeight: "1.6", color: "#374151", marginBottom: "32px" }}>
          We're thrilled to share some incredible milestones from June. This has been our biggest month yet with
          breakthrough field test results and major team expansion!
        </p>

        {/* Team Expansion */}
        <div style={{ marginBottom: "32px" }}>
          <h2
            style={{
              fontSize: "22px",
              fontWeight: "600",
              color: "#111827",
              marginBottom: "16px",
              borderLeft: "4px solid #10b981",
              paddingLeft: "16px",
            }}
          >
            👥 Major Team Expansion - We're Growing!
          </h2>

          <p style={{ fontSize: "16px", lineHeight: "1.6", color: "#374151", marginBottom: "20px" }}>
            The team expands! I'm exicited to annouced that I've gathered an extremely talented and experienced team!
          </p>

          <div style={{ marginBottom: "16px" }}>
            <div
              style={{
                backgroundColor: "#f0f9ff",
                padding: "20px",
                borderRadius: "8px",
                border: "1px solid #e0f2fe",
                marginBottom: "12px",
              }}
            >
              <h3 style={{ fontSize: "18px", fontWeight: "600", color: "#111827", marginBottom: "8px" }}>
                Lisa Wang - Co-founder & AI Lead
              </h3>
              <p style={{ fontSize: "14px", lineHeight: "1.5", color: "#374151", margin: "0" }}>
                A brilliant engineer and ex-Googler. Lisa will be leading AI development at Rallie. Stay tuned—exciting
                AI feature demos are coming soon!
              </p>
            </div>

            <div
              style={{ backgroundColor: "#fef3e2", padding: "20px", borderRadius: "8px", border: "1px solid #fed7aa" }}
            >
              <h3 style={{ fontSize: "18px", fontWeight: "600", color: "#111827", marginBottom: "8px" }}>
                Ray Shen - Hardware & Manufacturing Expert
              </h3>
              <p style={{ fontSize: "14px", lineHeight: "1.5", color: "#374151", margin: "0" }}>
                A 15-year veteran in motor control and manufacturing, Ray brings deep expertise to Rallie’s hardware
                development and will lead our path to scalable production.
              </p>
            </div>
          </div>
        </div>

        {/* Field Test Success */}
        <div style={{ marginBottom: "32px" }}>
          <h2
            style={{
              fontSize: "22px",
              fontWeight: "600",
              color: "#111827",
              marginBottom: "16px",
              borderLeft: "4px solid #10b981",
              paddingLeft: "16px",
            }}
          >
            🎾 First Field Test - Complete Success!
          </h2>

          <p style={{ fontSize: "16px", lineHeight: "1.6", color: "#374151", marginBottom: "16px" }}>
            We did our first field test and the results exceeded our expectations! The system is working perfectly,
            creating incredibly fast and strong balls with its compact body.
          </p>

          <div style={{ backgroundColor: "#f3f4f6", padding: "20px", borderRadius: "8px", marginBottom: "16px" }}>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px", marginBottom: "16px" }}>
              <div style={{ textAlign: "center" }}>
                <div style={{ fontSize: "24px", marginBottom: "8px" }}>✅</div>
                <div style={{ fontSize: "14px", fontWeight: "600", color: "#111827" }}>TOPSPIN</div>
                <div style={{ fontSize: "12px", color: "#6b7280" }}>Perfect spin generation</div>
              </div>
              <div style={{ textAlign: "center" }}>
                <div style={{ fontSize: "24px", marginBottom: "8px" }}>✅</div>
                <div style={{ fontSize: "14px", fontWeight: "600", color: "#111827" }}>BACKSPIN</div>
                <div style={{ fontSize: "12px", color: "#6b7280" }}>Precise control achieved</div>
              </div>
            </div>
          </div>

          <p style={{ fontSize: "16px", lineHeight: "1.6", color: "#374151", marginBottom: "16px" }}>
            We'll be posting comparison videos of Rallie vs. other machines' top speed on YouTube. Be sure to
            <a
              href="https://www.youtube.com/channel/UCe2iDqdEYGT3k_F4HtWyajA"
              style={{ color: "#f97316", textDecoration: "none" }}
            >
              {" "}
              subscribe to our channel
            </a>
            to catch all the action!
          </p>
        </div>

        {/* New Logo */}
        <div style={{ marginBottom: "32px" }}>
          <h2
            style={{
              fontSize: "22px",
              fontWeight: "600",
              color: "#111827",
              marginBottom: "16px",
              borderLeft: "4px solid #f97316",
              paddingLeft: "16px",
            }}
          >
            ✨ Rallie Got a New Logo!
          </h2>

          <div
            style={{
              backgroundColor: "#f9fafb",
              padding: "24px",
              borderRadius: "8px",
              textAlign: "center",
              marginBottom: "16px",
            }}
          >
            <img
              src="https://your-domain.com/images/rallie-logo-black.png"
              alt="New Rallie Logo"
              style={{ height: "60px", marginBottom: "12px" }}
            />
            <p style={{ fontSize: "14px", color: "#6b7280", margin: "0" }}>Our fresh new logo design</p>
          </div>
        </div>

        {/* What's Next */}
        <div
          style={{
            backgroundColor: "#f8fafc",
            padding: "24px",
            borderRadius: "8px",
            border: "1px solid #e2e8f0",
            marginBottom: "32px",
          }}
        >
          <h2 style={{ fontSize: "20px", fontWeight: "600", color: "#111827", marginBottom: "16px" }}>
            🔮 What to Expect Next
          </h2>

          <div style={{ marginBottom: "16px" }}>
            <div style={{ display: "flex", alignItems: "flex-start", marginBottom: "12px" }}>
              <div
                style={{
                  width: "8px",
                  height: "8px",
                  backgroundColor: "#f97316",
                  borderRadius: "50%",
                  marginTop: "6px",
                  marginRight: "12px",
                  flexShrink: "0",
                }}
              ></div>
              <div>
                <h4 style={{ fontSize: "16px", fontWeight: "600", color: "#111827", marginBottom: "4px" }}>
                  Pitch & Oscillation Testing
                </h4>
                <p style={{ fontSize: "14px", lineHeight: "1.5", color: "#6b7280", margin: "0" }}>
                  Next week we'll be testing the pitch and oscillation features. It's designed to cover the full court
                  and produce smashes up to 8 meters!
                </p>
              </div>
            </div>

            <div style={{ display: "flex", alignItems: "flex-start" }}>
              <div
                style={{
                  width: "8px",
                  height: "8px",
                  backgroundColor: "#3b82f6",
                  borderRadius: "50%",
                  marginTop: "6px",
                  marginRight: "12px",
                  flexShrink: "0",
                }}
              ></div>
              <div>
                <h4 style={{ fontSize: "16px", fontWeight: "600", color: "#111827", marginBottom: "4px" }}>
                  Industrial Design Process
                </h4>
                <p style={{ fontSize: "14px", lineHeight: "1.5", color: "#6b7280", margin: "0" }}>
                  We just started the Industrial Design process! We'll post a survey on ID preferences in early July to
                  get your input.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div style={{ textAlign: "center", marginBottom: "32px" }}>
          <a
            href="https://your-domain.com/progress"
            style={{
              display: "inline-block",
              backgroundColor: "#f97316",
              color: "#ffffff",
              padding: "12px 24px",
              borderRadius: "8px",
              textDecoration: "none",
              fontWeight: "600",
              fontSize: "16px",
            }}
          >
            VIEW FULL PROGRESS UPDATES
          </a>
        </div>

        <p style={{ fontSize: "16px", lineHeight: "1.6", color: "#374151", marginBottom: "16px" }}>
          Thanks for being part of this incredible journey! Your support means everything to us.
        </p>

        <p style={{ fontSize: "16px", lineHeight: "1.6", color: "#374151", marginBottom: "0" }}>
          Best,
          <br />
          Sophie & the Rallie Team
        </p>
      </div>

      {/* Footer */}
      <div style={{ backgroundColor: "#f9fafb", padding: "24px", textAlign: "center", borderTop: "1px solid #e5e7eb" }}>
        <p style={{ fontSize: "14px", color: "#6b7280", marginBottom: "8px" }}>
          You're receiving this because you signed up for Rallie updates.
        </p>
        {unsubscribeUrl && (
          <p style={{ fontSize: "12px", color: "#9ca3af", margin: "0" }}>
            <a href={unsubscribeUrl} style={{ color: "#9ca3af", textDecoration: "underline" }}>
              Unsubscribe
            </a>
          </p>
        )}
      </div>
    </div>
  )
}
