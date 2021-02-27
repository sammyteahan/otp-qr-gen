import { useState } from 'react';
import Head from 'next/head';
import styles from '../styles/Home.module.css';

function Home() {
  const [otpUri, setOtpUri] = useState('');
  const [qrCode, setQrCode] = useState(null);
  const [fetching, setFetching] = useState(false);
  const [fetchError, setFetchingError] = useState(null);

  const clear = () => {
    setOtpUri('');
    setFetchingError(null);
    setQrCode(null);
  };

  const submit = async (evt) => {
    evt.preventDefault();

    try {
      setFetching(true);
      const response = await fetch('/api/qr', {
        body: JSON.stringify({ uri: otpUri }),
        headers: { 'Content-Type': 'application/json' },
        method: 'POST',
      });

      const { qrCode }= await response.json();
      setQrCode(qrCode);
    } catch (err) {
      setFetchingError(err);
    } finally {
      setFetching(false);
    }
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>OTP QR Code generator</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          OTP QR Code Generator
        </h1>

        <input
          value={otpUri}
          type="text"
          className={styles.input}
          onChange={evt => setOtpUri(evt.target.value)}
        />

        <button onClick={submit} className={styles.submit} disabled={fetching}>
          Submit
        </button>
        
        <button onClick={clear} className={styles.submit} disabled={fetching}>
          Clear
        </button>

        {qrCode && (
          <img src={qrCode} />
        )}
      </main>
    </div>
  )
}

export { Home as default };
