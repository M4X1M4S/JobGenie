import { supabase } from "../../supabase-client.js";

export const signup = async (req, res) => {
  console.log("Received signup request:", req.body);
  const { email, password } = req.body;
  console.log("Email:", email, "Password:", password);
  const { data, error } = await supabase.auth.signUp({
    email,
    password,
  });

  if (error) {
    return res
      .status(400)
      .json({ error: error.message || "An error occurred during signup" });
  }

  res
    .status(201)
    .json({ message: "User created successfully", user: data.user });
};

export const login = async (req, res) => {
  const { email, password } = req.body;
  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });
  console.log(data.session);
  if (error) {
    return res
      .status(400)
      .json({ error: error.message || "An error occurred during login" });
  }
  if (data.session) {
    const { access_token, refresh_token } = data.session;
  }
  res.status(200).json({ message: "Login successful", user: data.user });
};
