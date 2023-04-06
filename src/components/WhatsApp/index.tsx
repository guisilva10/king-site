// import required modules
import WhatsAnimation from "../LottieAnimation/WhatsAppAnimation";
import styles from "./styles.module.scss";

export default function WhatsApp() {
  return (
    <>
      <section className={styles.whatsApp}>
        <a
          rel="noreferrer"
          href="https://api.whatsapp.com/send?phone=5511948798912">
          <WhatsAnimation />
        </a>
      </section>
    </>
  );
}
