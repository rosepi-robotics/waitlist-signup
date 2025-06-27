export function ProgressUpdateJune() {
  return (
    <div
      style={{
        fontFamily: "Arial, sans-serif",
        lineHeight: "1.6",
        color: "#333",
        background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
        minHeight: "100vh",
        padding: "40px 20px",
      }}
    >
      {/* Header Card */}
      <div
        style={{
          maxWidth: "600px",
          margin: "0 auto 30px auto",
          backgroundColor: "white",
          borderRadius: "16px",
          padding: "40px 30px",
          textAlign: "center",
          boxShadow: "0 10px 30px rgba(0,0,0,0.1)",
        }}
      >
        <h1
          style={{
            fontSize: "28px",
            fontWeight: "bold",
            color: "#1e3a8a",
            margin: "0 0 10px 0",
          }}
        >
          Rallie Progress Update - June 2025
        </h1>
        <div
          style={{
            width: "60px",
            height: "4px",
            background: "linear-gradient(90deg, #f59e0b, #f97316)",
            margin: "0 auto",
            borderRadius: "2px",
          }}
        ></div>
      </div>

      {/* Main Content Card */}
      <div
        style={{
          maxWidth: "600px",
          margin: "0 auto",
          backgroundColor: "white",
          borderRadius: "16px",
          padding: "40px 30px",
          boxShadow: "0 10px 30px rgba(0,0,0,0.1)",
        }}
      >
        <p
          style={{
            fontSize: "16px",
            marginBottom: "30px",
            color: "#374151",
          }}
        >
          Hi there! We're excited to share our latest progress on Rallie, your future AI-powered tennis training
          companion.
        </p>

        {/* Development Progress */}
        <div
          style={{
            backgroundColor: "#f0f9ff",
            borderRadius: "12px",
            padding: "25px",
            marginBottom: "30px",
          }}
        >
          <h3
            style={{
              fontSize: "18px",
              fontWeight: "600",
              color: "#1e40af",
              marginBottom: "15px",
            }}
          >
            🚀 Development Highlights
          </h3>
          <ul
            style={{
              listStyle: "none",
              padding: "0",
              margin: "0",
            }}
          >
            <li style={{ marginBottom: "10px", paddingLeft: "20px", position: "relative" }}>
              <span
                style={{
                  position: "absolute",
                  left: "0",
                  top: "0",
                  color: "#10b981",
                  fontWeight: "bold",
                }}
              >
                ✓
              </span>
              Completed hardware prototype testing with 95% accuracy
            </li>
            <li style={{ marginBottom: "10px", paddingLeft: "20px", position: "relative" }}>
              <span
                style={{
                  position: "absolute",
                  left: "0",
                  top: "0",
                  color: "#10b981",
                  fontWeight: "bold",
                }}
              >
                ✓
              </span>
              AI training algorithms now adapt to individual playing styles
            </li>
            <li style={{ marginBottom: "10px", paddingLeft: "20px", position: "relative" }}>
              <span
                style={{
                  position: "absolute",
                  left: "0",
                  top: "0",
                  color: "#10b981",
                  fontWeight: "bold",
                }}
              >
                ✓
              </span>
              Mobile app beta version ready for testing
            </li>
            <li style={{ marginBottom: "0", paddingLeft: "20px", position: "relative" }}>
              <span
                style={{
                  position: "absolute",
                  left: "0",
                  top: "0",
                  color: "#10b981",
                  fontWeight: "bold",
                }}
              >
                ✓
              </span>
              Compact design achieved - 40% smaller than traditional machines
            </li>
          </ul>
        </div>

        {/* Team Update */}
        <div
          style={{
            backgroundColor: "#f0fdf4",
            borderRadius: "12px",
            padding: "25px",
            marginBottom: "30px",
          }}
        >
          <h3
            style={{
              fontSize: "18px",
              fontWeight: "600",
              color: "#166534",
              marginBottom: "15px",
            }}
          >
            👥 Team Growth
          </h3>
          <p
            style={{
              margin: "0",
              fontSize: "14px",
              color: "#166534",
            }}
          >
            We've expanded our team with two new engineers specializing in AI and robotics. This addition accelerates
            our development timeline and enhances our technical capabilities.
          </p>
        </div>

        {/* Beta Program */}
        <div
          style={{
            backgroundColor: "#fef3c7",
            borderLeft: "4px solid #f59e0b",
            borderRadius: "8px",
            padding: "20px",
            marginBottom: "30px",
          }}
        >
          <h3
            style={{
              fontSize: "18px",
              fontWeight: "600",
              color: "#92400e",
              marginBottom: "10px",
            }}
          >
            🎾 Beta Program Launch - July 2025
          </h3>
          <p
            style={{
              margin: "0",
              fontSize: "14px",
              color: "#92400e",
            }}
          >
            We're launching our beta program next month! Selected participants will receive early access to test Rallie
            and provide feedback that shapes the final product. Stay tuned for selection details.
          </p>
        </div>

        {/* Survey CTA */}
        <div
          style={{
            textAlign: "center",
            marginBottom: "30px",
          }}
        >
          <p
            style={{
              fontSize: "16px",
              marginBottom: "20px",
              color: "#374151",
            }}
          >
            Haven't taken our survey yet? Complete it now to join the beta program and win a $100 Tennis Warehouse gift
            card!
          </p>
          <a
            href="https://rallie.tennis/survey"
            style={{
              display: "inline-block",
              backgroundColor: "#2563eb",
              color: "white",
              padding: "12px 24px",
              borderRadius: "8px",
              textDecoration: "none",
              fontWeight: "600",
              fontSize: "14px",
            }}
          >
            Take Survey Now
          </a>
        </div>

        {/* Social Media Section */}
        <div
          style={{
            backgroundColor: "#f8fafc",
            borderRadius: "12px",
            padding: "25px",
            textAlign: "center",
            marginBottom: "30px",
          }}
        >
          <p
            style={{
              fontSize: "16px",
              marginBottom: "20px",
              color: "#374151",
            }}
          >
            Follow our journey on social media for behind-the-scenes updates:
          </p>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              gap: "20px",
              flexWrap: "wrap",
            }}
          >
            <a
              href="https://www.facebook.com/groups/963981362613884"
              style={{
                color: "#1877f2",
                textDecoration: "none",
                fontSize: "14px",
                fontWeight: "500",
              }}
            >
              Facebook Community
            </a>
            <a
              href="https://www.instagram.com/rallie.tennis/"
              style={{
                color: "#e4405f",
                textDecoration: "none",
                fontSize: "14px",
                fontWeight: "500",
              }}
            >
              Instagram
            </a>
            <a
              href="https://www.youtube.com/@rallietennis"
              style={{
                color: "#ff0000",
                textDecoration: "none",
                fontSize: "14px",
                fontWeight: "500",
              }}
            >
              YouTube
            </a>
          </div>
        </div>

        {/* Signature */}
        <div
          style={{
            borderTop: "1px solid #e5e7eb",
            paddingTop: "20px",
            textAlign: "left",
          }}
        >
          <p
            style={{
              margin: "0 0 5px 0",
              fontSize: "16px",
              color: "#374151",
            }}
          >
            Thanks for your continued support,
          </p>
          <p
            style={{
              margin: "0 0 5px 0",
              fontSize: "16px",
              fontWeight: "600",
              color: "#1f2937",
            }}
          >
            Sophie Luo
          </p>
          <p
            style={{
              margin: "0",
              fontSize: "14px",
              color: "#6b7280",
            }}
          >
            Creator of Rallie Tennis
          </p>
        </div>
      </div>

      {/* Footer */}
      <div
        style={{
          maxWidth: "600px",
          margin: "30px auto 0 auto",
          textAlign: "center",
          color: "rgba(255,255,255,0.8)",
          fontSize: "12px",
        }}
      >
        <p style={{ margin: "0" }}>© 2025 Rallie Tennis. All rights reserved.</p>
      </div>
    </div>
  )
}
