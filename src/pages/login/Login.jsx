import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Login.module.css";
import lang from "./lang";
import LangToggle from "../../components/langToggle/LangToggle";

export default function LoginPage({ language, setLanguage }) {
  const [isSignUp, setIsSignUp] = useState(false);
  const navigate = useNavigate();

  const t = lang[language];

  return (
    <div className={styles.screen}>
      <LangToggle setLanguage={setLanguage} />

      <div className={styles.heading_title}>
        <h1>{t.welcome}</h1>
        <p>{t.subtitle}</p>
      </div>

      <div className={styles.card}>
        <div className={styles.forms}>
          {/* LOGIN */}
          <div className={styles.formCol}>
            <h2 className={styles.heading}>{t.loginTitle}</h2>
            <input
              className={styles.input}
              type="email"
              placeholder={t.email}
            />
            <input
              className={styles.input}
              type="password"
              placeholder={t.password}
            />
            <button
              className={styles.primary}
              onClick={() => navigate("/selection")}
            >
              {t.loginBtn}
            </button>
            <p className={styles.small}>
              {t.dontHaveAccount}{" "}
              <button
                className={styles.link}
                type="button"
                onClick={() => setIsSignUp(true)}
              >
                {t.signUp}
              </button>
            </p>
          </div>

          {/* SIGN UP */}
          <div className={styles.formCol}>
            <h2 className={styles.heading}>{t.signUpTitle}</h2>
            <div style={{ display: "flex", gap: "10px" }}>
              <input
                className={styles.input}
                type="text"
                placeholder={t.name}
              />
              <input
                className={styles.input}
                type="text"
                placeholder={t.surname}
              />
            </div>

            <input
              className={styles.input}
              type="email"
              placeholder={t.email}
            />
            <div style={{ display: "flex", gap: "10px" }}>
              <input
                className={styles.input}
                type="password"
                placeholder={t.password}
              />
              <input
                className={styles.input}
                type="password"
                placeholder={t.confirmPassword}
              />
            </div>

            <input
              className={styles.input}
              type="text"
              placeholder={t.company}
            />

            <button
              className={styles.primary}
              onClick={() => navigate("/selection")}
            >
              {t.signUpBtn}
            </button>
            <p className={styles.small}>
              {t.alreadyHaveAccount}{" "}
              <button
                className={styles.link}
                type="button"
                onClick={() => setIsSignUp(false)}
              >
                {t.loginTitle}
              </button>
            </p>
          </div>
        </div>

        {/* PANEL */}
        <div
          className={`${styles.panel} ${
            isSignUp ? styles.panelLeft : styles.panelRight
          }`}
          aria-hidden="true"
        >
          <div className={styles.panelInner}>
            <span className={styles.panelBody}>{t.panelText}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
