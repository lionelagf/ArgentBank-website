export const loginUser = async (userCredentials) => {
  const response = await fetch('http://localhost:3001/api/v1/user/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(userCredentials),
  })
  if (response.ok) {
    const result = await response.json()
    return result.body.token
  } else {
    throw new Error('Email ou mot de passe incorrect.')
  }
}
