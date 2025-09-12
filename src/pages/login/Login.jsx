import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Login.module.css";
import TableChartRoundedIcon from "@mui/icons-material/TableChartRounded";
export default function LoginPage() {
  const [isSignUp, setIsSignUp] = useState(false);
  const navigate = useNavigate();
  return (
    <div className={styles.screen}>
      <div className={styles.heading_title}>
        <h1>Welcome</h1>
        <p>AI powered nocodeEngine Platform</p>
      </div>
      <div className={styles.card}>
        <div className={styles.forms}>
          <div className={styles.formCol}>
            <h2 className={styles.heading}>Log in</h2>
            <input className={styles.input} type="email" placeholder="Email" />
            <input
              className={styles.input}
              type="password"
              placeholder="Password"
            />
            <button
              className={styles.primary}
              onClick={() => {
                navigate("/selection");
              }}
            >
              Log in
            </button>
            <p className={styles.small}>
              Don’t have an account?{" "}
              <button
                className={styles.link}
                type="button"
                onClick={() => setIsSignUp(true)}
              >
                Sign up
              </button>
            </p>
          </div>

          <div className={styles.formCol}>
            <h2 className={styles.heading}>Sign up</h2>
            <div style={{ display: "flex", gap: "10px" }}>
              {" "}
              <input className={styles.input} type="text" placeholder="Name" />
              <input
                className={styles.input}
                type="text"
                placeholder="Surname"
              />
            </div>

            <input className={styles.input} type="email" placeholder="Email" />
            <div style={{ display: "flex", gap: "10px" }}>
              <input
                className={styles.input}
                type="password"
                placeholder="Password"
              />
              <input
                className={styles.input}
                type="password"
                placeholder="Confirm password"
              />
            </div>

            <input
              className={styles.input}
              type="text"
              placeholder="Company name"
            />

            <button
              className={styles.primary}
              onClick={() => navigate("/selection")}
            >
              Sign up
            </button>
            <p className={styles.small}>
              Already have an account?{" "}
              <button
                className={styles.link}
                type="button"
                onClick={() => setIsSignUp(false)}
              >
                Log in
              </button>
            </p>
          </div>
        </div>

        <div
          className={`${styles.panel} ${
            isSignUp ? styles.panelLeft : styles.panelRight
          }`}
          aria-hidden="true"
        >
          <div className={styles.panelInner}>
            <span className={styles.panelBody}>
              You are at the right place, to build future with us. You will
              explain, we will build for you.
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
