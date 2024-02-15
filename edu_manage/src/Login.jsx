import React, { useState } from 'react';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    console.log("hello world");
    // Implement your login logic here
    console.log('Logging in with:', email, password);
  };

  return (
    
    <div style={styles.container}>
      <h2 style={styles.title}>Login with username and password</h2>
      <form style={styles.form}>
        <label style={styles.label}>
          Email:
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={styles.input}
          />
        </label>
        <label style={styles.label}>
          Password:
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={styles.input}
          />
        </label >
        <button type="submit" onClick={handleLogin} className="mt-4 bg-blue-600 hover:bg-blue-700 px-4 py-2 text-white uppercase rounded text-xs tracking-wider" >
          Login
        </button>
      </form>
    </div>

  );
};

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
  },
  title: {
    fontSize: '2rem',
    marginBottom: '20px',
  },
  form: {
    alignItems:'flex-end',
    display: 'flex',
    flexDirection: 'column',
    width: '300px',
   
  },
  label: {
    margin: '10px 0',
  },
  input: {
    padding: '10px',
    margin: '5px 0',
  },
  button: {

    alignItems:'flex-start',
    padding: '10px',
    backgroundColor: '#4CAF50',
    color: 'white',
    cursor: 'pointer',
    border: 'none',
    borderRadius: '5px',
  },
};

export default Login;
