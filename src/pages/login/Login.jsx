import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Login.module.css";

export default function LoginPage() {
  const [isSignUp, setIsSignUp] = useState(false);
  const navigate = useNavigate();
  return (
    <div className={styles.screen}>
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

          {/* Right — Sign Up */}
          <div className={styles.formCol}>
            <h2 className={styles.heading}>Sign up</h2>
            <input
              className={styles.input}
              type="text"
              placeholder="Your name"
            />
            <input className={styles.input} type="email" placeholder="Email" />
            <input
              className={styles.input}
              type="password"
              placeholder="Password"
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

        {/* Animated navy panel on top */}
        <div
          className={`${styles.panel} ${
            isSignUp ? styles.panelLeft : styles.panelRight
          }`}
          aria-hidden="true"
        >
          <div className={styles.panelInner}>
            <h3 className={styles.panelTitle}>
              {isSignUp ? "Welcome!" : "Hi, user"}
            </h3>
            <p className={styles.panelBody}>
              Here are some texts that explain your app. This panel is the only
              thing that animates.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
