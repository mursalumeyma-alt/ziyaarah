const API_URL ="https://ziyaarah.vercel.app"; 
export const registerUser = async (name,email,password) => {
  console.log("register",name,email,password);
  const response = await fetch(`${API_URL}/api/auth/register`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ name, email, password })
  });
  const data =await response.json();
  if (!response.ok) {
    throw new Error(data.error || 'Registration failed');

  }
  return data;
};
export const loginUser = async (email, password) => {
  const response = await fetch(`${API_URL}/api/auth/login`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ email, password })
  });
  const data = await response.json();
  if (!response.ok) {
    throw new Error(data.error || 'Login failed');
  }
  return data;
};